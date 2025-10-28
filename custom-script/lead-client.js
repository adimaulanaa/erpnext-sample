const isDebug = false;

////////////////////////////////////// functions - form //////////////////////////////////////
const setTimestamp = async () => {
  const user = frappe.session.user;
  const today = frappe.datetime.now_datetime();
  if (cur_frm.doc.__islocal) {
    cur_frm.set_value('created_by', user);
    cur_frm.set_value('created_at', today);
  }
  cur_frm.set_value('updated_by', user);
  cur_frm.set_value('updated_at', today);

  let validated = false;
  const isAdministrator = has_common(frappe.user_roles, ['Administrator']);
  if (isAdministrator) {
    validated = true;
  } else {
    let branchCode = '';
    await frappe.call({
      method: 'frappe.client.get_value',
      args: {
        doctype: 'User Configuration',
        filters: {
          'user': user
        },
        fieldname: 'branch_code'
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.branch_code) {
          branchCode = result.branch_code;
        }
      }
    });

    if (branchCode) {
      cur_frm.set_value('branch_code', branchCode);
      validated = true;
    } else {
      msgprint('Harap pilih kode cabang pada user configuration terlebih dahulu');
    }
  }

  return validated;
};

const getProvinces = async (frm, cdt, cdn) => {
  await frappe.call({
    method: 'frappe.client.get_list',
    args: {
      doctype: 'Region Data',
      filters: {
        'level': 2
      },
      fields: ['id', 'region_name'],
      order_by: 'region_name asc',
      limit_page_length: 0,
      as_list: true
    },
    callback: (r) => {
      const results = r && r.message || [];
      const options = [];
      if (results && results.length > 0) {
        for (let i = 0; i < results.length; i++) {
          options.push({
            value: results[i].id,
            label: results[i].region_name
          });
        }
      }
      cur_frm.set_df_property('region_province', 'options', options);
      cur_frm.refresh_field('region_province');
    }
  });
};

const setRegion = async (frm, cdt, cdn, parentId, level) => {
  if (parentId) {
    // clear all children
    if (level >= 2 && level <= 4) {
      if (level <= 4) {
        cur_frm.set_df_property('region_sub_district', 'options', []);
        cur_frm.refresh_field('region_sub_district');
        if (level <= 3) {
          cur_frm.set_df_property('region_district', 'options', []);
          cur_frm.refresh_field('region_district');
          if (level === 2) {
            cur_frm.set_df_property('region_city', 'options', []);
            cur_frm.refresh_field('region_city');
          }
        }
      }
    }
    // set child data
    await frappe.call({
      method: 'frappe.client.get_list',
      args: {
        doctype: 'Region Data',
        filters: {
          'level': level + 1,
          'parent_id': parentId
        },
        fields: ['id', 'region_name'],
        order_by: 'region_name asc',
        limit_page_length: 0,
        as_list: true
      },
      callback: (r) => {
        const results = r && r.message || [];
        const options = [];
        if (results && results.length > 0) {
          for (let i = 0; i < results.length; i++) {
            options.push({
              value: results[i].id,
              label: results[i].region_name
            });
          }
        }
        let child = '';
        if (level === 2) {
          child = 'region_city';
        } else if (level === 3) {
          child = 'region_district';
        } else if (level === 4) {
          child = 'region_sub_district';
        }
        cur_frm.set_df_property(child, 'options', options);
        cur_frm.refresh_field(child);
      }
    });
  }
};

////////////////////////////////////// form //////////////////////////////////////
frappe.ui.form.on('Lead', {
  setup: (frm, cdt, cdn) => {
    // set reload
    setTimeout(() => {
      if (frm.doc.__islocal && frm.doc.idx === undefined) {
        const {
          needs_to_reload
        } = localStorage;
        if (!needs_to_reload || needs_to_reload == 'true') {
          localStorage.setItem('needs_to_reload', 'false');
          window.onbeforeunload = null;
          window.location.reload();
        } else {
          localStorage.setItem('needs_to_reload', 'true');
        }
      }
    });
  },
  refresh: async (frm, cdt, cdn) => {
    // isDebug status
    frm.set_df_property('branch_code', 'hidden', isDebug ? 0 : 1);
    // set field status
    frm.toggle_enable('naming_series', 0);
    frm.fields_dict['aqiqah_detail'].grid.wrapper.find('.grid-remove-all-rows').hide();
    if (frm.doc.__islocal) {
      frm.set_df_property('timestamp_section', 'hidden', isDebug ? 0 : 1);
    }
    // set converted by
    const d = locals[cdt][cdn];
    await frappe.db.get_value('Opportunity', {
      'customer_name': d.name
    }, 'converted_by', (value) => {
      frm.set_value('converted_by', value.converted_by);
    });
    // set read only
    if (frm.doc['status'] === 'Opportunity' || frm.doc['status'] === 'Quotation' ||
      frm.doc['status'] === 'Converted') {
      frm.set_df_property('lead_name', 'read_only', 1);
      frm.set_df_property('company_name', 'read_only', 1);
    }
  },
  onload_post_render: async (frm, cdt, cdn) => {
    // set hidden element
    const isAdministrator = has_common(frappe.user_roles, ['Administrator']);
    if (!isAdministrator) {
      $('.custom-actions').hide();
      $('.comment-box').hide();
      $('.timeline-actions').hide();
      $('.new-timeline').hide();
      $('.menu-btn-group').hide();
    }

    // run others
    // get provinces
    await getProvinces(frm, cdt, cdn);
    // set region value
    if (!frm.doc.__islocal &&
      frm.doc['region_province'] && frm.doc['region_city'] && frm.doc['region_district'] &&
      frm.doc['region_sub_district']) {
      await setRegion(frm, cdt, cdn, frm.doc['region_province'], 2);
      await setRegion(frm, cdt, cdn, frm.doc['region_city'], 3);
      await setRegion(frm, cdt, cdn, frm.doc['region_district'], 4);
    }
  },
  validate: async (frm, cdt, cdn) => {
    if (frm.doc['lead_name']) {
      if (!frm.doc['contact_by']) {
        frm.set_value('contact_by', frappe.session.user);
      }
      if (frm.doc['region_province'] && frm.doc['region_city'] &&
        frm.doc['region_district'] && frm.doc['region_sub_district']) {
        // get region object
        const provinces = frm.fields_dict['region_province'].df.options;
        const province = provinces.find(o => o.value === frm.doc['region_province']);
        const cities = frm.fields_dict['region_city'].df.options;
        const city = cities.find(o => o.value === frm.doc['region_city']);
        const districts = frm.fields_dict['region_district'].df.options;
        const district = districts.find(o => o.value === frm.doc['region_district']);
        const subDistricts = frm.fields_dict['region_sub_district'].df.options;
        const subDistrict = subDistricts.find(o => o.value === frm.doc['region_sub_district']);
        // set region name
        if (province && city && district && subDistrict) {
          frm.set_value('region_province_name', province.label);
          frm.set_value('region_city_name', city.label);
          frm.set_value('city', city.label);
          frm.set_value('region_district_name', district.label);
          frm.set_value('region_sub_district_name', subDistrict.label);

          const validateTimestamp = await setTimestamp();
          if (validateTimestamp) {
            frappe.validated = true;
          } else {
            frappe.validated = false;
          }
        }
      }
    } else {
      frappe.validated = false;
    }
  },
  region_province: async (frm, cdt, cdn) => {
    await setRegion(frm, cdt, cdn, frm.doc['region_province'], 2);
  },
  region_city: async (frm, cdt, cdn) => {
    await setRegion(frm, cdt, cdn, frm.doc['region_city'], 3);
  },
  region_district: async (frm, cdt, cdn) => {
    await setRegion(frm, cdt, cdn, frm.doc['region_district'], 4);
  }
});

////////////////////////////////////// child tables //////////////////////////////////////
frappe.ui.form.on('Aqiqah Detail', {
  form_render: (frm, cdt, cdn) => {
    $('.row-actions').hide();
    $('.grid-footer-toolbar').hide();
  }
});
