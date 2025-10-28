const isDebug = false;
const useConvertion = true;

////////////////////////////////////// variables //////////////////////////////////////
const codePiutang = '11003.001';
const itemNameDataBungkusCup = 'BUNGKUS CUP';
const itemNameDataBingkai = 'BINGKAI';
const itemNameDataTumbler = 'TUMBLER';
const itemNameDataPendapatanPengiriman = 'PENDAPATAN PENGIRIMAN';
const itemNameDataJasaSewaPeralatan = 'PENDAPATAN JASA SEWA PERALATAN';
const itemNameDataPendapatanPenyesuaian = 'PENDAPATAN PENYESUAIAN';
const freeItems = [itemNameDataBingkai, itemNameDataTumbler];
// paket non box
const nonBoxMenuBungkusTypes = [{
  value: 'gulai',
  label: 'GULAI'
}, {
  value: 'kari',
  label: 'KARI'
}, {
  value: 'semur',
  label: 'SEMUR'
}, {
  value: 'sop',
  label: 'SOP'
}, {
  value: 'tengkleng',
  label: 'TENGKLENG'
}, {
  value: 'tongseng',
  label: 'TONGSENG'
}];
const nonBoxMenuPorsiTypes = [{
  value: 'bakar_bbq',
  label: 'BAKAR BBQ'
}, {
  value: 'guling',
  label: 'GULING'
}, {
  value: 'masak_bombay',
  label: 'MASAK BOMBAY'
}, {
  value: 'panggang',
  label: 'PANGGANG'
}, {
  value: 'teriyaki',
  label: 'TERIYAKI'
}, {
  value: 'sate',
  label: 'SATE'
}];
const nonBoxMenuPorsiKuahTypes = [{
  value: 'kuah_gulai',
  label: 'KUAH GULAI'
}, {
  value: 'kuah_kari',
  label: 'KUAH KARI'
}, {
  value: 'kuah_semur',
  label: 'KUAH SEMUR'
}, {
  value: 'kuah_sop',
  label: 'KUAH SOP'
}, {
  value: 'kuah_tengkleng',
  label: 'KUAH TENGKLENG'
}, {
  value: 'kuah_tongseng',
  label: 'KUAH TONGSENG'
}];
const nonBoxMenuKeringTypes = [{
  value: 'kering_bakar_bbq',
  label: 'BAKAR BBQ'
}, {
  value: 'kering_goreng',
  label: 'GORENG'
}, {
  value: 'kering_masak_bombay',
  label: 'MASAK BOMBAY'
}, {
  value: 'kering_panggang',
  label: 'PANGGANG'
}, {
  value: 'kering_teriyaki',
  label: 'TERIYAKI'
}, {
  value: 'kering_sate',
  label: 'SATE'
}];
// paket super hemat
const paketSuperHematMenuIds = [
  'nasi_briyani', 'nasi_kebuli', 'nasi_mandhi', 'nasi_putih',
  'domba_panggang', 'acar', 'sambal'
];
//  paket tumpengan spesial
const paketTumpenganSpesialMenuIds = [
  'nasi_kuning', 'daging_panggang', 'mie_goreng', 'emping', 'tumis_ati_ampela',
  'telur_dadar_iris', 'orek_tempe', 'timun'
];
// paket tumpeng box
const paketTumpengBoxMenuIds = [
  "kerupuk",
];
// paket arabian style
const paketArabianStyleMenuIds = [
  'nasi_briyani', 'nasi_kebuli', 'domba_panggang', 'timun', 'sambal'
];
// paket reguler bento
const paketRegulerBentoMenuIds = [
  "kerupuk",
  "nasi_putih",
  "nasi_mandhi",
];
// paket super ekonomis
const paketSuperEkonomisMenuIds = [
  'kambing_domba_guling', 'nasi_mandhi', 'asinan_nanas', 'kerupuk'
];
// paket reguler
const paketRegulerMenuIds = [
  'kerupuk', 'sendok'
];
// paket promo arabian
const paketPromoArabianMenuIds = [
  'kerupuk', 'sendok'
];
// paket kambing guling
const kambingGulingMenuBungkusTypes = [{
  value: 'gulai',
  label: 'GULAI'
}, {
  value: 'kari',
  label: 'KARI'
}, {
  value: 'semur',
  label: 'SEMUR'
}, {
  value: 'sop',
  label: 'SOP'
}, {
  value: 'tengkleng',
  label: 'TENGKLENG'
}, {
  value: 'tongseng',
  label: 'TONGSENG'
}];
const kambingGulingMenuPorsiTypes = [{
  value: 'bakar_bbq',
  label: 'BAKAR BBQ'
}, {
  value: 'guling',
  label: 'GULING'
}, {
  value: 'masak_bombay',
  label: 'MASAK BOMBAY'
}, {
  value: 'panggang',
  label: 'PANGGANG'
}, {
  value: 'teriyaki',
  label: 'TERIYAKI'
}, {
  value: 'sate',
  label: 'SATE'
}];
const kambingGulingMenuPorsiKuahTypes = [{
  value: 'kuah_gulai',
  label: 'KUAH GULAI'
}, {
  value: 'kuah_kari',
  label: 'KUAH KARI'
}, {
  value: 'kuah_semur',
  label: 'KUAH SEMUR'
}, {
  value: 'kuah_sop',
  label: 'KUAH SOP'
}, {
  value: 'kuah_tengkleng',
  label: 'KUAH TENGKLENG'
}, {
  value: 'kuah_tongseng',
  label: 'KUAH TONGSENG'
}];
const kambingGulingMenuKeringTypes = [{
  value: 'kering_bakar_bbq',
  label: 'BAKAR BBQ'
}, {
  value: 'kering_goreng',
  label: 'GORENG'
}, {
  value: 'kering_masak_bombay',
  label: 'MASAK BOMBAY'
}, {
  value: 'kering_panggang',
  label: 'PANGGANG'
}, {
  value: 'kering_teriyaki',
  label: 'TERIYAKI'
}, {
  value: 'kering_sate',
  label: 'SATE'
}];
// paket aqiqah ekonomis
const paketAqiqahEkonomisMenuIds = [
  'domba_panggang', 'nasi_mandhi', 'nasi_putih', 'acar', 'pisang_or_puding'
];

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

const setAddressDisplay = (frm, cdt, cdn) => {
  if (frm.doc['customer_name'] && frm.doc['customer_address']) {
    const customerAddress = frm.doc['customer_address'];
    frm.set_value('customer_address', '');
    setTimeout(() => {
      frappe.after_ajax(() => {
        frm.set_value('customer_address', customerAddress);
        frm.refresh_field('customer_address');
        setTimeout(() => {
          frappe.after_ajax(() => {
            if (!frm.doc['shipping_address_name']) {
              frm.set_value('shipping_address_name', customerAddress);
              frm.refresh_field('shipping_address_name');
            }
          });
        }, 500);
      });
    }, 500);
  } else {
    frm.set_value('customer_name', '');
    frm.refresh_field('customer_name');
  }
};

const setPaymentList = (frm, cdt, cdn) => {
  const d = locals[cdt][cdn];
  const grandTotal = frm.doc['grand_total'];
  let outstanding = 0;
  let remainingBill = 0;
  const currentRow = cur_frm.get_field('payment_list').grid.grid_rows[d.idx - 1];
  if (frm.doc['payment_list']) {
    let totalPayment = _.sumBy(cur_frm.doc['payment_list'], 'paid_amount') || 0;
    if (totalPayment === grandTotal) {
      totalPayment = 0;
    }
    if (totalPayment !== 0) {
      remainingBill = grandTotal - totalPayment;
    }
    cur_frm.set_value('total_payment_list', totalPayment);
    cur_frm.set_value('remaining_bill', remainingBill);
    cur_frm.refresh_field('remaining_bill');
    cur_frm.refresh_field('total_payment_list');
  }
  if (currentRow) {
    const totalPayment = _.sumBy(cur_frm.doc['payment_list'], 'paid_amount') || 0;
    if (totalPayment === 0) {
      outstanding = grandTotal - d.paid_amount;
    } else {
      outstanding = grandTotal - totalPayment;
    }
    if (outstanding < 0) {
      outstanding = 0;
    }
    d.outstanding = outstanding;
    currentRow.refresh_field('outstanding');
  }
}

const setPayment = (frm, cdt, cdn) => {
  const finish = 1;
  let history = cur_frm.doc['total_payment_list'] || 0;
  let grandTotal = cur_frm.doc['grand_total'] || 0;
  let remainingBill = cur_frm.doc['remaining_bill'] || 0;
  let totalPayment = _.sumBy(cur_frm.doc['payment_list'], 'paid_amount') || 0;
  const result = grandTotal - totalPayment;

  
  if (cur_frm.doc['payment_list'].length === 0) {
    cur_frm.set_value('remaining_bill', 0);
    cur_frm.refresh_field('remaining_bill');
  }
  // if (history !== totalPayment) {
    cur_frm.set_value('total_payment_list', totalPayment);
    cur_frm.refresh_field('total_payment_list');
  // }

  if (remainingBill !== result) {
    if (totalPayment !== 0) {
      cur_frm.set_value('remaining_bill', result);
      cur_frm.refresh_field('remaining_bill');
    }
  } else {
    cur_frm.set_value('is_paid_off', finish);
    cur_frm.refresh_field('is_paid_off');
  }
}

// const setPaymentSchedule = (frm, cdt, cdn) => {
//   const payment = frm.doc['payment_list'];
//   if (frm.doc['total_payment_list']) {
//     cur_frm.clear_table('payment_schedule');
//     for (let i = 0; i < payment.length; i++) {
//       const list = payment[i];
//       const schadule = cur_frm.add_child('payment_schedule');
//       schadule.due_date = list.transaction_date;
//       schadule.payment_amount = list.paid_amount;
//       schadule.description = list.description;
//     }
//     cur_frm.refresh_field('payment_schedule');
//   }
// }

const setPaymentTerms = (isConvertion = false) => {
  if (cur_frm.doc['payment_terms_template']) {
    if (cur_frm.doc.__islocal || cur_frm.doc.__unsaved) {
      const paymentTermsTemplate = cur_frm.doc['payment_terms_template'];
      cur_frm.set_value('payment_terms_template', '');
      cur_frm.clear_table('payment_schedule');
      cur_frm.refresh_field('payment_terms_template');
      cur_frm.refresh_field('payment_schedule');
      let timeout = 500;
      if (useConvertion && isConvertion) {
        timeout = 4000;
      }
      setTimeout(() => {
        frappe.after_ajax(() => {
          cur_frm.set_value('payment_terms_template', paymentTermsTemplate);
          cur_frm.refresh_field('payment_terms_template');
        });
      }, timeout);
    }
  }
};

const setGrandTotal = (totalItemPrice) => {
  const totalDiscount = cur_frm.doc['total_discount'];
  totalItemPrice = Math.floor(totalItemPrice);

  frappe.after_ajax(() => {
    if (cur_frm.doc.__islocal || cur_frm.doc.__unsaved) {
      cur_frm.set_value('discount_amount', totalDiscount);
      cur_frm.refresh_field('discount_amount');

      frappe.after_ajax(() => {
        const totalPayment = totalItemPrice - totalDiscount;
        cur_frm.set_value('base_total', totalItemPrice);
        cur_frm.refresh_field('base_total');

        frappe.after_ajax(() => {
          cur_frm.set_value('net_total', totalPayment);
          cur_frm.refresh_field('net_total');
          cur_frm.set_value('grand_total', totalPayment);
          cur_frm.refresh_field('grand_total');
          cur_frm.set_value('rounded_total', totalPayment);
          cur_frm.refresh_field('rounded_total');
        });
      });
    } else {
      cur_frm.set_value('discount_amount', totalDiscount);
      cur_frm.refresh_field('discount_amount');
    }
  });
};

const setDefaultDebit = async () => {
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'Account',
      filters: {
        'account_number': codePiutang,
        'disabled': 0
      },
      fieldname: 'name'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        cur_frm.set_value('debit_to', result.name);
        cur_frm.set_value('is_opening', 'No');
      }
    }
  });
};

const setDefaultSalesBranchCode = async () => {
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'User Configuration',
      filters: {
        'user': frappe.session.user
      },
      fieldname: 'branch_code'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.branch_code) {
        cur_frm.set_value('sales_branch_code', result.branch_code);
      }
    }
  });
};

const convertMeatCookType = (validOrderDetailOrder, meatCookType = '', orderBoxType = '') => {
  let convertMeatCookTypeName = '';
  if (validOrderDetailOrder) {
    if (meatCookType && (validOrderDetailOrder.type === 'PAKET AQIQAH' ||
      validOrderDetailOrder.type === 'NON BOX' || validOrderDetailOrder.type === 'PAKET TUMPENG BOX' || validOrderDetailOrder.type === 'PAKET REGULER' ||
      validOrderDetailOrder.type === 'PAKET REGULER BENTO' || validOrderDetailOrder.type === 'PAKET PROMO REGULER' || validOrderDetailOrder.type === 'PAKET ARABIAN' ||
      validOrderDetailOrder.type === 'PAKET PROMO ARABIAN' || validOrderDetailOrder.type === 'KAMBING GULING')) {
      if (meatCookType === 'BAKAR BBQ') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA BAKAR BBQ';
      } else if (meatCookType === 'MASAK BOMBAY' || meatCookType === 'BOMBAY') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA BOMBAY';
      } else if (meatCookType === 'GULAI') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA GULAI';
      } else if (meatCookType === 'GULING') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA GULING';
      } else if (meatCookType === 'KARI') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA KARI';
      } else if (meatCookType === 'PANGGANG') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA PANGGANG';
      } else if (meatCookType === 'SEMUR') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA SEMUR';
      } else if (meatCookType === 'SOP') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA SOP';
      } else if (meatCookType === 'TENGKLENG') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA TENGKLENG';
      } else if (meatCookType === 'SATE') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA SATE';
      } else if (meatCookType === 'TERIYAKI') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA TERIYAKI';
      } else if (meatCookType === 'TONGSENG') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA TONGSENG';
      } else if (meatCookType === 'DOMBA GORENG') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA GORENG';
      } else if (meatCookType === 'KUAH GULAI') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA KUAH GULAI';
      } else if (meatCookType === 'KUAH KARI') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA KUAH KARI';
      } else if (meatCookType === 'KUAH SEMUR') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA KUAH SEMUR';
      } else if (meatCookType === 'KUAH SOP') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA KUAH SOP';
      } else if (meatCookType === 'KUAH TENGKLENG') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA KUAH TENGKLENG';
      } else if (meatCookType === 'KUAH TONGSENG') {
        convertMeatCookTypeName = 'JASA MASAKAN DOMBA KUAH TONGSENG';
      }

      if (validOrderDetailOrder.type === 'PAKET AQIQAH' || validOrderDetailOrder.type === 'PAKET TUMPENG BOX' ||
        validOrderDetailOrder.type === 'PAKET REGULER BENTO' || validOrderDetailOrder.type === 'PAKET PROMO REGULER' ||
        validOrderDetailOrder.type === 'PAKET PROMO ARABIAN' || validOrderDetailOrder.type === 'PAKET REGULER' ||
        validOrderDetailOrder.type === 'PAKET ARABIAN') {
        if (orderBoxType) {
          if (validOrderDetailOrder.type === 'PAKET TUMPENG BOX' || validOrderDetailOrder.type === 'PAKET REGULER BENTO' || 
          validOrderDetailOrder.type === 'PAKET PROMO REGULER' || validOrderDetailOrder.type === 'PAKET PROMO ARABIAN' ||
          validOrderDetailOrder.type === 'PAKET REGULER' || validOrderDetailOrder.type === 'PAKET ARABIAN') {
            convertMeatCookTypeName += ' BOX - ' + validOrderDetailOrder.type;
          } else {
            convertMeatCookTypeName += ' BOX - ' + orderBoxType;
          }
        } else {
          convertMeatCookTypeName = '';
        }
      } else if (validOrderDetailOrder.type === 'NON BOX') {
        let orderNonBoxType = '';
        const orderTypes = validOrderDetailOrder.order_name.split('-');
        if (orderTypes.length === 2) {
          orderNonBoxType = orderTypes[1].trim();
        }
        if (orderNonBoxType) {
          convertMeatCookTypeName += ' ' + validOrderDetailOrder.menu_type + ' - PAKET ' + orderNonBoxType;
        } else {
          convertMeatCookTypeName = '';
        }
      } else if (validOrderDetailOrder.type === 'KAMBING GULING') {
        let orderKambingGulingType = '';
        const orderTypes = validOrderDetailOrder.order_name.split('-');
        if (orderTypes.length === 2) {
          orderKambingGulingType = orderTypes[1].trim();
        }
        if (orderKambingGulingType) {
          convertMeatCookTypeName += ' ' + validOrderDetailOrder.menu_type + ' - PAKET ' + orderKambingGulingType;
        } else {
          convertMeatCookTypeName = '';
        }
      }
    } else if (meatCookType && validOrderDetailOrder.type === 'PAKET SUPER HEMAT') {
      convertMeatCookTypeName = 'JASA MASAKAN ' + meatCookType + ' - ' + validOrderDetailOrder.type;
    } else if (meatCookType && validOrderDetailOrder.type === 'PAKET SUPER EKONOMIS') {
      convertMeatCookTypeName = 'JASA MASAKAN ' + meatCookType + ' - ' + validOrderDetailOrder.type;
    } else if (meatCookType && validOrderDetailOrder.type === 'PAKET ARABIAN STYLE') {
      convertMeatCookTypeName = 'JASA MASAKAN ' + meatCookType + ' - ' + validOrderDetailOrder.type;
    } else if (meatCookType && validOrderDetailOrder.type === 'PAKET AQIQAH EKONOMIS') {
      convertMeatCookTypeName = 'JASA MASAKAN ' + meatCookType + ' - ' + validOrderDetailOrder.type;
    } else if (meatCookType && validOrderDetailOrder.type === 'PAKET TUMPENGAN SPESIAL') {
      convertMeatCookTypeName = 'JASA MASAKAN ' + meatCookType + ' - ' + validOrderDetailOrder.type;
    } else if (validOrderDetailOrder.type === 'PAKET BOX ISTIMEWA' || validOrderDetailOrder.type === 'PAKET ABG' ||
      validOrderDetailOrder.type === 'NASI NAMPAN' || validOrderDetailOrder.type === 'PAKET PRASMANAN') {
      convertMeatCookTypeName = validOrderDetailOrder.type + ' - ' + validOrderDetailOrder.order_name;
    } else if (validOrderDetailOrder.type === 'SATUAN') {
      convertMeatCookTypeName = validOrderDetailOrder.type + ' ' + validOrderDetailOrder.order_name + ' - ' + validOrderDetailOrder.unit;
    } else if (validOrderDetailOrder.type === 'MAKAN GRATIS') {
      if (validOrderDetailOrder.order_name === 'NASI NAMPAN') {
        convertMeatCookTypeName = validOrderDetailOrder.order_name + ' - ' + validOrderDetailOrder.unit;
      } else {
        convertMeatCookTypeName = validOrderDetailOrder.type + ' ' + validOrderDetailOrder.order_name + ' - ' + validOrderDetailOrder.unit;
      }
    }
  }

  return convertMeatCookTypeName;
};

const convertAqiqahPackageMenu = (aqiqahPackageMenu, validOrderDetailOrder) => {
  const convertItems = [];
  if (aqiqahPackageMenu.length > 0) {
    // detail package
    const validAqiqahPackageMenuOrders = _.filter(aqiqahPackageMenu, (o) => {
      return o.order_type === validOrderDetailOrder.order_name;
    });
    for (let i = 0; i < validAqiqahPackageMenuOrders.length; i++) {
      const validAqiqahPackageMenuOrder = validAqiqahPackageMenuOrders[i];
      let itemNameNasi = '';
      let itemNameMasakan1 = '';
      let itemNameMasakan2 = '';
      if (validAqiqahPackageMenuOrder.type === 'PAKET A') {
        itemNameNasi = 'PAKET BOX A - NASI';
      } else if (validAqiqahPackageMenuOrder.type === 'PAKET B') {
        if (validAqiqahPackageMenuOrder.add_on === 'BALADO TELUR') {
          itemNameNasi = 'PAKET BOX B1 - NASI';
        } else if (validAqiqahPackageMenuOrder.add_on === 'KENTANG BALADO') {
          itemNameNasi = 'PAKET BOX B2 - NASI';
        }
      } else if (validAqiqahPackageMenuOrder.type === 'PAKET C') {
        if (validAqiqahPackageMenuOrder.add_on === 'AYAM GORENG') {
          itemNameNasi = 'PAKET BOX C1 - NASI';
        } else if (validAqiqahPackageMenuOrder.add_on === 'AYAM BAKAR') {
          itemNameNasi = 'PAKET BOX C2 - NASI';
        } else if (validAqiqahPackageMenuOrder.add_on === 'AYAM PANGGANG') {
          itemNameNasi = 'PAKET BOX C3 - NASI';
        }
      } else if (validAqiqahPackageMenuOrder.type.includes('PTB')) {
        itemNameNasi = 'PAKET TUMPENG BOX' + ' - NASI';
      } else if (validAqiqahPackageMenuOrder.type.includes('PA')) {
        itemNameNasi = 'PAKET ARABIAN' + ' - NASI';
      } else if (validAqiqahPackageMenuOrder.type.includes('PPR')) {
        itemNameNasi = 'PAKET PROMO REGULER' + ' - NASI';
      } else if (validAqiqahPackageMenuOrder.type.includes('PPA')) {
        itemNameNasi = 'PAKET PROMO ARABIAN' + ' - NASI';
      }
      if (itemNameNasi) {
        itemNameNasi += ' ' + validAqiqahPackageMenuOrder.rice_type;
        convertItems.push({
          item: itemNameNasi,
          quantity: validAqiqahPackageMenuOrder.quantity
        });
      }

      let orderBoxType = '';
      const orderTypes = validOrderDetailOrder.order_name.split('-');
      if (orderTypes.length === 2) {
        orderBoxType = orderTypes[0].replace('PAKET', '').trim();
      }

      let meatCookType = validAqiqahPackageMenuOrder.meat_cook_type_1 || '';
      itemNameMasakan1 = convertMeatCookType(validOrderDetailOrder, meatCookType, orderBoxType);
      if (itemNameMasakan1) {
        convertItems.push({
          item: itemNameMasakan1,
          quantity: validAqiqahPackageMenuOrder.quantity
        });
      }

      if (validAqiqahPackageMenuOrder.meat_cook_type_2) {
        meatCookType = validAqiqahPackageMenuOrder.meat_cook_type_2 || '';
        itemNameMasakan2 = convertMeatCookType(validOrderDetailOrder, meatCookType, orderBoxType);
        if (itemNameMasakan1 === itemNameMasakan2) {
          itemNameMasakan2 = '';
        }
      }
      if (itemNameMasakan2) {
        convertItems.push({
          item: itemNameMasakan2,
          quantity: validAqiqahPackageMenuOrder.quantity
        });
      }
    }
  }
  return convertItems;
};

const convertNonBoxMenu = (validOrderDetailOrder) => {
  // non box menus
  const nonBoxBungkusMenus = _.cloneDeep(nonBoxMenuBungkusTypes);
  const nonBoxPorsiMenus = _.cloneDeep(nonBoxMenuPorsiTypes);
  const nonBoxPorsiKeringMenus = _.cloneDeep(nonBoxMenuKeringTypes);
  const nonBoxPorsiKuahMenus = _.cloneDeep(nonBoxMenuPorsiKuahTypes);

  const convertItems = [];
  if (validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'PAKET') {
      if (validOrderDetailOrder.menu_type === '1 MENU' || validOrderDetailOrder.menu_type === '2 MENU' ||
        validOrderDetailOrder.menu_type === '2 MENU KUAH' || validOrderDetailOrder.menu_type === 'MENU KERING') {
        for (let i = 0; i < nonBoxBungkusMenus.length; i++) {
          if (validOrderDetailOrder['is_' + nonBoxBungkusMenus[i].value]) {
            const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, nonBoxBungkusMenus[i].label);
            if (itemNameMasakan) {
              convertItems.push({
                item: itemNameMasakan,
                quantity: validOrderDetailOrder['quantity_' + nonBoxBungkusMenus[i].value]
              });
            }
            if (validOrderDetailOrder.is_order_bungkus_cup) {
              convertItems.push({
                item: itemNameDataBungkusCup,
                quantity: validOrderDetailOrder['quantity_' + nonBoxBungkusMenus[i].value]
              });
            }
          }
        }
        if (validOrderDetailOrder.menu_type === '2 MENU') {
          for (let i = 0; i < nonBoxPorsiMenus.length; i++) {
            if (validOrderDetailOrder['is_' + nonBoxPorsiMenus[i].value]) {
              const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, nonBoxPorsiMenus[i].label);
              if (itemNameMasakan) {
                convertItems.push({
                  item: itemNameMasakan,
                  quantity: validOrderDetailOrder['quantity_' + nonBoxPorsiMenus[i].value]
                });
              }
            }
          }
        } else if (validOrderDetailOrder.menu_type === '2 MENU KUAH') {
          for (let i = 0; i < nonBoxPorsiKuahMenus.length; i++) {
            if (validOrderDetailOrder['is_' + nonBoxPorsiKuahMenus[i].value]) {
              const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, nonBoxPorsiKuahMenus[i].label);
              if (itemNameMasakan) {
                convertItems.push({
                  item: itemNameMasakan,
                  quantity: validOrderDetailOrder['quantity_' + nonBoxPorsiKuahMenus[i].value]
                });
              }
            }
          }
        } else if (validOrderDetailOrder.menu_type === 'MENU KERING') {
          for (let i = 0; i < nonBoxPorsiKeringMenus.length; i++) {
            if (validOrderDetailOrder['is_' + nonBoxPorsiKeringMenus[i].value]) {
              const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, nonBoxPorsiKeringMenus[i].label);
              if (itemNameMasakan) {
                convertItems.push({
                  item: itemNameMasakan,
                  quantity: validOrderDetailOrder['quantity_' + nonBoxPorsiKeringMenus[i].value]
                });
              }
            }
          }
        }
      }
    }
  } else {
    if (validOrderDetailOrder.unit === 'BUNGKUS') {
      for (let i = 0; i < nonBoxBungkusMenus.length; i++) {
        if (validOrderDetailOrder['is_' + nonBoxBungkusMenus[i].value]) {
          const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, nonBoxBungkusMenus[i].label);
          if (itemNameMasakan) {
            convertItems.push({
              item: itemNameMasakan,
              quantity: validOrderDetailOrder['quantity_' + nonBoxBungkusMenus[i].value]
            });
          }
          if (validOrderDetailOrder.is_order_bungkus_cup) {
            convertItems.push({
              item: itemNameDataBungkusCup,
              quantity: validOrderDetailOrder['quantity_' + nonBoxBungkusMenus[i].value]
            });
          }
        }
      }
    } else if (validOrderDetailOrder.unit === 'PORSI') {
      for (let i = 0; i < nonBoxPorsiMenus.length; i++) {
        if (validOrderDetailOrder['is_' + nonBoxPorsiMenus[i].value]) {
          const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, nonBoxPorsiMenus[i].label);
          if (itemNameMasakan) {
            convertItems.push({
              item: itemNameMasakan,
              quantity: validOrderDetailOrder['quantity_' + nonBoxPorsiMenus[i].value]
            });
          }
        }
      }
    }
  }
  return convertItems;
};

const convertKambingGulingMenu = (validOrderDetailOrder) => {
  // kambing guling
  const kambingGulingBungkusMenus = _.cloneDeep(kambingGulingMenuBungkusTypes);
  const kambingGulingPorsiMenus = _.cloneDeep(kambingGulingMenuPorsiTypes);
  const kambingGulingPorsiKeringMenus = _.cloneDeep(kambingGulingMenuPorsiKuahTypes);
  const kambingGulingPorsiKuahMenus = _.cloneDeep(kambingGulingMenuKeringTypes);

  const convertItems = [];
  if (validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'PAKET') {
      if (validOrderDetailOrder.menu_type === '1 MENU' || validOrderDetailOrder.menu_type === '2 MENU' ||
        validOrderDetailOrder.menu_type === '2 MENU KUAH' || validOrderDetailOrder.menu_type === 'MENU KERING') {
        for (let i = 0; i < kambingGulingBungkusMenus.length; i++) {
          if (validOrderDetailOrder['is_' + kambingGulingBungkusMenus[i].value]) {
            const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, kambingGulingBungkusMenus[i].label);
            if (itemNameMasakan) {
              convertItems.push({
                item: itemNameMasakan,
                quantity: validOrderDetailOrder['quantity_' + kambingGulingBungkusMenus[i].value]
              });
            }
            if (validOrderDetailOrder.is_order_bungkus_cup) {
              convertItems.push({
                item: itemNameDataBungkusCup,
                quantity: validOrderDetailOrder['quantity_' + kambingGulingBungkusMenus[i].value]
              });
            }
          }
        }
        if (validOrderDetailOrder.menu_type === '2 MENU') {
          for (let i = 0; i < kambingGulingPorsiMenus.length; i++) {
            if (validOrderDetailOrder['is_' + kambingGulingPorsiMenus[i].value]) {
              const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, kambingGulingPorsiMenus[i].label);
              if (itemNameMasakan) {
                convertItems.push({
                  item: itemNameMasakan,
                  quantity: validOrderDetailOrder['quantity_' + kambingGulingPorsiMenus[i].value]
                });
              }
            }
          }
        } else if (validOrderDetailOrder.menu_type === '2 MENU KUAH') {
          for (let i = 0; i < kambingGulingPorsiKeringMenus.length; i++) {
            if (validOrderDetailOrder['is_' + kambingGulingPorsiKeringMenus[i].value]) {
              const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, kambingGulingPorsiKeringMenus[i].label);
              if (itemNameMasakan) {
                convertItems.push({
                  item: itemNameMasakan,
                  quantity: validOrderDetailOrder['quantity_' + kambingGulingPorsiKeringMenus[i].value]
                });
              }
            }
          }
        } else if (validOrderDetailOrder.menu_type === 'MENU KERING') {
          for (let i = 0; i < kambingGulingPorsiKuahMenus.length; i++) {
            if (validOrderDetailOrder['is_' + kambingGulingPorsiKuahMenus[i].value]) {
              const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, kambingGulingPorsiKuahMenus[i].label);
              if (itemNameMasakan) {
                convertItems.push({
                  item: itemNameMasakan,
                  quantity: validOrderDetailOrder['quantity_' + kambingGulingPorsiKuahMenus[i].value]
                });
              }
            }
          }
        }
      }
    }
  }
  return convertItems;
};

const convertPaketSuperHematMenu = (validOrderDetailOrder) => {
  // paket super hemat menus
  const paketSuperHematMenus = _.cloneDeep(paketSuperHematMenuIds);

  const convertItems = [];
  if (validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'PAKET') {
      for (let i = 0; i < paketSuperHematMenus.length; i++) {
        if (validOrderDetailOrder['is_psh_' + paketSuperHematMenus[i]]) {
          const name = paketSuperHematMenus[i].replace(/_/g, ' ').toUpperCase();
          const quantity = validOrderDetailOrder['total_quantity_1'];
          if (!['ACAR', 'SAMBAL'].includes(name)) {
            const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, name);
            if (itemNameMasakan) {
              convertItems.push({
                item: itemNameMasakan,
                quantity: quantity
              });
            }
          }
        }
      }
    }
  }
  return convertItems;
};

const convertPaketSuperEkonomisMenu = (validOrderDetailOrder) => {
  // paket super ekonomis menus
  const paketSuperEkonomisMenus = _.cloneDeep(paketSuperEkonomisMenuIds);

  const convertItems = [];
  if (validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'PAKET') {
      for (let i = 0; i < paketSuperEkonomisMenus.length; i++) {
        if (validOrderDetailOrder['is_pse_' + paketSuperEkonomisMenus[i]]) {
          const name = paketSuperEkonomisMenus[i].replace(/_/g, ' ').toUpperCase();
          const quantity = validOrderDetailOrder['total_quantity_1'];
          if (!['ASINAN NANAS', 'KERUPUK'].includes(name)) {
            const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, name);
            if (itemNameMasakan) {
              convertItems.push({
                item: itemNameMasakan,
                quantity: quantity
              });
            }
          }
        }
      }
    }
  }

  return convertItems;
};

const convertPaketArabianStyleMenu = (validOrderDetailOrder) => {
  // paket arabian style menus
  const paketArabianStyleMenus = _.cloneDeep(paketArabianStyleMenuIds);

  const convertItems = [];
  if (validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'PAKET') {
      for (let i = 0; i < paketArabianStyleMenus.length; i++) {
        if (validOrderDetailOrder['is_pas_' + paketArabianStyleMenus[i]]) {
          const name = paketArabianStyleMenus[i].replace(/_/g, ' ').toUpperCase();
          const quantity = validOrderDetailOrder['total_quantity_1'];
          if (!['TIMUN', 'SAMBAL'].includes(name)) {
            const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, name);
            if (itemNameMasakan) {
              convertItems.push({
                item: itemNameMasakan,
                quantity: quantity
              });
            }
          }
        }
      }
    }
  }
  return convertItems;
};

const convertPaketAqiqahEkonomisMenu = (validOrderDetailOrder) => {
  // paket aqiqah ekonomis menus
  const paketAqiqahEkonomisMenus = _.cloneDeep(paketAqiqahEkonomisMenuIds);

  const convertItems = [];
  if (validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'PAKET') {
      for (let i = 0; i < paketAqiqahEkonomisMenus.length; i++) {
        if (validOrderDetailOrder['is_pae_' + paketAqiqahEkonomisMenus[i]]) {
          const name = paketAqiqahEkonomisMenus[i].replace(/_/g, ' ').toUpperCase();
          const quantity = validOrderDetailOrder['total_quantity_1'];
          if (!['ACAR', 'PISANG OR PUDING'].includes(name)) {
            const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, name);
            if (itemNameMasakan) {
              convertItems.push({
                item: itemNameMasakan,
                quantity: quantity
              });
            }
          }
        }
      }
    }
  }
  return convertItems;
};

const convertPaketTumpenganSpesialMenu = (validOrderDetailOrder) => {
  // paket tumpengan spesial menus
  const paketTumpenganSpesialMenus = _.cloneDeep(paketTumpenganSpesialMenuIds);

  const convertItems = [];
  if (validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'PAKET') {
      for (let i = 0; i < paketTumpenganSpesialMenus.length; i++) {
        if (validOrderDetailOrder['is_pts_' + paketTumpenganSpesialMenus[i]]) {
          const name = paketTumpenganSpesialMenus[i].replace(/_/g, ' ').toUpperCase();
          const quantity = validOrderDetailOrder['total_quantity_1'];
          if (!['TIMUN', 'EMPING'].includes(name)) {
            const itemNameMasakan = convertMeatCookType(validOrderDetailOrder, name);
            if (itemNameMasakan) {
              convertItems.push({
                item: itemNameMasakan,
                quantity: quantity
              });
            }
          }
        }
      }
    }
  }

  return convertItems;
};

const convertPaketTumpengBoxMenu = (validOrderDetailOrder) => {
  // paket tumpengan box menus
  const paketTumpengBoxMenus = _.cloneDeep(paketTumpengBoxMenuIds);

  const convertItems = [];
  let itemNameMasakan = '';
  if (validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'PAKET') {
      for (let i = 0; i < paketTumpengBoxMenus.length; i++) {
        if (validOrderDetailOrder['is_ptb_' + paketTumpengBoxMenus[i]]) {
          const name = paketTumpengBoxMenus[i].replace(/_/g, ' ').toUpperCase();
          const quantity = validOrderDetailOrder['total_quantity_1'];
          if (['OREK TEMPE', 'TUMIS ATI AMPELA'].includes(name)) {
            itemNameMasakan = 'JASA MASAKAN ' + name + ' BOX - ' + validOrderDetailOrder.type;
            if (itemNameMasakan) {
              convertItems.push({
                item: itemNameMasakan,
                quantity: quantity
              });
            }
          }
        }
      }
    }
  }
  return convertItems;
};

const convertPaketRegulerBentoMenu = (validOrderDetailOrder) => {
  // paket reguler bento menus
  const paketRegulerBentoMenus = _.cloneDeep(paketRegulerBentoMenuIds);

  const convertItems = [];
  let itemNameMasakan = '';
  if (validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'PAKET') {
      for (let i = 0; i < paketRegulerBentoMenus.length; i++) {
        if (validOrderDetailOrder['is_prb_' + paketRegulerBentoMenus[i]]) {
          const name = paketRegulerBentoMenus[i].replace(/_/g, ' ').toUpperCase();
          const quantity = validOrderDetailOrder['total_quantity_1'];
          if (['OREK TEMPE', 'TUMIS ATI AMPELA'].includes(name)) {
            itemNameMasakan = 'JASA MASAKAN ' + name + ' BOX - ' + validOrderDetailOrder.type;
            if (itemNameMasakan) {
              convertItems.push({
                item: itemNameMasakan,
                quantity: quantity
              });
            }
          }
        }
      }
    }
  }
  return convertItems;
};

const convertPaketRegulerMenu = (validOrderDetailOrder) => {
  // paket reguler menus
  const paketRegulerMenus = _.cloneDeep(paketRegulerMenuIds);

  const convertItems = [];
  let itemNameMasakan = '';
  if (validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'PAKET') {
      for (let i = 0; i < paketRegulerMenus.length; i++) {
        if (validOrderDetailOrder['is_prb_' + paketRegulerMenus[i]]) {
          const name = paketRegulerMenus[i].replace(/_/g, ' ').toUpperCase();
          const quantity = validOrderDetailOrder['total_quantity_1'];
          if (['KERUPUK', 'SENDOK'].includes(name)) {
            itemNameMasakan = 'JASA MASAKAN ' + name + ' BOX - ' + validOrderDetailOrder.type;
            if (itemNameMasakan) {
              convertItems.push({
                item: itemNameMasakan,
                quantity: quantity
              });
            }
          }
        }
      }
    }
  }
  return convertItems;
};

const convertPaketPromoArabianMenu = (validOrderDetailOrder) => {
  // paket reguler menus
  const paketPromoArabianMenus = _.cloneDeep(paketPromoArabianMenuIds);

  const convertItems = [];
  let itemNameMasakan = '';
  if (validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'PAKET') {
      for (let i = 0; i < paketPromoArabianMenus.length; i++) {
        if (validOrderDetailOrder['is_prb_' + paketPromoArabianMenus[i]]) {
          const name = paketPromoArabianMenus[i].replace(/_/g, ' ').toUpperCase();
          const quantity = validOrderDetailOrder['total_quantity_1'];
          if (['KERUPUK', 'SENDOK'].includes(name)) {
            itemNameMasakan = 'JASA MASAKAN ' + name + ' BOX - ' + validOrderDetailOrder.type;
            if (itemNameMasakan) {
              convertItems.push({
                item: itemNameMasakan,
                quantity: quantity
              });
            }
          }
        }
      }
    }
  }
  return convertItems;
};

const convertPaketBoxIstimewaMenu = (validOrderDetailOrder) => {
  const convertItems = [];
  if (!validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'BOX') {
      const quantity = validOrderDetailOrder['total_quantity_1'];
      const itemNameMasakan = convertMeatCookType(validOrderDetailOrder);
      if (itemNameMasakan) {
        convertItems.push({
          item: itemNameMasakan,
          quantity: quantity
        });
      }
    }
  }
  return convertItems;
};

const convertBoxPaketAbgMenu = (validOrderDetailOrder) => {
  const convertItems = [];
  if (!validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'BOX') {
      const quantity = validOrderDetailOrder['total_quantity_1'];
      const itemNameMasakan = convertMeatCookType(validOrderDetailOrder);
      if (itemNameMasakan) {
        convertItems.push({
          item: itemNameMasakan,
          quantity: quantity
        });
      }
    }
  }
  return convertItems;
};

const convertNasiNampanMenu = (validOrderDetailOrder) => {
  const convertItems = [];
  if (!validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'BOX') {
      const quantity = validOrderDetailOrder['total_quantity_1'];
      const itemNameMasakan = convertMeatCookType(validOrderDetailOrder);
      if (itemNameMasakan) {
        convertItems.push({
          item: itemNameMasakan,
          quantity: quantity
        });
      }
    }
  }
  return convertItems;
};

const convertPaketPrasmananMenu = (validOrderDetailOrder) => {
  const convertItems = [];
  if (!validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'BOX') {
      const quantity = validOrderDetailOrder['total_quantity_1'];
      const itemNameMasakan = convertMeatCookType(validOrderDetailOrder);
      if (itemNameMasakan) {
        convertItems.push({
          item: itemNameMasakan,
          quantity: quantity
        });
      }
    }
  }
  return convertItems;
};

const convertSatuanMenu = (validOrderDetailOrder) => {
  const convertItems = [];
  if (!validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'PCS') {
      const quantity = validOrderDetailOrder['total_quantity_1'];
      const itemNameMasakan = convertMeatCookType(validOrderDetailOrder);
      if (itemNameMasakan) {
        convertItems.push({
          item: itemNameMasakan,
          quantity: quantity
        });
      }
    }
  }
  return convertItems;
};

const convertMakanGratisMenu = (validOrderDetailOrder) => {
  const convertItems = [];
  if (!validOrderDetailOrder.is_package) {
    if (validOrderDetailOrder.unit === 'BOX') {
      const quantity = validOrderDetailOrder['total_quantity_1'];
      const itemNameMasakan = convertMeatCookType(validOrderDetailOrder);
      if (itemNameMasakan) {
        convertItems.push({
          item: itemNameMasakan,
          quantity: quantity
        });
      }
    }
  }
  return convertItems;
};

const setItemsConversion = async () => {
  cur_frm.set_df_property('items', 'read_only', 0);
  cur_frm.set_df_property('discount_amount', 'read_only', 0);
  cur_frm.set_df_property('sales_order_data_section', 'hidden', 1);
  cur_frm.set_df_property('sales_order_total_section', 'hidden', 1);

  let resultItems = [];
  let validItems = [];
  if (cur_frm.doc['order_detail'] && cur_frm.doc['order_detail'].length > 0) {
    // from sales
    cur_frm.set_df_property('debit_to', 'read_only', 1);
    cur_frm.set_df_property('is_opening', 'read_only', 1);
    // cur_frm.set_df_property('items', 'read_only', 1);
    // cur_frm.set_df_property('discount_amount', 'read_only', 1);
    cur_frm.set_df_property('sales_order_data_section', 'hidden', 0);
    cur_frm.set_df_property('sales_order_total_section', 'hidden', 0);

    // convert sales order data
    const orderDetail = cur_frm.doc['order_detail'];
    const aqiqahPackageMenu = cur_frm.doc['aqiqah_package_menu'] || [];
    const nonBoxMenu = cur_frm.doc['non_box_menu'] || [];
    const totalQuantityActualBox = cur_frm.doc['total_quantity_actual_box'] || 0;
    const totalQuantityActualBungkus = cur_frm.doc['total_quantity_actual_bungkus'] || 0;
    const totalQuantityActualPorsi = cur_frm.doc['total_quantity_actual_porsi'] || 0;
    const totalQuantityActualEkor = cur_frm.doc['total_quantity_actual_ekor'] || 0;
    const totalPayment = cur_frm.doc['total_payment'] || 0;

    const validOrderDetailOrders = _.filter(orderDetail, (o) => {
      return (o.type && o.order_name && o.quantity && o.unit &&
        ((o.is_package && o.gender_type) || !o.is_package));
    });
    for (let i = 0; i < validOrderDetailOrders.length; i++) {
      const validOrderDetailOrder = validOrderDetailOrders[i];
      if (validOrderDetailOrder.type === 'PAKET AQIQAH') {
        if (validOrderDetailOrder.is_package) {
          // package
          let itemNameKambing = '';
          const orderTypes = validOrderDetailOrder.order_name.split('-');
          if (orderTypes.length === 2) {
            const order = orderTypes[0].trim();
            if (order === 'PAKET HEMAT') {
              itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' A';
            } else if (order === 'PAKET STANDAR') {
              itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' B';
            } else if (order === 'PAKET MEDIUM') {
              itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' C';
            } else if (order === 'PAKET SILVER') {
              itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' D';
            } else if (order === 'PAKET GOLD') {
              itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' E';
            }
          }
          if (itemNameKambing) {
            validItems.push({
              item: itemNameKambing,
              quantity: validOrderDetailOrder.quantity
            });
          }

          // aqiqah package menus
          const convertItems = convertAqiqahPackageMenu(aqiqahPackageMenu, validOrderDetailOrder);
          validItems = [...validItems, ...convertItems];
        } else {
          // non package
          // aqiqah package menus
          const convertItems = convertAqiqahPackageMenu(aqiqahPackageMenu, validOrderDetailOrder);
          validItems = [...validItems, ...convertItems];
        }
      } else if (validOrderDetailOrder.type === 'AQIQAH MENTAH') {
        if (validOrderDetailOrder.is_package) {
          // package
          let itemNameKambing = '';
          const orderTypes = validOrderDetailOrder.order_name.split('-');
          if (orderTypes.length === 2) {
            const order = orderTypes[1].trim();
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + order;
          }
          if (itemNameKambing) {
            validItems.push({
              item: itemNameKambing,
              quantity: validOrderDetailOrder.quantity
            });
          }
        }
      } else if (validOrderDetailOrder.type === 'NON BOX') {
        if (validOrderDetailOrder.is_package) {
          // package
          let itemNameKambing = '';
          const orderTypes = validOrderDetailOrder.order_name.split('-');
          if (orderTypes.length === 2) {
            const order = orderTypes[1].trim();
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + order;
          }
          if (itemNameKambing) {
            validItems.push({
              item: itemNameKambing,
              quantity: validOrderDetailOrder.quantity
            });
          }
        }

        // non box menus
        const convertItems = convertNonBoxMenu(validOrderDetailOrder);
        validItems = [...validItems, ...convertItems];
      } else if (validOrderDetailOrder.type === 'KAMBING GULING') {
        if (validOrderDetailOrder.is_package) {
          // package
          let itemNameKambing = '';
          const orderTypes = validOrderDetailOrder.order_name.split('-');
          if (orderTypes.length === 2) {
            const order = orderTypes[1].trim();
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + order;
          }
          if (itemNameKambing) {
            validItems.push({
              item: itemNameKambing,
              quantity: validOrderDetailOrder.quantity
            });
          }
        }

        // kambing guling menus
        const convertItems = convertKambingGulingMenu(validOrderDetailOrder);
        validItems = [...validItems, ...convertItems];
      } else if (validOrderDetailOrder.type === 'PAKET SUPER HEMAT') {
        if (validOrderDetailOrder.is_package) {
          // package
          let itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + validOrderDetailOrder.gender_type_lamb +
            ' - ' + validOrderDetailOrder.type;
          if (itemNameKambing) {
            validItems.push({
              item: itemNameKambing,
              quantity: validOrderDetailOrder.quantity
            });
          }

          // paket super hemat menus
          const convertItems = convertPaketSuperHematMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems];
        }
      } else if (validOrderDetailOrder.type === 'PAKET SUPER EKONOMIS') {
        if (validOrderDetailOrder.is_package) {
          // package
          let itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + validOrderDetailOrder.gender_type_lamb +
            ' - ' + validOrderDetailOrder.type;
          if (itemNameKambing) {
            validItems.push({
              item: itemNameKambing,
              quantity: validOrderDetailOrder.quantity
            });
          }

          // paket super ekonomis menus
          const convertItems = convertPaketSuperEkonomisMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems];
        }
      } else if (validOrderDetailOrder.type === 'PAKET ARABIAN STYLE') {
        if (validOrderDetailOrder.is_package) {
          // package
          let orderName = validOrderDetailOrder.order_name.split(' ')[1].trim();
          let itemNameKambing = '';
          if (orderName === 'HEMAT') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'A';
          } else if (orderName === 'STANDAR') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'B';
          } else if (orderName === 'MEDIUM') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'C';
          } else if (orderName === 'GOLD') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'E';
          }
          if (itemNameKambing) {
            validItems.push({
              item: itemNameKambing,
              quantity: validOrderDetailOrder.quantity
            });
          }
          // paket arabian style menus
          const convertItems = convertPaketArabianStyleMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems];
        }
      } else if (validOrderDetailOrder.type === 'PAKET AQIQAH EKONOMIS') {
        if (validOrderDetailOrder.is_package) {
          // package
          let orderName = validOrderDetailOrder.order_name.split(' ')[1].trim();
          let itemNameKambing = '';
          if (orderName === 'HEMAT') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'A';
          } else if (orderName === 'STANDAR') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'B';
          } else if (orderName === 'MEDIUM') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'C';
          } else if (orderName === 'GOLD') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'E';
          }
          if (itemNameKambing) {
            validItems.push({
              item: itemNameKambing,
              quantity: validOrderDetailOrder.quantity
            });
          }
          // paket aqiqah ekonomis menus
          const convertItems = convertPaketAqiqahEkonomisMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems];
        }
      } else if (validOrderDetailOrder.type === 'PAKET TUMPENGAN SPESIAL') {
        if (validOrderDetailOrder.is_package) {
          // package
          let itemNameKambing = '';
          let orderName = validOrderDetailOrder.order_name.split(' ')[1].trim();
          if (orderName === 'HEMAT') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'A';
          } else if (orderName === 'STANDAR') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'B';
          } else if (orderName === 'MEDIUM') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'C';
          } else if (orderName === 'GOLD') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'E';
          }

          if (itemNameKambing) {
            validItems.push({
              item: itemNameKambing,
              quantity: validOrderDetailOrder.quantity
            });
          }

          // paket tumpengan spesial menus
          const convertItems = convertPaketTumpenganSpesialMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems];
        }
      } else if (validOrderDetailOrder.type === 'PAKET TUMPENG BOX' || validOrderDetailOrder.type === 'PAKET ARABIAN') {
        if (validOrderDetailOrder.is_package) {
          // package
          let itemNameKambing = '';
          let orderName = validOrderDetailOrder.order_name.split('-')[1].trim();
          if (orderName === 'HEMAT') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'A';
          } else if (orderName === 'STANDAR') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'B';
          } else if (orderName === 'MEDIUM') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'C';
          } else if (orderName === 'GOLD') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'E';
          }
          if (itemNameKambing) {
            validItems.push({
              item: itemNameKambing,
              quantity: validOrderDetailOrder.quantity
            });
          }

          // paket tumpeng box menus
          const convertItems = convertAqiqahPackageMenu(aqiqahPackageMenu, validOrderDetailOrder);
          const convertItemsAdd = convertPaketTumpengBoxMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems, ...convertItemsAdd];

        }
      } else if (validOrderDetailOrder.type === 'PAKET REGULER BENTO' || validOrderDetailOrder.type === 'PAKET REGULER') {
        if (validOrderDetailOrder.is_package) {
          // package
          let orderName = validOrderDetailOrder.order_name.split('-')[1].trim();
          let itemNameKambing = '';
          if (orderName === 'HEMAT') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'A';
          } else if (orderName === 'STANDAR') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'B';
          } else if (orderName === 'MEDIUM') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'C';
          } else if (orderName === 'GOLD') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'E';
          }
          if (itemNameKambing) {
            validItems.push({
              item: itemNameKambing,
              quantity: validOrderDetailOrder.quantity
            });
          }

          // paket reguler bento menus
          const convertItems = convertAqiqahPackageMenu(aqiqahPackageMenu, validOrderDetailOrder);
          const convertItemsAdd = convertPaketRegulerBentoMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems, ...convertItemsAdd];

        }
      } else if (validOrderDetailOrder.type === 'PAKET PROMO REGULER') {
        if (validOrderDetailOrder.is_package) {
          // package
          let orderName = validOrderDetailOrder.order_name.split('-')[1].trim();
          let itemNameKambing = '';
          if (orderName === 'HEMAT') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'A';
          } else if (orderName === 'STANDAR') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'B';
          } else if (orderName === 'MEDIUM') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'C';
          } else if (orderName === 'GOLD') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'E';
          }
          if (itemNameKambing) {
            validItems.push({
              item: itemNameKambing,
              quantity: validOrderDetailOrder.quantity
            });
          }

          // paket reguler menus
          const convertItems = convertAqiqahPackageMenu(aqiqahPackageMenu, validOrderDetailOrder);
          const convertItemsAdd = convertPaketRegulerMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems, ...convertItemsAdd];
        }
      } else if (validOrderDetailOrder.type === 'PAKET PROMO ARABIAN') {
        if (validOrderDetailOrder.is_package) {
          // package
          let orderName = validOrderDetailOrder.order_name.split('-')[1].trim();
          let itemNameKambing = '';
          if (orderName === 'HEMAT') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'A';
          } else if (orderName === 'STANDAR') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'B';
          } else if (orderName === 'MEDIUM') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'C';
          } else if (orderName === 'GOLD') {
            itemNameKambing = 'KAMBING ' + validOrderDetailOrder.gender_type + ' ' + 'E';
          }
          if (itemNameKambing) {
            validItems.push({
              item: itemNameKambing,
              quantity: validOrderDetailOrder.quantity
            });
          }

          // paket reguler menus
          const convertItems = convertAqiqahPackageMenu(aqiqahPackageMenu, validOrderDetailOrder);
          const convertItemsAdd = convertPaketPromoArabianMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems, ...convertItemsAdd];
        }
      } else if (validOrderDetailOrder.type === 'PAKET BOX ISTIMEWA') {
        if (!validOrderDetailOrder.is_package) {
          // paket box istimewa menus
          const convertItems = convertPaketBoxIstimewaMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems];
        }
      } else if (validOrderDetailOrder.type === 'PAKET ABG') {
        if (!validOrderDetailOrder.is_package) {
          // paket box abg menus
          const convertItems = convertBoxPaketAbgMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems];
        }
      } else if (validOrderDetailOrder.type === 'NASI NAMPAN') {
        if (!validOrderDetailOrder.is_package) {
          // nasi nampan menus
          const convertItems = convertNasiNampanMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems];
        }
      } else if (validOrderDetailOrder.type === 'PAKET PRASMANAN') {
        if (!validOrderDetailOrder.is_package) {
          // paket prasmanan menus
          const convertItems = convertPaketPrasmananMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems];
        }
      } else if (validOrderDetailOrder.type === 'SATUAN') {
        if (!validOrderDetailOrder.is_package) {
          // satuan menus
          const convertItems = convertSatuanMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems];
        }
      } else if (validOrderDetailOrder.type === 'MAKAN GRATIS') {
        if (!validOrderDetailOrder.is_package) {
          // makan gratis menus
          const convertItems = convertMakanGratisMenu(validOrderDetailOrder);
          validItems = [...validItems, ...convertItems];
        }
      }
    }
    // free items
    if (cur_frm.doc['is_free_tumbler']) {
      validItems.push({
        item: itemNameDataTumbler,
        quantity: cur_frm.doc['free_tumbler_quantity']
      });
    }
    if (cur_frm.doc['is_free_bingkai']) {
      validItems.push({
        item: itemNameDataBingkai,
        quantity: cur_frm.doc['free_bingkai_quantity']
      });
    }

    // delivery service
    validItems.push({
      item: itemNameDataPendapatanPengiriman,
      quantity: 1
    });

    // equitment rentail services
    validItems.push({
      item: itemNameDataJasaSewaPeralatan,
      quantity: 1
    });

    if (cur_frm.doc.__islocal) {
      cur_frm.clear_table('items');
      // start conversion
      const itemNames = [itemNameDataPendapatanPenyesuaian, itemNameDataPendapatanPengiriman, itemNameDataJasaSewaPeralatan];
      for (let i = 0; i < validItems.length; i++) {
        const itemName = validItems[i].item;
        const quantity = validItems[i].quantity;
        if (itemName && quantity) {
          itemNames.push(itemName);
        }
      }

      let itemDataPendapatanPenyesuaian = null;
      let itemDataPendapatanPengiriman = null;
      let itemDataJasaSewaPeralatan = null;
      let totalPriceBeforeAdjusting = 0;
      // set items
      let progressCounter = 10;
      frappe.show_progress('Please wait', progressCounter, 100, 'Fetching items..');
      await frappe.call({
        method: 'frappe.client.get_list',
        args: {
          doctype: 'Item Price',
          filters: {
            'item_name': ['in', itemNames],
            'price_list': 'Standard Selling',
            'selling': 1
          },
          fields: ['price_list_rate', 'item_name', 'item_code'],
          limit_page_length: 0,
          as_list: true
        },
        callback: (r) => {
          const results = r && r.message || [];
          if (results && results.length > 0) {
            for (let i = 0; i < validItems.length; i++) {
              const validItem = validItems[i];
              const result = _.find(results, (o) => {
                return o.item_name && validItem.item === o.item_name;
              });
              if (result) {
                const salesInvoiceItem = frappe.model.add_child(cur_frm.doc, 'Sales Invoice Item', 'items');
                salesInvoiceItem.qty = validItem.quantity;

                let priceListRate = result.price_list_rate;
                if (result.item_name === itemNameDataPendapatanPengiriman) {
                  priceListRate = cur_frm.doc['total_shipping_price'] || 0;
                }
                if (result.item_name === itemNameDataJasaSewaPeralatan) {
                  priceListRate = cur_frm.doc['total_equipment_rental_services'] || 0;
                }

                salesInvoiceItem.price_list_rate = priceListRate;
                salesInvoiceItem.item_name = result.item_name;
                frappe.model.set_value(salesInvoiceItem.doctype, salesInvoiceItem.name, 'item_code', result.item_code);

                totalPriceBeforeAdjusting += ((validItem.quantity || 0) * (salesInvoiceItem.price_list_rate || 0));

                progressCounter = ((70 / validItems.length) * (i + 1)) + 10;
                frappe.show_progress('Please wait', progressCounter, 100, 'Setuping items..');
              }
            }
            itemDataPendapatanPenyesuaian = _.find(results, (o) => {
              return o.item_name === itemNameDataPendapatanPenyesuaian;
            });
            itemDataPendapatanPengiriman = _.find(results, (o) => {
              return o.item_name === itemNameDataPendapatanPengiriman;
            });
            itemDataJasaSewaPeralatan = _.find(results, (o) => {
              return o.item_name === itemNameDataJasaSewaPeralatan;
            });
          }
          resultItems = results;
          if (itemDataPendapatanPengiriman) {
            for (let i = 0; i < resultItems.length; i++) {
              if (resultItems[i].item_name === itemDataPendapatanPengiriman.item_name) {
                resultItems[i].price_list_rate = cur_frm.doc['total_shipping_price'] || 0;
                totalPriceBeforeAdjusting += resultItems[i].price_list_rate;
                break;
              }
            }
          }
          if (itemDataJasaSewaPeralatan) {
            for (let i = 0; i < resultItems.length; i++) {
              if (resultItems[i].item_name === itemDataJasaSewaPeralatan.item_name) {
                resultItems[i].price_list_rate = cur_frm.doc['total_equipment_rental_services'] || 0;
                totalPriceBeforeAdjusting += resultItems[i].price_list_rate;
                break;
              }
            }
          }
        }
      });

      frappe.show_progress('Please wait', 80, 100, 'Adjusting..');
      await frappe.after_ajax(() => {
        const adjustingPrice = cur_frm.doc['total_price'] - totalPriceBeforeAdjusting;
        if (adjustingPrice > 0 && itemDataPendapatanPenyesuaian) {
          const salesInvoiceItem = frappe.model.add_child(cur_frm.doc, 'Sales Invoice Item', 'items');
          salesInvoiceItem.qty = 1;
          salesInvoiceItem.price_list_rate = adjustingPrice;
          salesInvoiceItem.item_name = itemDataPendapatanPenyesuaian.item_name;
          frappe.model.set_value(salesInvoiceItem.doctype, salesInvoiceItem.name, 'item_code', itemDataPendapatanPenyesuaian.item_code);

          for (let i = 0; i < resultItems.length; i++) {
            if (resultItems[i].item_name === itemDataPendapatanPenyesuaian.item_name) {
              resultItems[i].price_list_rate = adjustingPrice;
              break;
            }
          }
        }
      });

      frappe.show_progress('Please wait', 85, 100, 'Calculating Payment..');
      await frappe.after_ajax(() => {
        const salesOrder = cur_frm.doc['sales_order'];
        let payment = 0;
        let remaining = 0;
        frappe.db.get_list('Payment History', {
          filters: [
              ['sales_order', '=', salesOrder]
          ],
          fields: ['*'],
          limit: 0
        }).then((results) => {
            if (results && results.length > 0) {
                cur_frm.clear_table('payment_list');
                for (let i = 0; i < results.length; i++) {
                  const list = results[i];
                  const schadule = cur_frm.add_child('payment_list');
                  schadule.payment_type = list.payment_type;
                  schadule.sales_branch_code = list.sales_branch_code;
                  schadule.mode_of_payment = list.mode_of_payment;
                  schadule.description = list.note;
                  schadule.transaction_date = list.date;
                  schadule.paid_amount = list.payment;
                  schadule.outstanding = list.remaining_payment;
                  schadule.sales_order = list.sales_order;
                  schadule.payment_history = list.name;
                  payment += list.payment;
                  remaining += list.remaining_payment;
                }
                cur_frm.refresh_field('payment_list');
                cur_frm.set_value('total_payment_list', payment);
                cur_frm.set_value('remaining_bill', remaining);
                cur_frm.refresh_field('total_payment_list');
                cur_frm.refresh_field('remaining_bill');
            }
        });
      });

      frappe.show_progress('Please wait', 90, 100, 'Calculating..');
      await frappe.after_ajax(() => {
        setTimeout(() => {
          frappe.show_progress('Please wait', 100, 100, 'Completed');
          if (cur_dialog) {
            cur_dialog.hide();
          }
        }, 5000);
      });
    }
  }
  return resultItems;
};

const setPostingDate = (frm, cdt, cdn) => {
  if (frm.doc.status === 'Draft' || frm.doc.docstatus === 0) {
    if (frm.doc.event_date) {
      const eventDate = cur_frm.doc['event_date'];
      const postingDate = moment(eventDate).format('YYYY-MM-DD');
      const myDate = new Date(postingDate);
      myDate.setDate(myDate.getDate() + 1);
      const fixPostingDate = moment(myDate).format('YYYY-MM-DD');
      console.log('set posting', fixPostingDate);
      cur_frm.set_value('due_date', fixPostingDate);
      cur_frm.refresh_field('due_date');
    }
  }
};

////////////////////////////////////// form //////////////////////////////////////
frappe.ui.form.on('Sales Invoice', {
  setup: async (frm, cdt, cdn) => {
    // import library
    await frappe.require([
      'assets/js/lodash.min.js'
    ]);

    // set query
    frm.cscript.setup_queries = () => {
      this.frm.set_query('item_code', 'items', (frm, cdt, cdn) => {
        return {
          filters: [
            ['is_sales_item', '=', 1],
            ['item_group', '!=', 'Others']
          ]
        };
      });
    };
    frm.cscript.setup_queries();

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
  refresh: (frm, cdt, cdn) => {
    // isDebug status
    frm.set_df_property('branch_code', 'hidden', isDebug ? 0 : 1);
    frm.set_df_property('sales_order', 'hidden', isDebug ? 0 : 1);
    frm.set_df_property('so_detail', 'hidden', isDebug ? 0 : 1);
    frm.set_df_property('non_box_menu', 'hidden', isDebug ? 0 : 1);
    frm.set_df_property('grand_total_quantity_actual_ekor', 'hidden', isDebug ? 0 : 1);
    // set field status
    frm.toggle_enable('naming_series', 0);
    frm.set_df_property('debit_to', 'read_only', 1);
    frm.set_df_property('is_opening', 'read_only', 1);
    frm.fields_dict['items'].grid.wrapper.find('.grid-remove-all-rows').hide();
    frm.fields_dict['payment_schedule'].grid.wrapper.find('.grid-remove-all-rows').hide();
    if (frm.doc.__islocal) {
      frm.set_df_property('timestamp_section', 'hidden', isDebug ? 0 : 1);
    } else {
      $('.form-link-title').hide();
      $("[data-doctype='Delivery Note']").hide();
      $("[data-doctype='Sales Invoice']").hide();
    }
  },
  onload_post_render: async (frm, cdt, cdn) => {
    // set hidden element
    const isAdministrator = has_common(frappe.user_roles, ['Administrator']);
    const isSubmit = has_common(frappe.user_roles, ['ASA - Accounting Role', 'Administrator']);
    if (!isSubmit) {
      //$("[data-label='Submit']").hide();
    }

    if (!isAdministrator) {
      $('.custom-actions').hide();
      $('.comment-box').hide();
      $('.timeline-actions').hide();
      $('.new-timeline').hide();
      $('.menu-btn-group').hide();
    }

    // run others
    let errorMessage = '';
    if (!isAdministrator) {
      const isSales = has_common(frappe.user_roles, ['ASA - Sales Role']);
      if (isSales) {
        frm.set_df_property('customer', 'read_only', 1);
        if (!frm.doc['order_detail'] || frm.doc['order_detail'].length === 0) {
          frm.set_df_property('customer_section', 'hidden', 1);
          frm.set_df_property('address_and_contact', 'hidden', 1);
          frm.set_df_property('sales_order_data_section', 'hidden', 1);
          frm.set_df_property('sales_order_total_section', 'hidden', 1);
          frm.set_df_property('items_section', 'hidden', 1);
          frm.set_df_property('section_break_30', 'hidden', 1);
          frm.set_df_property('section_break_49', 'hidden', 1);
          frm.set_df_property('totals', 'hidden', 1);
          frm.set_df_property('payment_schedule_section', 'hidden', 1);
          frm.set_df_property('more_info', 'hidden', 1);
          errorMessage = 'User sales hanya bisa menambah sales invoice melalui sales order';
        }
      }
    }
    if (errorMessage) {
      frm.disable_save();
      msgprint(errorMessage);
    } else {
      if (frm.doc.__islocal) {
        setAddressDisplay(frm, cdt, cdn);
        if (!frappe.validated) {
          if (frm.doc['sales_order'] &&
            frm.doc['items'] && frm.doc['items'].length > 0) {
            frm.set_value('so_detail', frm.doc['items'][0]['so_detail']);
            frm.refresh_field('so_detail');
          }
          frm.clear_table('items');
          frm.refresh_field('items');
          await setDefaultDebit();
          await setDefaultSalesBranchCode();
        }
      }
      if (!frappe.validated) {
        await frappe.after_ajax(async () => {
          if (useConvertion) {
            const resultItems = await setItemsConversion();
            if (resultItems.length > 0) {
              await frappe.after_ajax(() => {
                setTimeout(() => {
                  // items validating
                  let totalItemPrice = 0;
                  if (frm.doc['items'] && frm.doc['items'].length > 0) {
                    $.each(frm.doc['items'], (index, d) => {
                      const resultItem = _.find(resultItems, (o) => {
                        return o.item_name === d.item_name;
                      });
                      if (resultItem) {
                        if ([itemNameDataPendapatanPengiriman, itemNameDataJasaSewaPeralatan, itemNameDataPendapatanPenyesuaian].includes(d.item_name)) {
                          setTimeout(() => {
                            frappe.model.set_value(d.doctype, d.name, 'rate', Math.round(resultItem.price_list_rate));
                          });
                        } else if (freeItems.includes(d.item_name)) {
                          // free items
                          frappe.model.set_value(d.doctype, d.name, 'rate', 0);
                        }
                      }
                      const amount = d.qty * d.rate;
                      frappe.model.set_value(d.doctype, d.name, 'amount', amount);
                      totalItemPrice += amount;
                    });
                    frm.refresh_field('items');
                    setGrandTotal(totalItemPrice);
                  }
                }, 500);
              });
            }
          } else {
            frm.set_df_property('items', 'read_only', 0);
            frm.set_df_property('discount_amount', 'read_only', 0);
            frm.set_df_property('sales_order_data_section', 'hidden', 1);
            frm.set_df_property('sales_order_total_section', 'hidden', 1);
            if (frm.doc['order_detail'] && frm.doc['order_detail'].length > 0) {
              // frm.set_df_property('discount_amount', 'read_only', 1);
              frm.set_df_property('sales_order_data_section', 'hidden', 0);
              frm.set_df_property('sales_order_total_section', 'hidden', 0);
            }
          }
          setPaymentTerms(true);
        });
      }
    }
    if (frm.doc.docstatus !== 1) {
      frm.clear_table('payment_schedule');
      frm.refresh_field('payment_schedule');
    }
    setPostingDate(frm, cdt, cdn);
    setPayment(frm, cdt, cdn);
  },
  validate: async (frm, cdt, cdn) => {
    let errorMessage = '';

    if (frm.doc['order_detail'] && frm.doc['order_detail'].length > 0) {
      if (frm.doc['grand_total'] !== frm.doc['total_payment']) {
        // errorMessage = 'Grand total invoice items harus sama dengan grand total sales order data';
      }
      if (frm.doc['total_payment_list'] !== 0 && frm.doc['remaining_bill'] !== 0) {
        // errorMessage = 'Grand total invoice harus sama dengan total payment';
      }
    }

    if (!errorMessage) {
      if (frm.doc['grand_total'] <= 0) {
        errorMessage = 'Pembayaran harus lebih besar dari 0';
      }
    }

    if (errorMessage) {
      msgprint(errorMessage);
      frappe.validated = false;
    } else {
      let isValidated = false;
      const validateTimestamp = await setTimestamp();
      if (validateTimestamp) {
        if (frm.doc['sales_order']) {
          if (frm.doc['so_detail']) {
            $.each(frm.doc['items'], (index, d) => {
              d.sales_order = frm.doc['sales_order'];
              d.so_detail = frm.doc['so_detail'];
            });
            frm.refresh_field('items');

            isValidated = true;
          }
        } else {
          isValidated = true;
        }
      }

      if (isValidated) {
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
  before_submit: (frm, cdt, cdn) => {
    // setPaymentSchedule(frm, cdt, cdn);
    setPayment(frm, cdt, cdn);
  },
  payment_terms_template: (frm, cdt, cdn) => {
    if (!frm.doc['payment_terms_template']) {
      frm.clear_table('payment_schedule');
      frm.refresh_field('payment_schedule');
    }
  },
  discount_amount: (frm, cdt, cdn) => {
    setPaymentTerms();
  }
});

////////////////////////////////////// child tables //////////////////////////////////////
frappe.ui.form.on('Order Detail', {
  form_render: (frm, cdt, cdn) => {
    $('.row-actions').hide();
    $('.grid-footer-toolbar').hide();
  },
});

frappe.ui.form.on('Aqiqah Package Menu', {
  form_render: (frm, cdt, cdn) => {
    $('.row-actions').hide();
    $('.grid-footer-toolbar').hide();
  },
});

frappe.ui.form.on('Non Box Menu', {
  form_render: (frm, cdt, cdn) => {
    $('.row-actions').hide();
    $('.grid-footer-toolbar').hide();
  },
});

frappe.ui.form.on('Sales Invoice Item', {
  form_render: (frm, cdt, cdn) => {
    $('.row-actions').hide();
    $('.grid-footer-toolbar').hide();
  },
  items_remove: (frm, cdt, cdn) => {
    setPaymentTerms();
  },
  item_code: (frm, cdt, cdn) => {
    setPaymentTerms();
  },
  qty: (frm, cdt, cdn) => {
    setPaymentTerms();
  },
  rate: (frm, cdt, cdn) => {
    setPaymentTerms();
  },
});

frappe.ui.form.on('Payment Schedule', {
  form_render: (frm, cdt, cdn) => {
    $('.row-actions').hide();
    $('.grid-footer-toolbar').hide();
  },
});

frappe.ui.form.on('Payment List', {
  form_render: (frm, cdt, cdn) => {
    $('.row-actions').hide();
    $('.grid-footer-toolbar').hide();
  },
  paid_amount: (frm, cdt, cdn) => {
    setPaymentList(frm, cdt, cdn);
  }
});
