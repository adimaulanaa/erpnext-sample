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

const setBranchCode = async () => {
  await frappe.after_ajax(async () => {
    await frappe.call({
      method: 'frappe.client.get_value',
      args: {
        doctype: 'Sales Invoice',
        filters: {
          'name': cur_frm.doc['sales_invoice']
        },
        fieldname: 'sales_branch_code'
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.sales_branch_code) {
          cur_frm.set_value('sales_branch_code', result.sales_branch_code);
          cur_frm.refresh_field('sales_branch_code');
          const branchCodes = ['SOC', 'SOB'];
          if (branchCodes.includes(cur_frm.doc['sales_branch_code'])) {
            const modeOfPayment = 'CASH / TUNAI - ' + cur_frm.doc['sales_branch_code'];
            cur_frm.set_value('mode_of_payment', modeOfPayment);
            cur_frm.refresh_field('mode_of_payment');
          }
        }
      }
    });
  });
};

////////////////////////////////////// form //////////////////////////////////////
frappe.ui.form.on('Payment Entry', {
  setup: async (frm, cdt, cdn) => {
    // import library
    await frappe.require([
      'assets/js/lodash.min.js'
    ]);

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
    frm.set_df_property('section_break_34', 'hidden', isDebug ? 0 : 1);
    // set field status
    frm.toggle_enable('naming_series', 0);
    const isAdministrator = has_common(frappe.user_roles, ['Administrator']);
    frm.fields_dict['references'].grid.wrapper.find('.grid-remove-all-rows').hide();
    if (frm.doc.__islocal) {
      frm.set_df_property('timestamp_section', 'hidden', isDebug ? 0 : 1);
      if (frm.doc['references'] && frm.doc['references'].length > 0) {
        if (frm.doc['references'][0]['reference_doctype']) {
          if (frm.doc['references'][0]['reference_doctype'] === 'Sales Invoice' ||
            frm.doc['references'][0]['reference_doctype'] === 'Purchase Invoice') {
            if (frm.doc['references'][0]['reference_doctype'] === 'Sales Invoice') {
              frm.set_value('sales_invoice', frm.doc['references'][0]['reference_name']);
              frm.refresh_field('sales_invoice');
            } else if (frm.doc['references'][0]['reference_doctype'] === 'Purchase Invoice') {
              frm.set_value('purchase_invoice', frm.doc['references'][0]['reference_name']);
              frm.refresh_field('purchase_invoice');
            }
            if (!isAdministrator) {
              frm.set_df_property('party_type', 'read_only', 1);
              frm.set_df_property('party', 'read_only', 1);
              frm.set_df_property('payment_type', 'read_only', 1);
              frm.set_df_property('paid_from', 'read_only', 1);
              frm.set_df_property('paid_to', 'read_only', 1);
              // frm.set_df_property('references', 'read_only', 1);
              frm.set_df_property('get_outstanding_invoice', 'hidden', 1);
            }
          }
        }
      }
    } else {
      if (frm.doc['sales_invoice'] || frm.doc['purchase_invoice']) {
        if (!isAdministrator) {
          frm.set_df_property('party_type', 'read_only', 1);
          frm.set_df_property('party', 'read_only', 1);
          frm.set_df_property('payment_type', 'read_only', 1);
          frm.set_df_property('paid_from', 'read_only', 1);
          frm.set_df_property('paid_to', 'read_only', 1);
          // frm.set_df_property('references', 'read_only', 1);
          frm.set_df_property('get_outstanding_invoice', 'hidden', 1);
        }
      }
    }
    let errorMessage = '';
    if (!isAdministrator) {
      const isSales = has_common(frappe.user_roles, ['ASA - Sales Role']);
      if (isSales) {
        frm.set_df_property('party_type', 'read_only', 1);
        frm.set_df_property('party', 'read_only', 1);
        frm.set_df_property('payment_type', 'read_only', 1);
        frm.set_df_property('paid_from', 'read_only', 1);
        frm.set_df_property('paid_to', 'read_only', 1);
        frm.set_value('payment_type', 'Receive');
        frm.refresh_field('payment_type');
        frm.set_query('party_type', (frm, cdt, cdn) => {
          return {
            filters: {
              name: 'Customer'
            }
          }
        });
        if (!frm.doc['party'] || !frm.doc['paid_from']) {
          frm.set_df_property('type_of_payment', 'hidden', 1);
          frm.set_df_property('payment_accounts_section', 'hidden', 1);
          errorMessage = 'User sales hanya bisa menambah payment entry melalui sales invoice';
        }
      }
    }
    if (errorMessage) {
      frm.disable_save();
      msgprint(errorMessage);
    } else {
      if (frm.doc['sales_invoice']) {
        frm.set_df_property('sales_branch_code', 'hidden', 0);
        if (frm.doc.__islocal) {
          await setBranchCode();
        }
      }
    }
  },
  onload_post_render: (frm, cdt, cdn) => {
    // set hidden element
    const isAdministrator = has_common(frappe.user_roles, ['Administrator']);
    if (!isAdministrator) {
      $('.custom-actions').hide();
      $('.comment-box').hide();
      $('.timeline-actions').hide();
      $('.new-timeline').hide();
      $('.menu-btn-group').hide();
      $("[data-fieldname='bank']").hide();
      $("[data-fieldname='bank_account_no']").hide();
    }
  },
  validate: async (frm, cdt, cdn) => {
    let errorMessage = '';

    if (frm.doc['unallocated_amount'] > 0 || frm.doc['difference_amount'] > 0) {
      errorMessage = 'Jumlah pembayaran tidak sesuai dengan jumlah total referensi';
    }

    if (errorMessage) {
      msgprint(errorMessage);
      frappe.validated = false;
    } else {
      const validateTimestamp = await setTimestamp();
      if (validateTimestamp) {
        frappe.validated = true;
      } else {
        frappe.validated = false;
      }
    }
  },
  after_save: (frm, cdt, cdn) => {
    // reload on save
    localStorage.setItem('needs_to_reload', 'false');
    window.onbeforeunload = null;
    window.location.reload();
  },
  mode_of_payment: (frm, cdt, cdn) => {
    if (frm.doc['paid_from'] && frm.doc['paid_to']) {
      const paidAmount = frm.doc['paid_amount'];
      frm.set_value('paid_amount', 0);
      frm.refresh_field('paid_amount');
      setTimeout(() => {
        frm.set_value('paid_amount', paidAmount);
        frm.refresh_field('paid_amount');
      }, 1000);
    }
  }
});

////////////////////////////////////// functions - child table //////////////////////////////////////
const setPaymentTerm = async (frm, cdt, cdn, isClearAll = false) => {
  const d = locals[cdt][cdn];
  const currentRow = cur_frm.get_field('references').grid.grid_rows[d.idx - 1];

  const paymentTermOptions = [];
  if (d && d.reference_doctype && d.reference_doctype === 'Sales Invoice' &&
    d.reference_name) {
    if (isClearAll) {
      d.payment_term = '';
      d.payment_term_data = '';
    }

    if (currentRow) {
      await frappe.db.get_list('Payment Schedule', {
        filters: {
          'parent': d.reference_name
        },
        fields: ['payment_term'],
        limit: 0
      }).then((results) => {
        if (results && results.length > 0) {
          for (let i = 0; i < results.length; i++) {
            const result = results[i];
            paymentTermOptions.push({
              value: result.payment_term,
              label: result.payment_term
            });
          }
        }
      });
    }
  } else {
    await frappe.db.get_list('Payment Schedule', {
      fields: ['payment_term'],
      limit: 0
    }).then((results) => {
      if (results && results.length > 0) {
        for (let i = 0; i < results.length; i++) {
          const result = results[i];
          paymentTermOptions.push({
            value: result.payment_term,
            label: result.payment_term
          });
        }
      }
    });
  }

  if (currentRow) {
    currentRow.grid_form.fields_dict['payment_term_data'].df.options = paymentTermOptions;
    currentRow.refresh_field('payment_term_data');
  }
};

const setAllocatedAmount = async (frm, cdt, cdn) => {
  const d = locals[cdt][cdn];
  const currentRow = cur_frm.get_field('references').grid.grid_rows[d.idx - 1];

  if (d && d.reference_doctype && d.reference_doctype === 'Sales Invoice' &&
    d.reference_name && d.payment_term) {
    if (currentRow) {
      await frappe.call({
        method: 'frappe.client.get_value',
        args: {
          doctype: 'Payment Term',
          filters: {
            'payment_term_name': d.payment_term
          },
          fieldname: 'invoice_portion'
        },
        async: false,
        callback: (r) => {
          const result = r && r.message || null;
          if (result && result.invoice_portion) {
            d.allocated_amount = d.total_amount - (d.total_amount * result.invoice_portion / 100);
            currentRow.refresh_field('allocated_amount');
            totalPaymentEntryReference();
          }
        }
      });
    }
  }
};

const totalPaymentEntryReference = () => {
  const totalAllocatedAmount = _.sumBy(cur_frm.doc['references'], 'allocated_amount') || 0;
  cur_frm.set_value('paid_amount', totalAllocatedAmount);
  cur_frm.refresh_field('paid_amount');
};

////////////////////////////////////// child tables //////////////////////////////////////
frappe.ui.form.on('Payment Entry Reference', {
  form_render: async (frm, cdt, cdn) => {
    $('.row-actions').hide();
    $('.grid-footer-toolbar').hide();
    await setPaymentTerm(frm, cdt, cdn);
  },
  references_remove: (frm, cdt, cdn) => {
    totalPaymentEntryReference();
  },
  reference_doctype: async (frm, cdt, cdn) => {
    await setPaymentTerm(frm, cdt, cdn, true);
  },
  reference_name: async (frm, cdt, cdn) => {
    await setPaymentTerm(frm, cdt, cdn, true);
  },
  payment_term: async (frm, cdt, cdn) => {
    await setAllocatedAmount(frm, cdt, cdn);
  },
  allocated_amount: (frm, cdt, cdn) => {
    totalPaymentEntryReference();
  }
});
