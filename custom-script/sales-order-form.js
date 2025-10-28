const isDebug = false;

////////////////////////////////////// variables //////////////////////////////////////
const msPerMinute = 60000;
const gelarMinuteBeforeDelivery = 30;
const maxGelarBatch = 16;
const matriksMinuteBeforeCooking = 60;
const defaultSatePerItem = 1;
const defaultNonSatePerItem = 1;
let errorMessageProductCodes = [];
let oldDoc = null;
const sequenceNames = [{
  sequence: 1,
  name: 'PERTAMA'
}, {
  sequence: 2,
  name: 'KEDUA'
}, {
  sequence: 3,
  name: 'KETIGA'
}, {
  sequence: 4,
  name: 'KEEMPAT'
}, {
  sequence: 5,
  name: 'KELIMA'
}, {
  sequence: 6,
  name: 'KEENAM'
}, {
  sequence: 7,
  name: 'KETUJUH'
}, {
  sequence: 8,
  name: 'KEDELAPAN'
}, {
  sequence: 9,
  name: 'KESEMBILAN'
}, {
  sequence: 10,
  name: 'KESEPULUH'
}, {
  sequence: 11,
  name: 'KESEBELAS'
}, {
  sequence: 12,
  name: 'KEDUA BELAS'
}, {
  sequence: 13,
  name: 'KETIGA BELAS'
}, {
  sequence: 14,
  name: 'KEEMPAT BELAS'
}, {
  sequence: 15,
  name: 'KELIMA BELAS'
}, {
  sequence: 16,
  name: 'KEENAM BELAS'
}];
const noData = '';
const itemNameDataBungkusCup = 'BUNGKUS CUP';
const discountBoxPackage = 0;
const discountNonBoxPackage = 0;


const premiumPackageMenuNames = [
  'PAKET PREMIUM',
  'PAKET PREMIUM ARABIAN',
];
const premiumPackageMenuTypes = [
  'A',
  'B',
  'C',
  'D',
];
const premiumPackageFill = [
  'nasi_putih',
  'sate_goreng',
  'gulai',
  'mix_vegetables',
  'ayam_bakar',
  'kerupuk',
  'fruit_tea',
  'alat_makan_set'
];
const premiumPackageSalesData = [
  {
    type: 'PAKET PREMIUM - BETINA A',
    quantity: 40,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM - JANTAN A',
    quantity: 40,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM - BETINA B',
    quantity: 50,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM - JANTAN B',
    quantity: 50,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM - BETINA C',
    quantity: 70,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM - JANTAN C',
    quantity: 70,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM - BETINA D',
    quantity: 100,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM - JANTAN D',
    quantity: 100,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM ARABIAN - BETINA A',
    quantity: 40,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM ARABIAN - JANTAN A',
    quantity: 40,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM ARABIAN - BETINA B',
    quantity: 50,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM ARABIAN - JANTAN B',
    quantity: 50,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM ARABIAN - BETINA C',
    quantity: 70,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM ARABIAN - JANTAN C',
    quantity: 70,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM ARABIAN - BETINA D',
    quantity: 100,
    unit: 'BOX',
  },
  {
    type: 'PAKET PREMIUM ARABIAN - JANTAN D',
    quantity: 100,
    unit: 'BOX',
  },
];
// PAKET HEMAT SPESIAL
const paketHematPackageMenuNames = [
  'PAKET HEMAT SPESIAL',
  'PAKET HEMAT SPESIAL ARABIAN',
];
const paketHematPackageMenuTypes = [
  'A',
  'B',
  'C',
  'D',
];
const paketHematPackageSalesData = [
  { type: 'PAKET HEMAT SPESIAL - BETINA A', quantity: 40, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL - JANTAN A', quantity: 40, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL - BETINA B', quantity: 50, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL - JANTAN B', quantity: 50, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL - BETINA C', quantity: 70, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL - JANTAN C', quantity: 70, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL - BETINA D', quantity: 100, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL - JANTAN D', quantity: 100, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL ARABIAN - BETINA A', quantity: 40, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL ARABIAN - JANTAN A', quantity: 40, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL ARABIAN - BETINA B', quantity: 50, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL ARABIAN - JANTAN B', quantity: 50, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL ARABIAN - BETINA C', quantity: 70, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL ARABIAN - JANTAN C', quantity: 70, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL ARABIAN - BETINA D', quantity: 100, unit: 'BOX' },
  { type: 'PAKET HEMAT SPESIAL ARABIAN - JANTAN D', quantity: 100, unit: 'BOX' }
];
const paketHematPackageFill = [
  'sate_goreng',
  'gulai',
  'mix_vegetables',
  'mie_goreng',
  'timun',
  'kerupuk',
  'puding',
  'sendok'
];
// paket aqiqah
const aqiqahPackageMenuNames = ['PAKET HEMAT', 'PAKET STANDAR', 'PAKET MEDIUM', 'PAKET SILVER', 'PAKET GOLD', 'PAKET TUMPENG MINI'];
const aqiqahPackageMenuTypes = ['A', 'B', 'C'];
const aqiqahTumpengMenuData = [
  { type: 'PAKET TUMPENG MINI - A', quantity: 40, unit: 'BOX' },
  { type: 'PAKET TUMPENG MINI - B', quantity: 50, unit: 'BOX' },
  { type: 'PAKET TUMPENG MINI - C', quantity: 70, unit: 'BOX' },
  { type: 'PAKET TUMPENG MINI - D', quantity: 100, unit: 'BOX' },
];
const aqiqahPackageMenuPackageTypes = [
  {
    package: 'PAKET HEMAT',
    quantity: 40,
    unit: 'BOX'
  }, 
  {
    package: 'PAKET STANDAR',
    quantity: 55,
    unit: 'BOX'
  }, 
  {
    package: 'PAKET MEDIUM',
    quantity: 70,
    unit: 'BOX'
  }, 
  {
    package: 'PAKET SILVER',
    quantity: 85,
    unit: 'BOX'
  }, 
  {
    package: 'PAKET GOLD',
    quantity: 100,
    unit: 'BOX'
  },
];
// paket non box
const nonBoxMenuIds = [
  'gulai', 'kari', 'semur', 'sop', 'tengkleng', 'sate', 'tongseng',
  'bakar_bbq', 'guling', 'masak_bombay', 'panggang', 'teriyaki',
  'kuah_gulai', 'kuah_kari', 'kuah_semur', 'kuah_sop', 'kuah_tengkleng',
  'kuah_sate', 'kuah_tongseng', 'kering_bakar_bbq', 'kering_goreng',
  'kering_masak_bombay', 'kering_panggang', 'kering_teriyaki', 'kering_sate'
];
const menuPackageTypes = ['A', 'B', 'C', 'D', 'E'];
const nonBoxMenuPieces = ['SATUAN - BUNGKUS', 'SATUAN - PORSI'];
const nonBoxMenuPackageTypes = [{
  value: 'A',
  menus: [{
    value: '1 MENU',
    quantity_units: [{
      value: 1,
      quantity: 40,
      unit: 'BUNGKUS'
    }]
  }, {
    value: '2 MENU',
    quantity_units: [{
      value: 1,
      quantity: 30,
      unit: 'BUNGKUS'
    }, {
      value: 2,
      quantity: 30,
      unit: 'PORSI'
    }]
  }, {
    value: '2 MENU KUAH',
    quantity_units: [{
      value: 1,
      quantity: 30,
      unit: 'BUNGKUS'
    }, {
      value: 3,
      quantity: 25,
      unit: 'PORSI'
    }]
  }, {
    value: 'MENU KERING',
    quantity_units: [{
      value: 4,
      quantity: 30,
      unit: 'PORSI'
    }]
  }]
}, {
  value: 'B',
  menus: [{
    value: '1 MENU',
    quantity_units: [{
      value: 1,
      quantity: 55,
      unit: 'BUNGKUS'
    }]
  }, {
    value: '2 MENU',
    quantity_units: [{
      value: 1,
      quantity: 45,
      unit: 'BUNGKUS'
    }, {
      value: 2,
      quantity: 45,
      unit: 'PORSI'
    }]
  }, {
    value: '2 MENU KUAH',
    quantity_units: [{
      value: 1,
      quantity: 45,
      unit: 'BUNGKUS'
    }, {
      value: 3,
      quantity: 30,
      unit: 'PORSI'
    }]
  }, {
    value: 'MENU KERING',
    quantity_units: [{
      value: 4,
      quantity: 45,
      unit: 'PORSI'
    }]
  }]
}, {
  value: 'C',
  menus: [{
    value: '1 MENU',
    quantity_units: [{
      value: 1,
      quantity: 70,
      unit: 'BUNGKUS'
    }]
  }, {
    value: '2 MENU',
    quantity_units: [{
      value: 1,
      quantity: 60,
      unit: 'BUNGKUS'
    }, {
      value: 2,
      quantity: 60,
      unit: 'PORSI'
    }]
  }, {
    value: '2 MENU KUAH',
    quantity_units: [{
      value: 1,
      quantity: 60,
      unit: 'BUNGKUS'
    }, {
      value: 3,
      quantity: 35,
      unit: 'PORSI'
    }]
  }, {
    value: 'MENU KERING',
    quantity_units: [{
      value: 4,
      quantity: 60,
      unit: 'PORSI'
    }]
  }]
}, {
  value: 'D',
  menus: [{
    value: '1 MENU',
    quantity_units: [{
      value: 1,
      quantity: 85,
      unit: 'BUNGKUS'
    }]
  }, {
    value: '2 MENU',
    quantity_units: [{
      value: 1,
      quantity: 75,
      unit: 'BUNGKUS'
    }, {
      value: 2,
      quantity: 75,
      unit: 'PORSI'
    }]
  }, {
    value: '2 MENU KUAH',
    quantity_units: [{
      value: 1,
      quantity: 75,
      unit: 'BUNGKUS'
    }, {
      value: 3,
      quantity: 40,
      unit: 'PORSI'
    }]
  }, {
    value: 'MENU KERING',
    quantity_units: [{
      value: 4,
      quantity: 75,
      unit: 'PORSI'
    }]
  }]
}, {
  value: 'E',
  menus: [{
    value: '1 MENU',
    quantity_units: [{
      value: 1,
      quantity: 100,
      unit: 'BUNGKUS'
    }]
  }, {
    value: '2 MENU',
    quantity_units: [{
      value: 1,
      quantity: 85,
      unit: 'BUNGKUS'
    }, {
      value: 2,
      quantity: 85,
      unit: 'PORSI'
    }]
  }, {
    value: '2 MENU KUAH',
    quantity_units: [{
      value: 1,
      quantity: 85,
      unit: 'BUNGKUS'
    }, {
      value: 3,
      quantity: 45,
      unit: 'PORSI'
    }]
  }, {
    value: 'MENU KERING',
    quantity_units: [{
      value: 4,
      quantity: 85,
      unit: 'PORSI'
    }]
  }]
}];
const allUnits = ['BOX', 'BUNGKUS', 'PORSI', 'EKOR', 'PCS'];
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
// non box menu kering
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
const menuPackageSuperHematTypes = ['NASI BRIYANI', 'NASI KEBULI', 'NASI MANDHI', 'NASI PUTIH'];
const packageSuperHematMenuPackageType = {
  menus: ['domba_panggang'],
  quantity: 40,
  unit: 'BOX'
};
// paket box istimewa
const paketBoxIstimewaMenuIds = [
  'nasi_timbel_ikan_teri', 'nasi_bakar_ayam', 'nasi_timbel', 'nasi_tutug_oncom',
  'ayam_goreng_lengkuas', 'tempe_goreng', 'pepes_jamur', 'tahu_goreng', 'bakwan_jagung',
  'pepes_peda', 'empal', 'keredok', 'ayam_bakar', 'paru_goreng', 'sayur_asem',
  'ikan_nila_bakar', 'sambal_dadak', 'lalapan'
];
const menuPackageBoxIstimewaTypes = ['1', '2', '3', '4', '5', '6', '7'];
const paketBoxIstimewaMenuPackageTypes = [{
  value: 'PBI 1',
  menus: ['nasi_timbel_ikan_teri', 'ayam_goreng_lengkuas', 'tempe_goreng', 'lalapan']
}, {
  value: 'PBI 2',
  menus: ['nasi_bakar_ayam', 'pepes_jamur', 'tahu_goreng', 'lalapan']
}, {
  value: 'PBI 3',
  menus: ['nasi_timbel', 'bakwan_jagung', 'pepes_peda', 'lalapan']
}, {
  value: 'PBI 4',
  menus: ['nasi_timbel', 'bakwan_jagung', 'empal', 'keredok', 'lalapan']
}, {
  value: 'PBI 5',
  menus: ['nasi_timbel', 'tempe_goreng', 'ayam_bakar', 'lalapan']
}, {
  value: 'PBI 6',
  menus: ['nasi_timbel', 'bakwan_jagung', 'paru_goreng', 'sayur_asem']
}, {
  value: 'PBI 7',
  menus: ['nasi_tutug_oncom', 'tahu_goreng', 'sayur_asem', 'ikan_nila_bakar']
}];
// paket box abg
const paketBoxAbgMenuIds = [
  'nasi_mandhi', 'ayam_dada', 'ayam_paha', 'sambel_ijo', 'acar', 'ayam_1_ekor'
];
const menuPackageBoxAbgTypes = ['DADA', 'PAHA', 'AYAM 1 EKOR'];
const paketBoxAbgMenuPackageTypes = [{
  value: 'DADA',
  menus: ['nasi_mandhi', 'ayam_dada', 'sambel_ijo', 'acar']
}, {
  value: 'PAHA',
  menus: ['nasi_mandhi', 'ayam_paha', 'sambel_ijo', 'acar']
}, {
  value: 'AYAM 1 EKOR',
  menus: ['sambel_ijo', 'ayam_1_ekor']
}];
// nasi nampan
const nasiNampanMenuIds = [
  'nasi_mandhi', 'ayam_panggang', 'mix_ayam_kambing', 'domba_panggang', 'acar', 'garnish', 'sambal'
];
const menuNasiNampanTypes = ['AYAM', 'KAMBING', 'MIX (AYAM & KAMBING)'];
const nasiNampanMenuPackageTypes = [{
  value: 'AYAM',
  menus: ['nasi_mandhi', 'ayam_panggang', 'acar', 'garnish', 'sambal']
}, {
  value: 'KAMBING',
  menus: ['nasi_mandhi', 'domba_panggang', 'acar', 'garnish', 'sambal']
}, {
  value: 'MIX (AYAM & KAMBING)',
  menus: ['nasi_mandhi', 'mix_ayam_kambing', 'acar', 'garnish', 'sambal']
}];
// paket prasmanan
const paketPrasmananMenuIds = [
  'asinan_sayuran', 'pecel_madiun', 'chicken_bbq_salad', 'chicken_thai_salad', 'coleslow',
  'caesar_salad', 'gado_gado', 'rujak_serut', 'spicy_fried_mushroom', 'thai_beef_salad',
  'chicken_corn_soup', 'crab_asparagus_soup', 'sup_ayam', 'sup_mutiara', 'sup_tahu_bakso',
  'sup_wonton', 'soto_banjar', 'tomyam', 'kimlo', 'vegetable_clear_soup', 'nasi_putih',
  'ayam_bakar_bandung', 'ayam_bakar_solo', 'ayam_goreng_kalasan', 'ayam_kuluyuk', 'ayam_rica_rica',
  'bakmi_goreng_seafood', 'bakmi_goreng_singapore', 'beef_black_papper', 'beef_bulgogi',
  'beef_stronganoff', 'beef_teriyaki', 'brocolli_sweet_corn', 'brocolli_oyster_souce',
  'cah_baby_kailan', 'cah_baby_belacan', 'capcay', 'chicken_kungpow', 'empal_balado',
  'fish_orange_souce', 'fish_sweet_souce', 'fried_fsh_orange_sauce', 'grilled_chicken_mushroom',
  'grilled_gindara_lemon_sauce', 'ikan_dadu_dadu', 'ikan_saus_padang', 'krecek',
  'kwetiau_goreng_jawa', 'roasted_chicken', 'roasted_chicken_bbq_souce', 'seafood_fried_vermicelli',
  'seafood_fried_noodle', 'spaghetti_aglio_olio', 'tahu_tempe_bacem', 'orek_tempe',
  'pakcoy_saus_tiram', 'lalapan', 'kerupuk', 'acar', 'sambal', 'kecap_asin', 'kecap_manis',
  'bawang_goreng', 'buah_potong', 'chocolate_pudding_fla', 'vanilla_pudding_fla',
  'fruit_pudding_fla', 'banana_cake', 'es_cendol', 'es_sarang_walet'
];
const menuPackagePrasmananTypes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const paketPrasmananMenuPackageTypes = [{
  value: 'PRASMANAN 1',
  menus: ['asinan_sayuran', 'sup_ayam', 'nasi_putih', 'ayam_rica_rica', 'orek_tempe', 'pakcoy_saus_tiram', 'kerupuk', 'acar', 'sambal', 'buah_potong']
}, {
  value: 'PRASMANAN 2',
  menus: ['pecel_madiun', 'kimlo', 'nasi_putih', 'ayam_goreng_kalasan', 'tahu_tempe_bacem', 'lalapan', 'kerupuk', 'acar', 'sambal', 'es_cendol']
}, {
  value: 'PRASMANAN 3',
  menus: ['coleslow', 'sup_mutiara', 'nasi_putih', 'ayam_kuluyuk', 'bakmi_goreng_singapore', 'capcay', 'kerupuk', 'acar', 'sambal', 'buah_potong']
}, {
  value: 'PRASMANAN 4',
  menus: ['gado_gado', 'sup_tahu_bakso', 'nasi_putih', 'ayam_bakar_solo', 'bakmi_goreng_seafood', 'ikan_saus_padang', 'krecek', 'kerupuk', 'acar', 'sambal', 'buah_potong']
}, {
  value: 'PRASMANAN 5',
  menus: ['chicken_thai_salad', 'tomyam', 'nasi_putih', 'brocolli_oyster_souce', 'roasted_chicken', 'seafood_fried_noodle', 'kerupuk', 'acar', 'sambal', 'buah_potong']
}, {
  value: 'PRASMANAN 6',
  menus: ['caesar_salad', 'sup_wonton', 'nasi_putih', 'beef_teriyaki', 'brocolli_sweet_corn', 'chicken_kungpow', 'seafood_fried_vermicelli', 'kerupuk', 'acar', 'sambal', 'buah_potong', 'chocolate_pudding_fla']
}, {
  value: 'PRASMANAN 7',
  menus: [
    'chicken_bbq_salad', 'vegetable_clear_soup', 'nasi_putih', 'beef_bulgogi', 'brocolli_sweet_corn', 'grilled_chicken_mushroom', 'seafood_fried_vermicelli',
    'kerupuk', 'acar', 'sambal', 'buah_potong', 'vanilla_pudding_fla'
  ]
}, {
  value: 'PRASMANAN 8',
  menus: [
    'rujak_serut', 'soto_banjar', 'nasi_putih', 'ayam_bakar_bandung', 'cah_baby_kailan', 'empal_balado', 'ikan_dadu_dadu', 'kwetiau_goreng_jawa', 'kerupuk',
    'acar', 'sambal', 'kecap_asin', 'kecap_manis', 'bawang_goreng', 'buah_potong', 'vanilla_pudding_fla'
  ]
}, {
  value: 'PRASMANAN 9',
  menus: [
    'spicy_fried_mushroom', 'chicken_corn_soup', 'nasi_putih', 'beef_stronganoff', 'cah_baby_kailan', 'grilled_gindara_lemon_sauce', 'roasted_chicken_bbq_souce',
    'spaghetti_aglio_olio', 'kerupuk', 'acar', 'sambal', 'kecap_asin', 'kecap_manis', 'bawang_goreng', 'buah_potong', 'chocolate_pudding_fla', 'banana_cake'
  ]
}, {
  value: 'PRASMANAN 10',
  menus: [
    'thai_beef_salad', 'crab_asparagus_soup', 'nasi_putih', 'beef_black_papper', 'cah_baby_belacan', 'fried_fsh_orange_sauce', 'seafood_fried_noodle', 'kerupuk',
    'acar', 'sambal', 'kecap_asin', 'kecap_manis', 'bawang_goreng', 'buah_potong', 'fruit_pudding_fla', 'es_sarang_walet'
  ]
}];
// satuan
let menuPackageSatuanTypes = null;
// const menuPackageSatuanTypes = ['BUAH', 'ACAR', 'KERUPUK', 'NASI BRIYANI', 'NASI KEBULI', 'NASI MANDHI',
//   'NASI PUTIH', 'BALADO TELUR', 'BALADO KENTANG', 'AYAM PANGGANG', 'AYAM GORENG', 'SAMBAL GORENG ATI',
//   'URAB', 'CAPCAY', 'DAGING EMPAL', 'CUP SEALER', 'PLASTIK SATUAN', 'BOX MERAH', 'BOX BENTO', 'PAKET BOX SATUAN',
//   'BINGKAI', 'TUMBLER', 'BONEKA' 
// ];
const paketSatuanMenuIds = ['sate_bakso_sapi_bbq', 'balado_kentang_ati'];
let menuSatuanTypes = null;
// const menuSatuanTypes = [{
//   value: 'BUAH',
//   label: 'BUAH'
// }, {
//   value: 'ACAR',
//   label: 'ACAR'
// }, {
//   value: 'KERUPUK',
//   label: 'KERUPUK'
// }, {
//   value: 'NASI BRIYANI',
//   label: 'NASI BRIYANI'
// }, {
//   value: 'NASI KEBULI',
//   label: 'NASI KEBULI'
// }, {
//   value: 'NASI MANDHI',
//   label: 'NASI MANDHI'
// }, {
//   value: 'NASI PUTIH',
//   label: 'NASI PUTIH'
// }, {
//   value: 'BALADO TELUR',
//   label: 'BALADO TELUR'
// }, {
//   value: 'BALADO KENTANG',
//   label: 'BALADO KENTANG'
// }, {
//   value: 'AYAM PANGGANG',
//   label: 'AYAM PANGGANG'
// }, {
//   value: 'AYAM GORENG',
//   label: 'AYAM GORENG'
// }, {
//   value: 'SAMBAL GORENG ATI',
//   label: 'SAMBAL GORENG ATI'
// }, {
//   value: 'URAB',
//   label: 'URAB'
// }, {
//   value: 'CAPCAY',
//   label: 'CAPCAY'
// }, {
//   value: 'DAGING EMPAL',
//   label: 'DAGING EMPAL'
// }, {
//   value: 'CUP SEALER',
//   label: 'CUP SEALER'
// }, {
//   value: 'PLASTIK SATUAN',
//   label: 'PLASTIK SATUAN'
// }, {
//   value: 'BOX MERAH',
//   label: 'BOX MERAH'
// }, {
//   value: 'BOX BENTO',
//   label: 'BOX BENTO'
// }, {
//   value: 'PAKET BOX SATUAN',
//   label: 'PAKET BOX SATUAN'
// }, {
//   value: 'BINGKAI',
//   label: 'BINGKAI'
// }, {
//   value: 'TUMBLER',
//   label: 'TUMBLER'
// }, {
//   value: 'BONEKA',
//   label: 'BONEKA'
// }];
// makan gratis
const menuPackageMakanGratisTypes = ['MG KARYAWAN', 'MG LAIN-LAIN', 'NASI NAMPAN'];
const menuMakanGratisTypes = [{
  value: 'MG KARYAWAN',
  label: 'MG KARYAWAN'
}, {
  value: 'MG LAIN-LAIN',
  label: 'MG LAIN-LAIN'
}, {
  value: 'NASI NAMPAN',
  label: 'NASI NAMPAN'
}];
// paket tumpengan spesial
const paketTumpenganSpesialMenuIds = [
  'nasi_kuning', 'daging_panggang', 'mie_goreng', 'emping', 'tumis_ati_ampela',
  'telur_dadar_iris', 'orek_tempe', 'timun'
];
const menuPackageTumpenganSpesialTypes = ['HEMAT', 'STANDAR', 'MEDIUM', 'GOLD'];
const packageTumpenganSpesialMenuPackageType = [{
  type: 'PTS HEMAT',
  menus: ['domba_panggang'],
  quantity: 40,
  unit: 'BOX'
}, {
  type: 'PTS STANDAR',
  menus: ['domba_panggang'],
  quantity: 60,
  unit: 'BOX'
}, {
  type: 'PTS MEDIUM',
  menus: ['domba_panggang'],
  quantity: 75,
  unit: 'BOX'
}, {
  type: 'PTS GOLD',
  menus: ['domba_panggang'],
  quantity: 100,
  unit: 'BOX'
},
];
// paket tumpeng box
const paketTumpengBoxMenuIds = [
  'kerupuk'
];
const menuPackageTumpengBoxTypes = ['HEMAT', 'STANDAR', 'MEDIUM', 'GOLD'];
const packageTumpengBoxMenuPackageType = [{
  type: 'PA - HEMAT',
  quantity: 40,
  unit: 'BOX'
}, {
  type: 'PA - STANDAR',
  quantity: 60,
  unit: 'BOX'
}, {
  type: 'PA - MEDIUM',
  quantity: 80,
  unit: 'BOX'
}, {
  type: 'PA - GOLD',
  quantity: 100,
  unit: 'BOX'
},
];
// paket arabian style
const paketArabianStyleMenuIds = [
  'nasi_briyani', 'nasi_kebuli', 'domba_panggang', 'timun', 'sambal'
];
const menuPackageArabianStyleTypes = ['HEMAT', 'STANDAR', 'MEDIUM', 'GOLD'];
const packageArabianStyleMenuPackageType = [{
  type: 'PAS HEMAT',
  menus: ['domba_panggang'],
  quantity: 40,
  unit: 'BOX'
}, {
  type: 'PAS STANDAR',
  menus: ['domba_panggang'],
  quantity: 60,
  unit: 'BOX'
}, {
  type: 'PAS MEDIUM',
  menus: ['domba_panggang'],
  quantity: 75,
  unit: 'BOX'
}, {
  type: 'PAS GOLD',
  menus: ['domba_panggang'],
  quantity: 100,
  unit: 'BOX'
}];
// paket reguler bento
const paketRegulerBentoMenuIds = [
  'kerupuk', 'nasi_putih', 'nasi_mandhi'
];
const menuPackageRegulerBentoTypes = ['HEMAT', 'STANDAR', 'MEDIUM', 'GOLD'];
const packageRegulerBentoMenuPackageType = [{
  type: 'PR - HEMAT',
  quantity: 40,
  unit: 'BOX'
}, {
  type: 'PR - STANDAR',
  quantity: 60,
  unit: 'BOX'
}, {
  type: 'PR - MEDIUM',
  quantity: 80,
  unit: 'BOX'
}, {
  type: 'PR - GOLD',
  quantity: 100,
  unit: 'BOX'
},
];
// paket super ekonomis
const paketSuperEkonomisMenuIds = [
  'kambing_domba_guling', 'nasi_mandhi', 'asinan_nanas', 'kerupuk'
];
const menuPackageSuperEkonomisTypes = ['PAKET SUPER EKONOMIS'];
const packageSuperEkonomisMenuPackageType = {
  menus: ['domba_guling'],
  quantity: 40,
  unit: 'BOX'
};
// paket reguler
const paketRegulerMenuIds = [
  'kerupuk', 'sendok'
];
const menuPackageRegulerTypes = ['HEMAT', 'STANDAR', 'MEDIUM', 'GOLD'];
const packageRegulerMenuPackageType = [{
  type: 'PPR - HEMAT',
  quantity: 40,
  unit: 'BOX'
}, {
  type: 'PPR - STANDAR',
  quantity: 60,
  unit: 'BOX'
}, {
  type: 'PPR - MEDIUM',
  quantity: 80,
  unit: 'BOX'
}, {
  type: 'PPR - GOLD',
  quantity: 100,
  unit: 'BOX'
},
];
// paket promo arabian
const paketPromoArabianMenuIds = [
  'kerupuk', 'sendok'
];
const menuPackagePromoArabianTypes = ['HEMAT', 'STANDAR', 'MEDIUM', 'GOLD'];
const packagePromoArabianMenuPackageType = [{
  type: 'PPA - HEMAT',
  quantity: 40,
  unit: 'BOX'
}, {
  type: 'PPA - STANDAR',
  quantity: 60,
  unit: 'BOX'
}, {
  type: 'PPA - MEDIUM',
  quantity: 80,
  unit: 'BOX'
}, {
  type: 'PPA - GOLD',
  quantity: 100,
  unit: 'BOX'
},
];
// paket aqiqah ekonomis
const paketAqiqahEkonomisMenuIds = [
  'domba_panggang'
];
const menuPackageAqiqahEkonomisTypes = ['HEMAT', 'STANDAR', 'MEDIUM', 'GOLD'];
const packageAqiqahEkonomisMenuPackageType = [{
  type: 'PAE HEMAT',
  menus: ['domba_panggang'],
  quantity: 40,
  unit: 'BOX'
}, {
  type: 'PAE STANDAR',
  menus: ['domba_panggang'],
  quantity: 60,
  unit: 'BOX'
}, {
  type: 'PAE MEDIUM',
  menus: ['domba_panggang'],
  quantity: 80,
  unit: 'BOX'
}, {
  type: 'PAE GOLD',
  menus: ['domba_panggang'],
  quantity: 100,
  unit: 'BOX'
},
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

const setChildName = (frm, cdt, cdn) => {
  const data = frm.doc.aqiqah_detail || [];
  let name = '';
  for (let i = 0; i < data.length; i++) {
    name = data[0].aqiqah_name || '';
  }
  frm.set_value('aqiqah_name', name);
  frm.refresh_field('aqiqah_name');
};

const setSatuanItem = async (frm, cdt, cdn) => {
  const data = [];
  const dataMenu = [];
  await frappe.db.get_list('Item', {
    filters: [
      ['disabled', '=', 0],
      ['item_group', '=', 'Satuan'],
      ['stock_uom', '=', 'PCS']
    ],
    fields: ['item_name'],
    limit: 0
  }).then((item) => {
      if (item && item.length > 0) {
        for (let i = 0; i < item.length; i++) {
          let originalString = item[i].item_name;
          // Menghilangkan kata "SATUAN"
          let stringWithoutSatuan = originalString.replace("SATUAN", "").trim();
          // Menghilangkan " - PCS" setelah menghilangkan kata "SATUAN"
          let finalString = stringWithoutSatuan.replace(" - PCS", "").trim();
          if (finalString) {
            data.push({
              value: finalString,
              label: finalString
            });
            dataMenu.push(finalString);
            
          }
        }
      }
  });
// console.log(data);
// console.log(dataMenu);
  menuPackageSatuanTypes = _.cloneDeep(dataMenu);
  menuSatuanTypes = _.cloneDeep(data);
};



const setSourceInfo = async (frm, cdt, cdn) => {
  if (frm.doc['customer']) {
    await frappe.call({
      method: 'frappe.client.get_value',
      args: {
        doctype: 'Quotation',
        filters: {
          'customer_name': frm.doc['customer']
        },
        fieldname: ['party_name', 'quotation_to']
      },
      order_by: 'transaction_date desc',
      async: false,
      callback: async (r) => {
        const result = r && r.message || null;
        if (result && result.party_name) {
          let filters = {
            'lead_name': result.party_name
          };
          if (result.quotation_to === 'Lead') {
            filters = {
              'name': result.party_name
            };
          }
          await frappe.call({
            method: 'frappe.client.get_value',
            args: {
              doctype: 'Lead',
              filters: filters,
              fieldname: 'source'
            },
            async: false,
            callback: (r) => {
              const result = r && r.message || null;
              if (result && result.source) {
                frm.set_value('source_information', result.source);
                frm.refresh_field('source_information');
              }
            }
          });
        }
      }
    });
  }
};

const setTotalPayment = (frm, cdt, cdn) => {
  const totalDiscount = frm.doc['total_discount'] || 0;
  const totalShipping = frm.doc['total_shipping_price'] || 0;
  const totalEquitment = frm.doc["total_equipment_rental_services"] || 0;
  const totalPrice = frm.doc['total_price'] || 0;

  const totalPayment = (totalPrice + totalShipping + totalEquitment) - totalDiscount;
  cur_frm.set_value('total_payment', totalPayment);
  cur_frm.refresh_field('total_payment');

  cur_frm.set_value('discount_amount', totalDiscount);
  cur_frm.refresh_field('discount_amount');
  cur_frm.set_value('grand_total', totalPayment);
  cur_frm.refresh_field('grand_total');
  cur_frm.set_value('rounded_total', totalPayment);
  cur_frm.refresh_field('rounded_total');
};

const setPaymentTerms = () => {
  if (cur_frm.doc['payment_terms_template']) {
    if (cur_frm.doc.__islocal || cur_frm.doc.__unsaved) {
      const paymentTermsTemplate = cur_frm.doc['payment_terms_template'];
      cur_frm.set_value('payment_terms_template', '');
      setTimeout(() => {
        frappe.after_ajax(() => {
          cur_frm.set_value('payment_terms_template', paymentTermsTemplate);
          cur_frm.refresh_field('payment_terms_template');
        });
      }, 500);
    }
  }
};

const setJumlahBungkus = (jumlahBungkus, porsiPerBungkus, jumlahPorsi) => {
  const totalBungkusSate = jumlahBungkus * porsiPerBungkus;
  const totalSisa = jumlahPorsi - totalBungkusSate;
  return totalSisa;
};

const setOrderPorsiBungkus = (data, type) => {
  if (type === 'SATE') {
    data.sales_order_porsi_per_bungkus_sate_quantity = defaultSatePerItem;
    data.porsi_per_bungkus_sate_quantity = data.sales_order_porsi_per_bungkus_sate_quantity;
    data.bungkus_sate_quantity = data.porsi_sate_quantity;

    const jumlahBungkus = data.porsi_sate_quantity || 0;
    const porsiPerBungkus = data.porsi_per_bungkus_sate_quantity || 0;
    const jumlahPorsi = data.bungkus_sate_quantity || 0;
    const totalSisa = setJumlahBungkus(jumlahBungkus, porsiPerBungkus, jumlahPorsi);
    data.sisa_sate_quantity = totalSisa;
  } else {
    data.sales_order_porsi_per_bungkus_non_sate_quantity = defaultNonSatePerItem;
    data.porsi_per_bungkus_non_sate_quantity = data.sales_order_porsi_per_bungkus_non_sate_quantity;
    data.bungkus_non_sate_quantity = data.porsi_non_sate_quantity;

    const jumlahBungkus = data.porsi_non_sate_quantity || 0;
    const porsiPerBungkus = data.porsi_per_bungkus_non_sate_quantity || 0;
    const jumlahPorsi = data.bungkus_non_sate_quantity || 0;
    const totalSisa = setJumlahBungkus(jumlahBungkus, porsiPerBungkus, jumlahPorsi);
    data.sisa_non_sate_quantity = totalSisa;
  }
  return data;
};

const setTumblerBingkaiQuantity = () => {
  let lambTypeFreeTumblerQuantity = 0;
  let lambTypeFreeBingkaiQuantity = 0;
  let lambTypeFreeTumblerQuantityBox = 0;
  let lambTypeFreeBingkaiQuantityBox = 0;
  let lambTypeFreeTumblerQuantityOrder = 0;
  let lambTypeFreeBingkaiQuantityOrder = 0;
  let giftNote = '';
  let giftQuantity = 0;

  const orderDetailData = cur_frm.doc['order_detail'] || [];
  if (orderDetailData && orderDetailData.length > 0) {
    for (let i = 0; i < orderDetailData.length; i++) {
      const orderDetail = orderDetailData[i];
      if (orderDetail.type && orderDetail.order_name && orderDetail.quantity &&
        orderDetail.is_package && orderDetail.unit === 'PAKET') {
        if (orderDetail.type === 'PAKET AQIQAH' || orderDetail.type === 'NON BOX' ||
          orderDetail.type === 'PAKET SUPER HEMAT' || orderDetail.type === 'PAKET TUMPENG BOX' ||
          orderDetail.type === 'PAKET ARABIAN STYLE' || orderDetail.type === 'PAKET REGULER BENTO' ||
          orderDetail.type === 'PAKET REGULER' || orderDetail.type === 'PAKET ARABIAN' ||
          orderDetail.type === 'PAKET PROMO REGULER' || orderDetail.type === 'PAKET PROMO ARABIAN' ||
          orderDetail.type === 'PAKET AQIQAH EKONOMIS' || orderDetail.type === 'PAKET SUPER EKONOMIS') {
          if (orderDetail.type === 'PAKET AQIQAH' || orderDetail.type === 'PAKET PROMO REGULER' ||
            orderDetail.type === 'PAKET REGULER BENTO' || orderDetail.type === 'PAKET REGULER' ||
            orderDetail.type === 'PAKET AQIQAH EKONOMIS' || orderDetail.type === 'PAKET PROMO ARABIAN') {
            if (cur_frm.doc['is_free_tumbler']) {
              lambTypeFreeTumblerQuantity += parseInt(orderDetail.quantity, 10);
            }
          }
          if (cur_frm.doc['is_free_bingkai']) {
            lambTypeFreeBingkaiQuantity += parseInt(orderDetail.quantity, 10);
          }
        }

        // box
        if (orderDetail.type === 'PAKET AQIQAH' || orderDetail.type === 'PAKET TUMPENG BOX' ||
          orderDetail.type === 'PAKET REGULER BENTO' || orderDetail.type === 'PAKET REGULER' ||
          orderDetail.type === 'PAKET PROMO ARABIAN' || orderDetail.type === 'PAKET AQIQAH EKONOMIS' ||
          orderDetail.type === 'PAKET PROMO REGULER' || orderDetail.type === 'PAKET ARABIAN') {
          if (cur_frm.doc['is_free_tumbler']) {
            lambTypeFreeTumblerQuantityBox += parseInt(orderDetail.quantity, 10);
          }
          if (cur_frm.doc['is_free_bingkai']) {
            lambTypeFreeBingkaiQuantityBox += parseInt(orderDetail.quantity, 10);
          }
        }

        // order
        if (orderDetail.type === 'NON BOX' || orderDetail.type === 'PAKET SUPER HEMAT' ||
          orderDetail.type === 'PAKET ARABIAN STYLE' || orderDetail.type === 'PAKET SUPER EKONOMIS') {
          if (cur_frm.doc['is_free_bingkai']) {
            lambTypeFreeBingkaiQuantityOrder += parseInt(orderDetail.quantity, 10);
          }
        }
      }
    }
  }

  if (cur_frm.doc["is_gift_note"]) {
    giftNote = cur_frm.doc["gift_note"];
    giftQuantity = cur_frm.doc["gift_quantity"];
  }

  return {
    free_tumbler_quantity: lambTypeFreeTumblerQuantity,
    free_bingkai_quantity: lambTypeFreeBingkaiQuantity,
    free_tumbler_quantity_box: lambTypeFreeTumblerQuantityBox,
    free_bingkai_quantity_box: lambTypeFreeBingkaiQuantityBox,
    free_tumbler_quantity_order: lambTypeFreeTumblerQuantityOrder,
    free_bingkai_quantity_order: lambTypeFreeBingkaiQuantityOrder,
    gift_note: giftNote,
    gift_quantity: giftQuantity,
  };
};

const fillUnusedDataDelivery = (docDataDelivery) => {
  for (let i = 1; i <= 24; i++) {
    const hourString = ('0' + i).slice(-2);
    if (!Array.isArray(docDataDelivery['time_' + hourString + '_00'])) {
      docDataDelivery['time_' + hourString + '_00'] = [];
    }
    if (i !== 24) {
      if (!Array.isArray(docDataDelivery['time_' + hourString + '_30'])) {
        docDataDelivery['time_' + hourString + '_30'] = [];
      }
    }
  }
  return docDataDelivery;
};

const placeAutomationCalculation = (resultSkphDelivery, timeHourString, timeDeliveryData) => {
  let isChanged = false;
  for (let j = 0; j < timeDeliveryData.length; j++) {
    const localTimeDeliveryData = _.filter(timeDeliveryData, (o) => {
      return o.region_district && timeDeliveryData[j].region_district &&
        o.region_district === timeDeliveryData[j].region_district;
    });
    if (localTimeDeliveryData.length === 1) {
      let timeHourNextString = '';
      if (timeHourString.slice(-2) === '00') {
        timeHourNextString = 'time_' + timeHourString.split('_')[1] + '_30';
      } else {
        const nextHour = parseInt(timeHourString.split('_')[1], 10) + 1;
        if (nextHour <= 17) {
          timeHourNextString = 'time_' + ('0' + nextHour).slice(-2) + '_00';
        }
      }
      if (timeHourNextString) {
        const timeDeliveryNextData = resultSkphDelivery[timeHourNextString] || [];
        const nextTimeDeliveryData = _.filter(timeDeliveryNextData, (o) => {
          return o.region_district && timeDeliveryData[j].region_district &&
            o.region_district === timeDeliveryData[j].region_district;
        });
        if (nextTimeDeliveryData.length > 0) {
          nextTimeDeliveryData[0].delivery_schedule_group = localTimeDeliveryData[0].delivery_schedule_group;
          nextTimeDeliveryData[0].actual_time = nextTimeDeliveryData[0].delivery_schedule_group + ':00';
          nextTimeDeliveryData[0].parentfield = localTimeDeliveryData[0].parentfield;
          resultSkphDelivery[timeHourString].push(nextTimeDeliveryData[0]);
          _.remove(resultSkphDelivery[timeHourNextString], (o) => {
            return o.name === nextTimeDeliveryData[0].name;
          });
          isChanged = true;
        }
      }
    }
  }
  return {
    resultSkphDelivery: resultSkphDelivery,
    isChanged: isChanged
  };
};

const countMinuteBeforeDelivery = (total) => {
  let minuteBeforeDelivery = 0;
  if (total <= 70) {
    minuteBeforeDelivery = 30;
  } else if (total <= 499) {
    minuteBeforeDelivery = 60;
  } else if (total <= 1000) {
    minuteBeforeDelivery = 90;
  } else {
    minuteBeforeDelivery = 120;
  }
  return minuteBeforeDelivery;
};

const updateGelarBoxTimeStartFinish = async (resultSkphDeliveryBox) => {
  // update all gelar_box_time_start && gelar_box_time_finish
  await frappe.db.get_list('SKPH Delivery Schedule', {
    filters: {
      'parent': resultSkphDeliveryBox.name
    },
    fields: ['skph_analysis', 'skph_box', 'delivery_schedule_group'],
    limit: 0
  }).then(async (results) => {
    if (results && results.length > 0) {
      for (let i = 0; i < results.length; i++) {
        const result = results[i];

        let timeStartGelarBox = '';
        let timeFinishGelarBox = '';
        if (result.delivery_schedule_group) {
          const times = result.delivery_schedule_group.split(':');
          if (times.length === 2) {
            timeFinishGelarBox = times[0] + ':' + times[1] + ':00';

            const startDate = moment(timeFinishGelarBox, 'HH:mm:ss').subtract(gelarMinuteBeforeDelivery, 'minutes');
            timeStartGelarBox = startDate.format('HH:mm:ss');
          }
        }

        if (timeStartGelarBox && timeFinishGelarBox) {
          await frappe.call({
            method: 'frappe.client.set_value',
            args: {
              doctype: 'SKPH Analysis',
              name: result.skph_analysis,
              fieldname: {
                gelar_box_time_start: timeStartGelarBox,
                gelar_box_time_finish: timeFinishGelarBox
              }
            },
            async: false,
            update_modified: false
          });

          await frappe.call({
            method: 'frappe.client.set_value',
            args: {
              doctype: 'SKPH Box',
              name: result.skph_box,
              fieldname: {
                gelar_box_time_start: timeStartGelarBox,
                gelar_box_time_finish: timeFinishGelarBox
              }
            },
            async: false,
            update_modified: false
          });
        }
      }
    }
  });
};

const updateGelarBungkusTimeStartFinish = async (resultSkphDeliveryOrder) => {
  // update all gelar_bungkus_time_start && gelar_bungkus_time_finish
  await frappe.db.get_list('SKPH Delivery Schedule', {
    filters: {
      'parent': resultSkphDeliveryOrder.name
    },
    fields: ['skph_analysis', 'skph_order', 'delivery_schedule_group'],
    limit: 0
  }).then(async (results) => {
    if (results && results.length > 0) {
      for (let i = 0; i < results.length; i++) {
        const result = results[i];

        let timeStartGelarBungkus = '';
        let timeFinishGelarBungkus = '';
        if (result.delivery_schedule_group) {
          const times = result.delivery_schedule_group.split(':');
          if (times.length === 2) {
            timeFinishGelarBungkus = times[0] + ':' + times[1] + ':00';

            const startDate = moment(timeFinishGelarBungkus, 'HH:mm:ss').subtract(gelarMinuteBeforeDelivery, 'minutes');
            timeStartGelarBungkus = startDate.format('HH:mm:ss');
          }
        }

        if (timeStartGelarBungkus && timeFinishGelarBungkus) {
          await frappe.call({
            method: 'frappe.client.set_value',
            args: {
              doctype: 'SKPH Analysis',
              name: result.skph_analysis,
              fieldname: {
                gelar_bungkus_time_start: timeStartGelarBungkus,
                gelar_bungkus_time_finish: timeFinishGelarBungkus
              }
            },
            async: false,
            update_modified: false
          });

          await frappe.call({
            method: 'frappe.client.set_value',
            args: {
              doctype: 'SKPH Order',
              name: result.skph_order,
              fieldname: {
                gelar_bungkus_time_start: timeStartGelarBungkus,
                gelar_bungkus_time_finish: timeFinishGelarBungkus
              }
            },
            async: false,
            update_modified: false
          });
        }
      }
    }
  });
};

const setSkphAnalysisData = async () => {
  frappe.show_progress('Please wait', 10, 100, 'Fetching items..');

  const user = frappe.session.user;
  const today = frappe.datetime.now_datetime();

  let docData = {
    status_data: 'OK',
    customer: cur_frm.doc['customer'],
    customer_name: cur_frm.doc['customer_name'],
    event_date: null,
    is_manual_leave_date_time: 0,
    sales_order_arrived_date_time: cur_frm.doc['arrived_date_time'] && cur_frm.doc['arrived_date_time'].toString() || '',
    leave_date_time: cur_frm.doc['arrived_date_time'] && cur_frm.doc['arrived_date_time'].toString() || '',
    arrive_date_time: cur_frm.doc['event_date_time'],
    sub_district: null,
    sub_district_name: '',
    child_name: 0,
    lamb_type: '',
    lamb_quantity: 0,
    is_free_tumbler: cur_frm.doc['is_free_tumbler'] || 0,
    free_tumbler_quantity: cur_frm.doc['free_tumbler_quantity'] || 0,
    is_free_bingkai: cur_frm.doc['is_free_bingkai'] || 0,
    free_bingkai_quantity: cur_frm.doc['free_bingkai_quantity'] || 0,
    order_delivery: cur_frm.doc['order_delivery'] || 'DIKIRIM',
    box_type: '',
    dissert: '',
    box_quantity: 0,
    additional_quantity: 0,
    is_manual_menu_sate: 0,
    menu_sate: '',
    porsi_sate_quantity: 0,
    sales_order_porsi_per_bungkus_sate_quantity: 0,
    porsi_per_bungkus_sate_quantity: 0,
    bungkus_sate_quantity: 0,
    sisa_sate_quantity: 0,
    porsi_sate_description: '',
    is_manual_menu_non_sate: 0,
    menu_non_sate: '',
    porsi_non_sate_quantity: 0,
    sales_order_porsi_per_bungkus_non_sate_quantity: 0,
    porsi_per_bungkus_non_sate_quantity: 0,
    bungkus_non_sate_quantity: 0,
    sisa_non_sate_quantity: 0,
    porsi_non_sate_description: '',
    notes: cur_frm.doc['notes'] || '',
    product_code: '',
    rice_type: '',
    updated_by: user,
    updated_at: today
  };

  const isAutoArrivedDateTime = cur_frm.doc['is_auto_arrived_date_time'] || 0;
  if (isAutoArrivedDateTime) {
    docData.is_manual_leave_date_time = 0;
  } else {
    docData.is_manual_leave_date_time = 1;
  }

  const eventDateTime = moment(cur_frm.doc['event_date_time']);
  docData['event_date'] = eventDateTime.format('YYYY-MM-DD');

  const aqiqahDetailData = cur_frm.doc['aqiqah_detail'] || [];
  const orderDetailData = cur_frm.doc['order_detail'] || [];
  const aqiqahPackageMenuData = cur_frm.doc['aqiqah_package_menu'] || [];
  const nonBoxMenuData = cur_frm.doc['non_box_menu'] || [];

  // set location
  frappe.show_progress('Please wait', 15, 100, 'Setup Address..');
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'Address',
      filters: {
        'name': cur_frm.doc['shipping_address_name']
      },
      fieldname: ['region_sub_district', 'region_sub_district_name']
    },
    async: false,
    callback: async (r) => {
      const result = r && r.message || null;
      if (result && result.region_sub_district_name) {
        docData.sub_district = result.region_sub_district;
        docData.sub_district_name = result.region_sub_district_name;

        // set leave date time
        frappe.show_progress('Please wait', 20, 100, 'Setup Shipping Measurement..');
        await frappe.call({
          method: 'frappe.client.get_value',
          args: {
            doctype: 'Shipping Measurement',
            filters: {
              'region_sub_district': docData.sub_district
            },
            fieldname: ['name', 'by_car', 'region_abbreviation']
          },
          async: false,
          callback: async (r) => {
            const result = r && r.message || null;
            if (result && result.name) {
              const durationInMinutes = result.by_car || 0;
              const arriveDateTime = moment(cur_frm.doc['event_date_time']).subtract(durationInMinutes, 'minutes');
              const leaveDateTimeString = arriveDateTime.format('YYYY-MM-DD HH:mm:ss');
              if (isAutoArrivedDateTime) {
                cur_frm.doc['arrived_date_time'] = leaveDateTimeString;
                docData.leave_date_time = leaveDateTimeString;

                // update sales order
                await frappe.call({
                  method: 'frappe.client.set_value',
                  args: {
                    doctype: 'Sales Order',
                    name: cur_frm.doc['name'],
                    fieldname: {
                      arrived_date_time: leaveDateTimeString
                    }
                  },
                  async: false
                });
              }
              docData.wo_region_abbreviation = result.region_abbreviation;
            }
          }
        });
      }
    }
  });

  // set child_name
  frappe.show_progress('Please wait', 25, 100, 'Setup Children Name..');
  let childSequence = 0;
  let childName = '';
  if (aqiqahDetailData && aqiqahDetailData.length > 0) {
    for (let i = 0; i < aqiqahDetailData.length; i++) {
      const aqiqahDetail = aqiqahDetailData[i];
      if (aqiqahDetail.aqiqah_name && aqiqahDetail.gender) {
        childSequence++;
        childName += childSequence + '. ' + aqiqahDetail.aqiqah_name + ' (' + aqiqahDetail.gender.substring(0, 1) + ')' + '\r\n';
      }
    }
  }
  if (childName) {
    childName = childName.slice(0, -2);
  } else {
    childName = noData;
  }
  docData.child_name = childName;

  let docDataBox = _.cloneDeep(docData);
  let docDataOrder = _.cloneDeep(docData);

  // set lamb_type
  frappe.show_progress('Please wait', 30, 100, 'Setup Lamb..');
  let lambTypeSequence = 0;
  let lambTypeName = '';
  const lambTypeNames = [];
  let lambTypeTotalQuantity = 0;
  const lambTypeOrderNames = [];

  let lambTypeSequenceBox = 0;
  let lambTypeNameBox = '';
  const lambTypeNamesBox = [];
  let lambTypeTotalQuantityBox = 0;
  const lambTypeOrderNamesBox = [];

  let lambTypeSequenceOrder = 0;
  let lambTypeNameOrder = '';
  const lambTypeNamesOrder = [];
  let lambTypeTotalQuantityOrder = 0;
  const lambTypeOrderNamesOrder = [];

  let uniqName = null;

  // set product code & rice type
  const allProductCodes = [];
  const allRiceTypes = [];``
  let productCodeName = '';
  errorMessageProductCodes = [];

  if (orderDetailData && orderDetailData.length > 0) {
    // get all product details
    let productDetails = [];
    await frappe.db.get_list('Product Detail', {
      fields: ['*'],
      limit: 0
    }).then((results) => {
      if (results && results.length > 0) {
        productDetails = _.cloneDeep(results);
      }
    });

    for (let i = 0; i < orderDetailData.length; i++) {
      const orderDetail = orderDetailData[i];
      if (orderDetail.type && orderDetail.order_name && orderDetail.quantity &&
        orderDetail.is_package && (orderDetail.unit === 'PAKET' || orderDetail.unit === 'EKOR')) {
        // analysis
        lambTypeSequence++;
        const orderTypeName = orderDetail.type + ', ' + orderDetail.order_name;
        uniqName = _.find(lambTypeNames, (o) => {
          return orderTypeName === o;
        });
        if (!uniqName) {
          lambTypeNames.push(orderTypeName);
          if (orderDetail.type === 'PAKET SUPER EKONOMIS') {
            lambTypeName += lambTypeSequence + '. ' + orderDetail.order_name + '\r\n';
          } else {
            lambTypeName += lambTypeSequence + '. ' + orderTypeName + '\r\n';
          }
          lambTypeOrderNames.push(orderDetail.order_name);
        }
        lambTypeTotalQuantity += parseInt(orderDetail.quantity, 10);

        // box
        if (orderDetail.type === 'PAKET AQIQAH' || orderDetail.type === 'PAKET SUPER HEMAT'
          || orderDetail.type === 'PAKET TUMPENGAN SPESIAL' || orderDetail.type === 'PAKET TUMPENG BOX'
          || orderDetail.type === 'PAKET REGULER' || orderDetail.type === 'PAKET REGULER BENTO'
          || orderDetail.type === 'SATUAN' || orderDetail.type === 'PAKET SUPER EKONOMIS'
          || orderDetail.type === 'PAKET PROMO REGULER' || orderDetail.type === 'PAKET PROMO ARABIAN' 
          || orderDetail.type === 'PAKET AQIQAH EKONOMIS' || orderDetail.type === 'PAKET ARABIAN STYLE'
          || orderDetail.type === 'PAKET ARABIAN') {
          lambTypeSequenceBox++;
          uniqName = _.find(lambTypeNamesBox, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            lambTypeNamesBox.push(orderTypeName);
            if (orderDetail.type === 'PAKET SUPER EKONOMIS') {
              lambTypeNameBox += lambTypeSequenceBox + '. ' + orderDetail.order_name + '\r\n';
            } else {
              lambTypeNameBox += lambTypeSequenceBox + '. ' + orderTypeName + '\r\n';
            }
            lambTypeOrderNamesBox.push(orderDetail.order_name);
          }
          lambTypeTotalQuantityBox += parseInt(orderDetail.quantity, 10);
        }

        // order
        if (orderDetail.type === 'AQIQAH MENTAH' || orderDetail.type === 'NON BOX' ||
          orderDetail.type === 'SATUAN' || orderDetail.type === 'MAKAN GRATIS') {
          lambTypeSequenceOrder++;
          uniqName = _.find(lambTypeNamesOrder, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            lambTypeNamesOrder.push(orderTypeName);
            lambTypeNameOrder += lambTypeSequenceOrder + '. ' + orderTypeName + '\r\n';
            lambTypeOrderNamesOrder.push(orderDetail.order_name);
          }
          lambTypeTotalQuantityOrder += parseInt(orderDetail.quantity, 10);
        }
      }

      // set product code & rice type
      if (orderDetail.type === 'PAKET AQIQAH' || orderDetail.type === 'PAKET TUMPENG BOX' ||
        orderDetail.type === 'PAKET REGULER BENTO' || orderDetail.type === 'PAKET REGULER' ||
        orderDetail.type === 'PAKET TUMPENGAN SPESIAL' || orderDetail.order_name === 'PAKET BOX SATUAN' ||
        orderDetail.type === 'PAKET PROMO REGULER' || orderDetail.type === 'PAKET PROMO ARABIAN' || 
        orderDetail.type === 'PAKET AQIQAH EKONOMIS' || orderDetail.type === 'PAKET ARABIAN STYLE' || orderDetail.type === 'PAKET PREMIUM' ||orderDetail.type === 'PAKET HEMAT SPESIAL' ||
        orderDetail.type === 'PAKET ARABIAN') {
        if (aqiqahPackageMenuData && aqiqahPackageMenuData.length > 0) {
          const productCodeChilds = [];
          for (let j = 0; j < aqiqahPackageMenuData.length; j++) {
            const aqiqahPackageMenu = aqiqahPackageMenuData[j];
            if (orderDetail.parent === aqiqahPackageMenu.parent) {
              uniqName = _.find(allRiceTypes, (o) => {
                return o.name === aqiqahPackageMenu.rice_type &&
                  o.type === orderDetail.type;
              });
              if (!uniqName) {
                allRiceTypes.push({
                  name: aqiqahPackageMenu.rice_type,
                  type: orderDetail.type
                });
              }
              const addOn = aqiqahPackageMenu.add_on || '';
              const productDetail = _.find(productDetails, (o) => {
                return o.product_type === orderDetail.type &&
                  o.product_name === orderDetail.order_name &&
                  o.gender_type === orderDetail.gender_type &&
                  o.product_add === addOn;
              });
              productCodeName = '';
              if (productDetail) {
                uniqName = _.find(allProductCodes, (o) => {
                  return o.name === productDetail.product_code &&
                    o.type === orderDetail.type;
                });
                if (!uniqName) {
                  productCodeName = productDetail.product_code;
                }
              } else {
                if (orderDetail.order_name === 'PAKET BOX SATUAN') {
                  productCodeName = orderDetail.order_name + ' ' + orderDetail.gender_type
                  errorMessageProductCodes.push('Paket ' + productCodeName + ' belum terdaftar di Form Product Detail');
                } else {
                  productCodeName = orderDetail.type + ' ' + orderDetail.order_name + ' ' +
                  orderDetail.gender_type + (addOn ? (' ' + addOn) : '');
                }
              }
              allProductCodes.push({
                name: productCodeName,
                type: orderDetail.type
              });
            }
          }
        } else {
          if (orderDetail.type === 'PAKET ARABIAN STYLE') {
            for (let i = 0; i < paketArabianStyleMenuIds.length; i++) {
              if (!['domba_panggang', 'timun', 'sambal'].includes(paketArabianStyleMenuIds[i])) {
                if (orderDetail['is_pas_' + paketArabianStyleMenuIds[i]]) {
                  const data = paketArabianStyleMenuIds[i].split('_');
                  const rice = data[1].trim().toUpperCase();
                  uniqName = _.find(allRiceTypes, (o) => {
                    return o.name === rice &&
                      o.type === orderDetail.type;
                  });
                  if (!uniqName) {
                    allRiceTypes.push({
                      name: rice,
                      type: orderDetail.type
                    });
                  }
                }
              }
            }
          } else if (orderDetail.type === 'PAKET TUMPENGAN SPESIAL') {
            for (let i = 0; i < paketTumpenganSpesialMenuIds.length; i++) {
              if (['nasi_kuning',].includes(paketTumpenganSpesialMenuIds[i])) {
                if (orderDetail['is_pts_' + paketTumpenganSpesialMenuIds[i]]) {
                  const data = paketTumpenganSpesialMenuIds[i].split('_');
                  const rice = data[1].trim().toUpperCase();
                  uniqName = _.find(allRiceTypes, (o) => {
                    return o.name === rice &&
                      o.type === orderDetail.type;
                  });
                  if (!uniqName) {
                    allRiceTypes.push({
                      name: rice,
                      type: orderDetail.type
                    });
                  }
                }
              }
            }
          }
        }
      } else if (orderDetail.type === 'NON BOX') {
        const productDetail = _.find(productDetails, (o) => {
          return o.product_type === orderDetail.type &&
            o.product_name === orderDetail.order_name &&
            o.gender_type === orderDetail.gender_type &&
            o.menu_type === orderDetail.menu_type;
        });
        productCodeName = '';
        if (productDetail) {
          uniqName = _.find(allProductCodes, (o) => {
            return o.name === productDetail.product_code &&
              o.type === orderDetail.type;
          });
          if (!uniqName) {
            productCodeName = productDetail.product_code;
          }
        } else {
          productCodeName = orderDetail.type + ' ' + orderDetail.order_name + ' ' +
            orderDetail.gender_type + ' ' + orderDetail.menu_type;
          errorMessageProductCodes.push('Paket ' + productCodeName + ' belum terdaftar di Form Product Detail');
        }
        allProductCodes.push({
          name: productCodeName,
          type: orderDetail.type
        });
      } else if (orderDetail.type === 'AQIQAH MENTAH') {
        const productDetail = _.find(productDetails, (o) => {
          return o.product_type === orderDetail.type &&
            o.product_name === orderDetail.order_name &&
            o.gender_type === orderDetail.gender_type;
        });
        productCodeName = '';
        if (productDetail) {
          uniqName = _.find(allProductCodes, (o) => {
            return o.name === productDetail.product_code &&
              o.type === orderDetail.type;
          });
          if (!uniqName) {
            productCodeName = productDetail.product_code;
          }
        } else {
          productCodeName = orderDetail.type + ' ' + orderDetail.order_name + ' ' +
            orderDetail.gender_type;
          errorMessageProductCodes.push('Paket ' + productCodeName + ' belum terdaftar di Form Product Detail');
        }
        allProductCodes.push({
          name: productCodeName,
          type: orderDetail.type
        });
      } else if (orderDetail.type === 'PAKET SUPER EKONOMIS') {
        const productDetail = _.find(productDetails, (o) => {
          return o.product_type === orderDetail.type &&
            o.product_name === orderDetail.order_name &&
            o.gender_type === orderDetail.gender_type
        });
        productCodeName = '';
        if (productDetail) {
          uniqName = _.find(allProductCodes, (o) => {
            return o.name === productDetail.product_code &&
              o.type === orderDetail.type;
          });
          if (!uniqName) {
            productCodeName = productDetail.product_code;
          }
        } else {
          productCodeName = orderDetail.type + ' ' + orderDetail.gender_type;
          if (orderDetail.order_name !== 'PAKET BOX SATUAN') {
            errorMessageProductCodes.push('Paket ' + productCodeName + ' belum terdaftar di Form Product Detail');
          }
        }
        allProductCodes.push({
          name: productCodeName,
          type: orderDetail.type
        });

        for (let i = 0; i < paketSuperEkonomisMenuIds.length; i++) {
          if (!['kambing_domba_guling', 'asinan_nanas', 'kerupuk'].includes(paketSuperEkonomisMenuIds[i])) {
            if (orderDetail['is_pse_' + paketSuperEkonomisMenuIds[i]]) {
              const data = paketSuperEkonomisMenuIds[i].split('_');
              const rice = data[1].trim().toUpperCase();
              uniqName = _.find(allRiceTypes, (o) => {
                return o.name === rice &&
                  o.type === orderDetail.type;
              });
              if (!uniqName) {
                allRiceTypes.push({
                  name: rice,
                  type: orderDetail.type
                });
              }
            }
          }
        }
      }
    }
  }
  // analysis
  const tumblerBingkaiQuantity = setTumblerBingkaiQuantity();

  if (lambTypeName) {
    lambTypeName = lambTypeName.slice(0, -2);
  } else {
    lambTypeName = noData;
  }
  docData.lamb_type = lambTypeName;
  docData.lamb_quantity = lambTypeTotalQuantity;
  docData.free_tumbler_quantity = cur_frm.doc['free_tumbler_quantity'];
  docData.free_bingkai_quantity = cur_frm.doc['free_bingkai_quantity'];
  docData.gift_note = tumblerBingkaiQuantity["gift_note"];
  docData.gift_quantity = tumblerBingkaiQuantity["gift_quantity"];

  // analysis set sequence product code & rice type
  let resultAllProductCodes = _.remove(allProductCodes, function (n) {
    return n.name !== '';
  });
  let productCodes = _.uniq(_.map(resultAllProductCodes, 'name'));
  let productSequence = 0;
  let productCode = '';
  for (let i = 0; i < productCodes.length; i++) {
    productSequence++;
    productCode += productSequence + '. ' + productCodes[i] + '\r\n';
  }
  let riceTypes = _.uniq(_.map(allRiceTypes, 'name'));
  let riceSequence = 0;
  let riceType = '';
  for (let i = 0; i < riceTypes.length; i++) {
    riceSequence++;
    riceType += riceSequence + '. NASI ' + riceTypes[i] + '\r\n';
  }
  docData.product_code = productCode || '-';
  docData.rice_type = riceType || '-';

  // box
  if (lambTypeNameBox) {
    lambTypeNameBox = lambTypeNameBox.slice(0, -2);
  } else {
    lambTypeNameBox = noData;
  }
  docDataBox.lamb_type = lambTypeNameBox;
  docDataBox.lamb_quantity = lambTypeTotalQuantityBox;
  docDataBox.free_tumbler_quantity = tumblerBingkaiQuantity['free_tumbler_quantity_box'];
  docDataBox.free_bingkai_quantity = tumblerBingkaiQuantity['free_bingkai_quantity_box'];

  // box set sequence product code & rice type
  productCodes = _.uniq(_.map(_.filter(allProductCodes, (o) => {
    return ['PAKET AQIQAH', 'PAKET TUMPENG BOX', 'PAKET ARABIAN', 'PAKET REGULER BENTO', 'PAKET REGULER', 'PAKET PROMO REGULER', 'PAKET PROMO ARABIAN', 'PAKET SUPER EKONOMIS', 'PAKET AQIQAH EKONOMIS', 'SATUAN', 'PAKET HEMAT SPESIAL', 'PAKET PREMIUM'].includes(o.type);
  }), 'name'));
  productSequence = 0;
  productCode = '';
  for (let i = 0; i < productCodes.length; i++) {
    productSequence++;
    productCode += productSequence + '. ' + productCodes[i] + '\r\n';
  }
  riceTypes = _.uniq(_.map(_.filter(allRiceTypes, (o) => {
    return ['PAKET AQIQAH', 'PAKET TUMPENG BOX', 'PAKET ARABIAN', 'PAKET REGULER BENTO', 'PAKET REGULER', 'PAKET PROMO REGULER', 'PAKET PROMO ARABIAN', 'PAKET AQIQAH EKONOMIS', 'PAKET ARABIAN STYLE', 'PAKET TUMPENGAN SPESIAL', 'SATUAN', 'PAKET SUPER EKONOMIS', 'PAKET HEMAT SPESIAL', 'PAKET PREMIUM'].includes(o.type);
  }), 'name'));
  riceSequence = 0;
  riceType = '';
  for (let i = 0; i < riceTypes.length; i++) {
    riceSequence++;
    riceType += riceSequence + '. NASI ' + riceTypes[i] + '\r\n';
  }
  docDataBox.product_code = productCode || '-';
  docDataBox.rice_type = riceType || '-';

  // order
  if (lambTypeNameOrder) {
    lambTypeNameOrder = lambTypeNameOrder.slice(0, -2);
  } else {
    lambTypeNameOrder = noData;
  }
  docDataOrder.lamb_type = lambTypeNameOrder;
  docDataOrder.lamb_quantity = lambTypeTotalQuantityOrder;
  docDataOrder.free_tumbler_quantity = tumblerBingkaiQuantity['free_tumbler_quantity_order'];
  docDataOrder.free_bingkai_quantity = tumblerBingkaiQuantity['free_bingkai_quantity_order'];

  // order set sequence product code
  productCodes = _.uniq(_.map(_.filter(allProductCodes, (o) => {
    return ['NON BOX', 'AQIQAH MENTAH'].includes(o.type);
  }), 'name'));
  productSequence = 0;
  productCode = '';
  for (let i = 0; i < productCodes.length; i++) {
    productSequence++;
    productCode += productSequence + '. ' + productCodes[i] + '\r\n';
  }
  docDataOrder.product_code = productCode || '-';
  delete docDataOrder.rice_type;

  // set box_type
  frappe.show_progress('Please wait', 35, 100, 'Setup Box..');
  const aqiqahPackageTypeNames = [];
  let aqiqahPackageTypeTotalQuantity = 0;
  let additionalQuantity = 0;
  let nonBoxQuantity = 0;

  let menuSateSequence = 0;
  let menuSateName = '';
  const menuSateNameQuantities = [];

  let menuNonSateSequence = 0;
  let menuNonSateName = '';
  const menuNonSateNameQuantities = [];

  const aqiqahPackageTypeNamesBox = [];
  let aqiqahPackageTypeTotalQuantityBox = 0;
  let additionalQuantityBox = 0;

  let menuSateSequenceBox = 0;
  let menuSateNameBox = '';
  const menuSateNameQuantitiesBox = [];

  let menuNonSateSequenceBox = 0;
  let menuNonSateNameBox = '';
  const menuNonSateNameQuantitiesBox = [];

  const aqiqahPackageTypeNamesOrder = [];
  let aqiqahPackageTypeTotalQuantityOrder = 0;

  let menuSateSequenceOrder = 0;
  let menuSateNameOrder = '';
  const menuSateNameQuantitiesOrder = [];

  let menuNonSateSequenceOrder = 0;
  let menuNonSateNameOrder = '';
  const menuNonSateNameQuantitiesOrder = [];

  let orderTypeName = '';  
  let dissertName = '';

  // analysis & box
  if (aqiqahPackageMenuData && aqiqahPackageMenuData.length > 0) {
    for (let i = 0; i < aqiqahPackageMenuData.length; i++) {
      const aqiqahPackageMenu = aqiqahPackageMenuData[i];
      if (aqiqahPackageMenu.type && aqiqahPackageMenu.order_type && aqiqahPackageMenu.quantity) {
        // analysis combine box & order
          orderTypeName = aqiqahPackageMenu.order_type;
          uniqName = _.find(aqiqahPackageTypeNames, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNames.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantity += parseInt(aqiqahPackageMenu.quantity, 10);

        // analysis menu_sate
        let orderTypeMenuSateName = '';
        if (aqiqahPackageMenu.meat_cook_type_1 && aqiqahPackageMenu.meat_cook_type_1 === 'SATE') {
          orderTypeMenuSateName = aqiqahPackageMenu.meat_cook_type_1;
        }
        if (!orderTypeMenuSateName &&
          aqiqahPackageMenu.meat_cook_type_2 && aqiqahPackageMenu.meat_cook_type_2 === 'SATE') {
          orderTypeMenuSateName = aqiqahPackageMenu.meat_cook_type_2;
        }
        if (orderTypeMenuSateName) {
          uniqName = _.find(menuSateNameQuantities, (o) => {
            return orderTypeMenuSateName === o.name;
          });
          if (!uniqName) {
            menuSateSequence++;
            menuSateNameQuantities.push({
              sequence: menuSateSequence,
              name: orderTypeMenuSateName,
              quantity: parseInt(aqiqahPackageMenu.quantity, 10)
            });
          } else {
            for (let k = 0; k < menuSateNameQuantities.length; k++) {
              if (menuSateNameQuantities[k].name === orderTypeMenuSateName) {
                menuSateNameQuantities[k].quantity += parseInt(aqiqahPackageMenu.quantity, 10);
                break;
              }
            }
          }
        }

        // analysis menu_non_sate
        let orderTypeMenuNonSate1Name = '';
        let orderTypeMenuNonSate2Name = '';
        if (aqiqahPackageMenu.meat_cook_type_1 && aqiqahPackageMenu.meat_cook_type_1 !== 'SATE') {
          orderTypeMenuNonSate1Name = aqiqahPackageMenu.meat_cook_type_1;
        }
        if (aqiqahPackageMenu.meat_cook_type_2 && aqiqahPackageMenu.meat_cook_type_2 !== 'SATE') {
          orderTypeMenuNonSate2Name = aqiqahPackageMenu.meat_cook_type_2;
        }
        if (orderTypeMenuNonSate1Name) {
          uniqName = _.find(menuNonSateNameQuantities, (o) => {
            return orderTypeMenuNonSate1Name === o.name;
          });
          if (!uniqName) {
            menuNonSateSequence++;
            menuNonSateNameQuantities.push({
              sequence: menuNonSateSequence,
              name: orderTypeMenuNonSate1Name,
              quantity: parseInt(aqiqahPackageMenu.quantity, 10)
            });
          } else {
            for (let k = 0; k < menuNonSateNameQuantities.length; k++) {
              if (menuNonSateNameQuantities[k].name === orderTypeMenuNonSate1Name) {
                menuNonSateNameQuantities[k].quantity += parseInt(aqiqahPackageMenu.quantity, 10);
                break;
              }
            }
          }
        }
        if (orderTypeMenuNonSate2Name) {
          uniqName = _.find(menuNonSateNameQuantities, (o) => {
            return orderTypeMenuNonSate2Name === o.name;
          });
          if (!uniqName) {
            menuNonSateSequence++;
            menuNonSateNameQuantities.push({
              sequence: menuNonSateSequence,
              name: orderTypeMenuNonSate2Name,
              quantity: parseInt(aqiqahPackageMenu.quantity, 10)
            });
          } else {
            for (let k = 0; k < menuNonSateNameQuantities.length; k++) {
              if (menuNonSateNameQuantities[k].name === orderTypeMenuNonSate2Name) {
                menuNonSateNameQuantities[k].quantity += parseInt(aqiqahPackageMenu.quantity, 10);
                break;
              }
            }
          }
        }

        // dissert 
        if (aqiqahPackageMenu.is_use_banana && aqiqahPackageMenu.is_use_pudding) {
          dissertName = 'PUDING & PISANG';
        } else if (aqiqahPackageMenu.is_use_banana) {
          dissertName = 'PISANG';
        } else if (aqiqahPackageMenu.is_use_pudding) {
          dissertName = 'PUDING';
        }

        // box
        uniqName = _.find(aqiqahPackageTypeNamesBox, (o) => {
          return orderTypeName === o;
        });
        if (!uniqName) {
          aqiqahPackageTypeNamesBox.push(orderTypeName);
        }
        aqiqahPackageTypeTotalQuantityBox += parseInt(aqiqahPackageMenu.quantity, 10);

        // box menu_sate
        let orderTypeMenuSateNameBox = '';
        if (aqiqahPackageMenu.meat_cook_type_1 && aqiqahPackageMenu.meat_cook_type_1 === 'SATE') {
          orderTypeMenuSateNameBox = aqiqahPackageMenu.meat_cook_type_1;
        }
        if (!orderTypeMenuSateNameBox &&
          aqiqahPackageMenu.meat_cook_type_2 && aqiqahPackageMenu.meat_cook_type_2 === 'SATE') {
          orderTypeMenuSateNameBox = aqiqahPackageMenu.meat_cook_type_2;
        }
        if (orderTypeMenuSateNameBox) {
          uniqName = _.find(menuSateNameQuantitiesBox, (o) => {
            return orderTypeMenuSateNameBox === o.name;
          });
          if (!uniqName) {
            menuSateSequenceBox++;
            menuSateNameQuantitiesBox.push({
              sequence: menuSateSequenceBox,
              name: orderTypeMenuSateNameBox,
              quantity: parseInt(aqiqahPackageMenu.quantity, 10)
            });
          } else {
            for (let k = 0; k < menuSateNameQuantitiesBox.length; k++) {
              if (menuSateNameQuantitiesBox[k].name === orderTypeMenuSateNameBox) {
                menuSateNameQuantitiesBox[k].quantity += parseInt(aqiqahPackageMenu.quantity, 10);
                break;
              }
            }
          }
        }

        // box menu_non_sate
        let orderTypeMenuNonSate1NameBox = '';
        let orderTypeMenuNonSate2NameBox = '';
        if (aqiqahPackageMenu.meat_cook_type_1 && aqiqahPackageMenu.meat_cook_type_1 !== 'SATE') {
          orderTypeMenuNonSate1NameBox = aqiqahPackageMenu.meat_cook_type_1;
        }
        if (aqiqahPackageMenu.meat_cook_type_2 && aqiqahPackageMenu.meat_cook_type_2 !== 'SATE') {
          orderTypeMenuNonSate2NameBox = aqiqahPackageMenu.meat_cook_type_2;
        }
        if (orderTypeMenuNonSate1NameBox) {
          uniqName = _.find(menuNonSateNameQuantitiesBox, (o) => {
            return orderTypeMenuNonSate1NameBox === o.name;
          });
          if (!uniqName) {
            menuNonSateSequenceBox++;
            menuNonSateNameQuantitiesBox.push({
              sequence: menuNonSateSequenceBox,
              name: orderTypeMenuNonSate1NameBox,
              quantity: parseInt(aqiqahPackageMenu.quantity, 10)
            });
          } else {
            for (let k = 0; k < menuNonSateNameQuantitiesBox.length; k++) {
              if (menuNonSateNameQuantitiesBox[k].name === orderTypeMenuNonSate1NameBox) {
                menuNonSateNameQuantitiesBox[k].quantity += parseInt(aqiqahPackageMenu.quantity, 10);
                break;
              }
            }
          }
        }
        if (orderTypeMenuNonSate2NameBox) {
          uniqName = _.find(menuNonSateNameQuantitiesBox, (o) => {
            return orderTypeMenuNonSate2NameBox === o.name;
          });
          if (!uniqName) {
            menuNonSateSequenceBox++;
            menuNonSateNameQuantitiesBox.push({
              sequence: menuNonSateSequenceBox,
              name: orderTypeMenuNonSate2NameBox,
              quantity: parseInt(aqiqahPackageMenu.quantity, 10)
            });
          } else {
            for (let k = 0; k < menuNonSateNameQuantitiesBox.length; k++) {
              if (menuNonSateNameQuantitiesBox[k].name === orderTypeMenuNonSate2NameBox) {
                menuNonSateNameQuantitiesBox[k].quantity += parseInt(aqiqahPackageMenu.quantity, 10);
                break;
              }
            }
          }
        }
      }
    }
  }

  // analysis & order
  if (orderDetailData && orderDetailData.length > 0) {
    const nonBoxBungkusMenus = _.cloneDeep(nonBoxMenuBungkusTypes);
    const nonBoxKeringMenus = _.cloneDeep(nonBoxMenuKeringTypes);
    const nonBoxPorsiMenus = _.cloneDeep(nonBoxMenuPorsiTypes);
    const nonBoxPorsiKuahMenus = _.cloneDeep(nonBoxMenuPorsiKuahTypes);

    for (let i = 0; i < orderDetailData.length; i++) {
      const orderDetail = orderDetailData[i];
      if (orderDetail.type && orderDetail.order_name && orderDetail.quantity) {
        if (orderDetail.type === 'NON BOX') {
          // analysis combine box & order
          orderTypeName = orderDetail.type + ', ' + orderDetail.order_name;
          uniqName = _.find(aqiqahPackageTypeNames, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNames.push(orderTypeName);
          }

          // analysis menu_sate
          let orderTypeMenuSateName = '';
          if (orderDetail.is_sate || orderDetail.is_kering_sate) {
            orderTypeMenuSateName = 'SATE';
          }
          if (orderTypeMenuSateName) {
            uniqName = _.find(menuSateNameQuantities, (o) => {
              return orderTypeMenuSateName === o.name;
            });
            if (!uniqName) {
              menuSateSequence++;
              if (orderDetail.menu_type === 'MENU KERING') {
                menuSateNameQuantities.push({
                  sequence: menuSateSequence,
                  name: orderTypeMenuSateName,
                  quantity: parseInt(orderDetail.quantity_kering_sate, 10)
                });
              } else {
                menuSateNameQuantities.push({
                  sequence: menuSateSequence,
                  name: orderTypeMenuSateName,
                  quantity: parseInt(orderDetail.quantity_sate, 10)
                });
              }
            } else {
              for (let k = 0; k < menuSateNameQuantities.length; k++) {
                if (menuSateNameQuantities[k].name === orderTypeMenuSateName) {
                  if (orderDetail.menu_type === 'MENU KERING') {
                    menuSateNameQuantities[k].quantity += parseInt(orderDetail.quantity_kering_sate, 10);
                  } else {
                    menuSateNameQuantities[k].quantity += parseInt(orderDetail.quantity_sate, 10);
                  }
                  break;
                }
              }
            }
          }

          // analysis menu_non_sate
          if (orderDetail.menu_type === '1 MENU' || orderDetail.menu_type === '2 MENU' ||
            orderDetail.menu_type === '2 MENU KUAH' || orderDetail.menu_type === 'MENU KERING') {
            // bungkus
            for (let j = 0; j < nonBoxBungkusMenus.length; j++) {
              if (nonBoxBungkusMenus[j].value !== 'sate' &&
                orderDetail['is_' + nonBoxBungkusMenus[j].value]) {
                const orderTypeMenuNonSateName = nonBoxBungkusMenus[j].label;
                uniqName = _.find(menuNonSateNameQuantities, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequence++;
                  menuNonSateNameQuantities.push({
                    sequence: menuNonSateSequence,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail['quantity_' + nonBoxBungkusMenus[j].value], 10)
                  });
                } else {
                  for (let k = 0; k < menuNonSateNameQuantities.length; k++) {
                    if (menuNonSateNameQuantities[k].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantities[k].quantity += parseInt(orderDetail['quantity_' + nonBoxBungkusMenus[j].value], 10);
                      break;
                    }
                  }
                }
              }
            }
            if (orderDetail.menu_type === 'MENU KERING') {
              for (let j = 0; j < nonBoxKeringMenus.length; j++) {
                if (nonBoxKeringMenus[j].value !== 'kering_sate' &&
                  orderDetail['is_' + nonBoxKeringMenus[j].value]) {
                  const orderTypeMenuNonSateName = nonBoxKeringMenus[j].label;
                  uniqName = _.find(menuNonSateNameQuantities, (o) => {
                    return orderTypeMenuNonSateName === o.name;
                  });
                  if (!uniqName) {
                    menuNonSateSequence++;
                    menuNonSateNameQuantities.push({
                      sequence: menuNonSateSequence,
                      name: orderTypeMenuNonSateName,
                      quantity: parseInt(orderDetail['quantity_' + nonBoxKeringMenus[j].value], 10)
                    });
                  } else {
                    for (let k = 0; k < menuNonSateNameQuantities.length; k++) {
                      if (menuNonSateNameQuantities[k].name === orderTypeMenuNonSateName) {
                        menuNonSateNameQuantities[k].quantity += parseInt(orderDetail['quantity_' + nonBoxKeringMenus[j].value], 10);
                        break;
                      }
                    }
                  }
                }
              }
            }
            if (orderDetail.menu_type === '2 MENU') {
              // porsi
              for (let j = 0; j < nonBoxPorsiMenus.length; j++) {
                if (nonBoxPorsiMenus[j].value !== 'sate' &&
                  orderDetail['is_' + nonBoxPorsiMenus[j].value]) {
                  const orderTypeMenuNonSateName = nonBoxPorsiMenus[j].label;
                  uniqName = _.find(menuNonSateNameQuantities, (o) => {
                    return orderTypeMenuNonSateName === o.name;
                  });
                  if (!uniqName) {
                    menuNonSateSequence++;
                    menuNonSateNameQuantities.push({
                      sequence: menuNonSateSequence,
                      name: orderTypeMenuNonSateName,
                      quantity: parseInt(orderDetail['quantity_' + nonBoxPorsiMenus[j].value], 10)
                    });
                  } else {
                    for (let k = 0; k < menuNonSateNameQuantities.length; k++) {
                      if (menuNonSateNameQuantities[k].name === orderTypeMenuNonSateName) {
                        menuNonSateNameQuantities[k].quantity += parseInt(orderDetail['quantity_' + nonBoxPorsiMenus[j].value], 10);
                        break;
                      }
                    }
                  }
                }
              }
            } else if (orderDetail.menu_type === '2 MENU KUAH') {
              // porsi
              for (let j = 0; j < nonBoxPorsiKuahMenus.length; j++) {
                if (nonBoxPorsiKuahMenus[j].value !== 'sate' &&
                  orderDetail['is_' + nonBoxPorsiKuahMenus[j].value]) {
                  const orderTypeMenuNonSateName = nonBoxPorsiKuahMenus[j].label;
                  uniqName = _.find(menuNonSateNameQuantities, (o) => {
                    return orderTypeMenuNonSateName === o.name;
                  });
                  if (!uniqName) {
                    menuNonSateSequence++;
                    menuNonSateNameQuantities.push({
                      sequence: menuNonSateSequence,
                      name: orderTypeMenuNonSateName,
                      quantity: parseInt(orderDetail['quantity_' + nonBoxPorsiKuahMenus[j].value], 10)
                    });
                  } else {
                    for (let k = 0; k < menuNonSateNameQuantities.length; k++) {
                      if (menuNonSateNameQuantities[k].name === orderTypeMenuNonSateName) {
                        menuNonSateNameQuantities[k].quantity += parseInt(orderDetail['quantity_' + nonBoxPorsiKuahMenus[j].value], 10);
                        break;
                      }
                    }
                  }
                }
              }
            }
          } else if (orderDetail.unit === 'BUNGKUS' || orderDetail.unit === 'PORSI') {
            // satuan bungkus - satuan porsi
            // bungkus
            for (let j = 0; j < nonBoxBungkusMenus.length; j++) {
              if (nonBoxBungkusMenus[j].value !== 'sate' &&
                orderDetail['is_' + nonBoxBungkusMenus[j].value]) {
                const orderTypeMenuNonSateName = nonBoxBungkusMenus[j].label;
                uniqName = _.find(menuNonSateNameQuantities, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequence++;
                  menuNonSateNameQuantities.push({
                    sequence: menuNonSateSequence,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail['quantity_' + nonBoxBungkusMenus[j].value], 10)
                  });
                } else {
                  for (let k = 0; k < menuNonSateNameQuantities.length; k++) {
                    if (menuNonSateNameQuantities[k].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantities[k].quantity += parseInt(orderDetail['quantity_' + nonBoxBungkusMenus[j].value], 10);
                      break;
                    }
                  }
                }
              }
            }
            // porsi
            for (let j = 0; j < nonBoxPorsiMenus.length; j++) {
              if (nonBoxPorsiMenus[j].value !== 'sate' &&
                orderDetail['is_' + nonBoxPorsiMenus[j].value]) {
                const orderTypeMenuNonSateName = nonBoxPorsiMenus[j].label;
                uniqName = _.find(menuNonSateNameQuantities, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequence++;
                  menuNonSateNameQuantities.push({
                    sequence: menuNonSateSequence,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail['quantity_' + nonBoxPorsiMenus[j].value], 10)
                  });
                } else {
                  for (let k = 0; k < menuNonSateNameQuantities.length; k++) {
                    if (menuNonSateNameQuantities[k].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantities[k].quantity += parseInt(orderDetail['quantity_' + nonBoxPorsiMenus[j].value], 10);
                      break;
                    }
                  }
                }
              }
            }
          }

          // order
          orderTypeName = orderDetail.type + ', ' + orderDetail.order_name;
          uniqName = _.find(aqiqahPackageTypeNamesOrder, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNamesOrder.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantityOrder += parseInt(orderDetail.total_quantity_1, 10) + parseInt(orderDetail.total_quantity_2, 10);

          // order menu_sate
          let orderTypeMenuSateNameOrder = '';
          if (orderDetail.is_sate || orderDetail.is_kering_sate) {
            orderTypeMenuSateNameOrder = 'SATE';
          }
          if (orderTypeMenuSateNameOrder) {
            uniqName = _.find(menuSateNameQuantitiesOrder, (o) => {
              return orderTypeMenuSateNameOrder === o.name;
            });
            if (!uniqName) {
              menuSateSequenceOrder++;
              if (orderDetail.menu_type === 'MENU KERING') {
                menuSateNameQuantitiesOrder.push({
                  sequence: menuSateSequenceOrder,
                  name: orderTypeMenuSateNameOrder,
                  quantity: parseInt(orderDetail.quantity_kering_sate, 10)
                });
              } else {
                menuSateNameQuantitiesOrder.push({
                  sequence: menuSateSequenceOrder,
                  name: orderTypeMenuSateNameOrder,
                  quantity: parseInt(orderDetail.quantity_sate, 10)
                });
              }
            } else {
              for (let k = 0; k < menuSateNameQuantitiesOrder.length; k++) {
                if (menuSateNameQuantitiesOrder[k].name === orderTypeMenuSateNameOrder) {
                  if (orderDetail.menu_type === 'MENU KERING') {
                    menuSateNameQuantitiesOrder[k].quantity += parseInt(orderDetail.quantity_kering_sate, 10);

                  } else {
                    menuSateNameQuantitiesOrder[k].quantity += parseInt(orderDetail.quantity_sate, 10);
                  }
                  break;
                }
              }
            }
          }

          // order menu_non_sate
          if (orderDetail.menu_type === '1 MENU' || orderDetail.menu_type === '2 MENU' ||
            orderDetail.menu_type === '2 MENU KUAH' || orderDetail.menu_type === 'MENU KERING' ||
            orderDetail.unit === 'BUNGKUS' || orderDetail.unit === 'PORSI') {
            // bungkus
            for (let j = 0; j < nonBoxBungkusMenus.length; j++) {
              if (nonBoxBungkusMenus[j].value !== 'sate' &&
                orderDetail['is_' + nonBoxBungkusMenus[j].value]) {
                const orderTypeMenuNonSateName = nonBoxBungkusMenus[j].label;
                uniqName = _.find(menuNonSateNameQuantitiesOrder, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequenceOrder++;
                  menuNonSateNameQuantitiesOrder.push({
                    sequence: menuNonSateSequenceOrder,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail['quantity_' + nonBoxBungkusMenus[j].value], 10)
                  });
                } else {
                  for (let k = 0; k < menuNonSateNameQuantitiesOrder.length; k++) {
                    if (menuNonSateNameQuantitiesOrder[k].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantitiesOrder[k].quantity += parseInt(orderDetail['quantity_' + nonBoxBungkusMenus[j].value], 10);
                      break;
                    }
                  }
                }
              }
            }
            // porsi
            for (let j = 0; j < nonBoxPorsiMenus.length; j++) {
              if (nonBoxPorsiMenus[j].value !== 'sate' &&
                orderDetail['is_' + nonBoxPorsiMenus[j].value]) {
                const orderTypeMenuNonSateName = nonBoxPorsiMenus[j].label;
                uniqName = _.find(menuNonSateNameQuantitiesOrder, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequenceOrder++;
                  menuNonSateNameQuantitiesOrder.push({
                    sequence: menuNonSateSequenceOrder,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail['quantity_' + nonBoxPorsiMenus[j].value], 10)
                  });
                } else {
                  for (let k = 0; k < menuNonSateNameQuantitiesOrder.length; k++) {
                    if (menuNonSateNameQuantitiesOrder[k].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantitiesOrder[k].quantity += parseInt(orderDetail['quantity_' + nonBoxPorsiMenus[j].value], 10);
                      break;
                    }
                  }
                }
              }
            }
            if (orderDetail.menu_type === 'MENU KERING') {
              for (let j = 0; j < nonBoxKeringMenus.length; j++) {
                if (nonBoxKeringMenus[j].value !== 'kering_sate' &&
                  orderDetail['is_' + nonBoxKeringMenus[j].value]) {
                  const orderTypeMenuNonSateName = nonBoxKeringMenus[j].label;
                  uniqName = _.find(menuNonSateNameQuantitiesOrder, (o) => {
                    return orderTypeMenuNonSateName === o.name;
                  });
                  if (!uniqName) {
                    menuNonSateSequenceOrder++;
                    menuNonSateNameQuantitiesOrder.push({
                      sequence: menuNonSateSequenceOrder,
                      name: orderTypeMenuNonSateName,
                      quantity: parseInt(orderDetail['quantity_' + nonBoxKeringMenus[j].value], 10)
                    });
                  } else {
                    for (let k = 0; k < menuNonSateNameQuantitiesOrder.length; k++) {
                      if (menuNonSateNameQuantitiesOrder[k].name === orderTypeMenuNonSateName) {
                        menuNonSateNameQuantitiesOrder[k].quantity += parseInt(orderDetail['quantity_' + nonBoxBungkusMenus[j].value], 10);
                        break;
                      }
                    }
                  }
                }
              }
            }
            if (orderDetail.menu_type === '2 MENU') {
              // porsi
              for (let j = 0; j < nonBoxPorsiMenus.length; j++) {
                if (nonBoxPorsiMenus[j].value !== 'sate' &&
                  orderDetail['is_' + nonBoxPorsiMenus[j].value]) {
                  const orderTypeMenuNonSateName = nonBoxPorsiMenus[j].label;
                  uniqName = _.find(menuNonSateNameQuantitiesOrder, (o) => {
                    return orderTypeMenuNonSateName === o.name;
                  });
                  if (!uniqName) {
                    menuNonSateSequenceOrder++;
                    menuNonSateNameQuantitiesOrder.push({
                      sequence: menuNonSateSequenceOrder,
                      name: orderTypeMenuNonSateName,
                      quantity: parseInt(orderDetail['quantity_' + nonBoxPorsiMenus[j].value], 10)
                    });
                  } else {
                    for (let k = 0; k < menuNonSateNameQuantitiesOrder.length; k++) {
                      if (menuNonSateNameQuantitiesOrder[k].name === orderTypeMenuNonSateName) {
                        menuNonSateNameQuantitiesOrder[k].quantity += parseInt(orderDetail['quantity_' + nonBoxPorsiMenus[j].value], 10);
                        break;
                      }
                    }
                  }
                }
              }
            } else if (orderDetail.menu_type === '2 MENU KUAH') {
              // porsi
              for (let j = 0; j < nonBoxPorsiKuahMenus.length; j++) {
                if (nonBoxPorsiKuahMenus[j].value !== 'sate' &&
                  orderDetail['is_' + nonBoxPorsiKuahMenus[j].value]) {
                  const orderTypeMenuNonSateName = nonBoxPorsiKuahMenus[j].label;
                  uniqName = _.find(menuNonSateNameQuantitiesOrder, (o) => {
                    return orderTypeMenuNonSateName === o.name;
                  });
                  if (!uniqName) {
                    menuNonSateSequenceOrder++;
                    menuNonSateNameQuantitiesOrder.push({
                      sequence: menuNonSateSequenceOrder,
                      name: orderTypeMenuNonSateName,
                      quantity: parseInt(orderDetail['quantity_' + nonBoxPorsiKuahMenus[j].value], 10)
                    });
                  } else {
                    for (let k = 0; k < menuNonSateNameQuantitiesOrder.length; k++) {
                      if (menuNonSateNameQuantitiesOrder[k].name === orderTypeMenuNonSateName) {
                        menuNonSateNameQuantitiesOrder[k].quantity += parseInt(orderDetail['quantity_' + nonBoxPorsiKuahMenus[j].value], 10);
                        break;
                      }
                    }
                  }
                }
              }
            }
          }
          // qty porsi
          nonBoxQuantity += orderDetail.total_quantity_1;
        } else if (orderDetail.type === 'PAKET SUPER HEMAT') {
          // analysis combine box & order
          orderTypeName = orderDetail.order_name;
          uniqName = _.find(aqiqahPackageTypeNames, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNames.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantity += parseInt(orderDetail.total_quantity_1, 10);

          // analysis menu_sate
          let orderTypeMenuSateName = '';
          if (orderDetail.is_psh_sate) {
            orderTypeMenuSateName = 'SATE';
          }
          if (orderTypeMenuSateName) {
            uniqName = _.find(menuSateNameQuantities, (o) => {
              return orderTypeMenuSateName === o.name;
            });
            if (!uniqName) {
              menuSateSequence++;
              menuSateNameQuantities.push({
                sequence: menuSateSequence,
                name: orderTypeMenuSateName,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantities.length; k++) {
                if (menuSateNameQuantities[k].name === orderTypeMenuSateName) {
                  menuSateNameQuantities[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // analysis menu_non_sate
          for (let k = 0; k < packageSuperHematMenuPackageType.menus.length; k++) {
            const orderTypeMenuNonSateName = packageSuperHematMenuPackageType.menus[k].replace(/_/g, ' ').toUpperCase();
            if (!orderTypeMenuNonSateName.startsWith('NASI ')) {
              uniqName = _.find(menuNonSateNameQuantities, (o) => {
                return orderTypeMenuNonSateName === o.name;
              });
              if (!uniqName) {
                menuNonSateSequence++;
                menuNonSateNameQuantities.push({
                  sequence: menuNonSateSequence,
                  name: orderTypeMenuNonSateName,
                  quantity: parseInt(orderDetail.total_quantity_1, 10)
                });
              } else {
                for (let l = 0; l < menuNonSateNameQuantities.length; l++) {
                  if (menuNonSateNameQuantities[l].name === orderTypeMenuNonSateName) {
                    menuNonSateNameQuantities[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                    break;
                  }
                }
              }
            }
          }

          // box
          uniqName = _.find(aqiqahPackageTypeNamesBox, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNamesBox.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantityBox += parseInt(orderDetail.total_quantity_1, 10);

          // box menu_sate
          let orderTypeMenuSateNameBox = '';
          if (orderDetail.is_psh_sate) {
            orderTypeMenuSateNameBox = 'SATE';
          }
          if (orderTypeMenuSateNameBox) {
            uniqName = _.find(menuSateNameQuantitiesBox, (o) => {
              return orderTypeMenuSateNameBox === o.name;
            });
            if (!uniqName) {
              menuSateSequenceBox++;
              menuSateNameQuantitiesBox.push({
                sequence: menuSateSequenceBox,
                name: orderTypeMenuSateNameBox,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantitiesBox.length; k++) {
                if (menuSateNameQuantitiesBox[k].name === orderTypeMenuSateNameBox) {
                  menuSateNameQuantitiesBox[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // box menu_non_sate
          for (let k = 0; k < packageSuperHematMenuPackageType.menus.length; k++) {
            const orderTypeMenuNonSateName = packageSuperHematMenuPackageType.menus[k].replace(/_/g, ' ').toUpperCase();
            if (!orderTypeMenuNonSateName.startsWith('NASI ')) {
              uniqName = _.find(menuNonSateNameQuantitiesBox, (o) => {
                return orderTypeMenuNonSateName === o.name;
              });
              if (!uniqName) {
                menuNonSateSequenceBox++;
                menuNonSateNameQuantitiesBox.push({
                  sequence: menuNonSateSequenceBox,
                  name: orderTypeMenuNonSateName,
                  quantity: parseInt(orderDetail.total_quantity_1, 10)
                });
              } else {
                for (let l = 0; l < menuNonSateNameQuantitiesBox.length; l++) {
                  if (menuNonSateNameQuantitiesBox[l].name === orderTypeMenuNonSateName) {
                    menuNonSateNameQuantitiesBox[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                    break;
                  }
                }
              }
            }
          }
        } else if (orderDetail.type === 'PAKET SUPER EKONOMIS') {
          // analysis combine box & order
          orderTypeName = orderDetail.order_name;
          uniqName = _.find(aqiqahPackageTypeNames, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNames.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantity += parseInt(orderDetail.total_quantity_1, 10);

          // analysis menu_sate
          let orderTypeMenuSateName = '';
          if (orderDetail.is_pse_sate) {
            orderTypeMenuSateName = 'SATE';
          }
          if (orderTypeMenuSateName) {
            uniqName = _.find(menuSateNameQuantities, (o) => {
              return orderTypeMenuSateName === o.name;
            });
            if (!uniqName) {
              menuSateSequence++;
              menuSateNameQuantities.push({
                sequence: menuSateSequence,
                name: orderTypeMenuSateName,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantities.length; k++) {
                if (menuSateNameQuantities[k].name === orderTypeMenuSateName) {
                  menuSateNameQuantities[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // analysis menu_non_sate
          for (let k = 0; k < packageSuperEkonomisMenuPackageType.menus.length; k++) {
            const orderTypeMenuNonSateName = packageSuperEkonomisMenuPackageType.menus[k].replace(/_/g, ' ').toUpperCase();
            uniqName = _.find(menuNonSateNameQuantities, (o) => {
                return orderTypeMenuNonSateName === o.name;
              });
              if (!uniqName) {
                menuNonSateSequence++;
                menuNonSateNameQuantities.push({
                  sequence: menuNonSateSequence,
                  name: orderTypeMenuNonSateName,
                  quantity: parseInt(orderDetail.total_quantity_1, 10)
                });
              } else {
                for (let l = 0; l < menuNonSateNameQuantities.length; l++) {
                  if (menuNonSateNameQuantities[l].name === orderTypeMenuNonSateName) {
                    menuNonSateNameQuantities[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                    break;
                  }
                }
              }
          }

          // box
          uniqName = _.find(aqiqahPackageTypeNamesBox, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNamesBox.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantityBox += parseInt(orderDetail.total_quantity_1, 10);

          // box menu_sate
          let orderTypeMenuSateNameBox = '';
          if (orderDetail.is_pse_sate) {
            orderTypeMenuSateNameBox = 'SATE';
          }
          if (orderTypeMenuSateNameBox) {
            uniqName = _.find(menuSateNameQuantitiesBox, (o) => {
              return orderTypeMenuSateNameBox === o.name;
            });
            if (!uniqName) {
              menuSateSequenceBox++;
              menuSateNameQuantitiesBox.push({
                sequence: menuSateSequenceBox,
                name: orderTypeMenuSateNameBox,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantitiesBox.length; k++) {
                if (menuSateNameQuantitiesBox[k].name === orderTypeMenuSateNameBox) {
                  menuSateNameQuantitiesBox[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // box menu_non_sate
          for (let k = 0; k < packageSuperEkonomisMenuPackageType.menus.length; k++) {
            const orderTypeMenuNonSateName = packageSuperEkonomisMenuPackageType.menus[k].replace(/_/g, ' ').toUpperCase();
            uniqName = _.find(menuNonSateNameQuantitiesBox, (o) => {
                return orderTypeMenuNonSateName === o.name;
              });
              if (!uniqName) {
                menuNonSateSequenceBox++;
                menuNonSateNameQuantitiesBox.push({
                  sequence: menuNonSateSequenceBox,
                  name: orderTypeMenuNonSateName,
                  quantity: parseInt(orderDetail.total_quantity_1, 10)
                });
              } else {
                for (let l = 0; l < menuNonSateNameQuantitiesBox.length; l++) {
                  if (menuNonSateNameQuantitiesBox[l].name === orderTypeMenuNonSateName) {
                    menuNonSateNameQuantitiesBox[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                    break;
                  }
                }
              }
          }
        } else if (orderDetail.type === 'PAKET AQIQAH EKONOMIS') {
          // analysis combine box & order
          orderTypeName = orderDetail.order_name;
          uniqName = _.find(aqiqahPackageTypeNames, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNames.push(orderTypeName);
          }
          // aqiqahPackageTypeTotalQuantity += parseInt(orderDetail.total_quantity_1, 10);

          // analysis menu_non_sate
          for (let s = 0; s < packageAqiqahEkonomisMenuPackageType.length; s++) {
            const arabianStyle = packageAqiqahEkonomisMenuPackageType[s];
            for (let k = 0; k < arabianStyle.menus.length; k++) {
              if (arabianStyle.type === orderTypeName) {
                const orderTypeMenuNonSateName = arabianStyle.menus[k].replace(/_/g, ' ').toUpperCase();
                uniqName = _.find(menuNonSateNameQuantities, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequence++;
                  menuNonSateNameQuantities.push({
                    sequence: menuNonSateSequence,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail.total_quantity_1, 10)
                  });
                } else {
                  for (let l = 0; l < menuNonSateNameQuantities.length; l++) {
                    if (menuNonSateNameQuantities[l].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantities[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                      break;
                    }
                  }
                }
              }
            }
          }

          // box
          uniqName = _.find(aqiqahPackageTypeNamesBox, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNamesBox.push(orderTypeName);
          }
          // aqiqahPackageTypeTotalQuantityBox += parseInt(orderDetail.total_quantity_1, 10);

          // box menu_non_sate
          for (let s = 0; s < packageAqiqahEkonomisMenuPackageType.length; s++) {
            const arabianStyle = packageAqiqahEkonomisMenuPackageType[s];
            if (arabianStyle.type === orderTypeName) {
              for (let k = 0; k < arabianStyle.menus.length; k++) {
                const orderTypeMenuNonSateName = arabianStyle.menus[k].replace(/_/g, ' ').toUpperCase();
                uniqName = _.find(menuNonSateNameQuantitiesBox, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequenceBox++;
                  menuNonSateNameQuantitiesBox.push({
                    sequence: menuNonSateSequenceBox,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail.total_quantity_1, 10)
                  });
                } else {
                  for (let l = 0; l < menuNonSateNameQuantitiesBox.length; l++) {
                    if (menuNonSateNameQuantitiesBox[l].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantitiesBox[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                      break;
                    }
                  }
                }
              }
            }
          }
        } else if (orderDetail.type === 'PAKET ARABIAN STYLE') {
          // analysis combine box & order
          orderTypeName = orderDetail.order_name;
          uniqName = _.find(aqiqahPackageTypeNames, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNames.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantity += parseInt(orderDetail.total_quantity_1, 10);

          // analysis menu_non_sate
          for (let s = 0; s < packageArabianStyleMenuPackageType.length; s++) {
            const arabianStyle = packageArabianStyleMenuPackageType[s];
            for (let k = 0; k < arabianStyle.menus.length; k++) {
              if (arabianStyle.type === orderTypeName) {
                const orderTypeMenuNonSateName = arabianStyle.menus[k].replace(/_/g, ' ').toUpperCase();
                uniqName = _.find(menuNonSateNameQuantities, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequence++;
                  menuNonSateNameQuantities.push({
                    sequence: menuNonSateSequence,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail.total_quantity_1, 10)
                  });
                } else {
                  for (let l = 0; l < menuNonSateNameQuantities.length; l++) {
                    if (menuNonSateNameQuantities[l].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantities[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                      break;
                    }
                  }
                }
              }
            }
          }

          // box
          uniqName = _.find(aqiqahPackageTypeNamesBox, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNamesBox.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantityBox += parseInt(orderDetail.total_quantity_1, 10);

          // box menu_non_sate
          for (let s = 0; s < packageArabianStyleMenuPackageType.length; s++) {
            const arabianStyle = packageArabianStyleMenuPackageType[s];
            if (arabianStyle.type === orderTypeName) {
              for (let k = 0; k < arabianStyle.menus.length; k++) {
                const orderTypeMenuNonSateName = arabianStyle.menus[k].replace(/_/g, ' ').toUpperCase();
                uniqName = _.find(menuNonSateNameQuantitiesBox, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequenceBox++;
                  menuNonSateNameQuantitiesBox.push({
                    sequence: menuNonSateSequenceBox,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail.total_quantity_1, 10)
                  });
                } else {
                  for (let l = 0; l < menuNonSateNameQuantitiesBox.length; l++) {
                    if (menuNonSateNameQuantitiesBox[l].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantitiesBox[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                      break;
                    }
                  }
                }
              }
            }
          }
        } else if (orderDetail.type === 'PAKET TUMPENGAN SPESIAL') {
          // analysis combine box & order
          orderTypeName = orderDetail.order_name;
          uniqName = _.find(aqiqahPackageTypeNames, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNames.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantity += parseInt(orderDetail.total_quantity_1, 10);

          // analysis menu_non_sate
          for (let s = 0; s < packageTumpenganSpesialMenuPackageType.length; s++) {
            const tumpengSpesial = packageTumpenganSpesialMenuPackageType[s];
            for (let k = 0; k < tumpengSpesial.menus.length; k++) {
              if (tumpengSpesial.type === orderTypeName) {
                const orderTypeMenuNonSateName = tumpengSpesial.menus[k].replace(/_/g, ' ').toUpperCase();
                uniqName = _.find(menuNonSateNameQuantities, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequence++;
                  menuNonSateNameQuantities.push({
                    sequence: menuNonSateSequence,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail.total_quantity_1, 10)
                  });
                } else {
                  for (let l = 0; l < menuNonSateNameQuantities.length; l++) {
                    if (menuNonSateNameQuantities[l].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantities[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                      break;
                    }
                  }
                }
              }
            }
          }

          // box
          uniqName = _.find(aqiqahPackageTypeNamesBox, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNamesBox.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantityBox += parseInt(orderDetail.total_quantity_1, 10);

          // box menu_non_sate
          for (let s = 0; s < packageTumpenganSpesialMenuPackageType.length; s++) {
            const tumpengSpesial = packageTumpenganSpesialMenuPackageType[s];
            if (tumpengSpesial.type === orderTypeName) {
              for (let k = 0; k < tumpengSpesial.menus.length; k++) {
                const orderTypeMenuNonSateName = tumpengSpesial.menus[k].replace(/_/g, ' ').toUpperCase();
                uniqName = _.find(menuNonSateNameQuantitiesBox, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequenceBox++;
                  menuNonSateNameQuantitiesBox.push({
                    sequence: menuNonSateSequenceBox,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail.total_quantity_1, 10)
                  });
                } else {
                  for (let l = 0; l < menuNonSateNameQuantitiesBox.length; l++) {
                    if (menuNonSateNameQuantitiesBox[l].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantitiesBox[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                      break;
                    }
                  }
                }
              }
            }
          }
        } else if (orderDetail.type === 'PAKET BOX ISTIMEWA') {
          // analysis combine box & order
          orderTypeName = orderDetail.order_name;
          uniqName = _.find(aqiqahPackageTypeNames, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNames.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantity += parseInt(orderDetail.total_quantity_1, 10);

          // analysis menu_sate
          let orderTypeMenuSateName = '';
          if (orderDetail.is_pbi_sate) {
            orderTypeMenuSateName = 'SATE';
          }
          if (orderTypeMenuSateName) {
            uniqName = _.find(menuSateNameQuantities, (o) => {
              return orderTypeMenuSateName === o.name;
            });
            if (!uniqName) {
              menuSateSequence++;
              menuSateNameQuantities.push({
                sequence: menuSateSequence,
                name: orderTypeMenuSateName,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantities.length; k++) {
                if (menuSateNameQuantities[k].name === orderTypeMenuSateName) {
                  menuSateNameQuantities[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // analysis menu_non_sate
          const paketBoxIstimewaPbiMenus = _.cloneDeep(paketBoxIstimewaMenuPackageTypes);
          const paketBoxIstimewaPbiMenu = _.find(paketBoxIstimewaPbiMenus, (o) => {
            return o.value === orderDetail.order_name;
          });
          if (paketBoxIstimewaPbiMenu && paketBoxIstimewaPbiMenu.menus &&
            paketBoxIstimewaPbiMenu.menus.length > 0) {
            for (let k = 0; k < paketBoxIstimewaPbiMenu.menus.length; k++) {
              const orderTypeMenuNonSateName = paketBoxIstimewaPbiMenu.menus[k].replace(/_/g, ' ').toUpperCase();
              if (!orderTypeMenuNonSateName.startsWith('NASI ')) {
                uniqName = _.find(menuNonSateNameQuantities, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequence++;
                  menuNonSateNameQuantities.push({
                    sequence: menuNonSateSequence,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail.total_quantity_1, 10)
                  });
                } else {
                  for (let l = 0; l < menuNonSateNameQuantities.length; l++) {
                    if (menuNonSateNameQuantities[l].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantities[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                      break;
                    }
                  }
                }
              }
            }
          }

          // box
          uniqName = _.find(aqiqahPackageTypeNamesBox, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNamesBox.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantityBox += parseInt(orderDetail.total_quantity_1, 10);

          // box menu_sate
          let orderTypeMenuSateNameBox = '';
          if (orderDetail.is_pbi_sate) {
            orderTypeMenuSateNameBox = 'SATE';
          }
          if (orderTypeMenuSateNameBox) {
            uniqName = _.find(menuSateNameQuantitiesBox, (o) => {
              return orderTypeMenuSateNameBox === o.name;
            });
            if (!uniqName) {
              menuSateSequenceBox++;
              menuSateNameQuantitiesBox.push({
                sequence: menuSateSequenceBox,
                name: orderTypeMenuSateNameBox,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantitiesBox.length; k++) {
                if (menuSateNameQuantitiesBox[k].name === orderTypeMenuSateNameBox) {
                  menuSateNameQuantitiesBox[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // box menu_non_sate
          if (paketBoxIstimewaPbiMenu && paketBoxIstimewaPbiMenu.menus &&
            paketBoxIstimewaPbiMenu.menus.length > 0) {
            for (let k = 0; k < paketBoxIstimewaPbiMenu.menus.length; k++) {
              const orderTypeMenuNonSateName = paketBoxIstimewaPbiMenu.menus[k].replace(/_/g, ' ').toUpperCase();
              if (!orderTypeMenuNonSateName.startsWith('NASI ')) {
                uniqName = _.find(menuNonSateNameQuantitiesBox, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequenceBox++;
                  menuNonSateNameQuantitiesBox.push({
                    sequence: menuNonSateSequenceBox,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail.total_quantity_1, 10)
                  });
                } else {
                  for (let l = 0; l < menuNonSateNameQuantitiesBox.length; l++) {
                    if (menuNonSateNameQuantitiesBox[l].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantitiesBox[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                      break;
                    }
                  }
                }
              }
            }
          }
        } else if (orderDetail.type === 'PAKET ABG') {
          // analysis combine box & order
          orderTypeName = orderDetail.order_name;
          uniqName = _.find(aqiqahPackageTypeNames, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNames.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantity += parseInt(orderDetail.total_quantity_1, 10);

          // analysis menu_sate
          let orderTypeMenuSateName = '';
          if (orderDetail.is_abg_sate) {
            orderTypeMenuSateName = 'SATE';
          }
          if (orderTypeMenuSateName) {
            uniqName = _.find(menuSateNameQuantities, (o) => {
              return orderTypeMenuSateName === o.name;
            });
            if (!uniqName) {
              menuSateSequence++;
              menuSateNameQuantities.push({
                sequence: menuSateSequence,
                name: orderTypeMenuSateName,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantities.length; k++) {
                if (menuSateNameQuantities[k].name === orderTypeMenuSateName) {
                  menuSateNameQuantities[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // analysis menu_non_sate
          const paketBoxAbgMenus = _.cloneDeep(paketBoxAbgMenuPackageTypes);
          const paketBoxAbgMenu = _.find(paketBoxAbgMenus, (o) => {
            return o.value === orderDetail.order_name;
          });
          if (paketBoxAbgMenu && paketBoxAbgMenu.menus &&
            paketBoxAbgMenu.menus.length > 0) {
            for (let k = 0; k < paketBoxAbgMenu.menus.length; k++) {
              const orderTypeMenuNonSateName = paketBoxAbgMenu.menus[k].replace(/_/g, ' ').toUpperCase();
              if (!orderTypeMenuNonSateName.startsWith('NASI ')) {
                uniqName = _.find(menuNonSateNameQuantities, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequence++;
                  menuNonSateNameQuantities.push({
                    sequence: menuNonSateSequence,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail.total_quantity_1, 10)
                  });
                } else {
                  for (let l = 0; l < menuNonSateNameQuantities.length; l++) {
                    if (menuNonSateNameQuantities[l].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantities[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                      break;
                    }
                  }
                }
              }
            }
          }

          // box
          uniqName = _.find(aqiqahPackageTypeNamesBox, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNamesBox.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantityBox += parseInt(orderDetail.total_quantity_1, 10);

          // box menu_sate
          let orderTypeMenuSateNameBox = '';
          if (orderDetail.is_abg_sate) {
            orderTypeMenuSateNameBox = 'SATE';
          }
          if (orderTypeMenuSateNameBox) {
            uniqName = _.find(menuSateNameQuantitiesBox, (o) => {
              return orderTypeMenuSateNameBox === o.name;
            });
            if (!uniqName) {
              menuSateSequenceBox++;
              menuSateNameQuantitiesBox.push({
                sequence: menuSateSequenceBox,
                name: orderTypeMenuSateNameBox,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantitiesBox.length; k++) {
                if (menuSateNameQuantitiesBox[k].name === orderTypeMenuSateNameBox) {
                  menuSateNameQuantitiesBox[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // box menu_non_sate
          if (paketBoxAbgMenu && paketBoxAbgMenu.menus &&
            paketBoxAbgMenu.menus.length > 0) {
            for (let k = 0; k < paketBoxAbgMenu.menus.length; k++) {
              const orderTypeMenuNonSateName = paketBoxAbgMenu.menus[k].replace(/_/g, ' ').toUpperCase();
              if (!orderTypeMenuNonSateName.startsWith('NASI ')) {
                uniqName = _.find(menuNonSateNameQuantitiesBox, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequenceBox++;
                  menuNonSateNameQuantitiesBox.push({
                    sequence: menuNonSateSequenceBox,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail.total_quantity_1, 10)
                  });
                } else {
                  for (let l = 0; l < menuNonSateNameQuantitiesBox.length; l++) {
                    if (menuNonSateNameQuantitiesBox[l].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantitiesBox[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                      break;
                    }
                  }
                }
              }
            }
          }
        } else if (orderDetail.type === 'NASI NAMPAN') {
          // analysis combine box & order
          orderTypeName = orderDetail.order_name;
          uniqName = _.find(aqiqahPackageTypeNames, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNames.push(orderTypeName);
          }

          // analysis menu_sate
          let orderTypeMenuSateName = '';
          if (orderDetail.is_nn_sate) {
            orderTypeMenuSateName = 'SATE';
          }
          if (orderTypeMenuSateName) {
            uniqName = _.find(menuSateNameQuantities, (o) => {
              return orderTypeMenuSateName === o.name;
            });
            if (!uniqName) {
              menuSateSequence++;
              menuSateNameQuantities.push({
                sequence: menuSateSequence,
                name: orderTypeMenuSateName,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantities.length; k++) {
                if (menuSateNameQuantities[k].name === orderTypeMenuSateName) {
                  menuSateNameQuantities[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // analysis menu_non_sate
          const nasiNampanMenus = _.cloneDeep(nasiNampanMenuPackageTypes);
          const nasiNampanMenu = _.find(nasiNampanMenus, (o) => {
            return o.value === orderDetail.order_name;
          });
          if (nasiNampanMenu && nasiNampanMenu.menus &&
            nasiNampanMenu.menus.length > 0) {
            for (let k = 0; k < nasiNampanMenu.menus.length; k++) {
              const orderTypeMenuNonSateName = nasiNampanMenu.menus[k].replace(/_/g, ' ').toUpperCase();
              if (!orderTypeMenuNonSateName.startsWith('NASI ')) {
                uniqName = _.find(menuNonSateNameQuantities, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequence++;
                  menuNonSateNameQuantities.push({
                    sequence: menuNonSateSequence,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail.total_quantity_1, 10)
                  });
                } else {
                  for (let l = 0; l < menuNonSateNameQuantities.length; l++) {
                    if (menuNonSateNameQuantities[l].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantities[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                      break;
                    }
                  }
                }
              }
            }
          }

          // box
          uniqName = _.find(aqiqahPackageTypeNamesBox, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNamesBox.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantityBox += parseInt(orderDetail.total_quantity_1, 10);

          // box menu_sate
          let orderTypeMenuSateNameBox = '';
          if (orderDetail.is_nn_sate) {
            orderTypeMenuSateNameBox = 'SATE';
          }
          if (orderTypeMenuSateNameBox) {
            uniqName = _.find(menuSateNameQuantitiesBox, (o) => {
              return orderTypeMenuSateNameBox === o.name;
            });
            if (!uniqName) {
              menuSateSequenceBox++;
              menuSateNameQuantitiesBox.push({
                sequence: menuSateSequenceBox,
                name: orderTypeMenuSateNameBox,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantitiesBox.length; k++) {
                if (menuSateNameQuantitiesBox[k].name === orderTypeMenuSateNameBox) {
                  menuSateNameQuantitiesBox[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // box menu_non_sate
          if (nasiNampanMenu && nasiNampanMenu.menus &&
            nasiNampanMenu.menus.length > 0) {
            for (let k = 0; k < nasiNampanMenu.menus.length; k++) {
              const orderTypeMenuNonSateName = nasiNampanMenu.menus[k].replace(/_/g, ' ').toUpperCase();
              if (!orderTypeMenuNonSateName.startsWith('NASI ')) {
                uniqName = _.find(menuNonSateNameQuantitiesBox, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequenceBox++;
                  menuNonSateNameQuantitiesBox.push({
                    sequence: menuNonSateSequenceBox,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail.total_quantity_1, 10)
                  });
                } else {
                  for (let l = 0; l < menuNonSateNameQuantitiesBox.length; l++) {
                    if (menuNonSateNameQuantitiesBox[l].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantitiesBox[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                      break;
                    }
                  }
                }
              }
            }
          }
        } else if (orderDetail.type === 'PAKET PRASMANAN') {
          // analysis combine box & order
          orderTypeName = orderDetail.order_name;
          uniqName = _.find(aqiqahPackageTypeNames, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNames.push(orderTypeName);
          }

          // analysis menu_sate
          let orderTypeMenuSateName = '';
          if (orderDetail.is_pr_sate) {
            orderTypeMenuSateName = 'SATE';
          }
          if (orderTypeMenuSateName) {
            uniqName = _.find(menuSateNameQuantities, (o) => {
              return orderTypeMenuSateName === o.name;
            });
            if (!uniqName) {
              menuSateSequence++;
              menuSateNameQuantities.push({
                sequence: menuSateSequence,
                name: orderTypeMenuSateName,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantities.length; k++) {
                if (menuSateNameQuantities[k].name === orderTypeMenuSateName) {
                  menuSateNameQuantities[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // analysis menu_non_sate
          const paketPrasmananMenus = _.cloneDeep(paketPrasmananMenuPackageTypes);
          const paketPrasmananMenu = _.find(paketPrasmananMenus, (o) => {
            return o.value === orderDetail.order_name;
          });
          if (paketPrasmananMenu && paketPrasmananMenu.menus &&
            paketPrasmananMenu.menus.length > 0) {
            for (let k = 0; k < paketPrasmananMenu.menus.length; k++) {
              const orderTypeMenuNonSateName = paketPrasmananMenu.menus[k].replace(/_/g, ' ').toUpperCase();
              if (!orderTypeMenuNonSateName.startsWith('NASI ')) {
                uniqName = _.find(menuNonSateNameQuantities, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequence++;
                  menuNonSateNameQuantities.push({
                    sequence: menuNonSateSequence,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail.total_quantity_1, 10)
                  });
                } else {
                  for (let l = 0; l < menuNonSateNameQuantities.length; l++) {
                    if (menuNonSateNameQuantities[l].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantities[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                      break;
                    }
                  }
                }
              }
            }
          }

          // box
          uniqName = _.find(aqiqahPackageTypeNamesBox, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNamesBox.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantityBox += parseInt(orderDetail.total_quantity_1, 10);

          // box menu_sate
          let orderTypeMenuSateNameBox = '';
          if (orderDetail.is_pr_sate) {
            orderTypeMenuSateNameBox = 'SATE';
          }
          if (orderTypeMenuSateNameBox) {
            uniqName = _.find(menuSateNameQuantitiesBox, (o) => {
              return orderTypeMenuSateNameBox === o.name;
            });
            if (!uniqName) {
              menuSateSequenceBox++;
              menuSateNameQuantitiesBox.push({
                sequence: menuSateSequenceBox,
                name: orderTypeMenuSateNameBox,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantitiesBox.length; k++) {
                if (menuSateNameQuantitiesBox[k].name === orderTypeMenuSateNameBox) {
                  menuSateNameQuantitiesBox[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // box menu_non_sate
          if (paketPrasmananMenu && paketPrasmananMenu.menus &&
            paketPrasmananMenu.menus.length > 0) {
            for (let k = 0; k < paketPrasmananMenu.menus.length; k++) {
              const orderTypeMenuNonSateName = paketPrasmananMenu.menus[k].replace(/_/g, ' ').toUpperCase();
              if (!orderTypeMenuNonSateName.startsWith('NASI ')) {
                uniqName = _.find(menuNonSateNameQuantitiesBox, (o) => {
                  return orderTypeMenuNonSateName === o.name;
                });
                if (!uniqName) {
                  menuNonSateSequenceBox++;
                  menuNonSateNameQuantitiesBox.push({
                    sequence: menuNonSateSequenceBox,
                    name: orderTypeMenuNonSateName,
                    quantity: parseInt(orderDetail.total_quantity_1, 10)
                  });
                } else {
                  for (let l = 0; l < menuNonSateNameQuantitiesBox.length; l++) {
                    if (menuNonSateNameQuantitiesBox[l].name === orderTypeMenuNonSateName) {
                      menuNonSateNameQuantitiesBox[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                      break;
                    }
                  }
                }
              }
            }
          }
        } else if (orderDetail.type === 'SATUAN') {
          // analysis combine box & order
          
          orderTypeName = orderDetail.order_name;
          uniqName = _.find(aqiqahPackageTypeNames, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNames.push(orderTypeName);
          }
          if (orderDetail.order_name !== 'PAKET BOX SATUAN') {
            // aqiqahPackageTypeTotalQuantity += parseInt(orderDetail.total_quantity_1, 10);
            additionalQuantity += parseInt(orderDetail.total_quantity_1, 10);
          }

          // analysis menu_sate
          let orderTypeMenuSateName = '';
          if (orderDetail.order_name.toUpperCase() === 'SATE') {
            orderTypeMenuSateName = 'SATE';
          }
          if (orderTypeMenuSateName) {
            uniqName = _.find(menuSateNameQuantities, (o) => {
              return orderTypeMenuSateName === o.name;
            });
            if (!uniqName) {
              menuSateSequence++;
              menuSateNameQuantities.push({
                sequence: menuSateSequence,
                name: orderTypeMenuSateName,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantities.length; k++) {
                if (menuSateNameQuantities[k].name === orderTypeMenuSateName) {
                  menuSateNameQuantities[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // analysis menu_non_sate
          const satuanMenus = _.cloneDeep(menuSatuanTypes);
          const satuanMenu = _.find(satuanMenus, (o) => {
            return o.value === orderDetail.order_name;
          });
          let orderTypeMenuNonSateName = '';
          if (!orderTypeMenuSateName && satuanMenu && satuanMenu.value) {
            orderTypeMenuNonSateName = satuanMenu.value.replace(/_/g, ' ').toUpperCase();
          }
          uniqName = _.find(menuNonSateNameQuantities, (o) => {
            return orderTypeMenuNonSateName === o.name;
          });
          if (!uniqName) {
            menuNonSateSequence++;
            menuNonSateNameQuantities.push({
              sequence: menuNonSateSequence,
              name: orderTypeMenuNonSateName,
              quantity: parseInt(orderDetail.total_quantity_1, 10)
            });
          } else {
            for (let l = 0; l < menuNonSateNameQuantities.length; l++) {
              if (menuNonSateNameQuantities[l].name === orderTypeMenuNonSateName) {
                menuNonSateNameQuantities[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                break;
              }
            }
          }

          // box
          uniqName = _.find(aqiqahPackageTypeNamesBox, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNamesBox.push(orderTypeName);
          }
          if (orderDetail.order_name !== 'PAKET BOX SATUAN') {
            // aqiqahPackageTypeTotalQuantityBox += parseInt(orderDetail.total_quantity_1, 10);
            additionalQuantityBox += parseInt(orderDetail.total_quantity_1, 10);
          }

          // box menu_sate
          let orderTypeMenuSateNameBox = '';
          if (orderDetail.order_name.toUpperCase() === 'SATE') {
            orderTypeMenuSateNameBox = 'SATE';
          }
          if (orderTypeMenuSateNameBox) {
            uniqName = _.find(menuSateNameQuantitiesBox, (o) => {
              return orderTypeMenuSateNameBox === o.name;
            });
            if (!uniqName) {
              menuSateSequenceBox++;
              menuSateNameQuantitiesBox.push({
                sequence: menuSateSequenceBox,
                name: orderTypeMenuSateNameBox,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantitiesBox.length; k++) {
                if (menuSateNameQuantitiesBox[k].name === orderTypeMenuSateNameBox) {
                  menuSateNameQuantitiesBox[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // box menu_non_sate
          uniqName = _.find(menuNonSateNameQuantitiesBox, (o) => {
            return orderTypeMenuNonSateName === o.name;
          });
          if (!uniqName) {
            menuNonSateSequenceBox++;
            menuNonSateNameQuantitiesBox.push({
              sequence: menuNonSateSequenceBox,
              name: orderTypeMenuNonSateName,
              quantity: parseInt(orderDetail.total_quantity_1, 10)
            });
          } else {
            for (let l = 0; l < menuNonSateNameQuantitiesBox.length; l++) {
              if (menuNonSateNameQuantitiesBox[l].name === orderTypeMenuNonSateName) {
                menuNonSateNameQuantitiesBox[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                break;
              }
            }
          }
        } else if (orderDetail.type === 'MAKAN GRATIS') {
          // analysis combine box & order
          orderTypeName = orderDetail.order_name;
          uniqName = _.find(aqiqahPackageTypeNames, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNames.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantity += parseInt(orderDetail.total_quantity_1, 10);

          // analysis menu_sate
          let orderTypeMenuSateName = '';
          if (orderDetail.order_name.toUpperCase() === 'SATE') {
            orderTypeMenuSateName = 'SATE';
          }
          if (orderTypeMenuSateName) {
            uniqName = _.find(menuSateNameQuantities, (o) => {
              return orderTypeMenuSateName === o.name;
            });
            if (!uniqName) {
              menuSateSequence++;
              menuSateNameQuantities.push({
                sequence: menuSateSequence,
                name: orderTypeMenuSateName,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantities.length; k++) {
                if (menuSateNameQuantities[k].name === orderTypeMenuSateName) {
                  menuSateNameQuantities[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // analysis menu_non_sate
          const makanGratisMenus = _.cloneDeep(menuMakanGratisTypes);
          const makanGratisMenu = _.find(makanGratisMenus, (o) => {
            return o.value === orderDetail.order_name;
          });
          let orderTypeMenuNonSateName = '';
          if (!orderTypeMenuSateName && makanGratisMenu && makanGratisMenu.value) {
            orderTypeMenuNonSateName = makanGratisMenu.value.replace(/_/g, ' ').toUpperCase();
          }
          uniqName = _.find(menuNonSateNameQuantities, (o) => {
            return orderTypeMenuNonSateName === o.name;
          });
          if (!uniqName) {
            menuNonSateSequence++;
            menuNonSateNameQuantities.push({
              sequence: menuNonSateSequence,
              name: orderTypeMenuNonSateName,
              quantity: parseInt(orderDetail.total_quantity_1, 10)
            });
          } else {
            for (let l = 0; l < menuNonSateNameQuantities.length; l++) {
              if (menuNonSateNameQuantities[l].name === orderTypeMenuNonSateName) {
                menuNonSateNameQuantities[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                break;
              }
            }
          }

          // box
          uniqName = _.find(aqiqahPackageTypeNamesBox, (o) => {
            return orderTypeName === o;
          });
          if (!uniqName) {
            aqiqahPackageTypeNamesBox.push(orderTypeName);
          }
          aqiqahPackageTypeTotalQuantityBox += parseInt(orderDetail.total_quantity_1, 10);

          // box menu_sate
          let orderTypeMenuSateNameBox = '';
          if (orderDetail.order_name.toUpperCase() === 'SATE') {
            orderTypeMenuSateNameBox = 'SATE';
          }
          if (orderTypeMenuSateNameBox) {
            uniqName = _.find(menuSateNameQuantitiesBox, (o) => {
              return orderTypeMenuSateNameBox === o.name;
            });
            if (!uniqName) {
              menuSateSequenceBox++;
              menuSateNameQuantitiesBox.push({
                sequence: menuSateSequenceBox,
                name: orderTypeMenuSateNameBox,
                quantity: parseInt(orderDetail.total_quantity_1, 10)
              });
            } else {
              for (let k = 0; k < menuSateNameQuantitiesBox.length; k++) {
                if (menuSateNameQuantitiesBox[k].name === orderTypeMenuSateNameBox) {
                  menuSateNameQuantitiesBox[k].quantity += parseInt(orderDetail.total_quantity_1, 10);
                  break;
                }
              }
            }
          }

          // box menu_non_sate
          uniqName = _.find(menuNonSateNameQuantitiesBox, (o) => {
            return orderTypeMenuNonSateName === o.name;
          });
          if (!uniqName) {
            menuNonSateSequenceBox++;
            menuNonSateNameQuantitiesBox.push({
              sequence: menuNonSateSequenceBox,
              name: orderTypeMenuNonSateName,
              quantity: parseInt(orderDetail.total_quantity_1, 10)
            });
          } else {
            for (let l = 0; l < menuNonSateNameQuantitiesBox.length; l++) {
              if (menuNonSateNameQuantitiesBox[l].name === orderTypeMenuNonSateName) {
                menuNonSateNameQuantitiesBox[l].quantity += parseInt(orderDetail.total_quantity_1, 10);
                break;
              }
            }
          }
        }
      }
    }
  }

  // summary data
  // box
  for (let i = 0; i < menuSateNameQuantitiesBox.length; i++) {
    menuSateNameBox += menuSateNameQuantitiesBox[i].sequence + '. ' + menuSateNameQuantitiesBox[i].name + ', Jumlah ' + menuSateNameQuantitiesBox[i].quantity + '\r\n';
    docDataBox.porsi_sate_quantity += menuSateNameQuantitiesBox[i].quantity;
  }
  for (let i = 0; i < menuNonSateNameQuantitiesBox.length; i++) {
    menuNonSateNameBox += menuNonSateNameQuantitiesBox[i].sequence + '. ' + menuNonSateNameQuantitiesBox[i].name + ', Jumlah ' + menuNonSateNameQuantitiesBox[i].quantity + '\r\n';
    docDataBox.porsi_non_sate_quantity += menuNonSateNameQuantitiesBox[i].quantity;
  }
  if (docDataBox.porsi_non_sate_quantity > 0) {
    docDataBox.porsi_non_sate_quantity = aqiqahPackageTypeTotalQuantityBox;
  }
  // order
  for (let i = 0; i < menuSateNameQuantitiesOrder.length; i++) {
    menuSateNameOrder += menuSateNameQuantitiesOrder[i].sequence + '. ' + menuSateNameQuantitiesOrder[i].name + ', Jumlah ' + menuSateNameQuantitiesOrder[i].quantity + '\r\n';
    docDataOrder.porsi_sate_quantity += menuSateNameQuantitiesOrder[i].quantity;
  }
  for (let i = 0; i < menuNonSateNameQuantitiesOrder.length; i++) {
    menuNonSateNameOrder += menuNonSateNameQuantitiesOrder[i].sequence + '. ' + menuNonSateNameQuantitiesOrder[i].name + ', Jumlah ' + menuNonSateNameQuantitiesOrder[i].quantity + '\r\n';
    // docDataOrder.porsi_non_sate_quantity += menuNonSateNameQuantitiesOrder[i].quantity;
  }
  docDataOrder.porsi_non_sate_quantity = nonBoxQuantity;
  // analysis
  for (let i = 0; i < menuSateNameQuantities.length; i++) {
    menuSateName += menuSateNameQuantities[i].sequence + '. ' + menuSateNameQuantities[i].name + ', Jumlah ' + menuSateNameQuantities[i].quantity + '\r\n';
    docData.porsi_sate_quantity += menuSateNameQuantities[i].quantity;
  }
  for (let i = 0; i < menuNonSateNameQuantities.length; i++) {
    menuNonSateName += menuNonSateNameQuantities[i].sequence + '. ' + menuNonSateNameQuantities[i].name + ', Jumlah ' + menuNonSateNameQuantities[i].quantity + '\r\n';
    docData.porsi_non_sate_quantity += menuNonSateNameQuantities[i].quantity;
  }
  if (docData.porsi_non_sate_quantity > 0) {
    docData.porsi_non_sate_quantity = docDataBox.porsi_non_sate_quantity + docDataOrder.porsi_non_sate_quantity;
  }

  // analysis
  let typeSequence = 0;
  let typeName = '';
  for (let i = 0; i < aqiqahPackageTypeNames.length; i++) {
    typeSequence++;
    typeName += typeSequence + '. ' + aqiqahPackageTypeNames[i] + '\r\n';
  }
  if (typeName) {
    typeName = typeName.slice(0, -2);
  } else {
    typeName = noData;
  }
  docData.box_type = typeName;
  docData.box_quantity = aqiqahPackageTypeTotalQuantity;
  docData.additional_quantity = additionalQuantity;  
  docData.dissert = dissertName;

  if (menuSateName) {
    menuSateName = menuSateName.slice(0, -2);
    docData = setOrderPorsiBungkus(docData, 'SATE');
  } else {
    menuSateName = noData;
  }
  docData.menu_sate = menuSateName;

  if (menuNonSateName) {
    menuNonSateName = menuNonSateName.slice(0, -2);
    docData = setOrderPorsiBungkus(docData, 'NON SATE');
  } else {
    menuNonSateName = noData;
  }
  docData.menu_non_sate = menuNonSateName;

  // box
  let typeSequenceBox = 0;
  let typeNameBox = '';
  for (let i = 0; i < aqiqahPackageTypeNamesBox.length; i++) {
    typeSequenceBox++;
    typeNameBox += typeSequenceBox + '. ' + aqiqahPackageTypeNamesBox[i] + '\r\n';
  }
  if (typeNameBox) {
    typeNameBox = typeNameBox.slice(0, -2);
  } else {
    typeNameBox = noData;
  }
  docDataBox.box_type = typeNameBox;
  docDataBox.box_quantity = aqiqahPackageTypeTotalQuantityBox; 
  docDataBox.additional_quantity = additionalQuantityBox;
  
  if (menuSateNameBox) {
    menuSateNameBox = menuSateNameBox.slice(0, -2);
    docDataBox = setOrderPorsiBungkus(docDataBox, 'SATE');
  } else {
    menuSateNameBox = noData;
  }
  docDataBox.menu_sate = menuSateNameBox;

  if (menuNonSateNameBox) {
    menuNonSateNameBox = menuNonSateNameBox.slice(0, -2);
    docDataBox = setOrderPorsiBungkus(docDataBox, 'NON SATE');
  } else {
    menuNonSateNameBox = noData;
  }
  docDataBox.menu_non_sate = menuNonSateNameBox;

  // order
  let typeSequenceOrder = 0;
  let typeNameOrder = '';
  for (let i = 0; i < aqiqahPackageTypeNamesOrder.length; i++) {
    typeSequenceOrder++;
    typeNameOrder += typeSequenceOrder + '. ' + aqiqahPackageTypeNamesOrder[i] + '\r\n';
  }
  if (typeNameOrder) {
    typeNameOrder = typeNameOrder.slice(0, -2);
  } else {
    typeNameOrder = noData;
  }
  docDataOrder.box_type = typeNameOrder;
  docDataOrder.box_quantity = aqiqahPackageTypeTotalQuantityOrder;

  if (menuSateNameOrder) {
    menuSateNameOrder = menuSateNameOrder.slice(0, -2);
    docDataOrder = setOrderPorsiBungkus(docDataOrder, 'SATE');
  } else {
    menuSateNameOrder = noData;
  }
  docDataOrder.menu_sate = menuSateNameOrder;

  if (menuNonSateNameOrder) {
    menuNonSateNameOrder = menuNonSateNameOrder.slice(0, -2);
    docDataOrder = setOrderPorsiBungkus(docDataOrder, 'NON SATE');
  } else {
    menuNonSateNameOrder = noData;
  }
  docDataOrder.menu_non_sate = menuNonSateNameOrder;

  frappe.show_progress('Please wait', 40, 100, 'Completing...');
  return {
    docDataAnalysis: docData,
    docDataBox: docDataBox,
    docDataOrder: docDataOrder
  };
};

const updateSkphAnalysis = async (resultSkphAnalysis, docData) => {
  const user = frappe.session.user;
  const today = frappe.datetime.now_datetime();

  // update skph analysis
  delete docData['is_manual_menu_sate'];
  if (resultSkphAnalysis.is_manual_menu_sate) {
    delete docData['porsi_per_bungkus_sate_quantity'];
    delete docData['bungkus_sate_quantity'];
    delete docData['sisa_sate_quantity'];
  }

  delete docData['is_manual_menu_non_sate'];
  if (resultSkphAnalysis.is_manual_menu_non_sate) {
    delete docData['porsi_per_bungkus_non_sate_quantity'];
    delete docData['bungkus_non_sate_quantity'];
    delete docData['sisa_non_sate_quantity'];
  }

  delete docData['porsi_sate_description'];
  delete docData['porsi_non_sate_description'];

  await frappe.call({
    method: 'frappe.client.set_value',
    args: {
      doctype: 'SKPH Analysis',
      name: resultSkphAnalysis.name,
      fieldname: docData
    },
    async: false,
    update_modified: false
  });

  // set all wo_code
  await frappe.db.get_list('SKPH Analysis', {
    filters: [
      ['event_date', '=', docData.event_date],
      ['status_data', '=', 'OK'],
      ['sales_order_status', '!=', 'Cancelled']
    ],
    fields: ['name', 'sub_district', 'sub_district_name', 'wo_region_abbreviation'],
    order_by: 'leave_date_time asc',
    limit: 0
  }).then(async (results) => {
    if (results && results.length > 0) {
      const orFilters = [];
      for (let i = 0; i < results.length; i++) {
        const resultData = results[i];
        if (resultData.sub_district) {
          orFilters.push(['region_sub_district', '=', resultData.sub_district]);
        }
      }

      await frappe.db.get_list('Shipping Measurement', {
        or_filters: orFilters,
        fields: ['region_sub_district', 'region_abbreviation', 'name'],
        limit: 0
      }).then(async (shippingMeasurementResults) => {
        $.each(results, async (index, d) => {
          const resultData = results[index];
          const sequence = index + 1;

          const region = _.find(shippingMeasurementResults, (o) => {
            return resultData.sub_district === o.region_sub_district;
          });
          if (region) {
            resultData.wo_region_abbreviation = region.region_abbreviation;
            resultData.shipping_measurement = region.name;
          } else {
            resultData.wo_region_abbreviation = resultData.sub_district_name.replace(/ /g, '');
            resultData.shipping_measurement = null;
            resultData.kilometers_information = 0;
          }

          resultData.wo_sequence = sequence;
          resultData.wo_code = (sequence + resultData.wo_region_abbreviation).toString().trim().toUpperCase();
          resultData.updated_by = user;
          resultData.updated_at = today;

          await frappe.call({
            method: 'frappe.client.set_value',
            args: {
              doctype: 'SKPH Analysis',
              name: resultData.name,
              fieldname: resultData
            },
            async: false,
            update_modified: false,
            callback: async (r) => {
              const result = r && r.message || null;
              if (result && result.name &&
                result.name === resultSkphAnalysis.name) {
                // get new data skph analysis
                resultSkphAnalysis = result;
              }
            }
          });
        });
      });
    }
  });

  return resultSkphAnalysis;
};

const updateSkphBox = async (docDataBox, user, today) => {
  let resultSkphBox = null;
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Box',
      filters: {
        'skph_analysis': docDataBox.skph_analysis
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphBox = result;
      }
    }
  });

  if (resultSkphBox && resultSkphBox.name) {
    delete docDataBox['is_manual_menu_sate'];
    if (resultSkphBox.is_manual_menu_sate) {
      delete docDataBox['porsi_per_bungkus_sate_quantity'];
      delete docDataBox['bungkus_sate_quantity'];
      delete docDataBox['sisa_sate_quantity'];
    }

    delete docDataBox['is_manual_menu_non_sate'];
    if (resultSkphBox.is_manual_menu_non_sate) {
      delete docDataBox['porsi_per_bungkus_non_sate_quantity'];
      delete docDataBox['bungkus_non_sate_quantity'];
      delete docDataBox['sisa_non_sate_quantity'];
    }

    delete docDataBox['porsi_sate_description'];
    delete docDataBox['porsi_non_sate_description'];

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Box',
        name: resultSkphBox.name,
        fieldname: docDataBox
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphBox = result;
        }
      }
    });
  } else {
    // insert skph box
    docDataBox['doctype'] = 'SKPH Box';
    docDataBox['sales_order'] = cur_frm.doc['name'];

    docDataBox['created_by'] = user;
    docDataBox['created_at'] = today;

    await frappe.call({
      method: 'frappe.client.insert',
      args: {
        doc: docDataBox
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphBox = result;
        }
      }
    });
  }

  if (resultSkphBox && resultSkphBox.name) {
    if (resultSkphBox.name !== cur_frm.doc['skph_box']) {
      // update sales order
      await frappe.call({
        method: 'frappe.client.set_value',
        args: {
          doctype: 'Sales Order',
          name: cur_frm.doc['name'],
          fieldname: {
            skph_box: resultSkphBox.name
          }
        },
        async: false,
        callback: (r) => {
          cur_frm.set_value('skph_box', resultSkphBox.name);
          cur_frm.refresh_field('skph_box');
        }
      });
    }
  }

  return resultSkphBox;
};

const updateSkphDeliveryBox = async (resultSkphAnalysis, resultSkphBox, user, today) => {
  let resultSkphDeliveryBox = null
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Delivery Box',
      filters: {
        'event_date': resultSkphBox.event_date
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphDeliveryBox = result;
      }
    }
  });

  let docDataDeliveryBox = {
    event_date: resultSkphBox.event_date,
    sales_order_quantity: 0,
    sales_order_driver_quantity: 0,
    driver_completed_percentage: 0,
    employee_quantity: 0,
    updated_by: user,
    updated_at: today
  };

  const leaveDateTime = moment(resultSkphBox.leave_date_time);
  const leaveDateTimeHours = parseInt(leaveDateTime.format('HH'), 10);
  const leaveDateTimeMinutes = parseInt(leaveDateTime.format('mm'), 10);

  let timeDeliveryBox = '';
  if (leaveDateTimeHours < 1) {
    timeDeliveryBox = 'time_01_00';
  } else if (leaveDateTimeHours > 31) {
    timeDeliveryBox = 'time_24_00';
  } else {
    for (let i = 1; i <= 31; i++) {
      const hourString = ('0' + i).slice(-2);
      if (leaveDateTimeHours === i) {
        if (leaveDateTimeHours === 31) {
          timeDeliveryBox = 'time_' + hourString + '_00';
          break;
        } else {
          if (leaveDateTimeMinutes >= 0 && leaveDateTimeMinutes < 30) {
            timeDeliveryBox = 'time_' + hourString + '_00';
            break;
          } else {
            timeDeliveryBox = 'time_' + hourString + '_30';
            break;
          }
        }
      }
    }
  }

  const docDataSkphDeliverySchedule = {
    wo_code: resultSkphAnalysis.wo_code,
    sales_order: resultSkphBox.sales_order,
    skph_analysis: resultSkphBox.skph_analysis,
    skph_box: resultSkphBox.name,
    delivery_schedule_group: timeDeliveryBox.replace('time_', '').replace('_', ':'),
    original_delivery_schedule_group: timeDeliveryBox.replace('time_', '').replace('_', ':')
  };

  if (resultSkphDeliveryBox && resultSkphDeliveryBox.name) {
    if (timeDeliveryBox) {
      await frappe.db.get_list('SKPH Delivery Schedule', {
        filters: {
          'parent': resultSkphDeliveryBox.name
        },
        fields: [
          'parentfield', 'is_employee', 'employee', 'employee_name', 'driver_personnel',
          'driver_personnel_name', 'is_actual_employee', 'actual_employee', 'actual_employee_name',
          'driver_actual_personnel', 'driver_actual_personnel_name', 'actual_time', 'realization_time',
          'wo_code', 'sales_order', 'skph_analysis', 'skph_box', 'skph_order', 'kilometers_information',
          'delivery_schedule_group', 'original_delivery_schedule_group',
          'region_district', 'region_district_name'
        ],
        order_by: 'parentfield asc, kilometers_information desc',
        limit: 0
      }).then((results) => {
        const employees = [];
        let isSalesOrderExists = false;
        if (results && results.length > 0) {
          for (let i = 0; i < results.length; i++) {
            const result = results[i];

            if (result.sales_order === docDataSkphDeliverySchedule.sales_order) {
              docDataSkphDeliverySchedule['skph_order'] = result.skph_order;
              docDataSkphDeliverySchedule['is_employee'] = result.is_employee;
              docDataSkphDeliverySchedule['employee'] = result.employee;
              docDataSkphDeliverySchedule['employee_name'] = result.employee_name;
              docDataSkphDeliverySchedule['driver_personnel'] = result.driver_personnel;
              docDataSkphDeliverySchedule['driver_personnel_name'] = result.driver_personnel_name;
              docDataSkphDeliverySchedule['is_actual_employee'] = result.is_actual_employee;
              docDataSkphDeliverySchedule['actual_employee'] = result.actual_employee;
              docDataSkphDeliverySchedule['actual_employee_name'] = result.actual_employee_name;
              docDataSkphDeliverySchedule['driver_actual_personnel'] = result.driver_actual_personnel;
              docDataSkphDeliverySchedule['driver_actual_personnel_name'] = result.driver_actual_personnel_name;
              docDataSkphDeliverySchedule['actual_time'] = result.actual_time;
              docDataSkphDeliverySchedule['realization_time'] = result.realization_time;
              docDataSkphDeliverySchedule['kilometers_information'] = result.kilometers_information;
              if (resultSkphDeliveryBox.is_manual_delivery) {
                docDataSkphDeliverySchedule['delivery_schedule_group'] = result.delivery_schedule_group;
                docDataSkphDeliverySchedule['original_delivery_schedule_group'] = result.original_delivery_schedule_group || timeDeliveryBox.replace('time_', '').replace('_', ':');
              }
              docDataSkphDeliverySchedule['region_district'] = result.region_district;
              docDataSkphDeliverySchedule['region_district_name'] = result.region_district_name;

              if (!docDataSkphDeliverySchedule['actual_time'] && docDataSkphDeliverySchedule['delivery_schedule_group']) {
                docDataSkphDeliverySchedule['actual_time'] = docDataSkphDeliverySchedule['delivery_schedule_group'] + ':00';
              }

              isSalesOrderExists = true;
            } else {
              let parentfield = result.parentfield;
              let delivery_schedule_group = result.delivery_schedule_group;
              let original_delivery_schedule_group = result.original_delivery_schedule_group;
              if (!resultSkphDeliveryBox.is_manual_delivery) {
                delivery_schedule_group = original_delivery_schedule_group || parentfield.replace('time_', '').replace('_', ':');
                parentfield = 'time_' + delivery_schedule_group.replace(':', '_');
              }

              if (!Array.isArray(docDataDeliveryBox[parentfield])) {
                docDataDeliveryBox[parentfield] = [];
              }

              docDataDeliveryBox[parentfield].push({
                wo_code: result.wo_code,
                sales_order: result.sales_order,
                skph_analysis: result.skph_analysis,
                skph_box: result.skph_box,
                skph_order: result.skph_order,
                is_employee: result.is_employee,
                employee: result.employee,
                employee_name: result.employee_name,
                driver_personnel: result.driver_personnel,
                driver_personnel_name: result.driver_personnel_name,
                is_actual_employee: result.is_actual_employee,
                actual_employee: result.actual_employee,
                actual_employee_name: result.actual_employee_name,
                driver_actual_personnel: result.driver_actual_personnel,
                driver_actual_personnel_name: result.driver_actual_personnel_name,
                actual_time: ((!result.actual_time && delivery_schedule_group) ? delivery_schedule_group + ':00' : result.actual_time),
                realization_time: result.realization_time,
                kilometers_information: result.kilometers_information,
                delivery_schedule_group: delivery_schedule_group,
                original_delivery_schedule_group: original_delivery_schedule_group,
                region_district: result.region_district,
                region_district_name: result.region_district_name
              });
            }

            if (result.sales_order) {
              docDataDeliveryBox['sales_order_quantity']++;
            }
            if (result.sales_order && result.employee) {
              docDataDeliveryBox['sales_order_driver_quantity']++;
            }
            if (result.employee) {
              const uniqName = _.find(employees, (o) => {
                return result.employee === o;
              });
              if (!uniqName) {
                employees.push(result.employee);
              }
            }
          }
        }
        docDataDeliveryBox['employee_quantity'] = employees.length;
        if (!isSalesOrderExists) {
          docDataDeliveryBox['sales_order_quantity']++;
        }
      });
      timeDeliveryBox = 'time_' + docDataSkphDeliverySchedule['delivery_schedule_group'].replace(':', '_');
      if (!Array.isArray(docDataDeliveryBox[timeDeliveryBox])) {
        docDataDeliveryBox[timeDeliveryBox] = [];
      }
      docDataDeliveryBox[timeDeliveryBox].push(docDataSkphDeliverySchedule);
      docDataDeliveryBox[timeDeliveryBox] = _.orderBy(docDataDeliveryBox[timeDeliveryBox], ['kilometers_information'], ['desc']);
    }

    if (docDataDeliveryBox['sales_order_quantity'] !== 0) {
      docDataDeliveryBox['driver_completed_percentage'] = docDataDeliveryBox['sales_order_driver_quantity'] / docDataDeliveryBox['sales_order_quantity'] * 100;
    }
    docDataDeliveryBox = fillUnusedDataDelivery(docDataDeliveryBox);

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Delivery Box',
        name: resultSkphDeliveryBox.name,
        fieldname: docDataDeliveryBox
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphDeliveryBox = result;
        }
      }
    });
  } else {
    // insert skph delivery box
    docDataDeliveryBox['doctype'] = 'SKPH Delivery Box';

    docDataDeliveryBox['created_by'] = user;
    docDataDeliveryBox['created_at'] = today;

    if (timeDeliveryBox) {
      docDataSkphDeliverySchedule['is_employee'] = 0;
      docDataSkphDeliverySchedule['employee'] = '';
      docDataSkphDeliverySchedule['employee_name'] = '';
      docDataSkphDeliverySchedule['driver_personnel'] = '';
      docDataSkphDeliverySchedule['driver_personnel_name'] = '';
      docDataSkphDeliverySchedule['is_actual_employee'] = 0;
      docDataSkphDeliverySchedule['actual_employee'] = '';
      docDataSkphDeliverySchedule['actual_employee_name'] = '';
      docDataSkphDeliverySchedule['driver_actual_personnel'] = '';
      docDataSkphDeliverySchedule['driver_actual_personnel_name'] = '';
      docDataSkphDeliverySchedule['actual_time'] = timeDeliveryBox.replace('time_', '').replace('_', ':') + ':00';
      docDataSkphDeliverySchedule['realization_time'] = '';
      docDataSkphDeliverySchedule['kilometers_information'] = 0;
      docDataSkphDeliverySchedule['delivery_schedule_group'] = timeDeliveryBox.replace('time_', '').replace('_', ':');
      docDataSkphDeliverySchedule['original_delivery_schedule_group'] = timeDeliveryBox.replace('time_', '').replace('_', ':');
      docDataSkphDeliverySchedule['region_district'] = '';
      docDataSkphDeliverySchedule['region_district_name'] = '';

      docDataDeliveryBox[timeDeliveryBox] = [docDataSkphDeliverySchedule];
      docDataDeliveryBox['sales_order_quantity'] = docDataDeliveryBox[timeDeliveryBox].length;
    }
    docDataDeliveryBox = fillUnusedDataDelivery(docDataDeliveryBox);

    await frappe.call({
      method: 'frappe.client.insert',
      args: {
        doc: docDataDeliveryBox
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphDeliveryBox = result;
        }
      }
    });
  }

  let timeStartGelarBox = '';
  let timeFinishGelarBox = '';
  if (timeDeliveryBox) {
    const times = timeDeliveryBox.split('_');
    if (times.length === 3) {
      timeFinishGelarBox = times[1] + ':' + times[2] + ':00';

      const startDate = moment(timeFinishGelarBox, 'HH:mm:ss').subtract(gelarMinuteBeforeDelivery, 'minutes');
      timeStartGelarBox = startDate.format('HH:mm:ss');
    }
  }

  if (timeStartGelarBox && timeFinishGelarBox) {
    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Analysis',
        name: docDataSkphDeliverySchedule.skph_analysis,
        fieldname: {
          gelar_box_time_start: timeStartGelarBox,
          gelar_box_time_finish: timeFinishGelarBox
        }
      },
      async: false,
      update_modified: false
    });

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Box',
        name: docDataSkphDeliverySchedule.skph_box,
        fieldname: {
          gelar_box_time_start: timeStartGelarBox,
          gelar_box_time_finish: timeFinishGelarBox
        }
      },
      async: false,
      update_modified: false
    });
  }

  return resultSkphDeliveryBox;
};

const placeAutomationSkphDeliveryBox = async (resultSkphDeliveryBox, user, today) => {
  let isChanged = false;
  for (let i = 1; i <= 31; i++) {
    const hourString = ('0' + i).slice(-2);
    let timeHourString = 'time_' + hourString + '_00';
    let resultPlaceAutomation = placeAutomationCalculation(resultSkphDeliveryBox, timeHourString, resultSkphDeliveryBox[timeHourString] || []);
    if (resultPlaceAutomation) {
      if (!isChanged && resultPlaceAutomation.isChanged) {
        isChanged = resultPlaceAutomation.isChanged;
      }
      resultSkphDeliveryBox = _.cloneDeep(resultPlaceAutomation.resultSkphDelivery);
    }
    if (i !== 31) {
      timeHourString = 'time_' + hourString + '_30';
      resultPlaceAutomation = placeAutomationCalculation(resultSkphDeliveryBox, timeHourString, resultSkphDeliveryBox[timeHourString] || []);
      if (resultPlaceAutomation) {
        if (!isChanged && resultPlaceAutomation.isChanged) {
          isChanged = resultPlaceAutomation.isChanged;
        }
        resultSkphDeliveryBox = _.cloneDeep(resultPlaceAutomation.resultSkphDelivery);
      }
    }
  }

  if (isChanged) {
    const skphDeliveryBoxs = [];
    for (let i = 1; i <= 31; i++) {
      const hourString = ('0' + i).slice(-2);
      skphDeliveryBoxs.push(...(resultSkphDeliveryBox['time_' + hourString + '_00'] || []));
      if (i !== 31) {
        skphDeliveryBoxs.push(...(resultSkphDeliveryBox['time_' + hourString + '_30'] || []));
      }
    }

    let docDataDeliveryBox = {};
    for (let i = 0; i < skphDeliveryBoxs.length; i++) {
      const skphDeliveryBox = skphDeliveryBoxs[i];

      if (!Array.isArray(docDataDeliveryBox[skphDeliveryBox.parentfield])) {
        docDataDeliveryBox[skphDeliveryBox.parentfield] = [];
      }

      docDataDeliveryBox[skphDeliveryBox.parentfield].push(skphDeliveryBox);
    }
    docDataDeliveryBox = fillUnusedDataDelivery(docDataDeliveryBox);

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Delivery Box',
        name: resultSkphDeliveryBox.name,
        fieldname: docDataDeliveryBox
      },
      async: false,
      update_modified: false,
      callback: async (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          // get new data skph delivery box
          resultSkphDeliveryBox = result;
        }
      }
    });

    await updateGelarBoxTimeStartFinish(resultSkphDeliveryBox);
  }

  return resultSkphDeliveryBox;
};

const updateSkphGelarBox = async (resultSkphBox, user, today) => {
  let resultSkphGelarBox = null;
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Gelar Box',
      filters: {
        'event_date': resultSkphBox.event_date
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphGelarBox = result;
      }
    }
  });

  const oldTimeStartGelarBox = resultSkphBox.gelar_box_time_start;
  let newTimeStartGelarBox = '';
  const docDataGelarBox = {
    event_date: resultSkphBox.event_date,
    sales_order_quantity: 0,
    updated_by: user,
    updated_at: today
  };

  let timeDeliveryBox = '';
  await frappe.db.get_list('SKPH Delivery Schedule', {
    filters: {
      'sales_order': resultSkphBox.sales_order,
      'parenttype': 'SKPH Delivery Box'
    },
    fields: ['name', 'parentfield'],
    limit: 0
  }).then((results) => {
    if (results && results.length > 0) {
      if (results[0] && results[0].name) {
        timeDeliveryBox = results[0].parentfield;
      }
    }
  });

  if (resultSkphGelarBox && resultSkphGelarBox.name) {
    // set all skph gelar box
    for (let i = 1; i <= maxGelarBatch; i++) {
      docDataGelarBox['batch_' + i + '_is_use'] = 0;
      docDataGelarBox['batch_' + i + '_time_start'] = '00:00:00';
      docDataGelarBox['batch_' + i + '_time_finish'] = '00:00:00';
      docDataGelarBox['batch_' + i] = [];
      docDataGelarBox['batch_' + i + '_total'] = 0;

      const sequence = _.find(sequenceNames, (o) => {
        return i === o.sequence;
      });
      if (sequence) {
        docDataGelarBox['batch_' + i + '_name'] = sequence.name;
      }
    }

    await frappe.db.get_list('SKPH Analysis', {
      filters: [
        ['event_date', '=', cur_frm.doc['event_date']],
        ['status_data', '=', 'OK'],
        ['sales_order_status', '!=', 'Cancelled'],
        ['skph_box', '!=', '']
      ],
      fields: [
        'skph_box', 'skph_order', 'wo_code', 'sales_order', 'name',
        'gelar_box_time_start', 'gelar_box_time_finish', 'additional_quantity'
      ],
      order_by: 'gelar_box_time_start asc, wo_sequence asc',
      limit: 0
    }).then(async (results) => {
      if (results && results.length > 0) {
        const orFilters = [];
        for (let i = 0; i < results.length; i++) {
          const resultData = results[i];
          if (resultData.skph_box) {
            orFilters.push(['name', '=', resultData.skph_box]);
          }
        }

        await frappe.db.get_list('SKPH Box', {
          or_filters: orFilters,
          fields: ['box_type', 'bungkus_sate_quantity', 'menu_non_sate', 'box_quantity', 'name'],
          limit: 0
        }).then((skphBoxResults) => {
          let sequence = 1;

          for (let i = 0; i < results.length; i++) {
            const resultBefore = results[i - 1] || null;
            const result = results[i];

            const docDataSkphGelarSchedule = {
              wo_code: result.wo_code,
              package_description: '',
              quantity: 0,
              additional_quantity: result.additional_quantity,
              sales_order: result.sales_order,
              skph_analysis: result.name,
              skph_box: result.skph_box,
              skph_order: result.skph_order
            };

            const resultSkphBoxData = _.find(skphBoxResults, (o) => {
              return docDataSkphGelarSchedule.skph_box === o.name;
            });
            if (resultSkphBoxData) {
              docDataSkphGelarSchedule.package_description = resultSkphBoxData['box_type'];
              docDataSkphGelarSchedule.quantity = resultSkphBoxData['box_quantity'];
            }
            if (result.sales_order) {
              docDataGelarBox['sales_order_quantity']++;
            }

            if (i === 0) {
              docDataGelarBox['batch_' + sequence + '_is_use'] = 1;
              docDataGelarBox['batch_' + sequence + '_time_start'] = result.gelar_box_time_start;
              docDataGelarBox['batch_' + sequence + '_time_finish'] = result.gelar_box_time_finish;
              docDataGelarBox['batch_' + sequence] = [docDataSkphGelarSchedule];
              docDataGelarBox['batch_' + sequence + '_total'] = 0;
            } else {
              if (resultBefore.gelar_box_time_start === result.gelar_box_time_start &&
                resultBefore.gelar_box_time_finish === result.gelar_box_time_finish) {
                if (sequence >= 17) {
                  sequence = 16;
                }
                docDataGelarBox['batch_' + sequence].push(docDataSkphGelarSchedule);
              } else {
                sequence++;
                if (sequence >= 17) {
                  sequence = 16;
                }
                docDataGelarBox['batch_' + sequence + '_total'] = 0;

                if (!Array.isArray(docDataGelarBox['batch_' + sequence])) {
                  docDataGelarBox['batch_' + sequence] = [];
                }

                docDataGelarBox['batch_' + sequence + '_is_use'] = 1;
                docDataGelarBox['batch_' + sequence + '_time_start'] = result.gelar_box_time_start;
                docDataGelarBox['batch_' + sequence + '_time_finish'] = result.gelar_box_time_finish;
                docDataGelarBox['batch_' + sequence].push(docDataSkphGelarSchedule);
              }
            }

            docDataGelarBox['batch_' + sequence + '_total'] += docDataSkphGelarSchedule.quantity;
          }

          // recount all time_start
          for (let i = 1; i <= sequence; i++) {
            if (docDataGelarBox['batch_' + i + '_is_use']) {
              console.log('docDataGelarBox[batch_ + i + _total] : ', docDataGelarBox['batch_' + i + '_total'])
              const newGelarMinuteBeforeDelivery = countMinuteBeforeDelivery(docDataGelarBox['batch_' + i + '_total']);
              const timeFinishGelarBox = docDataGelarBox['batch_' + i + '_time_finish'];
              console.log('timeFinishGelarBox : ', timeFinishGelarBox)
              
              const startDate = moment(timeFinishGelarBox, 'HH:mm:ss').subtract(newGelarMinuteBeforeDelivery, 'minutes');
              console.log('startDate : ', startDate)
              const timeStartGelarBox = startDate.format('HH:mm:ss');
              console.log('timeStartGelarBox : ', timeStartGelarBox)
              docDataGelarBox['batch_' + i + '_time_start'] = timeStartGelarBox || '00:00:00';

              // set new time start
              if (!newTimeStartGelarBox) {
                if (Array.isArray(docDataGelarBox['batch_' + sequence]) &&
                  docDataGelarBox['batch_' + sequence].length > 0) {
                  for (let j = 1; j < docDataGelarBox['batch_' + sequence].length; j++) {
                    if (docDataGelarBox['batch_' + sequence][j].sales_order === resultSkphBox.sales_order) {
                      newTimeStartGelarBox = timeStartGelarBox || '00:00:00';
                      break;
                    }
                  }
                }
              }
            }
          }
        });
      }
    });
    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Gelar Box',
        name: resultSkphGelarBox.name,
        fieldname: docDataGelarBox
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphGelarBox = result;
        }
      }
    });
  } else {
    // insert skph gelar box
    const docDataSkphGelarSchedule = {
      wo_code: resultSkphBox.wo_code,
      package_description: '',
      quantity: 0,
      additional_quantity: resultSkphBox.additional_quantity,
      sales_order: resultSkphBox.sales_order,
      skph_analysis: resultSkphBox.skph_analysis,
      skph_box: resultSkphBox.name
    };

    docDataGelarBox['doctype'] = 'SKPH Gelar Box';

    docDataGelarBox['created_by'] = user;
    docDataGelarBox['created_at'] = today;

    docDataSkphGelarSchedule.package_description = resultSkphBox['box_type'];
    docDataSkphGelarSchedule.quantity = resultSkphBox['box_quantity'];

    docDataGelarBox['batch_1_is_use'] = true;
    docDataGelarBox['batch_1_time_start'] = resultSkphBox.gelar_box_time_start;
    docDataGelarBox['batch_1_time_finish'] = resultSkphBox.gelar_box_time_finish;
    docDataGelarBox['batch_1'] = [docDataSkphGelarSchedule];
    docDataGelarBox['sales_order_quantity'] = docDataGelarBox['batch_1'].length;
    docDataGelarBox['batch_1_total'] = docDataSkphGelarSchedule.quantity;

    // recount all time_start
    const newGelarMinuteBeforeDelivery = countMinuteBeforeDelivery(docDataGelarBox['batch_1_total']);
    const timeFinishGelarBox = docDataGelarBox['batch_1_time_finish'];

    const startDate = moment(timeFinishGelarBox, 'HH:mm:ss').subtract(newGelarMinuteBeforeDelivery, 'minutes');
    const timeStartGelarBox = startDate.format('HH:mm:ss');
    docDataGelarBox['batch_1_time_start'] = timeStartGelarBox;

    // set new time start
    newTimeStartGelarBox = timeStartGelarBox;

    await frappe.call({
      method: 'frappe.client.insert',
      args: {
        doc: docDataGelarBox
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphGelarBox = result;
        }
      }
    });
  }

  if (newTimeStartGelarBox && oldTimeStartGelarBox !== newTimeStartGelarBox) {
    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Analysis',
        name: resultSkphBox.skph_analysis,
        fieldname: {
          gelar_box_time_start: newTimeStartGelarBox
        }
      },
      async: false,
      update_modified: false
    });

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Box',
        name: resultSkphBox.name,
        fieldname: {
          gelar_box_time_start: newTimeStartGelarBox
        }
      },
      async: false,
      update_modified: false
    });
  }

  return resultSkphGelarBox;
};

const updateSkphOrder = async (docDataOrder, user, today) => {
  let resultSkphOrder = null;
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Order',
      filters: {
        'skph_analysis': docDataOrder.skph_analysis
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphOrder = result;
      }
    }
  });

  if (resultSkphOrder && resultSkphOrder.name) {
    delete docDataOrder['is_manual_menu_sate'];
    if (resultSkphOrder.is_manual_menu_sate) {
      delete docDataOrder['porsi_per_bungkus_sate_quantity'];
      delete docDataOrder['bungkus_sate_quantity'];
      delete docDataOrder['sisa_sate_quantity'];
    }

    delete docDataOrder['is_manual_menu_non_sate'];
    if (resultSkphOrder.is_manual_menu_non_sate) {
      delete docDataOrder['porsi_per_bungkus_non_sate_quantity'];
      delete docDataOrder['bungkus_non_sate_quantity'];
      delete docDataOrder['sisa_non_sate_quantity'];
    }

    delete docDataOrder['porsi_sate_description'];
    delete docDataOrder['porsi_non_sate_description'];

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Order',
        name: resultSkphOrder.name,
        fieldname: docDataOrder
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphOrder = result;
        }
      }
    });
  } else {
    // insert skph order
    docDataOrder['doctype'] = 'SKPH Order';
    docDataOrder['sales_order'] = cur_frm.doc['name'];

    docDataOrder['created_by'] = user;
    docDataOrder['created_at'] = today;

    await frappe.call({
      method: 'frappe.client.insert',
      args: {
        doc: docDataOrder
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphOrder = result;
        }
      }
    });
  }

  if (resultSkphOrder && resultSkphOrder.name) {
    if (resultSkphOrder.name !== cur_frm.doc['skph_order']) {
      // update sales order
      await frappe.call({
        method: 'frappe.client.set_value',
        args: {
          doctype: 'Sales Order',
          name: cur_frm.doc['name'],
          fieldname: {
            skph_order: resultSkphOrder.name
          }
        },
        async: false,
        callback: (r) => {
          cur_frm.set_value('skph_order', resultSkphOrder.name);
          cur_frm.refresh_field('skph_order');
        }
      });
    }
  }

  return resultSkphOrder;
};

const updateSkphDeliveryOrder = async (resultSkphAnalysis, resultSkphOrder, user, today) => {
  let resultSkphDeliveryOrder = null
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Delivery Order',
      filters: {
        'event_date': resultSkphOrder.event_date
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphDeliveryOrder = result;
      }
    }
  });

  let docDataDeliveryOrder = {
    event_date: resultSkphOrder.event_date,
    sales_order_quantity: 0,
    sales_order_driver_quantity: 0,
    driver_completed_percentage: 0,
    employee_quantity: 0,
    updated_by: user,
    updated_at: today
  };

  const leaveDateTime = moment(resultSkphOrder.leave_date_time);
  const leaveDateTimeHours = parseInt(leaveDateTime.format('HH'), 10);
  const leaveDateTimeMinutes = parseInt(leaveDateTime.format('mm'), 10);

  let timeDeliveryOrder = '';
  if (leaveDateTimeHours < 1) {
    timeDeliveryOrder = 'time_01_00';
    // TODO :
  } else if (leaveDateTimeHours > 17) {
    timeDeliveryOrder = 'time_24_00';
  } else {
    for (let i = 1; i <= 31; i++) {
      const hourString = ('0' + i).slice(-2);
      if (leaveDateTimeHours === i) {
        if (leaveDateTimeHours === 31) {
          timeDeliveryOrder = 'time_' + hourString + '_00';
          break;
        } else {
          if (leaveDateTimeMinutes >= 0 && leaveDateTimeMinutes < 30) {
            timeDeliveryOrder = 'time_' + hourString + '_00';
            break;
          } else {
            timeDeliveryOrder = 'time_' + hourString + '_30';
            break;
          }
        }
      }
    }
  }

  const docDataSkphDeliverySchedule = {
    wo_code: resultSkphAnalysis.wo_code,
    sales_order: resultSkphOrder.sales_order,
    skph_analysis: resultSkphOrder.skph_analysis,
    skph_order: resultSkphOrder.name,
    delivery_schedule_group: timeDeliveryOrder.replace('time_', '').replace('_', ':'),
    original_delivery_schedule_group: timeDeliveryOrder.replace('time_', '').replace('_', ':')
  };

  if (resultSkphDeliveryOrder && resultSkphDeliveryOrder.name) {
    if (timeDeliveryOrder) {
      await frappe.db.get_list('SKPH Delivery Schedule', {
        filters: {
          'parent': resultSkphDeliveryOrder.name
        },
        fields: [
          'parentfield', 'is_employee', 'employee', 'employee_name', 'driver_personnel',
          'driver_personnel_name', 'is_actual_employee', 'actual_employee', 'actual_employee_name',
          'driver_actual_personnel', 'driver_actual_personnel_name', 'actual_time', 'realization_time',
          'wo_code', 'sales_order', 'skph_analysis', 'skph_box', 'skph_order', 'kilometers_information',
          'delivery_schedule_group', 'original_delivery_schedule_group',
          'region_district', 'region_district_name'
        ],
        order_by: 'parentfield asc, kilometers_information desc',
        limit: 0
      }).then((results) => {
        const employees = [];
        let isSalesOrderExists = false;
        if (results && results.length > 0) {
          for (let i = 0; i < results.length; i++) {
            const result = results[i];

            if (result.sales_order === docDataSkphDeliverySchedule.sales_order) {
              docDataSkphDeliverySchedule['skph_box'] = result.skph_box;
              docDataSkphDeliverySchedule['is_employee'] = result.is_employee;
              docDataSkphDeliverySchedule['employee'] = result.employee;
              docDataSkphDeliverySchedule['employee_name'] = result.employee_name;
              docDataSkphDeliverySchedule['driver_personnel'] = result.driver_personnel;
              docDataSkphDeliverySchedule['driver_personnel_name'] = result.driver_personnel_name;
              docDataSkphDeliverySchedule['is_actual_employee'] = result.is_actual_employee;
              docDataSkphDeliverySchedule['actual_employee'] = result.actual_employee;
              docDataSkphDeliverySchedule['actual_employee_name'] = result.actual_employee_name;
              docDataSkphDeliverySchedule['driver_actual_personnel'] = result.driver_actual_personnel;
              docDataSkphDeliverySchedule['driver_actual_personnel_name'] = result.driver_actual_personnel_name;
              docDataSkphDeliverySchedule['actual_time'] = result.actual_time;
              docDataSkphDeliverySchedule['realization_time'] = result.realization_time;
              docDataSkphDeliverySchedule['kilometers_information'] = result.kilometers_information;
              if (resultSkphDeliveryOrder.is_manual_delivery) {
                docDataSkphDeliverySchedule['delivery_schedule_group'] = result.delivery_schedule_group;
                docDataSkphDeliverySchedule['original_delivery_schedule_group'] = result.original_delivery_schedule_group || timeDeliveryOrder.replace('time_', '').replace('_', ':');
              }
              docDataSkphDeliverySchedule['region_district'] = result.region_district;
              docDataSkphDeliverySchedule['region_district_name'] = result.region_district_name;

              if (!docDataSkphDeliverySchedule['actual_time'] && docDataSkphDeliverySchedule['delivery_schedule_group']) {
                docDataSkphDeliverySchedule['actual_time'] = docDataSkphDeliverySchedule['delivery_schedule_group'] + ':00';
              }

              isSalesOrderExists = true;
            } else {
              let parentfield = result.parentfield;
              let delivery_schedule_group = result.delivery_schedule_group;
              let original_delivery_schedule_group = result.original_delivery_schedule_group;
              if (!resultSkphDeliveryOrder.is_manual_delivery) {
                delivery_schedule_group = original_delivery_schedule_group || parentfield.replace('time_', '').replace('_', ':');
                parentfield = 'time_' + delivery_schedule_group.replace(':', '_');
              }

              if (!Array.isArray(docDataDeliveryOrder[parentfield])) {
                docDataDeliveryOrder[parentfield] = [];
              }

              docDataDeliveryOrder[parentfield].push({
                wo_code: result.wo_code,
                sales_order: result.sales_order,
                skph_analysis: result.skph_analysis,
                skph_box: result.skph_box,
                skph_order: result.skph_order,
                is_employee: result.is_employee,
                employee: result.employee,
                employee_name: result.employee_name,
                driver_personnel: result.driver_personnel,
                driver_personnel_name: result.driver_personnel_name,
                is_actual_employee: result.is_actual_employee,
                actual_employee: result.actual_employee,
                actual_employee_name: result.actual_employee_name,
                driver_actual_personnel: result.driver_actual_personnel,
                driver_actual_personnel_name: result.driver_actual_personnel_name,
                actual_time: ((!result.actual_time && delivery_schedule_group) ? delivery_schedule_group + ':00' : result.actual_time),
                realization_time: result.realization_time,
                kilometers_information: result.kilometers_information,
                delivery_schedule_group: delivery_schedule_group,
                original_delivery_schedule_group: original_delivery_schedule_group,
                region_district: result.region_district,
                region_district_name: result.region_district_name
              });
            }

            if (result.sales_order) {
              docDataDeliveryOrder['sales_order_quantity']++;
            }
            if (result.sales_order && result.employee) {
              docDataDeliveryOrder['sales_order_driver_quantity']++;
            }
            if (result.employee) {
              const uniqName = _.find(employees, (o) => {
                return result.employee === o;
              });
              if (!uniqName) {
                employees.push(result.employee);
              }
            }
          }
        }
        docDataDeliveryOrder['employee_quantity'] = employees.length;
        if (!isSalesOrderExists) {
          docDataDeliveryOrder['sales_order_quantity']++;
        }
      });
      timeDeliveryOrder = 'time_' + docDataSkphDeliverySchedule['delivery_schedule_group'].replace(':', '_');
      if (!Array.isArray(docDataDeliveryOrder[timeDeliveryOrder])) {
        docDataDeliveryOrder[timeDeliveryOrder] = [];
      }
      docDataDeliveryOrder[timeDeliveryOrder].push(docDataSkphDeliverySchedule);
      docDataDeliveryOrder[timeDeliveryOrder] = _.orderBy(docDataDeliveryOrder[timeDeliveryOrder], ['kilometers_information'], ['desc']);
    }

    if (docDataDeliveryOrder['sales_order_quantity'] !== 0) {
      docDataDeliveryOrder['driver_completed_percentage'] = docDataDeliveryOrder['sales_order_driver_quantity'] / docDataDeliveryOrder['sales_order_quantity'] * 100;
    }
    docDataDeliveryOrder = fillUnusedDataDelivery(docDataDeliveryOrder);

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Delivery Order',
        name: resultSkphDeliveryOrder.name,
        fieldname: docDataDeliveryOrder
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphDeliveryOrder = result;
        }
      }
    });
  } else {
    // insert skph delivery order
    docDataDeliveryOrder['doctype'] = 'SKPH Delivery Order';

    docDataDeliveryOrder['created_by'] = user;
    docDataDeliveryOrder['created_at'] = today;

    if (timeDeliveryOrder) {
      docDataSkphDeliverySchedule['is_employee'] = 0;
      docDataSkphDeliverySchedule['employee'] = '';
      docDataSkphDeliverySchedule['employee_name'] = '';
      docDataSkphDeliverySchedule['driver_personnel'] = '';
      docDataSkphDeliverySchedule['driver_personnel_name'] = '';
      docDataSkphDeliverySchedule['is_actual_employee'] = 0;
      docDataSkphDeliverySchedule['actual_employee'] = '';
      docDataSkphDeliverySchedule['actual_employee_name'] = '';
      docDataSkphDeliverySchedule['driver_actual_personnel'] = '';
      docDataSkphDeliverySchedule['driver_actual_personnel_name'] = '';
      docDataSkphDeliverySchedule['actual_time'] = timeDeliveryOrder.replace('time_', '').replace('_', ':') + ':00';
      docDataSkphDeliverySchedule['realization_time'] = '';
      docDataSkphDeliverySchedule['kilometers_information'] = 0;
      docDataSkphDeliverySchedule['delivery_schedule_group'] = timeDeliveryOrder.replace('time_', '').replace('_', ':');
      docDataSkphDeliverySchedule['original_delivery_schedule_group'] = timeDeliveryOrder.replace('time_', '').replace('_', ':');
      docDataSkphDeliverySchedule['region_district'] = '';
      docDataSkphDeliverySchedule['region_district_name'] = '';

      docDataDeliveryOrder[timeDeliveryOrder] = [docDataSkphDeliverySchedule];
      docDataDeliveryOrder['sales_order_quantity'] = docDataDeliveryOrder[timeDeliveryOrder].length;
    }
    docDataDeliveryOrder = fillUnusedDataDelivery(docDataDeliveryOrder);

    await frappe.call({
      method: 'frappe.client.insert',
      args: {
        doc: docDataDeliveryOrder
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphDeliveryOrder = result;
        }
      }
    });
  }

  let timeStartGelarBungkus = '';
  let timeFinishGelarBungkus = '';
  if (timeDeliveryOrder) {
    const times = timeDeliveryOrder.split('_');
    if (times.length === 3) {
      timeFinishGelarBungkus = times[1] + ':' + times[2] + ':00';

      const startDate = moment(timeFinishGelarBungkus, 'HH:mm:ss').subtract(gelarMinuteBeforeDelivery, 'minutes');
      timeStartGelarBungkus = startDate.format('HH:mm:ss');
    }
  }

  if (timeStartGelarBungkus && timeFinishGelarBungkus) {
    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Analysis',
        name: docDataSkphDeliverySchedule.skph_analysis,
        fieldname: {
          gelar_bungkus_time_start: timeStartGelarBungkus,
          gelar_bungkus_time_finish: timeFinishGelarBungkus
        }
      },
      async: false,
      update_modified: false
    });

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Order',
        name: docDataSkphDeliverySchedule.skph_order,
        fieldname: {
          gelar_bungkus_time_start: timeStartGelarBungkus,
          gelar_bungkus_time_finish: timeFinishGelarBungkus
        }
      },
      async: false,
      update_modified: false
    });
  }

  return resultSkphDeliveryOrder;
};

const placeAutomationSkphDeliveryOrder = async (resultSkphDeliveryOrder, user, today) => {
  let isChanged = false;
  for (let i = 1; i <= 31; i++) {
    const hourString = ('0' + i).slice(-2);
    let timeHourString = 'time_' + hourString + '_00';
    let resultPlaceAutomation = placeAutomationCalculation(resultSkphDeliveryOrder, timeHourString, resultSkphDeliveryOrder[timeHourString] || []);
    if (resultPlaceAutomation) {
      if (!isChanged && resultPlaceAutomation.isChanged) {
        isChanged = resultPlaceAutomation.isChanged;
      }
      resultSkphDeliveryOrder = _.cloneDeep(resultPlaceAutomation.resultSkphDelivery);
    }
    if (i !== 31) {
      timeHourString = 'time_' + hourString + '_30';
      resultPlaceAutomation = placeAutomationCalculation(resultSkphDeliveryOrder, timeHourString, resultSkphDeliveryOrder[timeHourString] || []);
      if (resultPlaceAutomation) {
        if (!isChanged && resultPlaceAutomation.isChanged) {
          isChanged = resultPlaceAutomation.isChanged;
        }
        resultSkphDeliveryOrder = _.cloneDeep(resultPlaceAutomation.resultSkphDelivery);
      }
    }
  }

  if (isChanged) {
    const skphDeliveryOrders = [];
    for (let i = 1; i <= 31; i++) {
      const hourString = ('0' + i).slice(-2);
      skphDeliveryOrders.push(...(resultSkphDeliveryOrder['time_' + hourString + '_00'] || []));
      if (i !== 31) {
        skphDeliveryOrders.push(...(resultSkphDeliveryOrder['time_' + hourString + '_30'] || []));
      }
    }

    let docDataDeliveryOrder = {};
    for (let i = 0; i < skphDeliveryOrders.length; i++) {
      const skphDeliveryOrder = skphDeliveryOrders[i];

      if (!Array.isArray(docDataDeliveryOrder[skphDeliveryOrder.parentfield])) {
        docDataDeliveryOrder[skphDeliveryOrder.parentfield] = [];
      }

      docDataDeliveryOrder[skphDeliveryOrder.parentfield].push(skphDeliveryOrder);
    }
    docDataDeliveryOrder = fillUnusedDataDelivery(docDataDeliveryOrder);

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Delivery Order',
        name: resultSkphDeliveryOrder.name,
        fieldname: docDataDeliveryOrder
      },
      async: false,
      update_modified: false,
      callback: async (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          // get new data skph delivery order
          resultSkphDeliveryOrder = result;
        }
      }
    });

    await updateGelarBungkusTimeStartFinish(resultSkphDeliveryBox);
  }

  return resultSkphDeliveryOrder;
};

const updateSkphGelarBungkus = async (resultSkphOrder, user, today) => {
  let resultSkphGelarBungkus = null;
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Gelar Bungkus',
      filters: {
        'event_date': resultSkphOrder.event_date
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphGelarBungkus = result;
      }
    }
  });

  const oldTimeStartGelarBungkus = resultSkphOrder.gelar_bungkus_time_start;
  let newTimeStartGelarBungkus = '';
  const docDataGelarBungkus = {
    event_date: resultSkphOrder.event_date,
    sales_order_quantity: 0,
    updated_by: user,
    updated_at: today
  };

  let timeDeliveryOrder = '';
  await frappe.db.get_list('SKPH Delivery Schedule', {
    filters: {
      'sales_order': resultSkphOrder.sales_order,
      'parenttype': 'SKPH Delivery Order'
    },
    fields: ['name', 'parentfield'],
    limit: 0
  }).then((results) => {
    if (results && results.length > 0) {
      if (results[0] && results[0].name) {
        timeDeliveryOrder = results[0].parentfield;
      }
    }
  });

  if (resultSkphGelarBungkus && resultSkphGelarBungkus.name) {
    // set all skph gelar bungkus
    for (let i = 1; i <= maxGelarBatch; i++) {
      docDataGelarBungkus['batch_' + i + '_is_use'] = 0;
      docDataGelarBungkus['batch_' + i + '_time_start'] = '';
      docDataGelarBungkus['batch_' + i + '_time_finish'] = '';
      docDataGelarBungkus['batch_' + i] = [];
      docDataGelarBungkus['batch_' + i + '_total'] = 0;

      const sequence = _.find(sequenceNames, (o) => {
        return i === o.sequence;
      });
      if (sequence) {
        docDataGelarBungkus['batch_' + i + '_name'] = sequence.name;
      }
    }

    await frappe.db.get_list('SKPH Analysis', {
      filters: [
        ['event_date', '=', cur_frm.doc['event_date']],
        ['status_data', '=', 'OK'],
        ['sales_order_status', '!=', 'Cancelled'],
        ['skph_order', '!=', '']
      ],
      fields: [
        'skph_box', 'skph_order', 'wo_code', 'sales_order', 'name',
        'gelar_bungkus_time_start', 'gelar_bungkus_time_finish'
      ],
      order_by: 'gelar_bungkus_time_start asc, wo_sequence asc',
      limit: 0
    }).then(async (results) => {
      if (results && results.length > 0) {
        const orFilters = [];
        for (let i = 0; i < results.length; i++) {
          const resultData = results[i];
          if (resultData.skph_order) {
            orFilters.push(['name', '=', resultData.skph_order]);
          }
        }

        await frappe.db.get_list('SKPH Order', {
          or_filters: orFilters,
          fields: ['box_type', 'bungkus_sate_quantity', 'menu_non_sate', 'box_quantity', 'name'],
          limit: 0
        }).then((skphOrderResults) => {
          let sequence = 1;
          for (let i = 0; i < results.length; i++) {
            const resultBefore = results[i - 1] || null;
            const result = results[i];

            const docDataSkphGelarSchedule = {
              wo_code: result.wo_code,
              package_description: '',
              quantity: 0,
              sales_order: result.sales_order,
              skph_analysis: result.name,
              skph_order: result.skph_order
            };

            const resultSkphOrderData = _.find(skphOrderResults, (o) => {
              return docDataSkphGelarSchedule.skph_order === o.name;
            });
            if (resultSkphOrderData) {
              docDataSkphGelarSchedule.package_description = resultSkphOrderData['box_type'];
              docDataSkphGelarSchedule.quantity = resultSkphOrderData['box_quantity'];
            }

            if (result.sales_order) {
              docDataGelarBungkus['sales_order_quantity']++;
            }

            if (i === 0) {
              docDataGelarBungkus['batch_' + sequence + '_is_use'] = 1;
              docDataGelarBungkus['batch_' + sequence + '_time_start'] = result.gelar_bungkus_time_start;
              docDataGelarBungkus['batch_' + sequence + '_time_finish'] = result.gelar_bungkus_time_finish;
              docDataGelarBungkus['batch_' + sequence] = [docDataSkphGelarSchedule];
              docDataGelarBungkus['batch_' + sequence + '_total'] = 0;
            } else {
              if (resultBefore.gelar_bungkus_time_start === result.gelar_bungkus_time_start &&
                resultBefore.gelar_bungkus_time_finish === result.gelar_bungkus_time_finish) {
                if (sequence >= 17) {
                  sequence = 16;
                }
                docDataGelarBungkus['batch_' + sequence].push(docDataSkphGelarSchedule);
              } else {
                sequence++;
                if (sequence >= 17) {
                  sequence = 16;
                }
                docDataGelarBungkus['batch_' + sequence + '_total'] = 0;

                if (!Array.isArray(docDataGelarBungkus['batch_' + sequence])) {
                  docDataGelarBungkus['batch_' + sequence] = [];
                }

                docDataGelarBungkus['batch_' + sequence + '_is_use'] = 1;
                docDataGelarBungkus['batch_' + sequence + '_time_start'] = result.gelar_bungkus_time_start;
                docDataGelarBungkus['batch_' + sequence + '_time_finish'] = result.gelar_bungkus_time_finish;
                docDataGelarBungkus['batch_' + sequence].push(docDataSkphGelarSchedule);
              }
            }

            docDataGelarBungkus['batch_' + sequence + '_total'] += docDataSkphGelarSchedule.quantity;
          }

          // recount all time_start
          for (let i = 1; i <= sequence; i++) {
            if (docDataGelarBungkus['batch_' + i + '_is_use']) {
              const newGelarMinuteBeforeDelivery = 30;
              const timeFinishGelarBungkus = docDataGelarBungkus['batch_' + i + '_time_finish'];

              const startDate = moment(timeFinishGelarBungkus, 'HH:mm:ss').subtract(newGelarMinuteBeforeDelivery, 'minutes');
              const timeStartGelarBungkus = startDate.format('HH:mm:ss');
              docDataGelarBungkus['batch_' + i + '_time_start'] = timeStartGelarBungkus;

              // set new time start
              if (!newTimeStartGelarBungkus) {
                if (Array.isArray(docDataGelarBungkus['batch_' + sequence]) &&
                  docDataGelarBungkus['batch_' + sequence].length > 0) {
                  for (let j = 1; j < docDataGelarBungkus['batch_' + sequence].length; j++) {
                    if (docDataGelarBungkus['batch_' + sequence][j].sales_order === resultSkphOrder.sales_order) {
                      newTimeStartGelarBungkus = timeStartGelarBungkus;
                      break;
                    }
                  }
                }
              }
            }
          }
        });
      }
    });

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Gelar Bungkus',
        name: resultSkphGelarBungkus.name,
        fieldname: docDataGelarBungkus
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphGelarBungkus = result;
        }
      }
    });
  } else {
    // insert skph gelar bungkus
    const docDataSkphGelarSchedule = {
      wo_code: resultSkphOrder.wo_code,
      package_description: '',
      quantity: 0,
      sales_order: resultSkphOrder.sales_order,
      skph_analysis: resultSkphOrder.skph_analysis,
      skph_order: resultSkphOrder.name
    };

    docDataGelarBungkus['doctype'] = 'SKPH Gelar Bungkus';

    docDataGelarBungkus['created_by'] = user;
    docDataGelarBungkus['created_at'] = today;

    docDataSkphGelarSchedule.package_description = resultSkphOrder['box_type'];
    docDataSkphGelarSchedule.quantity = resultSkphOrder['box_quantity'];

    docDataGelarBungkus['batch_1_is_use'] = true;
    docDataGelarBungkus['batch_1_time_start'] = resultSkphOrder.gelar_bungkus_time_start;
    docDataGelarBungkus['batch_1_time_finish'] = resultSkphOrder.gelar_bungkus_time_finish;
    docDataGelarBungkus['batch_1'] = [docDataSkphGelarSchedule];
    docDataGelarBungkus['sales_order_quantity'] = docDataGelarBungkus['batch_1'].length;
    docDataGelarBungkus['batch_1_total'] = docDataSkphGelarSchedule.quantity;

    // recount all time_start
    const newGelarMinuteBeforeDelivery = 30;
    const timeFinishGelarBungkus = docDataGelarBungkus['batch_1_time_finish'];

    const startDate = moment(timeFinishGelarBungkus, 'HH:mm:ss').subtract(newGelarMinuteBeforeDelivery, 'minutes');
    const timeStartGelarBungkus = startDate.format('HH:mm:ss');
    docDataGelarBungkus['batch_1_time_start'] = timeStartGelarBungkus;

    // set new time start
    newTimeStartGelarBungkus = timeStartGelarBungkus;

    await frappe.call({
      method: 'frappe.client.insert',
      args: {
        doc: docDataGelarBungkus
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphGelarBungkus = result;
        }
      }
    });
  }

  if (newTimeStartGelarBungkus && oldTimeStartGelarBungkus !== newTimeStartGelarBungkus) {
    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Analysis',
        name: resultSkphOrder.skph_analysis,
        fieldname: {
          gelar_bungkus_time_start: newTimeStartGelarBungkus
        }
      },
      async: false,
      update_modified: false
    });

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Order',
        name: resultSkphOrder.name,
        fieldname: {
          gelar_bungkus_time_start: newTimeStartGelarBungkus
        }
      },
      async: false,
      update_modified: false
    });
  }

  return resultSkphGelarBungkus;
};

const updateSkphTim = async (resultSkphAnalysis, user, today) => {
  let resultSkphTim = null
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Tim',
      filters: {
        'event_date': resultSkphAnalysis.event_date
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphTim = result;
      }
    }
  });

  if (!resultSkphTim) {
    const docDataTim = {
      doctype: 'SKPH Tim',
      event_date: resultSkphAnalysis.event_date,
      created_by: user,
      created_at: today,
      updated_by: user,
      updated_at: today
    };

    // insert skph tim
    await frappe.call({
      method: 'frappe.client.insert',
      args: {
        doc: docDataTim
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphTim = result;
        }
      }
    });
  }

  return resultSkphTim;
};

const setBatchData = (docDataMatriksKitchen, batchName) => {
  const newBatchData = _.cloneDeep(docDataMatriksKitchen[batchName + '_default']);
  let uniqName = null;
  let mergedNames = [];
  let removeIndexes = [];
  let isError = false;
  for (let i = 0; i < docDataMatriksKitchen[batchName + '_merged'].length; i++) {
    const mergedData = docDataMatriksKitchen[batchName + '_merged'][i];
    if (mergedData.merged_name) {
      uniqName = _.find(mergedNames, (o) => {
        return mergedData.merged_name === o;
      });
      if (!uniqName) {
        mergedNames.push(mergedData.merged_name);
        const mergedBatchData = _.orderBy(_.filter(docDataMatriksKitchen[batchName + '_merged'], (o) => {
          return o.merged_name === mergedData.merged_name;
        }), ['index'], ['asc']);
        $.each(newBatchData, (parentIndex, parentD) => {
          if (parentD.is_merged && parentD.menu === mergedBatchData[0].menu &&
            parentD.index === mergedBatchData[0].index) {
            parentD.merged_name = mergedData.merged_name;
            const childrenNewBatchData = _.filter(newBatchData, (o) => {
              return o.index !== parentD.index &&
                _.map(mergedBatchData, 'index').includes(o.index);
            });
            if (childrenNewBatchData.length > 0) {
              const diffMenus = _.filter(childrenNewBatchData, (o) => {
                return o.menu !== parentD.menu;
              });
              if (diffMenus.length > 0) {
                isError = true;
                parentD.merged_name = '';
                parentD.wo_code_text = parentD.parent_wo_code;
                parentD.description = `wo ${parentD.wo_sequence_text}`;
              }
            }
            if (!isError) {
              if (childrenNewBatchData.length > 0) {
                parentD.quantity += _.sumBy(childrenNewBatchData, 'quantity') || 0;
                parentD.children_index_text = _.map(childrenNewBatchData, 'index').join(', ');
                removeIndexes = [...removeIndexes, ..._.map(childrenNewBatchData, 'index')];
                parentD.is_multiple_wo = 1;
                parentD.wo_code_text = '';
                parentD.package_description = '';
                parentD.notes = '';
              } else {
                parentD.wo_code_text = parentD.parent_wo_code;
                parentD.package_description = parentD.parent_package_description;
                parentD.notes = parentD.parent_notes;
              }
            }
            parentD.description = `wo ${_.uniq([parentD.wo_sequence_text, ..._.map(childrenNewBatchData, 'wo_sequence_text')]).join(', ')}`;
          }
        });
      }
    }
  }

  if (!isError) {
    if (removeIndexes.length > 0) {
      _.remove(newBatchData, (o) => {
        return removeIndexes.includes(o.index);
      });
    }

    // apply data
    docDataMatriksKitchen[batchName] = [];
    $.each(newBatchData, (parentIndex, parentD) => {
      const batchData = {};
      $.each([
        'index', 'wo_code_text', 'wo_sequence_text', 'package_description',
        'package_index', 'quantity', 'description', 'menu', 'tool', 'time_start',
        'time_finish', 'pic', 'notes', 'is_checklist_hp', 'merged_name',
        'is_multiple_wo', 'parent_sales_order', 'bom', 'max_capacity',
        'time_start_number', 'time_finish_number', 'batch', 'batch_name',
        'original_batch', 'original_batch_name', 'is_merged',
        'parent_wo_code', 'parent_wo_sequence', 'children_index_text'
      ], (index, d) => {
        batchData[d] = parentD[d];
      });
      docDataMatriksKitchen[batchName].push(batchData);
    });
  }

  return {
    isError: isError,
    docDataMatriksKitchen: docDataMatriksKitchen
  };
};

const setMatriksKitchen = async (resultSkphMatriksKitchen, user, today) => {
  let resultSkphGelarBox = null;
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Gelar Box',
      filters: {
        'event_date': resultSkphMatriksKitchen.event_date
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphGelarBox = result;
      }
    }
  });

  let resultSkphGelarBungkus = null;
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Gelar Bungkus',
      filters: {
        'event_date': resultSkphMatriksKitchen.event_date
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphGelarBungkus = result;
      }
    }
  });

  // recalculate all
  let allMatriksKitchen = [];
  let newResultSkphAnalysis = [];
  let salesOrderData = [];
  let salesOrderDataLate = [];
  await frappe.db.get_list('SKPH Analysis', {
    filters: [
      ['event_date', '=', resultSkphMatriksKitchen.event_date],
      ['status_data', '=', 'OK'],
      ['sales_order_status', '!=', 'Cancelled']
    ],
    fields: ['name', 'sales_order', 'wo_code', 'wo_sequence', 'skph_box', 'skph_order'],
    limit: 0
  }).then((results) => {
    if (results && results.length > 0) {
      newResultSkphAnalysis = results;
    }
  });
  if (newResultSkphAnalysis.length > 0) {
    await frappe.db.get_list('Sales Order', {
      filters: {
        'name': ['IN', _.map(newResultSkphAnalysis, 'sales_order')]
      },
      fields: ["name", "notes", "is_revision_sales_order"],
      limit: 0
    }).then((results) => {
      if (results && results.length > 0) {
        salesOrderData = results;
        for (let x = 0; x < results.length; x++) {
            if (results[x].is_revision_sales_order) {
              salesOrderDataLate.push(results[x]);
            }
          }
        _.remove(newResultSkphAnalysis, (o) => {
          return !_.map(results, 'name').includes(o.sales_order);
        });
      }
    });
    if (newResultSkphAnalysis.length > 0) {
      // box menus
      await frappe.db.get_list('Aqiqah Package Menu', {
        filters: {
          'parent': ['IN', _.map(newResultSkphAnalysis, 'sales_order')]
        },
        fields: ['*'],
        limit: 0
      }).then((results) => {
        if (results && results.length > 0) {
          let packageDescription = '';

          for (let i = 0; i < results.length; i++) {
            const skphAnalysis = _.find(newResultSkphAnalysis, (o) => {
              return results[i].parent === o.sales_order;
            });
            if (skphAnalysis) {
              // package_description
              let bungkusSateQuantity = 0;
              let menuNonSate = '';

              if (results[i].meat_cook_type_1) {
                const name = results[i].meat_cook_type_1;
                const quantity = results[i].quantity;
                if (name === 'SATE') {
                  bungkusSateQuantity += quantity;
                } else {
                  menuNonSate = '1. ' + name + ', Jumlah ' + quantity + '\r\n';
                }
              }

              if (results[i].meat_cook_type_2) {
                const name = results[i].meat_cook_type_2;
                const quantity = results[i].quantity;
                if (name === 'SATE') {
                  bungkusSateQuantity += quantity;
                } else {
                  if (menuNonSate) {
                    menuNonSate += '2. ';
                  } else {
                    menuNonSate = '1. ';
                  }
                  menuNonSate += name + ', Jumlah ' + quantity + '\r\n';
                }
              }

              packageDescription = results[i].type + '\r\n\r\n';
              if (bungkusSateQuantity > 0) {
                packageDescription += 'MENU SATE\r\n';
                packageDescription += 'SATE, Jumlah ' + bungkusSateQuantity + '\r\n\r\n';
              }
              if (menuNonSate) {
                menuNonSate = menuNonSate.slice(0, -2);
                packageDescription += 'MENU NON SATE\r\n';
                packageDescription += menuNonSate;
              }

              // menu
              if (results[i].rice_type) {
                const riceMenu = {
                  type: 'BOX',
                  skph_box: skphAnalysis.skph_box,
                  wo_code: skphAnalysis.wo_code,
                  wo_sequence: skphAnalysis.wo_sequence,
                  sales_order: skphAnalysis.sales_order,
                  package_description: packageDescription,
                  package_index: results[i].idx,
                  name: 'NASI ' + results[i].rice_type,
                  bom_item_name: '',
                  quantity: results[i].quantity
                };
                riceMenu.bom_item_name = 'MASAK ' + riceMenu.name;
                allMatriksKitchen.push(riceMenu);
              }
              if (results[i].is_use_mix_vegetables) {
                const mixVegetableMenu = {
                  type: 'BOX',
                  skph_box: skphAnalysis.skph_box,
                  wo_code: skphAnalysis.wo_code,
                  wo_sequence: skphAnalysis.wo_sequence,
                  sales_order: skphAnalysis.sales_order,
                  package_description: packageDescription,
                  package_index: results[i].idx,
                  name: 'MIX VEGETABLES',
                  bom_item_name: '',
                  quantity: results[i].quantity
                };
                mixVegetableMenu.bom_item_name = 'MASAK ' + mixVegetableMenu.name;
                allMatriksKitchen.push(mixVegetableMenu);
              }
              if (results[i].is_use_tempe_orek) {
                const tempeOrekMenu = {
                  type: 'BOX',
                  skph_box: skphAnalysis.skph_box,
                  wo_code: skphAnalysis.wo_code,
                  wo_sequence: skphAnalysis.wo_sequence,
                  sales_order: skphAnalysis.sales_order,
                  package_description: packageDescription,
                  package_index: results[i].idx,
                  name: 'OREK TEMPE',
                  bom_item_name: '',
                  quantity: results[i].quantity
                };
                tempeOrekMenu.bom_item_name = 'MASAK ' + tempeOrekMenu.name;
                allMatriksKitchen.push(tempeOrekMenu);
              }
              if (results[i].is_use_ayam_panggang) {
                const ayamPanggangMenu = {
                  type: 'BOX',
                  skph_box: skphAnalysis.skph_box,
                  wo_code: skphAnalysis.wo_code,
                  wo_sequence: skphAnalysis.wo_sequence,
                  sales_order: skphAnalysis.sales_order,
                  package_description: packageDescription,
                  package_index: results[i].idx,
                  name: 'AYAM PANGGANG (POT 8)',
                  bom_item_name: '',
                  quantity: results[i].quantity
                };
                ayamPanggangMenu.bom_item_name = 'MASAK ' + ayamPanggangMenu.name;
                allMatriksKitchen.push(ayamPanggangMenu);
              }
              if (results[i].is_use_tumis_jagung_pipil) {
                const tumisJagungMenu = {
                  type: 'BOX',
                  skph_box: skphAnalysis.skph_box,
                  wo_code: skphAnalysis.wo_code,
                  wo_sequence: skphAnalysis.wo_sequence,
                  sales_order: skphAnalysis.sales_order,
                  package_description: packageDescription,
                  package_index: results[i].idx,
                  name: 'TUMIS JAGUNG PIPIL',
                  bom_item_name: '',
                  quantity: results[i].quantity
                };
                tumisJagungMenu.bom_item_name = 'MASAK ' + tumisJagungMenu.name;
                allMatriksKitchen.push(tumisJagungMenu);
              }
              if (results[i].meat_cook_type_1) {
                const meatCookType1Menu = {
                  type: 'BOX',
                  skph_box: skphAnalysis.skph_box,
                  wo_code: skphAnalysis.wo_code,
                  wo_sequence: skphAnalysis.wo_sequence,
                  sales_order: skphAnalysis.sales_order,
                  package_description: packageDescription,
                  package_index: results[i].idx,
                  name: results[i].meat_cook_type_1,
                  bom_item_name: '',
                  quantity: results[i].quantity
                };
                meatCookType1Menu.bom_item_name = 'MASAK ' + meatCookType1Menu.name;
                allMatriksKitchen.push(meatCookType1Menu);
              }
              if (results[i].meat_cook_type_2) {
                const meatCookType2Menu = {
                  type: 'BOX',
                  skph_box: skphAnalysis.skph_box,
                  wo_code: skphAnalysis.wo_code,
                  wo_sequence: skphAnalysis.wo_sequence,
                  sales_order: skphAnalysis.sales_order,
                  package_description: packageDescription,
                  package_index: results[i].idx,
                  name: results[i].meat_cook_type_2,
                  bom_item_name: '',
                  quantity: results[i].quantity
                };
                meatCookType2Menu.bom_item_name = 'MASAK ' + meatCookType2Menu.name;
                allMatriksKitchen.push(meatCookType2Menu);
              }
              if (results[i].add_on) {
                const addOnMenu = {
                  type: 'BOX',
                  skph_box: skphAnalysis.skph_box,
                  wo_code: skphAnalysis.wo_code,
                  wo_sequence: skphAnalysis.wo_sequence,
                  sales_order: skphAnalysis.sales_order,
                  package_description: packageDescription,
                  package_index: results[i].idx,
                  name: results[i].add_on,
                  bom_item_name: '',
                  quantity: results[i].quantity
                };
                addOnMenu.bom_item_name = 'MASAK ' + addOnMenu.name;
                allMatriksKitchen.push(addOnMenu);
              }
              if (results[i].is_use_mie_goreng) {
                const mieMenu = {
                  type: 'BOX',
                  skph_box: skphAnalysis.skph_box,
                  wo_code: skphAnalysis.wo_code,
                  wo_sequence: skphAnalysis.wo_sequence,
                  sales_order: skphAnalysis.sales_order,
                  package_description: packageDescription,
                  package_index: results[i].idx,
                  name: 'MIE GORENG',
                  bom_item_name: 'MIE GORENG',
                  quantity: results[i].quantity
                };
                mieMenu.bom_item_name = 'MASAK ' + mieMenu.name;
                allMatriksKitchen.push(mieMenu);
              }
              if (results[i].is_use_ayam_bakar === 1) {
                
                const ayamMenu = {
                  type: 'BOX',
                  skph_box: skphAnalysis.skph_box,
                  wo_code: skphAnalysis.wo_code,
                  wo_sequence: skphAnalysis.wo_sequence,
                  sales_order: skphAnalysis.sales_order,
                  package_description: packageDescription,
                  package_index: results[i].idx,
                  name: 'AYAM BAKAR',
                  bom_item_name: 'AYAM BAKAR',
                  quantity: results[i].quantity
                };
                ayamMenu.bom_item_name = 'MASAK ' + ayamMenu.name;
                allMatriksKitchen.push(ayamMenu);
              }
              if (results[i].is_use_ayam_mentega === 1) {
                
                const ayamMenu = {
                  type: 'BOX',
                  skph_box: skphAnalysis.skph_box,
                  wo_code: skphAnalysis.wo_code,
                  wo_sequence: skphAnalysis.wo_sequence,
                  sales_order: skphAnalysis.sales_order,
                  package_description: packageDescription,
                  package_index: results[i].idx,
                  name: 'AYAM MENTEGA',
                  bom_item_name: 'AYAM MENTEGA',
                  quantity: results[i].quantity
                };
                ayamMenu.bom_item_name = 'MASAK ' + ayamMenu.name;
                allMatriksKitchen.push(ayamMenu);
              }
              if (results[i].is_use_tempe_kering === 1) {
                
                const tempeKering = {
                  type: 'BOX',
                  skph_box: skphAnalysis.skph_box,
                  wo_code: skphAnalysis.wo_code,
                  wo_sequence: skphAnalysis.wo_sequence,
                  sales_order: skphAnalysis.sales_order,
                  package_description: packageDescription,
                  package_index: results[i].idx,
                  name: 'TEMPE KERING',
                  bom_item_name: 'TEMPE KERING',
                  quantity: results[i].quantity
                };
                tempeKering.bom_item_name = 'MASAK ' + tempeKering.name;
                allMatriksKitchen.push(tempeKering);
              }

              if (results[i].is_use_telur_dadar_iris === 1) {
                
                const telurDadarIris = {
                  type: 'BOX',
                  skph_box: skphAnalysis.skph_box,
                  wo_code: skphAnalysis.wo_code,
                  wo_sequence: skphAnalysis.wo_sequence,
                  sales_order: skphAnalysis.sales_order,
                  package_description: packageDescription,
                  package_index: results[i].idx,
                  name: 'TELUR DADAR IRIS',
                  bom_item_name: 'TELUR DADAR IRIS',
                  quantity: results[i].quantity
                };
                telurDadarIris.bom_item_name = 'MASAK ' + telurDadarIris.name;
                allMatriksKitchen.push(telurDadarIris);
              }
              
            }
          }
        }
      });
      // non box, paket super hemat, paket super ekonomis, paket arabian style, paket tumpengan spesial, paket box istimewa, paket abg, nasi nampan, paket prasmanan, satuan & makan gratis menus
      await frappe.db.get_list('Order Detail', {
        filters: {
          'parent': ['IN', _.map(newResultSkphAnalysis, 'sales_order')],
          'type': ['IN', ['NON BOX', 'PAKET SUPER HEMAT', 'PAKET SUPER EKONOMIS', 'PAKET AQIQAH EKONOMIS', 'PAKET ARABIAN STYLE', 'PAKET TUMPENGAN SPESIAL', 'PAKET REGULER BENTO', 'PAKET REGULER', 'PAKET PROMO REGULER', 'PAKET PROMO ARABIAN', 'PAKET TUMPENG BOX', 'PAKET ARABIAN', 'PAKET BOX ISTIMEWA', 'PAKET ABG', 'NASI NAMPAN', 'PAKET PRASMANAN', 'SATUAN', 'MAKAN GRATIS']]
        },
        fields: ['*'],
        limit: 0
      }).then((results) => {
        if (results && results.length > 0) {
          let packageDescription = '';

          // non box menus
          const nonBoxMenus = _.cloneDeep(nonBoxMenuIds);
          // paket super hemat menus
          const paketSuperHematMenus = _.cloneDeep(paketSuperHematMenuIds);
          // paket super ekonomis menus
          const paketSuperEkonomisMenus = _.cloneDeep(paketSuperEkonomisMenuIds);
          // paket arabian style
          const paketArabianStyleMenus = _.cloneDeep(paketArabianStyleMenuIds);
          // paket tumpengan spesial menus
          const paketTumpenganSpesialMenus = _.cloneDeep(paketTumpenganSpesialMenuIds);
          // paket tumpeng box
          const paketTumpengBoxMenus = _.cloneDeep(paketTumpengBoxMenuIds);
          // paket reguler bento
          const paketRegulerBentoMenus = _.cloneDeep(paketRegulerBentoMenuIds);
          // paket reguler 
          const paketRegulerMenus = _.cloneDeep(paketRegulerMenuIds);
          // paket promo arabian 
          const paketPromoArabianMenus = _.cloneDeep(paketPromoArabianMenuIds);
          // paket aqiqah ekonomis 
          const paketAqiqahEkonomisMenus = _.cloneDeep(paketAqiqahEkonomisMenuIds);
          // paket box istimewa menus
          const paketBoxIstimewaMenus = _.cloneDeep(paketBoxIstimewaMenuIds);
          // paket abg menus
          const paketBoxAbgMenus = _.cloneDeep(paketBoxAbgMenuIds);
          // nasi nampan
          const nasiNampanMenus = _.cloneDeep(nasiNampanMenuIds);
          // paket prasmanan
          const paketPrasmananMenus = _.cloneDeep(paketPrasmananMenuIds);
          // satuan
          const satuanMenus = _.cloneDeep(menuPackageSatuanTypes);
          const satuanMenusId = _.cloneDeep(paketSatuanMenuIds);
          // makan gratis
          const makanGratisMenus = _.cloneDeep(menuPackageMakanGratisTypes);
          for (let i = 0; i < results.length; i++) {
            const skphAnalysis = _.find(newResultSkphAnalysis, (o) => {
              return results[i].parent === o.sales_order;
            });
            if (skphAnalysis) {
              // package_description
              // non box
              let bungkusSateQuantity = 0;
              let menuNonSate = '';
              let menuNonSateSequence = 1;

              for (let j = 0; j < nonBoxMenus.length; j++) {
                if (results[i]['is_' + nonBoxMenus[j]]) {
                  const name = nonBoxMenus[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['quantity_' + nonBoxMenus[j]];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

              // non box package description
              packageDescription = results[i].type + ', ' + results[i].order_name + '\r\n\r\n';
              if (bungkusSateQuantity > 0) {
                packageDescription += 'MENU SATE\r\n';
                packageDescription += 'SATE, Jumlah ' + bungkusSateQuantity + '\r\n\r\n';
              }
              if (menuNonSate) {
                menuNonSate = menuNonSate.slice(0, -2);
                packageDescription += 'MENU NON SATE\r\n';
                packageDescription += menuNonSate;
              }

              for (let j = 0; j < nonBoxMenus.length; j++) {
                if (results[i]['is_' + nonBoxMenus[j]]) {
                  const nonBoxMenu = {
                    type: 'ORDER',
                    skph_order: skphAnalysis.skph_order,
                    wo_code: skphAnalysis.wo_code,
                    wo_sequence: skphAnalysis.wo_sequence,
                    sales_order: skphAnalysis.sales_order,
                    package_description: packageDescription,
                    package_index: results[i].idx,
                    name: nonBoxMenus[j].replace(/_/g, ' ').toUpperCase(),
                    bom_item_name: '',
                    quantity: results[i]['quantity_' + nonBoxMenus[j]]
                  };
                  nonBoxMenu.bom_item_name = 'MASAK ' + nonBoxMenu.name;
                  allMatriksKitchen.push(nonBoxMenu);
                }
              }

              // paket super hemat
              bungkusSateQuantity = 0;
              menuNonSate = '';
              menuNonSateSequence = 1;
              for (let j = 0; j < paketSuperHematMenus.length; j++) {
                if (results[i]['is_psh_' + paketSuperHematMenus[j]]) {
                  const name = paketSuperHematMenus[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['total_quantity_1'];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else if (!name.startsWith('NASI ')) {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

              // paket super hemat package description
              packageDescription = results[i].order_name + '\r\n\r\n';
              if (bungkusSateQuantity > 0) {
                packageDescription += 'MENU SATE\r\n';
                packageDescription += 'SATE, Jumlah ' + bungkusSateQuantity + '\r\n\r\n';
              }
              if (menuNonSate) {
                menuNonSate = menuNonSate.slice(0, -2);
                packageDescription += 'MENU NON SATE\r\n';
                packageDescription += menuNonSate;
              }

              for (let j = 0; j < paketSuperHematMenus.length; j++) {
                if (results[i]['is_psh_' + paketSuperHematMenus[j]]) {
                  const paketSuperHematMenu = {
                    type: 'BOX',
                    skph_box: skphAnalysis.skph_box,
                    wo_code: skphAnalysis.wo_code,
                    wo_sequence: skphAnalysis.wo_sequence,
                    sales_order: skphAnalysis.sales_order,
                    package_description: packageDescription,
                    package_index: results[i].idx,
                    name: paketSuperHematMenus[j].replace(/_/g, ' ').toUpperCase(),
                    bom_item_name: '',
                    quantity: results[i]['total_quantity_1']
                  };
                  paketSuperHematMenu.bom_item_name = 'MASAK ' + paketSuperHematMenu.name;
                  allMatriksKitchen.push(paketSuperHematMenu);
                }
              }

              // paket super ekonomis
              bungkusSateQuantity = 0;
              menuNonSate = '';
              menuNonSateSequence = 1;
              for (let j = 0; j < paketSuperEkonomisMenus.length; j++) {
                if (results[i]['is_pse_' + paketSuperEkonomisMenus[j]]) {
                  const name = paketSuperEkonomisMenus[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['total_quantity_1'];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

              // paket super ekonomis package description
              packageDescription = results[i].order_name + '\r\n\r\n';
              if (bungkusSateQuantity > 0) {
                packageDescription += 'MENU SATE\r\n';
                packageDescription += 'SATE, Jumlah ' + bungkusSateQuantity + '\r\n\r\n';
              }
              if (menuNonSate) {
                menuNonSate = menuNonSate.slice(0, -2);
                packageDescription += 'MENU NON SATE\r\n';
                packageDescription += menuNonSate;
              }

              for (let j = 0; j < paketSuperEkonomisMenus.length; j++) {
                if (paketSuperEkonomisMenus[j] !== 'asinan_nanas' && paketSuperEkonomisMenus[j] !== 'kerupuk') {
                  if (results[i]['is_pse_' + paketSuperEkonomisMenus[j]]) {
                    const paketSuperEkonomisMenu = {
                      type: 'BOX',
                      skph_box: skphAnalysis.skph_box,
                      wo_code: skphAnalysis.wo_code,
                      wo_sequence: skphAnalysis.wo_sequence,
                      sales_order: skphAnalysis.sales_order,
                      package_description: packageDescription,
                      package_index: results[i].idx,
                      name: paketSuperEkonomisMenus[j].replace(/_/g, ' ').toUpperCase(),
                      bom_item_name: '',
                      quantity: results[i]['total_quantity_1']
                    };
                    paketSuperEkonomisMenu.bom_item_name = 'MASAK ' + paketSuperEkonomisMenu.name;
                    allMatriksKitchen.push(paketSuperEkonomisMenu);
                  }
                }
              }

              // paket arabian style 
              bungkusSateQuantity = 0;
              menuNonSate = '';
              menuNonSateSequence = 1;
              for (let j = 0; j < paketArabianStyleMenus.length; j++) {
                if (results[i]['is_pas_' + paketArabianStyleMenus[j]]) {
                  const name = paketArabianStyleMenus[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['total_quantity_1'];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else if (!name.startsWith('NASI ')) {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

              // paket arabian style package description
              packageDescription = results[i].order_name + '\r\n\r\n';
              if (bungkusSateQuantity > 0) {
                packageDescription += 'MENU SATE\r\n';
                packageDescription += 'SATE, Jumlah ' + bungkusSateQuantity + '\r\n\r\n';
              }
              if (menuNonSate) {
                menuNonSate = menuNonSate.slice(0, -2);
                packageDescription += 'MENU NON SATE\r\n';
                packageDescription += menuNonSate;
              }

              // paket tumpengan spesial
              bungkusSateQuantity = 0;
              menuNonSate = '';
              menuNonSateSequence = 1;
              for (let j = 0; j < paketTumpenganSpesialMenus.length; j++) {
                if (results[i]['is_pts_' + paketTumpenganSpesialMenus[j]]) {
                  const name = paketTumpenganSpesialMenus[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['total_quantity_1'];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

              // paket tumpeng box
              bungkusSateQuantity = 0;
              menuNonSate = '';
              menuNonSateSequence = 1;
              for (let j = 0; j < paketTumpengBoxMenus.length; j++) {
                if (results[i]['is_ptb_' + paketTumpengBoxMenus[j]]) {
                  const name = paketTumpengBoxMenus[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['total_quantity_1'];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

              // paket reguler bento
              bungkusSateQuantity = 0;
              menuNonSate = '';
              menuNonSateSequence = 1;
              for (let j = 0; j < paketRegulerBentoMenus.length; j++) {
                if (results[i]['is_prb_' + paketRegulerBentoMenus[j]]) {
                  const name = paketRegulerBentoMenus[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['total_quantity_1'];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

              // paket promo reguler 
              bungkusSateQuantity = 0;
              menuNonSate = '';
              menuNonSateSequence = 1;
              for (let j = 0; j < paketRegulerMenus.length; j++) {
                if (results[i]['is_reg_' + paketRegulerMenus[j]]) {
                  const name = paketRegulerMenus[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['total_quantity_1'];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

              // paket promo arabian 
              bungkusSateQuantity = 0;
              menuNonSate = '';
              menuNonSateSequence = 1;
              for (let j = 0; j < paketPromoArabianMenus.length; j++) {
                if (results[i]['is_ppa_' + paketPromoArabianMenus[j]]) {
                  const name = paketPromoArabianMenus[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['total_quantity_1'];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

               // paket aqiqah ekonomis 
               bungkusSateQuantity = 0;
               menuNonSate = '';
               menuNonSateSequence = 1;
               for (let j = 0; j < paketAqiqahEkonomisMenus.length; j++) {
                 if (results[i]['is_pae_' + paketAqiqahEkonomisMenus[j]]) {
                   const name = paketAqiqahEkonomisMenus[j].replace(/_/g, ' ').toUpperCase();
                   const quantity = results[i]['total_quantity_1'];
                   if (name === 'SATE') {
                     bungkusSateQuantity += quantity;
                   } else {
                     menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                     menuNonSateSequence++;
                   }
                 }
               }

              // paket box istimewa
              bungkusSateQuantity = 0;
              menuNonSate = '';
              menuNonSateSequence = 1;
              for (let j = 0; j < paketBoxIstimewaMenus.length; j++) {
                if (results[i]['is_pbi_' + paketBoxIstimewaMenus[j]]) {
                  const name = paketBoxIstimewaMenus[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['total_quantity_1'];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else if (!name.startsWith('NASI ')) {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

              // paket box abg
              bungkusSateQuantity = 0;
              menuNonSate = '';
              menuNonSateSequence = 1;
              for (let j = 0; j < paketBoxAbgMenus.length; j++) {
                if (results[i]['is_abg_' + paketBoxAbgMenus[j]]) {
                  const name = paketBoxAbgMenus[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['total_quantity_1'];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else if (!name.startsWith('NASI ')) {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

              // nasi nampan
              bungkusSateQuantity = 0;
              menuNonSate = '';
              menuNonSateSequence = 1;
              for (let j = 0; j < nasiNampanMenus.length; j++) {
                if (results[i]['is_nn_' + nasiNampanMenus[j]]) {
                  const name = nasiNampanMenus[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['total_quantity_1'];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else if (!name.startsWith('NASI ')) {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

              // paket prasmanan
              bungkusSateQuantity = 0;
              menuNonSate = '';
              menuNonSateSequence = 1;
              for (let j = 0; j < paketPrasmananMenus.length; j++) {
                if (results[i]['is_pr_' + paketPrasmananMenus[j]]) {
                  const name = paketPrasmananMenus[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['total_quantity_1'];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else if (!name.startsWith('NASI ')) {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

              // satuan
              bungkusSateQuantity = 0;
              menuNonSate = '';
              menuNonSateSequence = 1;
              if (results[i].order_name === 'PAKET BOX SATUAN') {
                for (let j = 0; j < satuanMenusId.length; j++) {
                  const name = satuanMenusId[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['total_quantity_1'];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

              if (results[i].order_name !== 'PAKET BOX SATUAN') {
                for (let j = 0; j < satuanMenus.length; j++) {
                  if (satuanMenus[j].toUpperCase() === results[i].order_name.toUpperCase()) {
                    const name = satuanMenus[j].replace(/_/g, ' ').toUpperCase();
                    const quantity = results[i]['total_quantity_1'];
                    if (name === 'SATE') {
                      bungkusSateQuantity += quantity;
                    } else {
                      menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                      menuNonSateSequence++;
                    }
                  }
                }
              }

              // makan gratis
              bungkusSateQuantity = 0;
              menuNonSate = '';
              menuNonSateSequence = 1;
              for (let j = 0; j < makanGratisMenus.length; j++) {
                if (makanGratisMenus[j].toUpperCase() === results[i].order_name.toUpperCase()) {
                  const name = makanGratisMenus[j].replace(/_/g, ' ').toUpperCase();
                  const quantity = results[i]['total_quantity_1'];
                  if (name === 'SATE') {
                    bungkusSateQuantity += quantity;
                  } else {
                    menuNonSate = menuNonSateSequence + '. ' + name + ', Jumlah ' + quantity + '\r\n';
                    menuNonSateSequence++;
                  }
                }
              }

              // others package description
              packageDescription = results[i].order_name + '\r\n\r\n';
              if (bungkusSateQuantity > 0) {
                packageDescription += 'MENU SATE\r\n';
                packageDescription += 'SATE, Jumlah ' + bungkusSateQuantity + '\r\n\r\n';
              }
              if (menuNonSate) {
                menuNonSate = menuNonSate.slice(0, -2);
                packageDescription += 'MENU NON SATE\r\n';
                packageDescription += menuNonSate;
              }

              for (let j = 0; j < paketTumpenganSpesialMenuIds.length; j++) {
                if (results[i]['is_pts_' + paketTumpenganSpesialMenuIds[j]]) {
                  const paketTumpenganSpesialMenu = {
                    type: 'BOX',
                    skph_box: skphAnalysis.skph_box,
                    wo_code: skphAnalysis.wo_code,
                    wo_sequence: skphAnalysis.wo_sequence,
                    sales_order: skphAnalysis.sales_order,
                    package_description: packageDescription,
                    package_index: results[i].idx,
                    name: paketTumpenganSpesialMenuIds[j].replace(/_/g, ' ').toUpperCase(),
                    bom_item_name: '',
                    quantity: results[i]['total_quantity_1']
                  };
                  paketTumpenganSpesialMenu.bom_item_name = 'MASAK ' + paketTumpenganSpesialMenu.name;
                  allMatriksKitchen.push(paketTumpenganSpesialMenu);
                }
              }

              for (let j = 0; j < paketTumpengBoxMenuIds.length; j++) {
                if (results[i]['is_ptb_' + paketTumpengBoxMenuIds[j]]) {
                  if (paketTumpengBoxMenuIds[j] !== 'nasi_kuning' && paketTumpengBoxMenuIds[j] !== 'pisang'
                    && paketTumpengBoxMenuIds[j] !== 'kerupuk') {
                    const paketTumpenganSpesialMenu = {
                      type: 'BOX',
                      skph_box: skphAnalysis.skph_box,
                      wo_code: skphAnalysis.wo_code,
                      wo_sequence: skphAnalysis.wo_sequence,
                      sales_order: skphAnalysis.sales_order,
                      package_description: packageDescription,
                      package_index: results[i].idx,
                      name: paketTumpengBoxMenuIds[j].replace(/_/g, ' ').toUpperCase(),
                      bom_item_name: '',
                      quantity: results[i]['total_quantity_1']
                    };
                    paketTumpenganSpesialMenu.bom_item_name = 'MASAK ' + paketTumpenganSpesialMenu.name;
                    allMatriksKitchen.push(paketTumpenganSpesialMenu);
                  }
                }
              }

              for (let j = 0; j < paketRegulerBentoMenuIds.length; j++) {
                if (results[i]['is_prb_' + paketRegulerBentoMenuIds[j]]) {
                  if (paketRegulerBentoMenuIds[j] !== 'pisang' && paketRegulerBentoMenuIds[j] !== 'kerupuk') {
                    const paketRegulerBentoMenu = {
                      type: 'BOX',
                      skph_box: skphAnalysis.skph_box,
                      wo_code: skphAnalysis.wo_code,
                      wo_sequence: skphAnalysis.wo_sequence,
                      sales_order: skphAnalysis.sales_order,
                      package_description: packageDescription,
                      package_index: results[i].idx,
                      name: paketRegulerBentoMenuIds[j].replace(/_/g, ' ').toUpperCase(),
                      bom_item_name: '',
                      quantity: results[i]['total_quantity_1']
                    };
                    paketRegulerBentoMenu.bom_item_name = 'MASAK ' + paketRegulerBentoMenu.name;
                    allMatriksKitchen.push(paketRegulerBentoMenu);
                  }
                }
              }

              for (let j = 0; j < paketRegulerMenus.length; j++) {
                if (results[i]['is_reg_' + paketRegulerMenus[j]]) {
                  if (paketRegulerMenus[j] !== 'kerupuk' && paketRegulerMenus[j] !== 'sendok') {
                    const paketRegulerMenu = {
                      type: 'BOX',
                      skph_box: skphAnalysis.skph_box,
                      wo_code: skphAnalysis.wo_code,
                      wo_sequence: skphAnalysis.wo_sequence,
                      sales_order: skphAnalysis.sales_order,
                      package_description: packageDescription,
                      package_index: results[i].idx,
                      name: paketRegulerMenus[j].replace(/_/g, ' ').toUpperCase(),
                      bom_item_name: '',
                      quantity: results[i]['total_quantity_1']
                    };
                    paketRegulerMenu.bom_item_name = 'MASAK ' + paketRegulerMenu.name;
                    allMatriksKitchen.push(paketRegulerMenu);
                  }
                }
              }
              
              for (let j = 0; j < paketPromoArabianMenus.length; j++) {
                if (results[i]['is_ppa_' + paketPromoArabianMenus[j]]) {
                  if (paketPromoArabianMenus[j] !== 'kerupuk' && paketPromoArabianMenus[j] !== 'sendok') {
                    const paketPromoArabianMenu = {
                      type: 'BOX',
                      skph_box: skphAnalysis.skph_box,
                      wo_code: skphAnalysis.wo_code,
                      wo_sequence: skphAnalysis.wo_sequence,
                      sales_order: skphAnalysis.sales_order,
                      package_description: packageDescription,
                      package_index: results[i].idx,
                      name: paketPromoArabianMenus[j].replace(/_/g, ' ').toUpperCase(),
                      bom_item_name: '',
                      quantity: results[i]['total_quantity_1']
                    };
                    paketPromoArabianMenu.bom_item_name = 'MASAK ' + paketPromoArabianMenu.name;
                    allMatriksKitchen.push(paketPromoArabianMenu);
                  }
                }
              }

              for (let j = 0; j < paketAqiqahEkonomisMenus.length; j++) {
                if (results[i]['is_pae_' + paketAqiqahEkonomisMenus[j]]) {
                  const paketAqiqahEkonomisMenu = {
                    type: 'BOX',
                    skph_box: skphAnalysis.skph_box,
                    wo_code: skphAnalysis.wo_code,
                    wo_sequence: skphAnalysis.wo_sequence,
                    sales_order: skphAnalysis.sales_order,
                    package_description: packageDescription,
                    package_index: results[i].idx,
                    name: paketAqiqahEkonomisMenus[j].replace(/_/g, ' ').toUpperCase(),
                    bom_item_name: '',
                    quantity: results[i]['total_quantity_1']
                  };
                  paketAqiqahEkonomisMenu.bom_item_name = 'MASAK ' + paketAqiqahEkonomisMenu.name;
                  allMatriksKitchen.push(paketAqiqahEkonomisMenu);
                }
              }

              for (let j = 0; j < paketArabianStyleMenus.length; j++) {
                if (results[i]['is_pas_' + paketArabianStyleMenus[j]]) {
                  if (paketArabianStyleMenus[j] !== 'timun' && paketArabianStyleMenus[j] !== 'sambal') {
                    const paketArabianStyleMenu = {
                      type: 'BOX',
                      skph_box: skphAnalysis.skph_box,
                      wo_code: skphAnalysis.wo_code,
                      wo_sequence: skphAnalysis.wo_sequence,
                      sales_order: skphAnalysis.sales_order,
                      package_description: packageDescription,
                      package_index: results[i].idx,
                      name: paketArabianStyleMenus[j].replace(/_/g, ' ').toUpperCase(),
                      bom_item_name: '',
                      quantity: results[i]['total_quantity_1']
                    };
                    paketArabianStyleMenu.bom_item_name = 'MASAK ' + paketArabianStyleMenu.name;
                    allMatriksKitchen.push(paketArabianStyleMenu);
                  }
                }
              }

              for (let j = 0; j < paketBoxIstimewaMenus.length; j++) {
                if (results[i]['is_pbi_' + paketBoxIstimewaMenus[j]]) {
                  const paketBoxIstimewaMenu = {
                    type: 'BOX',
                    skph_box: skphAnalysis.skph_box,
                    wo_code: skphAnalysis.wo_code,
                    wo_sequence: skphAnalysis.wo_sequence,
                    sales_order: skphAnalysis.sales_order,
                    package_description: packageDescription,
                    package_index: results[i].idx,
                    name: paketBoxIstimewaMenus[j].replace(/_/g, ' ').toUpperCase(),
                    bom_item_name: '',
                    quantity: results[i]['total_quantity_1']
                  };
                  paketBoxIstimewaMenu.bom_item_name = 'MASAK ' + paketBoxIstimewaMenu.name;
                  allMatriksKitchen.push(paketBoxIstimewaMenu);
                }
              }

              for (let j = 0; j < paketBoxAbgMenus.length; j++) {
                if (results[i]['is_abg_' + paketBoxAbgMenus[j]]) {
                  const paketBoxAbgMenu = {
                    type: 'BOX',
                    skph_box: skphAnalysis.skph_box,
                    wo_code: skphAnalysis.wo_code,
                    wo_sequence: skphAnalysis.wo_sequence,
                    sales_order: skphAnalysis.sales_order,
                    package_description: packageDescription,
                    package_index: results[i].idx,
                    name: paketBoxAbgMenus[j].replace(/_/g, ' ').toUpperCase(),
                    bom_item_name: '',
                    quantity: results[i]['total_quantity_1']
                  };
                  paketBoxAbgMenu.bom_item_name = 'MASAK ' + paketBoxAbgMenu.name;
                  allMatriksKitchen.push(paketBoxAbgMenu);
                }
              }

              for (let j = 0; j < nasiNampanMenus.length; j++) {
                if (results[i]['is_nn_' + nasiNampanMenus[j]]) {
                  const nasiNampanMenu = {
                    type: 'BOX',
                    skph_box: skphAnalysis.skph_box,
                    wo_code: skphAnalysis.wo_code,
                    wo_sequence: skphAnalysis.wo_sequence,
                    sales_order: skphAnalysis.sales_order,
                    package_description: packageDescription,
                    package_index: results[i].idx,
                    name: nasiNampanMenus[j].replace(/_/g, ' ').toUpperCase(),
                    bom_item_name: '',
                    quantity: results[i]['total_quantity_1']
                  };
                  nasiNampanMenu.bom_item_name = 'MASAK ' + nasiNampanMenu.name;
                  allMatriksKitchen.push(nasiNampanMenu);
                }
              }

              for (let j = 0; j < paketPrasmananMenus.length; j++) {
                if (results[i]['is_pr_' + paketPrasmananMenus[j]]) {
                  const paketPrasmananMenu = {
                    type: 'BOX',
                    skph_box: skphAnalysis.skph_box,
                    wo_code: skphAnalysis.wo_code,
                    wo_sequence: skphAnalysis.wo_sequence,
                    sales_order: skphAnalysis.sales_order,
                    package_description: packageDescription,
                    package_index: results[i].idx,
                    name: paketPrasmananMenus[j].replace(/_/g, ' ').toUpperCase(),
                    bom_item_name: '',
                    quantity: results[i]['total_quantity_1']
                  };
                  paketPrasmananMenu.bom_item_name = 'MASAK ' + paketPrasmananMenu.name;
                  allMatriksKitchen.push(paketPrasmananMenu);
                }
              }

              if (results[i].order_name === 'PAKET BOX SATUAN') {
                for (let j = 0; j < satuanMenusId.length; j++) {
                  const satuanMenuId = {
                    type: 'PCS',
                    skph_box: skphAnalysis.skph_box,
                    wo_code: skphAnalysis.wo_code,
                    wo_sequence: skphAnalysis.wo_sequence,
                    sales_order: skphAnalysis.sales_order,
                    package_description: packageDescription,
                    package_index: results[i].idx,
                    name: satuanMenusId[j].replace(/_/g, ' ').toUpperCase(),
                    bom_item_name: '',
                    quantity: results[i]['total_quantity_1']
                  };
                  satuanMenuId.bom_item_name = 'MASAK ' + satuanMenuId.name;
                  allMatriksKitchen.push(satuanMenuId);
                }
              }
              if (results[i].order_name !== 'PAKET BOX SATUAN') {
                for (let j = 0; j < satuanMenus.length; j++) {
                  if (satuanMenus[j].toUpperCase() === results[i].order_name.toUpperCase()) {
                    if (!['PLASTIK SATUAN', 'BOX MERAH', 'BOX BENTO', 'CUP SEALER', 'BINGKAI', 'TUMBLER', 'BONEKA' ].includes(satuanMenus[j])) {
                      const satuanMenu = {
                        type: 'PCS',
                        skph_box: skphAnalysis.skph_box,
                        wo_code: skphAnalysis.wo_code,
                        wo_sequence: skphAnalysis.wo_sequence,
                        sales_order: skphAnalysis.sales_order,
                        package_description: packageDescription,
                        package_index: results[i].idx,
                        name: satuanMenus[j].replace(/_/g, ' ').toUpperCase(),
                        bom_item_name: '',
                        quantity: results[i]['total_quantity_1']
                      };
                      satuanMenu.bom_item_name = 'MASAK ' + satuanMenu.name;
                      allMatriksKitchen.push(satuanMenu);
                    }
                  }
                }
              }

              for (let j = 0; j < makanGratisMenus.length; j++) {
                if (makanGratisMenus[j].toUpperCase() === results[i].order_name.toUpperCase()) {
                  const makanGratisMenu = {
                    type: 'BOX',
                    skph_box: skphAnalysis.skph_box,
                    wo_code: skphAnalysis.wo_code,
                    wo_sequence: skphAnalysis.wo_sequence,
                    sales_order: skphAnalysis.sales_order,
                    package_description: packageDescription,
                    package_index: results[i].idx,
                    name: makanGratisMenus[j].replace(/_/g, ' ').toUpperCase(),
                    bom_item_name: '',
                    quantity: results[i]['total_quantity_1']
                  };
                  makanGratisMenu.bom_item_name = 'MASAK ' + makanGratisMenu.name;
                  allMatriksKitchen.push(makanGratisMenu);
                }
              }
            }
          }
        }
      });
      // bom
      if (allMatriksKitchen.length > 0) {
        let boms = [];
        let menuCategoryWorkstations = [];
        const bomItemNames = _.map(_.uniqBy(allMatriksKitchen, 'bom_item_name'), 'bom_item_name');
        _.remove(bomItemNames, (o) => {
          return !o;
        });
        if (bomItemNames.length > 0) {
          await frappe.db.get_list('BOM', {
            filters: {
              'item_name': ['IN', bomItemNames],
              'is_active': 1,
              'is_default': 1
            },
            fields: ['name', 'item_name', 'is_merged', 'menu_category'],
            limit: 0
          }).then((results) => {
            if (results && results.length > 0) {
              boms = results;

              $.each(allMatriksKitchen, (index, d) => {
                const result = _.find(results, (o) => {
                  return o.item_name === d.bom_item_name;
                });
                if (result) {
                  d.bom = result;
                }
              });
            }
          });
        }
        if (boms.length > 0) {
          await frappe.db.get_list('Menu Category Workstation', {
            filters: {
              'parent': ['IN', _.map(_.uniqBy(boms, 'menu_category'), 'menu_category')],
              'is_used_by_skph_matriks_kitchen': 1,
              'is_default_skph_matriks_kitchen': 1
            },
            fields: ['parent', 'workstation', 'max_capacity'],
            order_by: 'workstation asc',
            limit: 0
          }).then((results) => {
            if (results && results.length > 0) {
              menuCategoryWorkstations = results;

              $.each(allMatriksKitchen, (index, d) => {
                if (d.bom && d.bom.menu_category) {
                  d.bom.menu_category_workstations = _.filter(results, (o) => {
                    return o.parent === d.bom.menu_category;
                  });
                }
              });
            }
          });
        }
      }
    }
  }

  // combine data
  const docDataMatriksKitchen = {
    sales_order_quantity: 0,
    time_start: '',
    time_finish: '',
    updated_by: user,
    updated_at: today
  };

  for (let i = 1; i <= maxGelarBatch; i++) {
    docDataMatriksKitchen['batch_' + i + '_is_use'] = 0;
    docDataMatriksKitchen['batch_' + i + '_time_start'] = '';
    docDataMatriksKitchen['batch_' + i + '_time_finish'] = '';
    docDataMatriksKitchen['batch_' + i] = [];
    docDataMatriksKitchen['batch_' + i + '_default'] = [];
    docDataMatriksKitchen['batch_' + i + '_merged'] = [];
  }

  let lateMatriks = [];
  let noLateMatriks = [];
  const allLateMatriks = [];
  const allLateMatriksData = [];
  if (allMatriksKitchen.length > 0) {
    const resultParents = [];
    if (resultSkphGelarBox && resultSkphGelarBox.name) {
      resultParents.push(resultSkphGelarBox.name);
    }
    if (resultSkphGelarBungkus && resultSkphGelarBungkus.name) {
      resultParents.push(resultSkphGelarBungkus.name);
    }
    if (resultParents.length > 0) {
      await frappe.db.get_list('SKPH Gelar Schedule', {
        filters: {
          'parent': ['IN', resultParents]
        },
        fields: ['parenttype', 'parentfield', 'sales_order', 'wo_code'],
        order_by: 'parenttype asc, parentfield asc',
        limit: 0
      }).then((results) => {
        if (results && results.length > 0) {
          // reorder data
          $.each(allMatriksKitchen, (index, d) => {
            d.gelar_batch_time_start = '';
            d.gelar_batch_time_start_number = 0;
            d.gelar_batch_time_finish = '';
            d.gelar_batch_time_finish_number = 0;
            const result = _.find(results, (o) => {
              return o.sales_order === d.sales_order;
            });
            if (result) {
              if (result['parentfield']) {
                if (d.skph_box &&
                  resultSkphGelarBox && resultSkphGelarBox[result['parentfield'] + '_is_use']) {
                  d.gelar_batch_time_start = resultSkphGelarBox[result['parentfield'] + '_time_start'];
                  d.gelar_batch_time_finish = resultSkphGelarBox[result['parentfield'] + '_time_finish'];
                } else if (d.skph_order &&
                  resultSkphGelarBungkus && resultSkphGelarBungkus[result['parentfield'] + '_is_use']) {
                  d.gelar_batch_time_start = resultSkphGelarBungkus[result['parentfield'] + '_time_start'];
                  d.gelar_batch_time_finish = resultSkphGelarBungkus[result['parentfield'] + '_time_finish'];
                }
                d.gelar_batch_time_start_number = moment.duration(d.gelar_batch_time_start).asSeconds();
                d.gelar_batch_time_finish_number = moment.duration(d.gelar_batch_time_finish).asSeconds();
              }
            }
          });
          allMatriksKitchen = _.orderBy(allMatriksKitchen,
            ['gelar_batch_time_start_number', 'wo_sequence'],
            ['asc', 'asc']
          );

          // set data
          let batchSequence = 0;
          $.each(allMatriksKitchen, (index, d) => {
            const matriksKitchenDataBefore = allMatriksKitchen[index - 1] || null;

            // set batch
            d.batch = 0;
            d.original_batch = 0;
            d.batch_name = '';
            d.original_batch_name = '';
            if (d.gelar_batch_time_start) {
              if (!batchSequence) {
                batchSequence++;
              } else {
                if (matriksKitchenDataBefore &&
                  matriksKitchenDataBefore.gelar_batch_time_start !== d.gelar_batch_time_start &&
                  matriksKitchenDataBefore.gelar_batch_time_finish !== d.gelar_batch_time_finish) {
                  batchSequence++;
                }
              }
              d.batch = batchSequence;
              d.original_batch = d.batch;
              d.batch_name = 'batch_' + batchSequence;
              d.original_batch_name = d.batch_name;
            }

            // set others
            d.is_merged = 0;
            d.max_capacity = 0;
            d.workstation = '';
            d.children = [];

            d.gelar_time_start = '';
            d.gelar_time_start_number = 999999;
            d.gelar_time_finish = '';
            d.gelar_time_finish_number = 999999;
            d.time_start = '';
            d.time_start_number = 999999;
            d.time_finish = '';
            d.time_finish_number = 999999;

            const result = _.find(results, (o) => {
              return o.sales_order === d.sales_order;
            });
            if (result) {
              if (result['parentfield']) {
                if (d.type === 'BOX') {
                  if (resultSkphGelarBox && resultSkphGelarBox.name) {
                    if (resultSkphGelarBox[`${result['parentfield']}_time_start`] && resultSkphGelarBox[`${result['parentfield']}_time_finish`]) {
                      d.gelar_time_start = moment(resultSkphGelarBox[`${result['parentfield']}_time_start`], 'HH:mm:ss').format('HH:mm:ss');
                      d.gelar_time_finish = moment(resultSkphGelarBox[`${result['parentfield']}_time_finish`], 'HH:mm:ss').format('HH:mm:ss');
                    }
                  }
                } else if (d.type === 'ORDER') {
                  if (resultSkphGelarBungkus && resultSkphGelarBungkus.name) {
                    if (resultSkphGelarBungkus[`${result['parentfield']}_time_start`] && resultSkphGelarBungkus[`${result['parentfield']}_time_finish`]) {
                      d.gelar_time_start = moment(resultSkphGelarBungkus[`${result['parentfield']}_time_start`], 'HH:mm:ss').format('HH:mm:ss');
                      d.gelar_time_finish = moment(resultSkphGelarBungkus[`${result['parentfield']}_time_finish`], 'HH:mm:ss').format('HH:mm:ss');
                    }
                  }
                } else if (d.type === 'PCS') {
                  if (resultSkphGelarBox && resultSkphGelarBox.name) {
                    if (resultSkphGelarBox[`${result['parentfield']}_time_start`] && resultSkphGelarBox[`${result['parentfield']}_time_finish`]) {
                      d.gelar_time_start = moment(resultSkphGelarBox[`${result['parentfield']}_time_start`], 'HH:mm:ss').format('HH:mm:ss');
                      d.gelar_time_finish = moment(resultSkphGelarBox[`${result['parentfield']}_time_finish`], 'HH:mm:ss').format('HH:mm:ss');
                    }
                  }
                }
              }
            }

            if (d.bom) {
              d.is_merged = d.bom.is_merged || 0;
              if (d.bom.menu_category_workstations && Array.isArray(d.bom.menu_category_workstations) &&
                d.bom.menu_category_workstations.length > 0) {
                const menuCategoryWorkstation = _.orderBy(d.bom.menu_category_workstations, ['workstation'], ['asc'])[0];
                d.max_capacity = menuCategoryWorkstation['max_capacity'] || 0;
                d.workstation = menuCategoryWorkstation['workstation'] || '';
              }
            }

            if (d.gelar_time_start && d.gelar_time_finish) {
              const diffMinutes = moment.duration(moment(d.gelar_time_finish, 'HH:mm:ss').diff(moment(d.gelar_time_start, 'HH:mm:ss'))).asMinutes();
              d.gelar_time_start_number = moment.duration(d.gelar_time_start).asSeconds();
              d.gelar_time_finish_number = moment.duration(d.gelar_time_finish).asSeconds();

              const finishDate = moment(d.gelar_time_start, 'HH:mm:ss').subtract(matriksMinuteBeforeCooking, 'minutes');
              d.time_finish = finishDate.format('HH:mm:ss');
              d.time_finish_number = moment.duration(d.time_finish).asSeconds();

              const startDate = moment(finishDate, 'HH:mm:ss').subtract(diffMinutes, 'minutes');
              d.time_start = startDate.format('HH:mm:ss');
              d.time_start_number = moment.duration(d.time_start).asSeconds();
            }
          });
        }
      });
    }

    allMatriksKitchen = _.orderBy(allMatriksKitchen,
      ['time_start_number', 'wo_sequence', 'package_index'],
      ['asc', 'asc', 'asc']
    );
    const matriksKitchen = [];
    $.each(allMatriksKitchen, async (index, d) => {
      const data = {
        index: index,
        wo_code_text: d.wo_code,
        wo_sequence_text: d.wo_sequence,
        package_description: d.package_description,
        package_index: d.package_index,
        quantity: d.quantity,
        description: `wo ${d.batch}`,
        menu: d.name,
        tool: d.workstation,
        time_start: d.time_start,
        original_time_start: d.time_start,
        time_finish: d.time_finish,
        original_time_finish: d.time_finish,
        pic: '',
        notes: '',
        is_checklist_hp: 0,
        merged_name: '',
        is_multiple_wo: 0,
        bom: d.bom && d.bom.name || '',
        max_capacity: d.max_capacity,
        time_start_number: d.time_start_number,
        time_finish_number: d.time_finish_number,
        batch: d.batch,
        batch_name: d.batch_name,
        original_batch: d.batch,
        original_batch_name: d.batch_name,
        is_merged: d.is_merged,
        parent_sales_order: d.sales_order,
        parent_package_description: d.package_description,
        parent_notes: '',
        parent_wo_code: d.wo_code,
        parent_wo_sequence: d.wo_sequence,
        children_index_text: '',
      };
      const salesOrder = _.find(salesOrderData, (o) => {
        return o.name === data.parent_sales_order;
      });
      if (salesOrder) {
        data.parent_notes = salesOrder.notes;
      }
      matriksKitchen.push(data);
    });

    docDataMatriksKitchen.sales_order_quantity = _.uniq(_.map(matriksKitchen, 'wo_code_text')).length;

    // for so late
    if (salesOrderDataLate.length > 0) {
      for (let c = 0; c < salesOrderDataLate.length; c++) {
        for (let m = 0; m < matriksKitchen.length; m++) { 
          if (matriksKitchen[m].parent_sales_order === salesOrderDataLate[c].name) {
            lateMatriks.push(matriksKitchen[m]);
          } else {
            noLateMatriks.push(matriksKitchen[m]);
          }
        }
      }
    } else {
      noLateMatriks = matriksKitchen;
      docDataMatriksKitchen["batch_17_is_use"] = 0;
      docDataMatriksKitchen["batch_17_time_start"] = "";
      docDataMatriksKitchen["batch_17_time_finish"] = "";
      docDataMatriksKitchen["batch_17"] = [];
      docDataMatriksKitchen["batch_17_default"] = [];
      docDataMatriksKitchen["batch_17_merged"] = [];
    }
    // noLateMatriksData = _.uniqBy(noLateMatriks, function (e) { return e.menu; });

    if (lateMatriks.length > 0) {
      for (let j = 0; j < lateMatriks.length; j++) {
        lateMatriks[j].pic_name = null;
        lateMatriks[j].batch = 17;
        lateMatriks[j].original_batch = 17;
        lateMatriks[j].is_checklist_hp = 0;
        lateMatriks[j].batch_name = 'batch_17';
        lateMatriks[j].original_batch_name = 'batch_17';
        allLateMatriks.push(lateMatriks[j]);
      }
      if (allLateMatriks.length > 0) {
        for (let a = 0; a < allLateMatriks.length; a++) {
          for (let b = 0; b < salesOrderDataLate.length; b++) {
            if (allLateMatriks[a].parent_sales_order === salesOrderDataLate[b].name) {
              allLateMatriksData.push(allLateMatriks[a]);
            }
          }
        }
      } 
    }

    for (let i = 1; i <= maxGelarBatch; i++) {
      const matriksKitchenData = _.orderBy(_.filter(noLateMatriks, (o) => {
        return o.batch === i;
      }),
        ['time_start_number', 'wo_sequence_text', 'package_index', 'index'],
        ['asc', 'asc', 'asc', 'asc']
      );
      if (matriksKitchenData.length > 0) {
        docDataMatriksKitchen['batch_' + i + '_is_use'] = 1;
        docDataMatriksKitchen['batch_' + i + '_time_start'] = '';
        docDataMatriksKitchen['batch_' + i + '_time_finish'] = '';
        docDataMatriksKitchen['batch_' + i] = matriksKitchenData;
        docDataMatriksKitchen['batch_' + i + '_default'] = matriksKitchenData;
        docDataMatriksKitchen['batch_' + i + '_merged'] = _.map(_.filter(matriksKitchenData, (o) => {
          return o.is_merged;
        }), (o) => {
          return _.mapKeys(_.pick(o,
            'index', 'wo_code_text', 'package_description', 'package_index', 'quantity',
            'menu', 'tool', 'time_start', 'time_finish', 'original_time_start',
            'original_time_finish', 'merged_name', 'parent_sales_order',
            'bom', 'max_capacity', 'original_batch', 'batch_name', 'original_batch_name'), (value, key) => {
              return key === 'wo_code_text' ? 'wo_code' : key === 'parent_sales_order' ? 'sales_order' : key;;
            });
        });
      }
    }
    // merged_name
    if (resultSkphMatriksKitchen.is_manual_calculation) {
      // apply manual
      for (let i = 1; i <= maxGelarBatch; i++) {
        $.each(docDataMatriksKitchen['batch_' + i + '_merged'], (index, d) => {
          d.merged_name = '';

          const batchMerged = _.filter(resultSkphMatriksKitchen['batch_' + i + '_merged'], (o) => {
            return o.wo_code === d.wo_code &&
              o.package_index === d.package_index && o.menu === d.menu;
          });
          if (batchMerged.length > 1) {
            const batchMergedData = _.find(batchMerged, (o) => {
              return o.index === d.index;
            });
            if (batchMergedData) {
              d.merged_name = batchMergedData.merged_name;
            } else {
              d.merged_name = batchMerged[0].merged_name;
            }
          } else if (batchMerged.length === 1) {
            d.merged_name = batchMerged[0].merged_name;
          }
        });
      }
    } else {
      // auto merged_name
      for (let i = 1; i <= maxGelarBatch; i++) {
        let applyIndexes = [];
        let mergeSequence = 1;
        $.each(docDataMatriksKitchen['batch_' + i + '_merged'], (parentIndex, parentD) => {
          if (!applyIndexes.includes(parentD.index) && parentD.max_capacity > 0) {
            applyIndexes.push(parentD.index);
            const childrenBatch = _.filter(docDataMatriksKitchen['batch_' + i + '_merged'], (o) => {
              return o.menu === parentD.menu && !applyIndexes.includes(o.index);
            });
            if (childrenBatch.length > 0) {
              const mergedName = 'GABUNG ' + mergeSequence;
              const childrenData = [];
              let totalQuantity = parentD.quantity;
              $.each(docDataMatriksKitchen['batch_' + i + '_merged'], (index, d) => {
                if (_.map(childrenBatch, 'index').includes(d.index)) {
                  if (totalQuantity <= parentD.max_capacity &&
                    (totalQuantity + d.quantity) <= parentD.max_capacity) {
                    totalQuantity += d.quantity;
                    parentD.merged_name = mergedName;
                    d.merged_name = mergedName;
                    childrenData.push(d);
                  }
                }
              });
              if (childrenData.length > 0) {
                applyIndexes = [...applyIndexes, ..._.map(childrenData, 'index')];
                mergeSequence++;
              }
            }
          }
        });
      }
    }

    // auto calculation
    const dataFields = [
      'tool', 'time_start', 'time_finish', 'time_start_number', 'time_finish_number',
      'pic', 'pic_name', 'notes', 'is_checklist_hp'
    ];
    if (!resultSkphMatriksKitchen.is_manual_calculation) {
      _.remove(dataFields, (o) => {
        return [
          'tool', 'time_start', 'time_finish',
          'time_start_number', 'time_finish_number'
        ].includes(o);
      });
    }
    const allNewMatriksKitchen = [];
    for (let i = 1; i <= maxGelarBatch; i++) {
      let allowCalculation = true;
      if (resultSkphMatriksKitchen.is_manual_calculation) {
        if (resultSkphMatriksKitchen['batch_' + i].length > 0) {
          docDataMatriksKitchen['batch_' + i + '_is_use'] = resultSkphMatriksKitchen['batch_' + i + '_is_use'];
          docDataMatriksKitchen['batch_' + i + '_time_start'] = resultSkphMatriksKitchen['batch_' + i + '_time_start'];
          docDataMatriksKitchen['batch_' + i + '_time_finish'] = resultSkphMatriksKitchen['batch_' + i + '_time_finish'];
          docDataMatriksKitchen['batch_' + i] = JSON.parse(JSON.stringify((resultSkphMatriksKitchen['batch_' + i])));
          docDataMatriksKitchen['batch_' + i + '_default'] = JSON.parse(JSON.stringify((resultSkphMatriksKitchen['batch_' + i + '_default'])));
          docDataMatriksKitchen['batch_' + i + '_merged'] = JSON.parse(JSON.stringify((resultSkphMatriksKitchen['batch_' + i + '_merged'])));
          allowCalculation = false;
        }
      }
      if (allowCalculation) {
        const result = setBatchData(docDataMatriksKitchen, 'batch_' + i);
        docDataMatriksKitchen['batch_' + i] = JSON.parse(JSON.stringify((result.docDataMatriksKitchen['batch_' + i])));
        if (resultSkphMatriksKitchen['batch_' + i] && Array.isArray(resultSkphMatriksKitchen['batch_' + i]) &&
          resultSkphMatriksKitchen['batch_' + i].length > 0) {
          // set value
          $.each(docDataMatriksKitchen['batch_' + i], (parentIndex, parentD) => {
            const batchData = _.filter(resultSkphMatriksKitchen['batch_' + i], (o) => {
              return o.parent_wo_code === parentD.parent_wo_code &&
                o.package_index === parentD.package_index && o.menu === parentD.menu;
            });
            if (batchData.length > 1) {
              const batch = _.find(batchData, (o) => {
                return o.index === parentD.index;
              });
              if (batch) {
                $.each(dataFields, (index, d) => {
                  parentD[d] = batch[d];
                });
              } else {
                $.each(dataFields, (index, d) => {
                  parentD[d] = batchData[0][d];
                });
              }
            } else if (batchData.length === 1) {
              $.each(dataFields, (index, d) => {
                parentD[d] = batchData[0][d];
              });
            }
          });

          if (docDataMatriksKitchen['batch_' + i] && Array.isArray(docDataMatriksKitchen['batch_' + i]) &&
            docDataMatriksKitchen['batch_' + i].length > 0) {
            docDataMatriksKitchen['batch_' + i + '_time_start'] = _.orderBy(_.filter(docDataMatriksKitchen['batch_' + i], (o) => {
              return o.time_start;
            }), ['time_start_number'], ['asc'])[0].time_start || '';
            docDataMatriksKitchen['batch_' + i + '_time_finish'] = _.orderBy(_.filter(docDataMatriksKitchen['batch_' + i], (o) => {
              return o.time_finish;
            }), ['time_finish_number'], ['desc'])[0].time_finish || '';
          } else {
            docDataMatriksKitchen['batch_' + i] = [];
          }
        }
      }
      if (docDataMatriksKitchen['batch_' + i].length > 0) {
        allNewMatriksKitchen.push(...docDataMatriksKitchen['batch_' + i]);
      }
    }

    if (allNewMatriksKitchen.length > 0) {
      docDataMatriksKitchen.time_start = _.orderBy(_.filter(allNewMatriksKitchen, (o) => {
        return o.time_start;
      }), ['time_start_number'], ['asc'])[0].time_start || '';
      docDataMatriksKitchen.time_finish = _.orderBy(_.filter(allNewMatriksKitchen, (o) => {
        return o.time_finish;
      }), ['time_finish_number'], ['desc'])[0].time_finish || '';
    }

    // late
    if (allLateMatriksData.length > 0) {
      docDataMatriksKitchen['batch_17_is_use'] = 1;
      docDataMatriksKitchen['batch_17_time_start'] = '';
      docDataMatriksKitchen['batch_17_time_finish'] = '';
      docDataMatriksKitchen['batch_17'] = allLateMatriksData;
      docDataMatriksKitchen['batch_17_default'] = allLateMatriksData;
      docDataMatriksKitchen['batch_17_merged'] = _.map(_.filter(allLateMatriksData, (o) => {
        return o.is_merged;
      }), (o) => {
        return _.mapKeys(_.pick(o,
          'index', 'wo_code_text', 'package_description', 'package_index', 'quantity',
          'menu', 'tool', 'time_start', 'time_finish', 'original_time_start',
          'original_time_finish', 'merged_name', 'parent_sales_order',
          'bom', 'max_capacity', 'original_batch', 'batch_name', 'original_batch_name'), (value, key) => {
            return key === 'wo_code_text' ? 'wo_code' : key === 'parent_sales_order' ? 'sales_order' : key;;
          });
      });

      // Gabung
      let applyIndexes = [];
      let mergeSequence = 1;
      $.each(docDataMatriksKitchen['batch_17_merged'], (parentIndex, parentD) => {
        if (!applyIndexes.includes(parentD.index) && parentD.max_capacity > 0) {
          applyIndexes.push(parentD.index);
          const childrenBatch = _.filter(docDataMatriksKitchen['batch_17_merged'], (o) => {
            return o.menu === parentD.menu && !applyIndexes.includes(o.index);
          });

          if (childrenBatch.length > 0) {
            const mergedName = 'GABUNG ' + mergeSequence;
            const childrenData = [];
            let totalQuantity = parentD.quantity;
            $.each(docDataMatriksKitchen['batch_17_merged'], (index, d) => {
              if (_.map(childrenBatch, 'index').includes(d.index)) {
                if (totalQuantity <= parentD.max_capacity &&
                  (totalQuantity + d.quantity) <= parentD.max_capacity) {
                  totalQuantity += d.quantity;
                  parentD.merged_name = mergedName;
                  d.merged_name = mergedName;
                  childrenData.push(d);
                }
              }
            });

            if (childrenData.length > 0) {
              applyIndexes = [...applyIndexes, ..._.map(childrenData, 'index')];
              mergeSequence++;
            }
          }
        }
      });

      const result = setBatchData(docDataMatriksKitchen, 'batch_17');
      docDataMatriksKitchen['batch_17'] = JSON.parse(JSON.stringify((result.docDataMatriksKitchen['batch_17'])));
      // set value
      $.each(docDataMatriksKitchen['batch_17'], (parentIndex, parentD) => {
        const batchData = _.filter(resultSkphMatriksKitchen['batch_17'], (o) => {
          return o.parent_wo_code === parentD.parent_wo_code &&
            o.package_index === parentD.package_index && o.menu === parentD.menu;
        });
        if (batchData.length > 1) {
          const batch = _.find(batchData, (o) => {
            return o.index === parentD.index;
          });
          if (batch) {
            $.each(dataFields, (index, d) => {
              parentD[d] = batch[d];
            });
          } else {
            $.each(dataFields, (index, d) => {
              parentD[d] = batchData[0][d];
            });
          }
        } else if (batchData.length === 1) {
          $.each(dataFields, (index, d) => {
            parentD[d] = batchData[0][d];
          });
        }
      });
      if (docDataMatriksKitchen['batch_17'] && Array.isArray(docDataMatriksKitchen['batch_17']) &&
        docDataMatriksKitchen['batch_17'].length > 0) {
        docDataMatriksKitchen['batch_17_time_start'] = _.orderBy(_.filter(docDataMatriksKitchen['batch_17'], (o) => {
          return o.time_start;
        }), ['time_start_number'], ['asc'])[0].time_start || '';
        docDataMatriksKitchen['batch_17_time_finish'] = _.orderBy(_.filter(docDataMatriksKitchen['batch_17'], (o) => {
          return o.time_finish;
        }), ['time_finish_number'], ['desc'])[0].time_finish || '';
      } else {
        docDataMatriksKitchen['batch_17'] = [];
      }

      if (docDataMatriksKitchen['batch_17'].length > 0) {
        allNewMatriksKitchen.push(...docDataMatriksKitchen['batch_17']);
      }

      if (allNewMatriksKitchen.length > 0) {
        docDataMatriksKitchen.time_start = _.orderBy(_.filter(allNewMatriksKitchen, (o) => {
          return o.time_start;
        }), ['time_start_number'], ['asc'])[0].time_start || '';
        docDataMatriksKitchen.time_finish = _.orderBy(_.filter(allNewMatriksKitchen, (o) => {
          return o.time_finish;
        }), ['time_finish_number'], ['desc'])[0].time_finish || '';
      }
    }
  } else {
    docDataMatriksKitchen.is_manual_calculation = 0;
  }

  await frappe.call({
    method: 'frappe.client.set_value',
    args: {
      doctype: 'SKPH Matriks Kitchen',
      name: resultSkphMatriksKitchen.name,
      fieldname: docDataMatriksKitchen
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphMatriksKitchen = result;
      }
    }
  });

  return resultSkphMatriksKitchen;
};

const updateSkphMatriksKitchen = async (resultSkphAnalysis, user, today) => {
  let resultSkphMatriksKitchen = null
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Matriks Kitchen',
      filters: {
        'event_date': resultSkphAnalysis.event_date
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphMatriksKitchen = result;
      }
    }
  });

  if (!resultSkphMatriksKitchen) {
    const docDataMatriksKitchen = {
      doctype: 'SKPH Matriks Kitchen',
      event_date: resultSkphAnalysis.event_date,
      is_manual_calculation: 0,
      time_start: '',
      time_finish: '',
      created_by: user,
      created_at: today,
      updated_by: user,
      updated_at: today
    };

    for (let i = 1; i <= maxGelarBatch; i++) {
      docDataMatriksKitchen['batch_' + i + '_is_use'] = 0;
      docDataMatriksKitchen['batch_' + i + '_time_start'] = '';
      docDataMatriksKitchen['batch_' + i + '_time_finish'] = '';
      docDataMatriksKitchen['batch_' + i] = [];
      docDataMatriksKitchen['batch_' + i + '_default'] = [];
      docDataMatriksKitchen['batch_' + i + '_merged'] = [];
    }

    // insert skph matriks kitchen
    await frappe.call({
      method: 'frappe.client.insert',
      args: {
        doc: docDataMatriksKitchen
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphMatriksKitchen = result;
        }
      }
    });
  } else {
    await frappe.db.get_list('SKPH Matriks Kitchen Schedule', {
      filters: {
        'parent': resultSkphMatriksKitchen.name
      },
      fields: [
        'parentfield', 'idx',
        'index', 'wo_code_text', 'wo_sequence_text', 'package_description',
        'package_index', 'quantity', 'description', 'menu', 'tool', 'time_start',
        'time_finish', 'pic', 'pic_name', 'notes', 'is_checklist_hp', 'merged_name',
        'is_multiple_wo', 'parent_sales_order', 'parent_notes', 'bom', 'max_capacity',
        'time_start_number', 'time_finish_number', 'batch', 'batch_name',
        'original_batch', 'original_batch_name', 'is_merged',
        'parent_wo_code', 'parent_wo_sequence', 'children_index_text'
      ],
      order_by: 'parentfield asc, idx asc',
      limit: 0
    }).then((results) => {
      if (results && results.length > 0) {
        for (let i = 1; i <= maxGelarBatch; i++) {
          resultSkphMatriksKitchen['batch_' + i] = _.filter(results, (o) => {
            return o.parentfield === 'batch_' + i;
          });
          resultSkphMatriksKitchen['batch_' + i + '_default'] = _.filter(results, (o) => {
            return o.parentfield === 'batch_' + i + '_default';
          });
        }
      }
    });

    await frappe.db.get_list('SKPH Matriks Kitchen Merged', {
      filters: {
        'parent': resultSkphMatriksKitchen.name
      },
      fields: [
        'parentfield', 'idx',
        'index', 'batch_name', 'bom', 'max_capacity',
        'menu', 'merged_name', 'original_batch_name', 'package_description', 'package_index',
        'quantity', 'sales_order', 'time_finish', 'time_start', 'original_time_finish',
        'original_time_start', 'tool', 'wo_code', 'wo_sequence'
      ],
      order_by: 'parentfield asc, idx asc',
      limit: 0
    }).then((results) => {
      if (results && results.length > 0) {
        for (let i = 1; i <= maxGelarBatch; i++) {
          resultSkphMatriksKitchen['batch_' + i + '_merged'] = _.filter(results, (o) => {
            return o.parentfield === 'batch_' + i + '_merged';
          });
        }
      }
    });
  }

  resultSkphMatriksKitchen = await setMatriksKitchen(resultSkphMatriksKitchen, user, today);
  return resultSkphMatriksKitchen;
};

const regenerateSkphAnalysis = async (isReload) => {
  const user = frappe.session.user;
  const today = frappe.datetime.now_datetime();

  frappe.show_progress('Please wait', 0, 100, 'Creating SKPH Analysis..');

  // check sales order in skph analysis
  let resultSkphAnalysis = null;
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Analysis',
      filters: [
        ['sales_order', '=', cur_frm.doc['name']],
        ['status_data', '=', 'OK'],
        ['sales_order_status', '!=', 'Cancelled']
      ],
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphAnalysis = result;
      }
    }
  });

  const docDataAll = await setSkphAnalysisData();

  const docData = _.cloneDeep(docDataAll.docDataAnalysis);
  const docDataBox = _.cloneDeep(docDataAll.docDataBox);
  const docDataOrder = _.cloneDeep(docDataAll.docDataOrder);

  if (!resultSkphAnalysis || !resultSkphAnalysis.name) {
    // insert skph analysis
    frappe.show_progress('Please wait', 45, 100, 'Creating SKPH Analysis...');
    docData['doctype'] = 'SKPH Analysis';
    docData['sales_order'] = cur_frm.doc['name'];

    docData['created_by'] = user;
    docData['created_at'] = today;

    await frappe.call({
      method: 'frappe.client.insert',
      args: {
        doc: docData,
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphAnalysis = result;
        }
      }
    });
  }

  let resultSkphBox = null;
  let resultSkphOrder = null;
  let resultSkphGelarBox = null;
  let resultSkphGelarBungkus = null;

  if (resultSkphAnalysis && resultSkphAnalysis.name) {
    frappe.show_progress('Please wait', 50, 100, 'Updating SKPH Analysis...');
    resultSkphAnalysis = await updateSkphAnalysis(resultSkphAnalysis, docData);

    // update skph box
    if (docDataBox['box_quantity'] || docDataBox['additional_quantity']) {
      frappe.show_progress('Please wait', 55, 100, 'Updating SKPH Box...');
      docDataBox['skph_analysis'] = resultSkphAnalysis.name;
      resultSkphBox = await updateSkphBox(docDataBox, user, today);

      frappe.show_progress('Please wait', 60, 100, 'Updating SKPH Delivery Box...');
      const resultSkphDeliveryBox = await updateSkphDeliveryBox(resultSkphAnalysis, resultSkphBox, user, today);

      frappe.show_progress('Please wait', 63, 100, 'Place Automation SKPH Delivery Box..');
      await placeAutomationSkphDeliveryBox(resultSkphDeliveryBox, user, today);
    }

    // update skph order
    if (docDataOrder['box_quantity']) {
      frappe.show_progress('Please wait', 65, 100, 'Updating SKPH Order...');
      docDataOrder['skph_analysis'] = resultSkphAnalysis.name;
      resultSkphOrder = await updateSkphOrder(docDataOrder, user, today);

      frappe.show_progress('Please wait', 70, 100, 'Updating SKPH Delivery Order...');
      const resultSkphDeliveryOrder = await updateSkphDeliveryOrder(resultSkphAnalysis, resultSkphOrder, user, today);

      frappe.show_progress('Please wait', 73, 100, 'Place Automation SKPH Delivery Order..');
      await placeAutomationSkphDeliveryOrder(resultSkphDeliveryOrder, user, today);
    }

    if (!resultSkphAnalysis.skph_box || !resultSkphAnalysis.skph_order) {
      await frappe.call({
        method: 'frappe.client.set_value',
        args: {
          doctype: 'SKPH Analysis',
          name: resultSkphAnalysis.name,
          fieldname: {
            skph_box: resultSkphBox && resultSkphBox.name || '',
            skph_order: resultSkphOrder && resultSkphOrder.name || ''
          }
        },
        async: false
      });
    }

    if (resultSkphBox) {
      frappe.show_progress('Please wait', 75, 100, 'Updating SKPH Gelar Box...');
      resultSkphGelarBox = await updateSkphGelarBox(resultSkphBox, user, today);

      if (!resultSkphOrder) {
        await frappe.call({
          method: 'frappe.client.set_value',
          args: {
            doctype: 'SKPH Analysis',
            name: resultSkphBox.skph_analysis,
            fieldname: {
              gelar_bungkus_time_start: '',
              gelar_bungkus_time_finish: ''
            }
          },
          async: false,
          update_modified: false
        });
      }
    }

    if (resultSkphOrder) {
      frappe.show_progress('Please wait', 80, 100, 'Updating SKPH Gelar Bungkus...');
      resultSkphGelarBungkus = await updateSkphGelarBungkus(resultSkphOrder, user, today);

      if (!resultSkphBox) {
        await frappe.call({
          method: 'frappe.client.set_value',
          args: {
            doctype: 'SKPH Analysis',
            name: resultSkphOrder.skph_analysis,
            fieldname: {
              gelar_box_time_start: '',
              gelar_box_time_finish: ''
            }
          },
          async: false,
          update_modified: false
        });
      }
    }

    frappe.show_progress('Please wait', 85, 100, 'Updating SKPH Tim...');
    await updateSkphTim(resultSkphAnalysis, user, today);

    frappe.show_progress('Please wait', 90, 100, 'Updating SKPH Matriks Kitchen...');
    await updateSkphMatriksKitchen(resultSkphAnalysis, user, today);

    if (!cur_frm.doc['skph_analysis'] || !cur_frm.doc['wo_code'] ||
      cur_frm.doc['skph_analysis'] !== resultSkphAnalysis.name) {
      // update sales order
      frappe.show_progress('Please wait', 95, 100, 'Updating SKPH Order...');
      await frappe.call({
        method: 'frappe.client.set_value',
        args: {
          doctype: 'Sales Order',
          name: cur_frm.doc['name'],
          fieldname: {
            skph_analysis: resultSkphAnalysis.name,
            free_tumbler_quantity: docData['free_tumbler_quantity'],
            free_bingkai_quantity: docData['free_bingkai_quantity'],
            wo_code: resultSkphAnalysis.wo_code
          }
        },
        async: false,
        callback: (r) => {
          cur_frm.set_value('skph_analysis', resultSkphAnalysis.name);
          cur_frm.set_value('free_tumbler_quantity', docData['free_tumbler_quantity']);
          cur_frm.set_value('free_bingkai_quantity', docData['free_bingkai_quantity']);
          cur_frm.refresh_field('skph_analysis');
          cur_frm.refresh_field('free_tumbler_quantity');
          cur_frm.refresh_field('free_bingkai_quantity');
        }
      });
    }

    frappe.show_progress('Please wait', 100, 100, 'Completed');
    await frappe.after_ajax(() => {
      if (cur_dialog) {
        cur_dialog.hide();
      }
      if (errorMessageProductCodes.length > 0) {
        msgprint(errorMessageProductCodes);
      }
      if (isReload) {
        setTimeout(() => {
          if (cur_frm.doc.docstatus) {
            // reload on submit only
            localStorage.setItem('needs_to_reload', 'false');
            window.onbeforeunload = null;
            window.location.reload();
          }
        }, (errorMessageProductCodes.length > 0 ? 5000 : 1000));
      }
    });
  }
};

const planningCheck = async (isReload) => {
  const user = frappe.session.user;
  const today = frappe.datetime.now_datetime();

  frappe.show_progress('Please wait', 0, 100, 'Checking Sales Order..');

  let resultSalesOrder = null;
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'Sales Order',
      filters: {
        'name': cur_frm.doc['name']
      },
      fieldname: ['name', 'skph_analysis', 'skph_box', 'skph_order', 'wo_code']
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSalesOrder = result;
      }
    }
  });

  if (resultSalesOrder) {
    frappe.show_progress('Please wait', 10, 100, 'Checking SKPH Analysis..');
    let resultSkphAnalysis = null;
    await frappe.call({
      method: 'frappe.client.get_value',
      args: {
        doctype: 'SKPH Analysis',
        filters: [
          ['sales_order', '=', resultSalesOrder.name],
          ['status_data', '=', 'OK'],
          ['sales_order_status', '!=', 'Cancelled']
        ],
        fieldname: ['name', 'skph_box', 'skph_order', 'wo_code']
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphAnalysis = result;
        }
      }
    });

    frappe.show_progress('Please wait', 20, 100, 'Checking SKPH Box..');
    let resultSkphBox = null;
    await frappe.call({
      method: 'frappe.client.get_value',
      args: {
        doctype: 'SKPH Box',
        filters: [
          ['sales_order', '=', resultSalesOrder.name],
          ['status_data', '=', 'OK'],
          ['sales_order_status', '!=', 'Cancelled']
        ],
        fieldname: ['name', 'skph_analysis']
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphBox = result;
        }
      }
    });

    frappe.show_progress('Please wait', 30, 100, 'Checking SKPH Order..');
    let resultSkphOrder = null;
    await frappe.call({
      method: 'frappe.client.get_value',
      args: {
        doctype: 'SKPH Order',
        filters: [
          ['sales_order', '=', resultSalesOrder.name],
          ['status_data', '=', 'OK'],
          ['sales_order_status', '!=', 'Cancelled']
        ],
        fieldname: ['name', 'skph_analysis']
      },
      async: false,
      callback: (r) => {
        const result = r && r.message || null;
        if (result && result.name) {
          resultSkphOrder = result;
        }
      }
    });

    // update sales order
    frappe.show_progress('Please wait', 50, 100, 'Updating SKPH Order...');
    let setSalesOrder = {};
    let isSalesOrderUpdated = false;
    if (resultSkphAnalysis) {
      if (!resultSalesOrder.skph_analysis ||
        resultSalesOrder.skph_analysis !== resultSkphAnalysis.name) {
        setSalesOrder['skph_analysis'] = resultSkphAnalysis.name;
        isSalesOrderUpdated = true;
      }
      if (!resultSalesOrder.wo_code ||
        resultSalesOrder.wo_code !== resultSkphAnalysis.wo_code) {
        setSalesOrder['wo_code'] = resultSkphAnalysis.wo_code;
        isSalesOrderUpdated = true;
      }
    }
    if (resultSkphBox) {
      if (!resultSalesOrder.skph_box ||
        resultSalesOrder.skph_box !== resultSkphBox.name) {
        setSalesOrder['skph_box'] = resultSkphBox.name;
        isSalesOrderUpdated = true;
      }
    }
    if (resultSkphOrder) {
      if (!resultSalesOrder.skph_order ||
        resultSalesOrder.skph_order !== resultSkphOrder.name) {
        setSalesOrder['skph_order'] = resultSkphOrder.name;
        isSalesOrderUpdated = true;
      }
    }
    if (isSalesOrderUpdated) {
      await frappe.call({
        method: 'frappe.client.set_value',
        args: {
          doctype: 'Sales Order',
          name: resultSalesOrder.name,
          fieldname: setSalesOrder
        },
        async: false,
        callback: (r) => {
          const result = r && r.message || null;
          if (result && result.name) {
            resultSalesOrder = result;
          }
        }
      });
    }

    // update skph analysis
    frappe.show_progress('Please wait', 60, 100, 'Updating SKPH Analysis...');
    let setSkphAnalysis = {};
    let isSkphAnalysisUpdated = false;
    if (resultSkphAnalysis) {
      if (resultSalesOrder.skph_box) {
        if (!resultSkphAnalysis.skph_box ||
          resultSkphAnalysis.skph_box !== resultSalesOrder.skph_box) {
          setSkphAnalysis['skph_box'] = resultSalesOrder.skph_box;
          isSkphAnalysisUpdated = true;
        }
      }
      if (resultSalesOrder.skph_order) {
        if (!resultSkphAnalysis.skph_order ||
          resultSkphAnalysis.skph_order !== resultSalesOrder.skph_order) {
          setSkphAnalysis['skph_order'] = resultSalesOrder.skph_order;
          isSkphAnalysisUpdated = true;
        }
      }
      if (resultSalesOrder.wo_code) {
        if (!resultSkphAnalysis.wo_code ||
          resultSkphAnalysis.wo_code !== resultSalesOrder.wo_code) {
          setSkphAnalysis['wo_code'] = resultSalesOrder.wo_code;
          isSkphAnalysisUpdated = true;
        }
      }
    }
    if (isSkphAnalysisUpdated) {
      await frappe.call({
        method: 'frappe.client.set_value',
        args: {
          doctype: 'SKPH Analysis',
          name: resultSkphAnalysis.name,
          fieldname: setSkphAnalysis
        },
        async: false,
        callback: (r) => {
          const result = r && r.message || null;
          if (result && result.name) {
            resultSkphAnalysis = result;
          }
        }
      });
    }

    // update skph box
    frappe.show_progress('Please wait', 70, 100, 'Updating SKPH Box...');
    let setSkphBox = {};
    let isSkphBoxUpdated = false;
    if (resultSkphBox) {
      if (resultSalesOrder.skph_analysis) {
        if (!resultSkphBox.skph_analysis ||
          resultSkphBox.skph_analysis !== resultSalesOrder.skph_analysis) {
          setSkphBox['skph_analysis'] = resultSalesOrder.skph_analysis;
          isSkphBoxUpdated = true;
        }
      }
    }
    if (isSkphBoxUpdated) {
      await frappe.call({
        method: 'frappe.client.set_value',
        args: {
          doctype: 'SKPH Box',
          name: resultSkphBox.name,
          fieldname: setSkphBox
        },
        async: false,
        callback: (r) => {
          const result = r && r.message || null;
          if (result && result.name) {
            resultSkphBox = result;
          }
        }
      });
    }

    // update skph order
    frappe.show_progress('Please wait', 80, 100, 'Updating SKPH Order...');
    let setSkphOrder = {};
    let isSkphOrderUpdated = false;
    if (resultSkphOrder) {
      if (resultSalesOrder.skph_analysis) {
        if (!resultSkphOrder.skph_analysis ||
          resultSkphOrder.skph_analysis !== resultSalesOrder.skph_analysis) {
          setSkphOrder['skph_analysis'] = resultSalesOrder.skph_analysis;
          isSkphOrderUpdated = true;
        }
      }
    }
    if (isSkphOrderUpdated) {
      await frappe.call({
        method: 'frappe.client.set_value',
        args: {
          doctype: 'SKPH Order',
          name: resultSkphOrder.name,
          fieldname: setSkphOrder
        },
        async: false,
        callback: (r) => {
          const result = r && r.message || null;
          if (result && result.name) {
            resultSkphOrder = result;
          }
        }
      });
    }
  }

  frappe.show_progress('Please wait', 100, 100, 'Completed');
  await frappe.after_ajax(() => {
    if (cur_dialog) {
      cur_dialog.hide();
    }
    if (isReload) {
      setTimeout(() => {
        // reload on submit only
        localStorage.setItem('needs_to_reload', 'false');
        window.onbeforeunload = null;
        window.location.reload();
      }, 1000);
    }
  });
};

const syncCancelAllSkph = async (eventDateTimeString) => {
  const eventDateTime = moment(eventDateTimeString);
  const eventDate = eventDateTime.format('YYYY-MM-DD');

  frappe.show_progress('Please wait', 0, 100, 'Analyzing SKPH..');

  await frappe.call({
    method: 'frappe.client.set_value',
    args: {
      doctype: 'SKPH Analysis',
      name: cur_frm.doc['skph_analysis'],
      fieldname: {
        status_data: 'Cancelled'
      }
    },
    async: false,
    callback: async (r) => {
      // update skph analysis
      frappe.show_progress('Please wait', 40, 100, 'Updating SKPH Analysis...');

      await syncCancelSkphAnalysis(eventDate);

      if (cur_frm.doc['skph_box']) {
        // update skph delivery box
        frappe.show_progress('Please wait', 60, 100, 'Updating SKPH Delivery Box...');

        await frappe.call({
          method: 'frappe.client.set_value',
          args: {
            doctype: 'SKPH Box',
            name: cur_frm.doc['skph_box'],
            fieldname: {
              status_data: 'Cancelled'
            }
          },
          async: false,
          callback: async (r) => {
            await syncCancelSkphDeliveryBox(eventDate);
            await syncCancelSkphGelarBox(eventDate);
          }
        });
      }

      if (cur_frm.doc['skph_order']) {
        // update skph delivery order
        frappe.show_progress('Please wait', 80, 100, 'Updating SKPH Delivery Order...');

        await frappe.call({
          method: 'frappe.client.set_value',
          args: {
            doctype: 'SKPH Order',
            name: cur_frm.doc['skph_order'],
            fieldname: {
              status_data: 'Cancelled'
            }
          },
          async: false,
          callback: async (r) => {
            await syncCancelSkphDeliveryOrder(eventDate);
            await syncCancelSkphGelarBungkus(eventDate);
          }
        });
      }

      // update skph matriks kitchen
      frappe.show_progress('Please wait', 90, 100, 'Updating SKPH Matriks Kitchen...');
      await syncCancelSkphMatriksKitchen(eventDate);

      frappe.show_progress('Please wait', 100, 100, 'Completed');
      await frappe.after_ajax(() => {
        setTimeout(() => {
          if (cur_dialog) {
            cur_dialog.hide();
          }
          if (cur_frm.doc.docstatus === 2) {
            // reload on cancel only
            localStorage.setItem('needs_to_reload', 'false');
            window.onbeforeunload = null;
            window.location.reload();
          }
        }, 1000);
      });
    }
  });
};

const syncCancelSkphAnalysis = async (eventDate) => {
  const user = frappe.session.user;
  const today = frappe.datetime.now_datetime();

  // set all wo_code
  await frappe.db.get_list('SKPH Analysis', {
    filters: [
      ['event_date', '=', eventDate],
      ['status_data', '=', 'OK'],
      ['sales_order_status', '!=', 'Cancelled']
    ],
    fields: ['name', 'sub_district', 'sub_district_name'],
    order_by: 'leave_date_time asc',
    limit: 0
  }).then(async (results) => {
    if (results && results.length > 0) {
      const orFilters = [];
      for (let i = 0; i < results.length; i++) {
        const resultData = results[i];
        if (resultData.sub_district) {
          orFilters.push(['region_sub_district', '=', resultData.sub_district]);
        }
      }

      await frappe.db.get_list('Shipping Measurement', {
        or_filters: orFilters,
        fields: ['region_sub_district', 'region_abbreviation', 'name'],
        limit: 0
      }).then(async (shippingMeasurementResults) => {
        $.each(results, async (index, d) => {
          const resultData = results[index];
          const sequence = index + 1;

          const region = _.find(shippingMeasurementResults, (o) => {
            return resultData.sub_district === o.region_sub_district;
          });
          if (region) {
            resultData.wo_region_abbreviation = region.region_abbreviation;
            resultData.shipping_measurement = region.name;
          } else {
            resultData.wo_region_abbreviation = resultData.sub_district_name.replace(/ /g, '');
            resultData.shipping_measurement = null;
          }

          resultData.wo_sequence = sequence;
          resultData.wo_code = (sequence + resultData.wo_region_abbreviation).toString().trim().toUpperCase();
          resultData.updated_by = user;
          resultData.updated_at = today;

          await frappe.call({
            method: 'frappe.client.set_value',
            args: {
              doctype: 'SKPH Analysis',
              name: resultData.name,
              fieldname: resultData
            },
            async: false
          });
        });
      });
    }
  });
};

const syncCancelSkphDeliveryBox = async (eventDate) => {
  const user = frappe.session.user;
  const today = frappe.datetime.now_datetime();

  // check event date in skph delivery box
  let resultSkphDeliveryBox = null;
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Delivery Box',
      filters: {
        'event_date': eventDate
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphDeliveryBox = result;
      }
    }
  });

  if (resultSkphDeliveryBox && resultSkphDeliveryBox.name) {
    const docDataDeliveryBox = {
      sales_order_quantity: 0,
      sales_order_driver_quantity: 0,
      driver_completed_percentage: 0,
      employee_quantity: 0,
      updated_by: user,
      updated_at: today
    };

    await frappe.db.get_list('SKPH Delivery Schedule', {
      filters: {
        'parent': resultSkphDeliveryBox.name
      },
      fields: [
        'parentfield', 'is_employee', 'employee', 'employee_name', 'driver_personnel',
        'driver_personnel_name', 'is_actual_employee', 'actual_employee', 'actual_employee_name',
        'driver_actual_personnel', 'driver_actual_personnel_name', 'actual_time', 'realization_time',
        'wo_code', 'sales_order', 'skph_analysis', 'skph_box', 'skph_order', 'kilometers_information',
        'delivery_schedule_group', 'original_delivery_schedule_group',
        'region_district', 'region_district_name'
      ],
      order_by: 'parentfield asc, kilometers_information desc',
      limit: 0
    }).then((results) => {
      const employees = [];
      if (results && results.length > 0) {
        for (let i = 0; i < results.length; i++) {
          const result = results[i];

          if (!Array.isArray(docDataDeliveryBox[result.parentfield])) {
            docDataDeliveryBox[result.parentfield] = [];
          }

          if (result.sales_order !== cur_frm.doc['name']) {
            docDataDeliveryBox[result.parentfield].push({
              wo_code: result.wo_code,
              sales_order: result.sales_order,
              skph_analysis: result.skph_analysis,
              skph_box: result.skph_box,
              skph_order: result.skph_order,
              is_employee: result.is_employee,
              employee: result.employee,
              employee_name: result.employee_name,
              driver_personnel: result.driver_personnel,
              driver_personnel_name: result.driver_personnel_name,
              is_actual_employee: result.is_actual_employee,
              actual_employee: result.actual_employee,
              actual_employee_name: result.actual_employee_name,
              driver_actual_personnel: result.driver_actual_personnel,
              driver_actual_personnel_name: result.driver_actual_personnel_name,
              actual_time: result.actual_time,
              realization_time: result.realization_time,
              kilometers_information: result.kilometers_information,
              delivery_schedule_group: result.delivery_schedule_group,
              region_district: result.region_district,
              region_district_name: result.region_district_name
            });

            if (result.sales_order) {
              docDataDeliveryBox['sales_order_quantity']++;
            }
            if (result.sales_order && result.employee) {
              docDataDeliveryBox['sales_order_driver_quantity']++;
            }
            if (result.employee) {
              const uniqName = _.find(employees, (o) => {
                return result.employee === o;
              });
              if (!uniqName) {
                employees.push(result.employee);
              }
            }
          }
        }
      }
      docDataDeliveryBox['employee_quantity'] = employees.length;
    });

    if (docDataDeliveryBox['sales_order_quantity'] !== 0) {
      docDataDeliveryBox['driver_completed_percentage'] = docDataDeliveryBox['sales_order_driver_quantity'] / docDataDeliveryBox['sales_order_quantity'] * 100;
    }

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Delivery Box',
        name: resultSkphDeliveryBox.name,
        fieldname: docDataDeliveryBox
      },
      async: false
    });
  }
};

const syncCancelSkphGelarBox = async (eventDate) => {
  const user = frappe.session.user;
  const today = frappe.datetime.now_datetime();

  // check event date in skph gelar box
  let resultSkphGelarBox = null;
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Gelar Box',
      filters: {
        'event_date': eventDate
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphGelarBox = result;
      }
    }
  });

  if (resultSkphGelarBox && resultSkphGelarBox.name) {
    const docDataGelarBox = {
      sales_order_quantity: 0,
      updated_by: user,
      updated_at: today
    };

    // set all skph gelar box
    for (let i = 1; i <= maxGelarBatch; i++) {
      docDataGelarBox['batch_' + i + '_is_use'] = 0;
      docDataGelarBox['batch_' + i + '_time_start'] = '00:00:00';
      docDataGelarBox['batch_' + i + '_time_finish'] = '00:00:00';
      docDataGelarBox['batch_' + i] = [];
      docDataGelarBox['batch_' + i + '_total'] = 0;
    }

    await frappe.db.get_list('SKPH Analysis', {
      filters: [
        ['event_date', '=', eventDate],
        ['status_data', '=', 'OK'],
        ['sales_order_status', '!=', 'Cancelled'],
        ['skph_box', '!=', '']
      ],
      fields: [
        'skph_box', 'skph_order', 'wo_code', 'sales_order', 'name',
        'gelar_box_time_start', 'gelar_box_time_finish'
      ],
      order_by: 'gelar_box_time_start asc, wo_sequence asc',
      limit: 0
    }).then(async (results) => {
      if (results && results.length > 0) {
        const orFilters = [];
        for (let i = 0; i < results.length; i++) {
          const resultData = results[i];
          if (resultData.skph_box) {
            orFilters.push(['name', '=', resultData.skph_box]);
          }
        }

        await frappe.db.get_list('SKPH Box', {
          or_filters: orFilters,
          fields: ['box_type', 'bungkus_sate_quantity', 'menu_non_sate', 'box_quantity', 'name'],
          limit: 0
        }).then((skphBoxResults) => {
          let sequence = 1;
          for (let i = 0; i < results.length; i++) {
            const resultBefore = results[i - 1] || null;
            const result = results[i];

            const docDataSkphGelarSchedule = {
              wo_code: result.wo_code,
              package_description: '',
              quantity: 0,
              additional_quantity: result.additional_quantity,
              sales_order: result.sales_order,
              skph_analysis: result.name,
              skph_box: result.skph_box,
              skph_order: result.skph_order
            };

            const resultSkphBoxData = _.find(skphBoxResults, (o) => {
              return docDataSkphGelarSchedule.skph_box === o.name;
            });
            if (resultSkphBoxData) {
              docDataSkphGelarSchedule.package_description = resultSkphBoxData['box_type'];
              docDataSkphGelarSchedule.quantity = resultSkphBoxData['box_quantity'];
            }

            if (result.sales_order) {
              docDataGelarBox['sales_order_quantity']++;
            }

            if (i === 0) {
              docDataGelarBox['batch_' + sequence + '_is_use'] = 1;
              docDataGelarBox['batch_' + sequence + '_time_start'] = result.gelar_box_time_start;
              docDataGelarBox['batch_' + sequence + '_time_finish'] = result.gelar_box_time_finish;
              docDataGelarBox['batch_' + sequence] = [docDataSkphGelarSchedule];
              docDataGelarBox['batch_' + sequence + '_total'] = 0;
            } else {
              if (resultBefore.gelar_box_time_start === result.gelar_box_time_start &&
                resultBefore.gelar_box_time_finish === result.gelar_box_time_finish) {
                if (sequence >= 17) {
                  sequence = 16;
                }
                docDataGelarBox['batch_' + sequence].push(docDataSkphGelarSchedule);
              } else {
                sequence++;
                if (sequence >= 17) {
                  sequence = 16;
                }
                docDataGelarBox['batch_' + sequence + '_total'] = 0;

                if (!Array.isArray(docDataGelarBox['batch_' + sequence])) {
                  docDataGelarBox['batch_' + sequence] = [];
                }

                docDataGelarBox['batch_' + sequence + '_is_use'] = 1;
                docDataGelarBox['batch_' + sequence + '_time_start'] = result.gelar_box_time_start;
                docDataGelarBox['batch_' + sequence + '_time_finish'] = result.gelar_box_time_finish;
                docDataGelarBox['batch_' + sequence].push(docDataSkphGelarSchedule);
              }
            }

            docDataGelarBox['batch_' + sequence + '_total'] += docDataSkphGelarSchedule.quantity;
          }
        });
      }
    });

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Gelar Box',
        name: resultSkphGelarBox.name,
        fieldname: docDataGelarBox
      },
      async: false
    });
  }
};

const syncCancelSkphDeliveryOrder = async (eventDate) => {
  const user = frappe.session.user;
  const today = frappe.datetime.now_datetime();

  // check event date in skph delivery order
  let resultSkphDeliveryOrder = null;
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Delivery Order',
      filters: {
        'event_date': eventDate
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphDeliveryOrder = result;
      }
    }
  });

  if (resultSkphDeliveryOrder && resultSkphDeliveryOrder.name) {
    const docDataDeliveryOrder = {
      sales_order_quantity: 0,
      sales_order_driver_quantity: 0,
      driver_completed_percentage: 0,
      employee_quantity: 0,
      updated_by: user,
      updated_at: today
    };

    await frappe.db.get_list('SKPH Delivery Schedule', {
      filters: {
        'parent': resultSkphDeliveryOrder.name
      },
      fields: [
        'parentfield', 'is_employee', 'employee', 'employee_name', 'driver_personnel',
        'driver_personnel_name', 'is_actual_employee', 'actual_employee', 'actual_employee_name',
        'driver_actual_personnel', 'driver_actual_personnel_name', 'actual_time', 'wo_code',
        'sales_order', 'skph_analysis', 'skph_box', 'skph_order', 'kilometers_information',
        'delivery_schedule_group', 'original_delivery_schedule_group',
        'region_district', 'region_district_name'
      ],
      order_by: 'parentfield asc, kilometers_information desc',
      limit: 0
    }).then((results) => {
      const employees = [];
      if (results && results.length > 0) {
        for (let i = 0; i < results.length; i++) {
          const result = results[i];

          if (!Array.isArray(docDataDeliveryOrder[result.parentfield])) {
            docDataDeliveryOrder[result.parentfield] = [];
          }

          if (result.sales_order !== cur_frm.doc['name']) {
            docDataDeliveryOrder[result.parentfield].push({
              wo_code: result.wo_code,
              sales_order: result.sales_order,
              skph_analysis: result.skph_analysis,
              skph_box: result.skph_box,
              skph_order: result.skph_order,
              is_employee: result.is_employee,
              employee: result.employee,
              employee_name: result.employee_name,
              driver_personnel: result.driver_personnel,
              driver_personnel_name: result.driver_personnel_name,
              is_actual_employee: result.is_actual_employee,
              actual_employee: result.actual_employee,
              actual_employee_name: result.actual_employee_name,
              driver_actual_personnel: result.driver_actual_personnel,
              driver_actual_personnel_name: result.driver_actual_personnel_name,
              actual_time: result.actual_time,
              kilometers_information: result.kilometers_information,
              delivery_schedule_group: result.delivery_schedule_group,
              region_district: result.region_district,
              region_district_name: result.region_district_name
            });

            if (result.sales_order) {
              docDataDeliveryOrder['sales_order_quantity']++;
            }
            if (result.sales_order && result.employee) {
              docDataDeliveryOrder['sales_order_driver_quantity']++;
            }
            if (result.employee) {
              const uniqName = _.find(employees, (o) => {
                return result.employee === o;
              });
              if (!uniqName) {
                employees.push(result.employee);
              }
            }
          }
        }
      }
      docDataDeliveryOrder['employee_quantity'] = employees.length;
    });

    if (docDataDeliveryOrder['sales_order_quantity'] !== 0) {
      docDataDeliveryOrder['driver_completed_percentage'] = docDataDeliveryOrder['sales_order_driver_quantity'] / docDataDeliveryOrder['sales_order_quantity'] * 100;
    }

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Delivery Order',
        name: resultSkphDeliveryOrder.name,
        fieldname: docDataDeliveryOrder
      },
      async: false
    });
  }
};

const syncCancelSkphGelarBungkus = async (eventDate) => {
  const user = frappe.session.user;
  const today = frappe.datetime.now_datetime();

  // check event date in skph gelar bungkus
  let resultSkphGelarBungkus = null;
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Gelar Bungkus',
      filters: {
        'event_date': eventDate
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphGelarBungkus = result;
      }
    }
  });

  if (resultSkphGelarBungkus && resultSkphGelarBungkus.name) {
    const docDataGelarBungkus = {
      sales_order_quantity: 0,
      updated_by: user,
      updated_at: today
    };

    // set all skph gelar box
    for (let i = 1; i <= maxGelarBatch; i++) {
      docDataGelarBungkus['batch_' + i + '_is_use'] = 0;
      docDataGelarBungkus['batch_' + i + '_time_start'] = '';
      docDataGelarBungkus['batch_' + i + '_time_finish'] = '';
      docDataGelarBungkus['batch_' + i] = [];
      docDataGelarBungkus['batch_' + i + '_total'] = 0;
    }

    await frappe.db.get_list('SKPH Analysis', {
      filters: [
        ['event_date', '=', eventDate],
        ['status_data', '=', 'OK'],
        ['sales_order_status', '!=', 'Cancelled'],
        ['skph_order', '!=', '']
      ],
      fields: [
        'skph_box', 'skph_order', 'wo_code', 'sales_order', 'name',
        'gelar_bungkus_time_start', 'gelar_bungkus_time_finish'
      ],
      order_by: 'gelar_bungkus_time_start asc, wo_sequence asc',
      limit: 0
    }).then(async (results) => {
      if (results && results.length > 0) {
        const orFilters = [];
        for (let i = 0; i < results.length; i++) {
          const resultData = results[i];
          if (resultData.skph_order) {
            orFilters.push(['name', '=', resultData.skph_order]);
          }
        }

        await frappe.db.get_list('SKPH Order', {
          or_filters: orFilters,
          fields: ['box_type', 'bungkus_sate_quantity', 'menu_non_sate', 'box_quantity', 'name'],
          limit: 0
        }).then((skphOrderResults) => {
          let sequence = 1;
          for (let i = 0; i < results.length; i++) {
            const resultBefore = results[i - 1] || null;
            const result = results[i];

            const docDataSkphGelarSchedule = {
              wo_code: result.wo_code,
              package_description: '',
              quantity: 0,
              sales_order: result.sales_order,
              skph_analysis: result.name,
              skph_order: result.skph_order
            };

            const resultSkphOrderData = _.find(skphOrderResults, (o) => {
              return docDataSkphGelarSchedule.skph_order === o.name;
            });
            if (resultSkphOrderData) {
              docDataSkphGelarSchedule.package_description = resultSkphOrderData['box_type'];
              docDataSkphGelarSchedule.quantity = resultSkphOrderData['box_quantity'];
            }

            if (result.sales_order) {
              docDataGelarBungkus['sales_order_quantity']++;
            }

            if (i === 0) {
              docDataGelarBungkus['batch_' + sequence + '_is_use'] = 1;
              docDataGelarBungkus['batch_' + sequence + '_time_start'] = result.gelar_bungkus_time_start;
              docDataGelarBungkus['batch_' + sequence + '_time_finish'] = result.gelar_bungkus_time_finish;
              docDataGelarBungkus['batch_' + sequence] = [docDataSkphGelarSchedule];
              docDataGelarBungkus['batch_' + sequence + '_total'] = 0;
            } else {
              if (resultBefore.gelar_bungkus_time_start === result.gelar_bungkus_time_start &&
                resultBefore.gelar_bungkus_time_finish === result.gelar_bungkus_time_finish) {
                if (sequence >= 17) {
                  sequence = 16;
                }
                docDataGelarBungkus['batch_' + sequence].push(docDataSkphGelarSchedule);
              } else {
                sequence++;
                if (sequence >= 17) {
                  sequence = 16;
                }
                docDataGelarBungkus['batch_' + sequence + '_total'] = 0;

                if (!Array.isArray(docDataGelarBungkus['batch_' + sequence])) {
                  docDataGelarBungkus['batch_' + sequence] = [];
                }

                docDataGelarBungkus['batch_' + sequence + '_is_use'] = 1;
                docDataGelarBungkus['batch_' + sequence + '_time_start'] = result.gelar_bungkus_time_start;
                docDataGelarBungkus['batch_' + sequence + '_time_finish'] = result.gelar_bungkus_time_finish;
                docDataGelarBungkus['batch_' + sequence].push(docDataSkphGelarSchedule);
              }
            }

            docDataGelarBungkus['batch_' + sequence + '_total'] += docDataSkphGelarSchedule.quantity;
          }
        });
      }
    });

    await frappe.call({
      method: 'frappe.client.set_value',
      args: {
        doctype: 'SKPH Gelar Bungkus',
        name: resultSkphGelarBungkus.name,
        fieldname: docDataGelarBungkus
      },
      async: false
    });
  }
};

const syncCancelSkphMatriksKitchen = async (eventDate) => {
  const user = frappe.session.user;
  const today = frappe.datetime.now_datetime();

  // check event date in skph matriks kitchen
  let resultSkphMatriksKitchen = null;
  await frappe.call({
    method: 'frappe.client.get_value',
    args: {
      doctype: 'SKPH Matriks Kitchen',
      filters: {
        'event_date': eventDate
      },
      fieldname: '*'
    },
    async: false,
    callback: (r) => {
      const result = r && r.message || null;
      if (result && result.name) {
        resultSkphMatriksKitchen = result;
      }
    }
  });

  if (resultSkphMatriksKitchen && resultSkphMatriksKitchen.name) {
    await frappe.db.get_list('SKPH Matriks Kitchen Schedule', {
      filters: [
        ['parent', '=', resultSkphMatriksKitchen.name],
        ['parent_sales_order', '!=', cur_frm.doc['name']]
      ],
      fields: [
        'parentfield', 'idx', 'parent_wo_code', 'parent_wo_sequence',
        'package_index', 'menu', 'index', 'merged_name',
        'tool', 'time_start', 'time_finish', 'time_start_number', 'time_finish_number',
        'pic', 'pic_name', 'notes', 'is_checklist_hp', 'quantity', 'children_index_text',
        'is_multiple_wo', 'wo_code_text', 'description'
      ],
      order_by: 'parentfield asc, idx asc',
      limit: 0
    }).then((results) => {
      if (results && results.length > 0) {
        for (let i = 1; i <= maxGelarBatch; i++) {
          resultSkphMatriksKitchen['batch_' + i] = _.filter(results, (o) => {
            return o.parentfield === 'batch_' + i;
          });
        }
      }
    });

    await frappe.db.get_list('SKPH Matriks Kitchen Merged', {
      filters: [
        ['parent', '=', resultSkphMatriksKitchen.name],
        ['sales_order', '!=', cur_frm.doc['name']]
      ],
      fields: [
        'parentfield', 'idx', 'wo_code',
        'package_index', 'menu', 'index', 'merged_name'
      ],
      order_by: 'parentfield asc, idx asc',
      limit: 0
    }).then((results) => {
      if (results && results.length > 0) {
        for (let i = 1; i <= maxGelarBatch; i++) {
          resultSkphMatriksKitchen['batch_' + i + '_merged'] = _.filter(results, (o) => {
            return o.parentfield === 'batch_' + i + '_merged';
          });
        }
      }
    });

    resultSkphMatriksKitchen = await setMatriksKitchen(resultSkphMatriksKitchen, user, today);
  }

  return resultSkphMatriksKitchen;
};

////////////////////////////////////// form //////////////////////////////////////
frappe.ui.form.on('Sales Order', {
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
    frm.set_df_property('items_section', 'hidden', isDebug ? 0 : 1);
    frm.set_df_property('section_break_48', 'hidden', isDebug ? 0 : 1);
    frm.set_df_property('totals', 'hidden', isDebug ? 0 : 1);
    frm.set_df_property('grand_total_quantity_actual_ekor', 'hidden', isDebug ? 0 : 1);
    // frm.set_df_property('free_tumbler_quantity', 'hidden', isDebug ? 0 : 1);
    // frm.set_df_property('free_bingkai_quantity', 'hidden', isDebug ? 0 : 1);
    frm.set_df_property('skph_section', 'hidden', 0);
    // set field status
    frm.toggle_enable('naming_series', 0);
    frm.set_df_property('contact_mobile', 'hidden', 1);
    const isAdministrator = has_common(frappe.user_roles, ['Administrator']);
    if (isAdministrator) {
      frm.set_df_property('kanban_history', 'read_only', 0);
    } else {
      const isSalesSkph = has_common(frappe.user_roles, ['ASA - Sales Role', 'ASA - SKPH Role']);
      if (!isSalesSkph) {
        frm.set_df_property('skph_section', 'hidden', 1);
      }
    }

    frm.fields_dict['aqiqah_detail'].grid.wrapper.find('.grid-remove-all-rows').hide();
    frm.fields_dict['order_detail'].grid.wrapper.find('.grid-remove-all-rows').hide();
    frm.fields_dict['aqiqah_package_menu'].grid.wrapper.find('.grid-remove-all-rows').hide();
    frm.fields_dict['non_box_menu'].grid.wrapper.find('.grid-remove-all-rows').hide();
    frm.fields_dict['payment_schedule'].grid.wrapper.find('.grid-remove-all-rows').hide();
    if (frm.doc.__islocal) {
      frm.set_df_property('timestamp_section', 'hidden', isDebug ? 0 : 1);
    } else {
      if (frm.doc.docstatus) {
        $('.form-link-title').hide();
        $("[data-doctype='Payment Entry']").hide();
        // frm.set_df_property('free_tumbler_quantity', 'hidden', 0);
        // frm.set_df_property('free_bingkai_quantity', 'hidden', 0);
      }
    }
  },
  onload_post_render: async (frm, cdt, cdn) => {
    // set hidden element
    const isAdministrator = has_common(frappe.user_roles, ['Administrator']);
    if (!isAdministrator) {
      $('.custom-actions').hide();
      // $('.comment-box').hide();
      $('.timeline-actions').hide();
      // $('.new-timeline').hide();
      $('.menu-btn-group').hide();
    }

    // create custom button
    if (frm.doc.docstatus) {
      const isSalesSkph = has_common(frappe.user_roles, ['ASA - Sales Role', 'ASA - SKPH Role']);
      if (isAdministrator || isSalesSkph) {
        $('.custom-actions').show();
        if (isSalesSkph) {
          $("[data-label='Update%20Items']").hide();
          $("[data-label='Create']").hide();
          $("[data-label='Status']").hide();
        }

        if (frm.doc.docstatus !== 2) {
          // planning check
          frm.add_custom_button(__('Planning Check'), async () => {
            await planningCheck(true);
          });
          oldDoc = _.cloneDeep(frm.doc);
        }
      }
    }
    
    if (frm.doc.docstatus === 0) {
      frm.add_custom_button(__('Delete SKPH'), async () => {
        await syncCancelAllSkph(cur_frm.doc['event_date_time']);
        await planningCheck(true);
      });
    } 
    
    // regenerate skph analysis
    frm.add_custom_button(__('Regenerate SKPH Analysis'), async () => {
      console.log('regenerate');
      
      await regenerateSkphAnalysis(true);
      await planningCheck(true);
    });

    // run others
    if (frm.doc.__islocal) {
      setAddressDisplay(frm, cdt, cdn);
      setDefaultTime();
      await setSourceInfo(frm, cdt, cdn);
      if (!frappe.validated) {
        frm.set_df_property('items', 'reqd', 0);
        if (frm.doc['items'] && frm.doc['items'].length > 0 &&
          !frm.doc['items'][0]['qty']) {
          frm.doc['items'][0]['qty'] = 1;
          frm.refresh_field('items');
        }
        frm.clear_table('payment_schedule');
        frm.refresh_field('payment_schedule');
        if (frm.doc['order_detail'] && frm.doc['order_detail'].length > 0) {
          setFreeItems();
        }
      }
    }
    totalOrderDetail();
    showDetailMenu();
    setChildName(frm, cdt, cdn);
    await setSatuanItem(frm, cdt, cdn);
  },
  validate: async (frm, cdt, cdn) => {
    let errorMessage = '';

    const isAutoArrivedDateTime = frm.doc['is_auto_arrived_date_time'] || 0;
    if (isAutoArrivedDateTime) {
      let isArrivedDateTimeExists = false;
      let subDistrictName = '';

      // set location
      await frappe.call({
        method: 'frappe.client.get_value',
        args: {
          doctype: 'Address',
          filters: {
            'name': frm.doc['shipping_address_name']
          },
          fieldname: ['region_sub_district', 'region_sub_district_name']
        },
        async: false,
        callback: async (r) => {
          const result = r && r.message || null;
          if (result && result.region_sub_district) {
            subDistrictName = result.region_sub_district_name;

            // set leave date time
            await frappe.call({
              method: 'frappe.client.get_value',
              args: {
                doctype: 'Shipping Measurement',
                filters: {
                  'region_sub_district': result.region_sub_district
                },
                fieldname: ['name', 'by_car', 'region_abbreviation']
              },
              async: false,
              callback: (r) => {
                const result = r && r.message || null;
                if (result && result.name) {
                  const durationInMinutes = result.by_car || 0;
                  const arriveDateTime = moment(frm.doc['event_date_time']).subtract(durationInMinutes, 'minutes');
                  const leaveDateTimeString = arriveDateTime.format('YYYY-MM-DD HH:mm:ss');
                  frm.set_value('arrived_date_time', leaveDateTimeString);
                  frm.refresh_field('arrived_date_time');
                  isArrivedDateTimeExists = true;
                }
              }
            });
          }
        }
      });
      if (!isArrivedDateTimeExists) {
        errorMessage = 'Waktu pengiriman tidak dapat diisi oleh sistem karena data';
        if (subDistrictName) {
          errorMessage += ' wilayah pengiriman kelurahan ' + subDistrictName;
        }
        errorMessage += ' tidak dapat ditemukan, harap isi manual waktu pengiriman';
      }
    }

    if (errorMessage) {
      msgprint(errorMessage);
      frappe.validated = false;
    } else {
      if (oldDoc) {
        errorMessage = '';

        const now = moment();
        if (frm.doc['arrived_date_time']) {
          if (moment(frm.doc['arrived_date_time']).isBefore(now)) {
            errorMessage = 'Waktu pengiriman harus lebih dari waktu sekarang';
          } else {
            if (frm.doc['event_date_time']) {
              if (moment(frm.doc['event_date_time']).isBefore(now)) {
                errorMessage = 'Waktu acara harus lebih dari waktu sekarang';
              }
              if (moment(frm.doc['event_date_time']).isBefore(moment(frm.doc['arrived_date_time']))) {
                errorMessage = 'Waktu pengiriman harus lebih kecil dari waktu acara';
              }
            }
          }
        }
        if (!errorMessage) {
          const arrivedDateTime = moment(frm.doc['arrived_date_time']);
          const eventDateTime = moment(frm.doc['event_date_time']);
          if (!arrivedDateTime.isSame(eventDateTime, 'day')) {
            errorMessage = 'Tanggal pengiriman harus sama dengan tanggal acara';
          }
        }

        if (errorMessage) {
          msgprint(errorMessage);
          frappe.validated = false;
        } else {
          const validateTimestamp = await setTimestamp();
          if (validateTimestamp) {
            frm.doc['delivery_date'] = frm.doc['arrived_date_time'];
            frm.doc['event_date'] = frm.doc['event_date_time'];

            frappe.validated = true;
          } else {
            frappe.validated = false;
          }
        }
      } else {
        // get dummy item
        let oldItem = null;
        if (frm.doc['items'] && frm.doc['items'].length > 0) {
          oldItem = frm.doc['items'][0] || null;
        }
        frm.clear_table('items');
        await frappe.call({
          method: 'frappe.client.get_value',
          args: {
            doctype: 'Item',
            filters: {
              'item_name': 'Dummy Data',
              'disabled': 0
            },
            fieldname: ['item_code', 'item_name', 'description', 'stock_uom']
          },
          async: false,
          callback: (r) => {
            const result = r && r.message || null;
            if (result && result.item_code) {
              const salesOrderItem = frappe.model.add_child(frm.doc, 'Sales Order Item', 'items');
              frappe.model.set_value(salesOrderItem.doctype, salesOrderItem.name, 'item_code', result.item_code);
              frappe.model.set_value(salesOrderItem.doctype, salesOrderItem.name, 'item_name', result.item_name);
              frappe.model.set_value(salesOrderItem.doctype, salesOrderItem.name, 'qty', 1);
              frappe.model.set_value(salesOrderItem.doctype, salesOrderItem.name, 'rate', oldItem && oldItem.rate || 0);
              frappe.model.set_value(salesOrderItem.doctype, salesOrderItem.name, 'price_list_rate', oldItem && oldItem.price_list_rate || 0);
              frappe.model.set_value(salesOrderItem.doctype, salesOrderItem.name, 'amount', oldItem && oldItem.amount || 0);
              frappe.model.set_value(salesOrderItem.doctype, salesOrderItem.name, 'description', result.description || '-');
              frappe.model.set_value(salesOrderItem.doctype, salesOrderItem.name, 'uom', result.stock_uom);
              frappe.model.set_value(salesOrderItem.doctype, salesOrderItem.name, 'prevdoc_docname', oldItem && oldItem.prevdoc_docname || '');
            }
          }
        });
        frm.refresh_field('items');

        await frappe.after_ajax(async () => {
          if (frm.doc['customer_name']) {
            // order checking
            let isHideAqiqahPackageMenu = 1;

            const validOrderDetailOrders = [];
            const orderDetailAqiqahPackageMenuOrders = [];
            const orderDetailAqiqahPackageMenuOrderBoxs = [];
            const orderDetailAqiqahPackageMenuPackageNames = [];
            const orderDetailNonBoxMenuOrders = [];

            $.each(frm.doc['order_detail'], (index, d) => {
              if (d.type && d.type === 'PAKET AQIQAH' || d.type === 'PAKET TUMPENG BOX' || d.type === 'PAKET REGULER BENTO' || d.type === 'PAKET REGULER' || d.type === 'PAKET ARABIAN' ||
              d.type === 'PAKET PROMO REGULER' || d.type === 'PAKET PROMO ARABIAN' || d.type === 'PAKET AQIQAH EKONOMIS' || d.type === 'SATUAN' && d.order_name && d.quantity && d.unit &&
                ((d.is_package && d.gender_type) || !d.is_package)) {
                isHideAqiqahPackageMenu = 0;
                orderDetailAqiqahPackageMenuOrders.push(d);

                const orderBox = _.find(orderDetailAqiqahPackageMenuOrderBoxs, (o) => {
                  return d.order_name === o.order_name;
                });
                if (orderBox) {
                  for (let i = 0; i < orderDetailAqiqahPackageMenuOrderBoxs.length; i++) {
                    if (orderDetailAqiqahPackageMenuOrderBoxs[i].order_name === d.order_name &&
                      orderDetailAqiqahPackageMenuOrderBoxs[i].total_unit_1 === 'BOX' ||
                      orderDetailAqiqahPackageMenuOrderBoxs[i].total_unit_1 === 'PCS' &&
                      orderDetailAqiqahPackageMenuOrderBoxs[i].order_name === 'PAKET BOX SATUAN') {
                      orderDetailAqiqahPackageMenuOrderBoxs[i].total_quantity_1 += d.total_quantity_1;
                    }
                  }
                } else {
                  orderDetailAqiqahPackageMenuOrderBoxs.push(_.cloneDeep(d));
                }

                const orderNames = d.order_name.split('-');
                if (orderNames.length === 2) {
                  if (d.type === 'PAKET TUMPENG BOX' || d.type === 'PAKET ARABIAN') {
                    orderDetailAqiqahPackageMenuPackageNames.push('PA ' + orderNames[1].trim());
                  } else if (d.type === 'PAKET REGULER BENTO' || d.type === 'PAKET REGULER') {
                    orderDetailAqiqahPackageMenuPackageNames.push('PR ' + orderNames[1].trim());
                  } else if (d.type === 'PAKET PROMO REGULER') {
                    orderDetailAqiqahPackageMenuPackageNames.push('PPR ' + orderNames[1].trim());
                  }  else if (d.type === 'PAKET PROMO ARABIAN') {
                    orderDetailAqiqahPackageMenuPackageNames.push('PPA ' + orderNames[1].trim());
                  } else if (d.type === 'PAKET BOX SATUAN') {
                    orderDetailAqiqahPackageMenuPackageNames.push('PAKET BOX SATUAN');
                  } else if (d.type === 'PAKET AQIQAH EKONOMIS') {
                    orderDetailAqiqahPackageMenuPackageNames.push('PAE' + orderNames[1].trim());
                  } else {
                    orderDetailAqiqahPackageMenuPackageNames.push('PAKET ' + orderNames[1].trim());
                  }
                }
              }
              if (d.type && d.type === 'NON BOX' && d.order_name && d.quantity && d.unit) {
                orderDetailNonBoxMenuOrders.push(d);
              }
              if (d.type && d.order_name && d.quantity && d.unit &&
                ((d.is_package && d.gender_type) || !d.is_package)) {
                validOrderDetailOrders.push(d);
              }
            });

            if (!frm.doc['order_detail'] || frm.doc['order_detail'].length === 0) {
              errorMessage = 'Harap pilih pemesanan';
            } else if (validOrderDetailOrders.length !== frm.doc['order_detail'].length) {
              errorMessage = 'Harap lengkapi isian pemesanan';
            } else if (validOrderDetailOrders.length === 0) {
              errorMessage = 'Harap pilih pemesanan';
            } else {
              const validAqiqahPackageMenuOrders = [];
              const validAqiqahPackageMenuOrderBoxs = [];
              const invalidAqiqahPackageMenuPackageNames = [];
              const validNonBoxMenuOrders = [];

              if (!isHideAqiqahPackageMenu && orderDetailAqiqahPackageMenuOrders.length > 0 &&
                orderDetailAqiqahPackageMenuOrders.length === orderDetailAqiqahPackageMenuPackageNames.length) {
                $.each(frm.doc['aqiqah_package_menu'], (index, d) => {
                  if (d.type) {
                    const orderNames = d.type.split(' ');
                    if (orderDetailAqiqahPackageMenuPackageNames.includes(d.type)) {
                      if (d.rice_type && d.quantity && d.meat_cook_type_1) {
                        if ((d.type === 'PAKET A' || d.type === 'PAKET B' || d.type === 'PAKET C') 
                          || orderNames[0].trim() === 'PA' || orderNames[0].trim() === 'PR' 
                          || orderNames[0].trim() === 'PPR' || orderNames[0].trim() === 'PPA'
                          || orderNames[0].trim() === 'PAE') {
                          validAqiqahPackageMenuOrders.push(d);

                          const orderBox = _.find(validAqiqahPackageMenuOrderBoxs, (o) => {
                            return d.order_type === o.order_type;
                          });
                          if (orderBox) {
                            for (let i = 0; i < validAqiqahPackageMenuOrderBoxs.length; i++) {
                              if (validAqiqahPackageMenuOrderBoxs[i].order_type === d.order_type) {
                                validAqiqahPackageMenuOrderBoxs[i].quantity += d.quantity;
                              }
                            }
                          } else {
                            validAqiqahPackageMenuOrderBoxs.push(_.cloneDeep(d));
                          }
                        } else {
                          invalidAqiqahPackageMenuPackageNames.push(d.order_type);
                        }
                      } else {
                        invalidAqiqahPackageMenuPackageNames.push(d.order_type);
                      }
                    } else if (d.order_type === 'PAKET BOX SATUAN') {
                      validAqiqahPackageMenuOrders.push(d);

                      const orderBox = _.find(validAqiqahPackageMenuOrderBoxs, (o) => {
                        return d.order_type === o.order_type;
                      });
                      if (orderBox) {
                        for (let i = 0; i < validAqiqahPackageMenuOrderBoxs.length; i++) {
                          if (validAqiqahPackageMenuOrderBoxs[i].order_type === d.order_type) {
                            validAqiqahPackageMenuOrderBoxs[i].quantity += d.quantity;
                          }
                        }
                      } else {
                        validAqiqahPackageMenuOrderBoxs.push(_.cloneDeep(d));
                      }
                    } else {
                      invalidAqiqahPackageMenuPackageNames.push(d.order_type);
                    }
                  }
                });

                if (!frm.doc['aqiqah_package_menu'] || frm.doc['aqiqah_package_menu'].length === 0) {
                  errorMessage = 'Harap pilih menu paket aqiqah';
                } else if (invalidAqiqahPackageMenuPackageNames.length > 0) {
                  errorMessage = 'Menu paket aqiqah harus sesuai dengan pemesanan';
                } else if (validAqiqahPackageMenuOrders.length !== frm.doc['aqiqah_package_menu'].length) {
                  errorMessage = 'Harap lengkapi menu paket aqiqah';
                } else if (validAqiqahPackageMenuOrders.length === 0) {
                  errorMessage = 'Harap pilih menu paket aqiqah';
                }
                console.log('orderDetailAqiqahPackageMenuOrderBoxs : ', orderDetailAqiqahPackageMenuOrderBoxs);
                console.log('validAqiqahPackageMenuOrderBoxs : ', validAqiqahPackageMenuOrderBoxs.length);
                console.log('validAqiqahPackageMenuOrderBoxs : ', validAqiqahPackageMenuOrderBoxs.length);
                
                if (!errorMessage &&
                  orderDetailAqiqahPackageMenuOrderBoxs.length > 0 && validAqiqahPackageMenuOrderBoxs.length > 0 &&
                  orderDetailAqiqahPackageMenuOrderBoxs.length === validAqiqahPackageMenuOrderBoxs.length) {
                  const invalidAqiqahPackageMenuOrderBoxPackageNames = [];
                  let orderName = '';
                  $.each(orderDetailAqiqahPackageMenuOrderBoxs, (index, d) => {
                    const orderBox = _.find(validAqiqahPackageMenuOrderBoxs, (o) => {
                      return d.order_name === o.order_type;
                    });
                    if (orderBox) {
                      if (d.total_quantity_1 !== orderBox.quantity) {
                        invalidAqiqahPackageMenuOrderBoxPackageNames.push(d.order_name);
                      }
                    } else {
                      invalidAqiqahPackageMenuOrderBoxPackageNames.push(d.order_name);
                    }
                    orderName = d.order_name;
                  });
                  if (invalidAqiqahPackageMenuOrderBoxPackageNames.length > 0) {
                    errorMessage = 'Jumlah box paket aqiqah ' + invalidAqiqahPackageMenuOrderBoxPackageNames.join(', ') + ' tidak sesuai dengan pemesanan';
                  } else {
                    const orderNames = orderName.split('-');
                    if (orderNames[0].trim() !== 'PA') {
                      if (!frm.doc['aqiqah_package_box_type']) {
                        errorMessage = 'Harap pilih pemakaian box';
                      } else if (!frm.doc['aqiqah_package_box_packaging']) {
                        errorMessage = 'Harap pilih pemakaian kemasan';
                      }
                    } else if (orderNames[0].trim() !== 'PR') {
                      if (!frm.doc['aqiqah_package_box_type']) {
                        errorMessage = 'Harap pilih pemakaian box';
                      } else if (!frm.doc['aqiqah_package_box_packaging']) {
                        errorMessage = 'Harap pilih pemakaian kemasan';
                      }
                    } else if (orderNames[0].trim() !== 'PPR') {
                      if (!frm.doc['aqiqah_package_box_type']) {
                        errorMessage = 'Harap pilih pemakaian box';
                      } else if (!frm.doc['aqiqah_package_box_packaging']) {
                        errorMessage = 'Harap pilih pemakaian kemasan';
                      }
                    } else if (orderNames[0].trim() !== 'PPA') {
                      if (!frm.doc['aqiqah_package_box_type']) {
                        errorMessage = 'Harap pilih pemakaian box';
                      } else if (!frm.doc['aqiqah_package_box_packaging']) {
                        errorMessage = 'Harap pilih pemakaian kemasan';
                      }
                    } else if (orderNames[0].trim() !== 'PAE') {
                      if (!frm.doc['aqiqah_package_box_type']) {
                        errorMessage = 'Harap pilih pemakaian box';
                      } else if (!frm.doc['aqiqah_package_box_packaging']) {
                        errorMessage = 'Harap pilih pemakaian kemasan';
                      }
                    }
                  }
                } else {
                  errorMessage = 'Pemesanan paket aqiqah tidak sesuai dengan jumlah menu paket aqiqah';
                }
              }

              if (orderDetailNonBoxMenuOrders.length > 0) {
                $.each(frm.doc['non_box_menu'], (index, d) => {
                  if (d.order_type && d.meat_cook_type && d.quantity && d.unit) {
                    validNonBoxMenuOrders.push(d);
                  }
                });

                if (!frm.doc['non_box_menu'] || frm.doc['non_box_menu'].length === 0) {
                  errorMessage = 'Harap pilih menu non box';
                } else if (validNonBoxMenuOrders.length !== frm.doc['non_box_menu'].length) {
                  errorMessage = 'Harap lengkapi menu non box';
                } else if (validNonBoxMenuOrders.length === 0) {
                  errorMessage = 'Harap pilih menu non box';
                }
              }

              if (!errorMessage) {
                if (!frm.doc['total_quantity_order_box'] &&
                  !frm.doc['total_quantity_order_bungkus'] &&
                  !frm.doc['total_quantity_order_porsi'] &&
                  !frm.doc['total_quantity_order_pcs'] &&
                  !frm.doc['total_quantity_order_ekor']) {
                  errorMessage = 'Harap pilih pemesanan';
                } else if (!frm.doc['total_quantity_actual_box'] &&
                  !frm.doc['total_quantity_actual_bungkus'] &&
                  !frm.doc['total_quantity_actual_porsi'] &&
                  !frm.doc['total_quantity_actual_pcs'] &&
                  !frm.doc['total_quantity_actual_ekor']) {
                  errorMessage = 'Nilai aktual tidak boleh kosong';
                } else {
                  if (frm.doc['total_quantity_order_box'] !== frm.doc['total_quantity_actual_box'] ||
                    frm.doc['total_quantity_order_bungkus'] !== frm.doc['total_quantity_actual_bungkus'] ||
                    frm.doc['total_quantity_order_porsi'] !== frm.doc['total_quantity_actual_porsi'] ||
                    frm.doc['total_quantity_order_pcs'] !== frm.doc['total_quantity_actual_pcs'] ||
                    frm.doc['total_quantity_order_ekor'] !== frm.doc['total_quantity_actual_ekor']) {
                    errorMessage = 'Total pemesanan harus sama dengan total aktual';
                  }
                }
              }
            }

            if (!errorMessage) {
              const now = moment();
              if (frm.doc['arrived_date_time']) {
                if (moment(frm.doc['arrived_date_time']).isBefore(now)) {
                  errorMessage = 'Waktu pengiriman harus lebih dari waktu sekarang';
                } else {
                  if (frm.doc['event_date_time']) {
                    if (moment(frm.doc['event_date_time']).isBefore(now)) {
                      errorMessage = 'Waktu acara harus lebih dari waktu sekarang';
                    }
                    if (moment(frm.doc['event_date_time']).isBefore(moment(frm.doc['arrived_date_time']))) {
                      errorMessage = 'Waktu pengiriman harus lebih kecil dari waktu acara';
                    }
                  }
                }
              }
              if (!errorMessage) {
                const arrivedDateTime = moment(frm.doc['arrived_date_time']);
                const eventDateTime = moment(frm.doc['event_date_time']);
                if (!arrivedDateTime.isSame(eventDateTime, 'day')) {
                  errorMessage = 'Tanggal pengiriman harus sama dengan tanggal acara';
                }
              }
            }

            if (errorMessage) {
              msgprint(errorMessage);
              frappe.validated = false;
            } else {
              const validateTimestamp = await setTimestamp();
              if (validateTimestamp) {
                frm.doc['delivery_date'] = frm.doc['arrived_date_time'];
                frm.doc['event_date'] = frm.doc['event_date_time'];

                if (!frm.doc['aqiqah_name']) {
                  const aqiqahDetailData = cur_frm.doc['aqiqah_detail'] || [];
                  if (aqiqahDetailData && aqiqahDetailData.length > 0) {
                    frm.doc['aqiqah_name'] = aqiqahDetailData[0].aqiqah_name || '';
                  }
                }

                frappe.validated = true;
              } else {
                frappe.validated = false;
              }
            }
          } else {
            msgprint('Harap isi nama customer');
            frappe.validated = false;
          }
        });
      }
    }
  },
  after_save: async (frm, cdt, cdn) => {
    if (frm.doc.docstatus) {
      if (oldDoc) {
        if (oldDoc !== frm.doc) {
          if (frm.doc['note_after_submit'] === '') {
            frappe.throw(__('Silahkan isi keterangan setelah submit'));
          }
        }
      }
      if (frm.doc.event_date) {
        if (oldDoc && oldDoc.event_date) {
          const oldDocEventDate = moment(oldDoc.event_date);
          const docEventDate = moment(frm.doc.event_date);
          if (!oldDocEventDate.isSame(docEventDate, 'day')) {
            // cancel skph analysis
            await syncCancelAllSkph(oldDoc.event_date_time);
          }
        }
        // create skph analysis
        await regenerateSkphAnalysis(false);
      }
      await planningCheck(true);
    } else {
      await regenerateSkphAnalysis(true);
      await planningCheck(false);
      frappe.msgprint('Pastikan data sesuai dengan pesanan customer');
      setTimeout(() => {
        // reload on submit only
        localStorage.setItem('needs_to_reload', 'false');
        window.onbeforeunload = null;
        window.location.reload();
      }, 10000);
    }
  },
  after_cancel: async (frm, cdt, cdn) => {
    await syncCancelAllSkph(cur_frm.doc['event_date_time']);
  },
  customer: async (frm, cdt, cdn) => {
    await setSourceInfo(frm, cdt, cdn);
  },
  customer_name: (frm, cdt, cdn) => {
    setAddressDisplay(frm, cdt, cdn);
  },
  payment_terms_template: (frm, cdt, cdn) => {
    if (!frm.doc['payment_terms_template']) {
      frm.clear_table('payment_schedule');
      frm.refresh_field('payment_schedule');
    }
  },
  total_discount: (frm, cdt, cdn) => {
    setTotalPayment(frm, cdt, cdn);
  },
  total_shipping_price: (frm, cdt, cdn) => {
    setTotalPayment(frm, cdt, cdn);
  },
  total_equipment_rental_services: (frm, cdt, cdn) => {
    setTotalPayment(frm, cdt, cdn);
  },
  arrived_date_time: (frm, cdt, cdn) => {
    frm.doc['delivery_date'] = frm.doc['arrived_date_time'];
  },
  event_date_time: (frm, cdt, cdn) => {
    frm.doc['event_date'] = frm.doc['event_date_time'];
  },
  is_gift_note: (frm, cdt, cdn) => {
    if (!frm.doc["is_gift_note"]) {
      cur_frm.set_value("gift_note", '');
      cur_frm.set_value("gift_quantity", 0);
      cur_frm.refresh_field("gift_note");
      cur_frm.refresh_field("gift_quantity");
    }
  },
});

////////////////////////////////////// functions - child table //////////////////////////////////////
const setOrderDetailItem = (frm, cdt, cdn, isClearAll = false) => {
  const d = locals[cdt][cdn];
  const currentRow = cur_frm.get_field('order_detail').grid.grid_rows[d.idx - 1];
  if (currentRow) {
    currentRow.grid_form.fields_dict['is_package'].df.read_only = 0;
    currentRow.grid_form.fields_dict['gender_type'].df.read_only = 0;
  }

  let orderNameOptions = [];
  let unitOptions = [];

  // non box menus
  const nonBoxMenus = _.cloneDeep(nonBoxMenuIds);
  // paket super hemat menus
  const paketSuperHematMenus = _.cloneDeep(paketSuperHematMenuIds);
  // paket super ekonomis menus
  const paketSuperEkonomisMenus = _.cloneDeep(paketSuperEkonomisMenuIds);
  // paket arabian style
  const paketArabianStyleMenus = _.cloneDeep(paketArabianStyleMenuIds);
  // paket tumpengan spesial
  const paketTumpenganSpesialMenus = _.cloneDeep(paketTumpenganSpesialMenuIds);
  // paket tumpeng box
  const paketTumpengBoxMenus = _.cloneDeep(paketTumpengBoxMenuIds);
  // paket reguler bento
  const paketRegulerBentoMenus = _.cloneDeep(paketRegulerBentoMenuIds);
  // paket reguler
  const paketRegulerMenus = _.cloneDeep(paketRegulerMenuIds);
  // paket promo arabian
  const paketPromoArabianMenus = _.cloneDeep(paketPromoArabianMenuIds);
  // paket aqiqah ekonomis 
  const paketAqiqahEkonomisMenus = _.cloneDeep(paketAqiqahEkonomisMenuIds);
  // paket box istimewa menus
  const paketBoxIstimewaMenus = _.cloneDeep(paketBoxIstimewaMenuIds);
  // paket box abg menus
  const paketBoxAbgMenus = _.cloneDeep(paketBoxAbgMenuIds);
  // nasi nampan menus
  const nasiNampanMenus = _.cloneDeep(nasiNampanMenuIds);
  // paket prasmanan
  const paketPrasmananMenus = _.cloneDeep(paketPrasmananMenuIds);
  // satuan
  const satuanMenus = _.cloneDeep(paketSatuanMenuIds);

  if (d && d.type) {
    let addOrderNameOptions = [];
    let addUnitOptions = [];

    if (isClearAll) {
      d.order_name = '';
      d.gender_type = '';
      d.gender_type_lamb = '';
      d.quantity = '';
      d.unit = '';
      d.is_order_bungkus_cup = 0;
      d.notes = '-';
      d.unit_price = 0;
      d.total_price = 0;
      d.item_code = '';
      d.item_name = '';
      d.unit_price_bungkus_cup = 0;
      d.total_price_bungkus_cup = 0;
      d.item_code_bungkus_cup = '';
      d.item_name_bungkus_cup = '';
      d.grand_total_price = 0;
      d.total_quantity_1 = 0;
      d.total_unit_1 = '';
      d.total_quantity_2 = 0;
      d.total_unit_2 = '';

      for (let i = 0; i < nonBoxMenus.length; i++) {
        d['is_' + nonBoxMenus[i]] = 0;
        d['quantity_' + nonBoxMenus[i]] = '';
      }
      for (let i = 0; i < paketSuperHematMenus.length; i++) {
        d['is_psh_' + paketSuperHematMenus[i]] = 0;
      }
      for (let i = 0; i < paketSuperEkonomisMenus.length; i++) {
        d['is_pse_' + paketSuperEkonomisMenus[i]] = 0;
      }
      for (let i = 0; i < paketArabianStyleMenus.length; i++) {
        d['is_pas_' + paketArabianStyleMenus[i]] = 0;
      }
      for (let i = 0; i < paketTumpenganSpesialMenus.length; i++) {
        d['is_pts_' + paketTumpenganSpesialMenus[i]] = 0;
      }
      for (let i = 0; i < paketTumpengBoxMenus.length; i++) {
        d['is_ptb_' + paketTumpengBoxMenus[i]] = 0;
      }
      for (let i = 0; i < paketRegulerBentoMenus.length; i++) {
        d['is_prb_' + paketRegulerBentoMenus[i]] = 0;
      }
      for (let i = 0; i < paketRegulerMenus.length; i++) {
        d['is_reg_' + paketRegulerMenus[i]] = 0;
      }
      for (let i = 0; i < paketPromoArabianMenus.length; i++) {
        d['is_ppa_' + paketPromoArabianMenus[i]] = 0;
      }
      for (let i = 0; i < paketAqiqahEkonomisMenus.length; i++) {
        d['is_pae_' + paketAqiqahEkonomisMenus[i]] = 0;
      }
      for (let i = 0; i < paketBoxIstimewaMenus.length; i++) {
        d['is_pbi_' + paketBoxIstimewaMenus[i]] = 0;
      }
      for (let i = 0; i < paketBoxAbgMenus.length; i++) {
        d['is_abg_' + paketBoxAbgMenus[i]] = 0;
      }
      for (let i = 0; i < nasiNampanMenus.length; i++) {
        d['is_nn_' + nasiNampanMenus[i]] = 0;
      }
      for (let i = 0; i < paketPrasmananMenus.length; i++) {
        d['is_pr_' + paketPrasmananMenus[i]] = 0;
      }
      for (let i = 0; i < satuanMenus.length; i++) {
        d['is_st_' + satuanMenus[i]] = 0;
      }

      // d['is_nasi_putih'] = 0;
      // d['is_sate_goreng'] = 0;
      // d['is_kuah_gulai'] = 0;
      // d['is_mix_vege'] = 0;
      // d['is_ayam_bakar'] = 0;
      // d['is_kerupuk'] = 0;
      // d['is_fruit_tea'] = 0;
      // d['is_alat_makan_set'] = 0;
      // d['is_sate_goreng'] = 0;
      // d['is_mie_goreng'] = 0;
      // d['is_kuah_gulai'] = 0;
      // d['is_timun'] = 0;
      // d['is_mix_vege'] = 0;
      // d['is_kerupuk'] = 0;
      // d['is_puding'] = 0;
      // d['is_sendok'] = 0;
    }

    if (d.type === 'PAKET AQIQAH') {
      d.menu_type = '';
      if (d.is_package) {
        const packages = _.cloneDeep(aqiqahPackageMenuNames);
        const types = _.cloneDeep(aqiqahPackageMenuTypes);
        for (let i = 0; i < packages.length; i++) {
          const tumpengMenus = _.cloneDeep(aqiqahTumpengMenuData);
          if(packages[i] === 'PAKET TUMPENG MINI'){
            for (let j = 0; j < tumpengMenus.length; j++) {
              const element = tumpengMenus[j];
              addOrderNameOptions.push({
                value: element.type,
                label: element.type,
              });
            }
          }else{
            for (let j = 0; j < types.length; j++) {
              addOrderNameOptions.push({
                value: packages[i] + ' - ' + types[j],
                label: packages[i] + ' - ' + types[j]
              });
            }
          }
        }
        addUnitOptions.push({
          value: 'PAKET',
          label: 'PAKET'
        });
      } else {
        const types = _.cloneDeep(aqiqahPackageMenuTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: 'SATUAN - ' + types[i],
            label: 'SATUAN - ' + types[i]
          });
        }
        addUnitOptions.push({
          value: 'BOX',
          label: 'BOX'
        });
      }
    }else if(d.type === 'PAKET PREMIUM'){
      d.is_package = 1;
      d.menu_type = '';
      // d.rice_type = 'PUTIH';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
        currentRow.grid_form.fields_dict['gender_type'].df.read_only = 0;
        // currentRow.grid_form.fields_dict['rice_type'].df.read_only = 1;
      }
      if (d.is_package) {
        const packages = _.cloneDeep(premiumPackageMenuNames);
        const types = _.cloneDeep(premiumPackageMenuTypes);
        for (let i = 0; i < packages.length; i++) {
          for (let j = 0; j < types.length; j++) {
            addOrderNameOptions.push({
              value: packages[i] + ' - ' + types[j],
              label: packages[i] + ' - ' + types[j]
            });
          }
        }
        addUnitOptions.push({
          value: 'PAKET',
          label: 'PAKET'
        });
      }
    }else if(d.type === 'PAKET HEMAT SPESIAL'){
      d.is_package = 1;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
        currentRow.grid_form.fields_dict['gender_type'].df.read_only = 0;
        // currentRow.grid_form.fields_dict['rice_type'].df.read_only = 0;
      }
      if (d.is_package) {
        const packages = _.cloneDeep(paketHematPackageMenuNames);
        const types = _.cloneDeep(paketHematPackageMenuTypes);
        for (let i = 0; i < packages.length; i++) {
          for (let j = 0; j < types.length; j++) {
            addOrderNameOptions.push({
              value: packages[i] + ' - ' + types[j],
              label: packages[i] + ' - ' + types[j]
            });
          }
        }
        addUnitOptions.push({
          value: 'PAKET',
          label: 'PAKET'
        });
      }
    } else if (d.type === 'AQIQAH MENTAH') {
      d.is_package = 1;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
      }
      if (d.is_package) {
        const types = _.cloneDeep(menuPackageTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: 'TIPE - ' + types[i],
            label: 'TIPE - ' + types[i]
          });
        }
        addUnitOptions.push({
          value: 'EKOR',
          label: 'EKOR'
        });
      }
    } else if (d.type === 'NON BOX') {
      if (d.is_package) {
        if (isClearAll) {
          d.menu_type = '';
        }
        const types = _.cloneDeep(menuPackageTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: 'TIPE - ' + types[i],
            label: 'TIPE - ' + types[i]
          });
        }
        addUnitOptions.push({
          value: 'PAKET',
          label: 'PAKET'
        });
      } else {
        const types = _.cloneDeep(nonBoxMenuPieces);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: types[i],
            label: types[i]
          });
        }
        if (d.order_name === 'SATUAN - BUNGKUS') {
          addUnitOptions.push({
            value: 'BUNGKUS',
            label: 'BUNGKUS'
          });
        } else if (d.order_name === 'SATUAN - PORSI') {
          addUnitOptions.push({
            value: 'PORSI',
            label: 'PORSI'
          });
        }
      }
    } else if (d.type === 'PAKET SUPER HEMAT') {
      d.is_package = 1;
      d.gender_type = 'BETINA';
      d.gender_type_lamb = 'A';
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
        currentRow.grid_form.fields_dict['gender_type'].df.read_only = 1;
      }
      if (d.is_package) {
        const types = _.cloneDeep(menuPackageSuperHematTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: 'PSH ' + types[i],
            label: 'PSH ' + types[i]
          });
        }
        addUnitOptions.push({
          value: 'PAKET',
          label: 'PAKET'
        });
      }
    } else if (d.type === 'PAKET SUPER EKONOMIS') {
      d.is_package = 1;
      d.gender_type = 'BETINA';
      d.gender_type_lamb = 'A';
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
        currentRow.grid_form.fields_dict['gender_type'].df.read_only = 1;
      }
      if (d.is_package) {
        const types = _.cloneDeep(menuPackageSuperEkonomisTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: types[i],
            label: types[i]
          });
        }
        addUnitOptions.push({
          value: 'PAKET',
          label: 'PAKET'
        });
      }
    } else if (d.type === 'PAKET TUMPENGAN SPESIAL') {
      d.is_package = 1;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
        currentRow.grid_form.fields_dict['gender_type'].df.read_only = 0;
      }
      if (d.is_package) {
        const types = _.cloneDeep(menuPackageTumpenganSpesialTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: 'PTS ' + types[i],
            label: 'PTS ' + types[i]
          });
        }
        addUnitOptions.push({
          value: 'PAKET',
          label: 'PAKET'
        });
      }
    } else if (d.type === 'PAKET ARABIAN STYLE') {
      d.is_package = 1;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
        currentRow.grid_form.fields_dict['gender_type'].df.read_only = 0;
      }
      if (d.is_package) {
        const types = _.cloneDeep(menuPackageArabianStyleTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: 'PAS ' + types[i],
            label: 'PAS ' + types[i]
          });
        }
        addUnitOptions.push({
          value: 'PAKET',
          label: 'PAKET'
        });
      }
    } else if (d.type === 'PAKET TUMPENG BOX' || d.type === 'PAKET ARABIAN') {
      d.is_package = 1;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
        currentRow.grid_form.fields_dict['gender_type'].df.read_only = 0;
      }
      if (d.is_package) {
        const types = _.cloneDeep(menuPackageTumpengBoxTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: 'PA - ' + types[i],
            label: 'PA - ' + types[i]
          });
        }
        addUnitOptions.push({
          value: 'PAKET',
          label: 'PAKET'
        });
      }
    } else if (d.type === 'PAKET REGULER BENTO' || d.type === 'PAKET REGULER') {
      d.is_package = 1;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
        currentRow.grid_form.fields_dict['gender_type'].df.read_only = 0;
      }
      if (d.is_package) {
        const types = _.cloneDeep(menuPackageRegulerBentoTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: 'PR - ' + types[i],
            label: 'PR - ' + types[i]
          });
        }
        addUnitOptions.push({
          value: 'PAKET',
          label: 'PAKET'
        });
      }
    } else if (d.type === 'PAKET PROMO REGULER') {
      d.is_package = 1;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
        currentRow.grid_form.fields_dict['gender_type'].df.read_only = 0;
      }
      if (d.is_package) {
        const types = _.cloneDeep(menuPackageRegulerTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: 'PPR - ' + types[i],
            label: 'PPR - ' + types[i]
          });
        }
        addUnitOptions.push({
          value: 'PAKET',
          label: 'PAKET'
        });
      }
    } else if (d.type === 'PAKET PROMO ARABIAN') {
      d.is_package = 1;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
        currentRow.grid_form.fields_dict['gender_type'].df.read_only = 0;
      }
      if (d.is_package) {
        const types = _.cloneDeep(menuPackagePromoArabianTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: 'PPA - ' + types[i],
            label: 'PPA - ' + types[i]
          });
        }
        addUnitOptions.push({
          value: 'PAKET',
          label: 'PAKET'
        });
      }
    } else if (d.type === 'PAKET AQIQAH EKONOMIS') {
      d.is_package = 1;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
        currentRow.grid_form.fields_dict['gender_type'].df.read_only = 0;
      }
      if (d.is_package) {
        const types = _.cloneDeep(menuPackagePromoArabianTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: 'PAE ' + types[i],
            label: 'PAE ' + types[i]
          });
        }
        addUnitOptions.push({
          value: 'PAKET',
          label: 'PAKET'
        });
      }
    } else if (d.type === 'PAKET BOX ISTIMEWA') {
      d.is_package = 0;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
      }
      if (!d.is_package) {
        const types = _.cloneDeep(menuPackageBoxIstimewaTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: 'PBI ' + types[i],
            label: 'PBI ' + types[i]
          });
        }
        addUnitOptions.push({
          value: 'BOX',
          label: 'BOX'
        });
      }
    } else if (d.type === 'PAKET ABG') {
      d.is_package = 0;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
      }
      if (!d.is_package) {
        const types = _.cloneDeep(menuPackageBoxAbgTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: types[i],
            label: types[i]
          });
        }
        addUnitOptions.push({
          value: 'BOX',
          label: 'BOX'
        });
      }
    } else if (d.type === 'NASI NAMPAN') {
      d.is_package = 0;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
      }
      if (!d.is_package) {
        const types = _.cloneDeep(menuNasiNampanTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: types[i],
            label: types[i]
          });
        }
        addUnitOptions.push({
          value: 'BOX',
          label: 'BOX'
        });
      }
    } else if (d.type === 'PAKET PRASMANAN') {
      d.is_package = 0;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
      }
      if (!d.is_package) {
        const types = _.cloneDeep(menuPackagePrasmananTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: 'PRASMANAN ' + types[i],
            label: 'PRASMANAN ' + types[i]
          });
        }
        addUnitOptions.push({
          value: 'BOX',
          label: 'BOX'
        });
      }
    } else if (d.type === 'SATUAN') {
      d.is_package = 0;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
      }
      if (!d.is_package) {
        const types = _.cloneDeep(menuPackageSatuanTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: types[i],
            label: types[i]
          });
        }
        addUnitOptions.push({
          value: 'PCS',
          label: 'PCS'
        });
      }
    } else if (d.type === 'MAKAN GRATIS') {
      d.is_package = 0;
      d.menu_type = '';
      if (currentRow) {
        currentRow.grid_form.fields_dict['is_package'].df.read_only = 1;
      }
      if (!d.is_package) {
        const types = _.cloneDeep(menuPackageMakanGratisTypes);
        for (let i = 0; i < types.length; i++) {
          addOrderNameOptions.push({
            value: types[i],
            label: types[i]
          });
        }
        addUnitOptions.push({
          value: 'BOX',
          label: 'BOX'
        });
      }
    }
    orderNameOptions = [...orderNameOptions, ...addOrderNameOptions];
    unitOptions = [...unitOptions, ...addUnitOptions];
  }
  if (currentRow) {
    currentRow.grid_form.fields_dict['order_name'].df.options = orderNameOptions;
    currentRow.grid_form.fields_dict['unit'].df.options = unitOptions;

    currentRow.refresh_field('is_package');
    currentRow.refresh_field('order_name');
    currentRow.refresh_field('gender_type');
    currentRow.refresh_field('gender_type_lamb');
    currentRow.refresh_field('menu_type');
    currentRow.refresh_field('quantity');
    currentRow.refresh_field('unit');
    currentRow.refresh_field('notes');

    for (let i = 0; i < nonBoxMenus.length; i++) {
      currentRow.refresh_field('is_' + nonBoxMenus[i]);
      currentRow.refresh_field('quantity_' + nonBoxMenus[i]);
    }
    for (let i = 0; i < paketSuperHematMenus.length; i++) {
      currentRow.refresh_field('is_psh_' + paketSuperHematMenus[i]);
    }
    for (let i = 0; i < paketSuperEkonomisMenus.length; i++) {
      currentRow.refresh_field('is_pse_' + paketSuperEkonomisMenus[i]);
    }
    for (let i = 0; i < paketArabianStyleMenus.length; i++) {
      currentRow.refresh_field('is_pas_' + paketArabianStyleMenus[i]);
    }
    for (let i = 0; i < paketTumpenganSpesialMenus.length; i++) {
      currentRow.refresh_field('is_pts_' + paketTumpenganSpesialMenus[i]);
    }
    for (let i = 0; i < paketTumpengBoxMenus.length; i++) {
      currentRow.refresh_field('is_ptb_' + paketTumpengBoxMenus[i]);
    }
    for (let i = 0; i < paketRegulerBentoMenus.length; i++) {
      currentRow.refresh_field('is_prb_' + paketRegulerBentoMenus[i]);
    }
    for (let i = 0; i < paketRegulerMenus.length; i++) {
      currentRow.refresh_field('is_reg_' + paketRegulerMenus[i]);
    }
    for (let i = 0; i < paketPromoArabianMenus.length; i++) {
      currentRow.refresh_field('is_ppa_' + paketPromoArabianMenus[i]);
    }
    for (let i = 0; i < paketAqiqahEkonomisMenus.length; i++) {
      currentRow.refresh_field('is_pae_' + paketAqiqahEkonomisMenus[i]);
    }
    for (let i = 0; i < paketBoxIstimewaMenus.length; i++) {
      currentRow.refresh_field('is_pbi_' + paketBoxIstimewaMenus[i]);
    }
    for (let i = 0; i < paketBoxAbgMenus.length; i++) {
      currentRow.refresh_field('is_abg_' + paketBoxAbgMenus[i]);
    }
    for (let i = 0; i < nasiNampanMenus.length; i++) {
      currentRow.refresh_field('is_nn_' + nasiNampanMenus[i]);
    }
    for (let i = 0; i < paketPrasmananMenus.length; i++) {
      currentRow.refresh_field('is_pr_' + paketPrasmananMenus[i]);
    }
    for (let i = 0; i < satuanMenus.length; i++) {
      currentRow.refresh_field('is_st_' + satuanMenus[i]);
    }

    currentRow.refresh_field('unit_price');
    currentRow.refresh_field('total_price');
    currentRow.refresh_field('item_code');
    currentRow.refresh_field('item_name');
    currentRow.refresh_field('unit_price_bungkus_cup');
    currentRow.refresh_field('total_price_bungkus_cup');
    currentRow.refresh_field('item_code_bungkus_cup');
    currentRow.refresh_field('item_name_bungkus_cup');
    currentRow.refresh_field('grand_total_price');
    currentRow.refresh_field('total_quantity_1');
    currentRow.refresh_field('total_unit_1');
    currentRow.refresh_field('total_quantity_2');
    currentRow.refresh_field('total_unit_2');
  }
};

const setOrderDetailNotes = async (frm, cdt, cdn) => {
  const d = locals[cdt][cdn];
  const currentRow = cur_frm.get_field('order_detail').grid.grid_rows[d.idx - 1];

  if (currentRow) {
    let packageName = '';
    let typeName = '';
    let notes = '-';
    let unitPrice = 0;
    let totalPrice = 0;
    let itemCodePaket = '';
    let itemNamePaket = '';
    let unitPriceBungkusCup = 0;
    let totalPriceBungkusCup = 0;
    let itemCodeBungkusCup = '';
    let itemNameBungkusCup = '';
    let grandTotalPrice = 0;
    let totalQuantity1 = 0;
    let totalUnit1 = '';
    let totalQuantity2 = 0;
    let totalUnit2 = '';

    if (d && d.type && d.order_name && d.quantity && d.unit) {
      let itemNameData = '';

      if (d.type === 'PAKET AQIQAH') {
        packageName = d.order_name.split('-')[0].trim();
        typeName = d.order_name.split('-')[1].trim();

        if (d.is_package) {
          itemNameData = d.type + ' - ' + packageName + ' - ' + typeName + ' - ' + d.gender_type;

          // get quantity unit
		  if(packageName === 'PAKET TUMPENG MINI'){
			const menuData = _.find(aqiqahTumpengMenuData, (value) => value.type === d.order_name);
			if(menuData){
				totalQuantity1 = menuData.quantity * d.quantity;
				totalUnit1 = menuData.unit;
			}
		  }else{
			  const packageTypes = _.cloneDeep(aqiqahPackageMenuPackageTypes);
			  const packageType = _.find(packageTypes, (o) => {
				  return o.package === packageName;
				});
				if (packageType) {
					totalQuantity1 = packageType.quantity * d.quantity;
					totalUnit1 = packageType.unit;
				}
			}
        } else {
          itemNameData = d.type + ' - ' + d.order_name;

          // get quantity unit
          totalQuantity1 = d.quantity;
          totalUnit1 = d.unit;
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'PAKET PREMIUM') {
        packageName = d.order_name.split('-')[0].trim();
        typeName = d.order_name.split('-')[1].trim();

        if (d.is_package) {
          itemNameData = packageName + ' - ' + d.gender_type + ' ' + typeName;



          // get quantity unit
          const packageTypes = _.cloneDeep(premiumPackageSalesData);
          const packageType = _.find(packageTypes, (o) => {
            return o.type === itemNameData;
          });
          if (packageType) {
            totalQuantity1 = packageType.quantity * d.quantity;
            totalUnit1 = packageType.unit;
          }
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'PAKET HEMAT SPESIAL') {
        packageName = d.order_name.split('-')[0].trim();
        typeName = d.order_name.split('-')[1].trim();

        if (d.is_package) {
          itemNameData = packageName + ' - ' + d.gender_type + ' ' + typeName;



          // get quantity unit
          const packageTypes = _.cloneDeep(paketHematPackageSalesData);
          const packageType = _.find(packageTypes, (o) => {
            return o.type === itemNameData;
          });
          if (packageType) {
            totalQuantity1 = packageType.quantity * d.quantity;
            totalUnit1 = packageType.unit;
          }
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'AQIQAH MENTAH') {
        typeName = d.order_name.split('-')[1].trim();
        itemNameData = d.type + ' - ' + d.order_name.split('-')[0].trim() + ' ' + typeName + ' - ' + d.gender_type;

        // get quantity unit
        totalQuantity1 = d.quantity;
        totalUnit1 = d.unit;
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'NON BOX') {
        const quantityBungkusOptions = [{
          value: 0,
          label: 0
        }];
        const quantityPorsiOptions = [{
          value: 0,
          label: 0
        }];
        const quantityPorsiKuahOptions = [{
          value: 0,
          label: 0
        }];
        const quantityKeringOptions = [{
          value: 0,
          label: 0
        }];

        if (d.is_package && d.menu_type) {
          typeName = d.order_name.split('-')[1].trim();
          itemNameData = d.type + ' - ' + d.order_name.split('-')[0].trim() + ' ' + typeName + ' - ' + d.gender_type + ' - ' + d.menu_type;

          // get quantity unit
          const types = _.cloneDeep(nonBoxMenuPackageTypes);
          for (let i = 0; i < types.length; i++) {
            if (types[i].value === typeName) {
              for (let j = 0; j < types[i].menus.length; j++) {
                if (types[i].menus[j].value === d.menu_type) {
                  for (let k = 0; k < types[i].menus[j].quantity_units.length; k++) {
                    if (types[i].menus[j].quantity_units[k].value === 1) {
                      totalQuantity1 = types[i].menus[j].quantity_units[k].quantity * d.quantity;
                      totalUnit1 = types[i].menus[j].quantity_units[k].unit;
                      // set quantity
                      for (let l = 1; l <= d.quantity; l++) {
                        quantityBungkusOptions.push({
                          value: types[i].menus[j].quantity_units[k].quantity * l,
                          label: types[i].menus[j].quantity_units[k].quantity * l
                        });
                      }
                    } else if (types[i].menus[j].quantity_units[k].value === 2) {
                      totalQuantity2 = types[i].menus[j].quantity_units[k].quantity * d.quantity;
                      totalUnit2 = types[i].menus[j].quantity_units[k].unit;
                      // set quantity
                      for (let l = 1; l <= d.quantity; l++) {
                        quantityPorsiOptions.push({
                          value: types[i].menus[j].quantity_units[k].quantity * l,
                          label: types[i].menus[j].quantity_units[k].quantity * l
                        });
                      }
                    } else if (types[i].menus[j].quantity_units[k].value === 3) {
                      totalQuantity2 = types[i].menus[j].quantity_units[k].quantity * d.quantity;
                      totalUnit2 = types[i].menus[j].quantity_units[k].unit;
                      // set quantity
                      for (let l = 1; l <= d.quantity; l++) {
                        quantityPorsiKuahOptions.push({
                          value: types[i].menus[j].quantity_units[k].quantity * l,
                          label: types[i].menus[j].quantity_units[k].quantity * l
                        });
                      }
                    } else if (types[i].menus[j].quantity_units[k].value === 4) {
                      totalQuantity1 = types[i].menus[j].quantity_units[k].quantity * d.quantity;
                      totalUnit1 = types[i].menus[j].quantity_units[k].unit;
                      // set quantity
                      for (let l = 1; l <= d.quantity; l++) {
                        quantityKeringOptions.push({
                          value: types[i].menus[j].quantity_units[k].quantity * l,
                          label: types[i].menus[j].quantity_units[k].quantity * l
                        });
                      }
                    }
                  }
                  break;
                }
              }
            }
          }
        } else if (!d.is_package) {
          itemNameData = d.type + ' - ' + d.order_name;

          // get quantity unit
          totalQuantity1 = d.quantity;
          totalUnit1 = d.unit;

          // set quantity
          if (d.unit === 'BUNGKUS') {
            quantityBungkusOptions.push({
              value: d.quantity,
              label: d.quantity
            });
          } else if (d.unit === 'PORSI') {
            quantityPorsiOptions.push({
              value: d.quantity,
              label: d.quantity
            });
          }
        }

        if (d.is_sate || d.is_kering_sate) {
          itemNameData = itemNameData + ' - SATE';
        }

        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
        if (totalUnit2) {
          notes += ' + ' + totalQuantity2.toLocaleString() + ' ' + totalUnit2;
        }

        currentRow.grid_form.fields_dict['quantity_gulai'].df.options = quantityBungkusOptions;
        currentRow.grid_form.fields_dict['quantity_kari'].df.options = quantityBungkusOptions;
        currentRow.grid_form.fields_dict['quantity_semur'].df.options = quantityBungkusOptions;
        currentRow.grid_form.fields_dict['quantity_sop'].df.options = quantityBungkusOptions;
        currentRow.grid_form.fields_dict['quantity_tengkleng'].df.options = quantityBungkusOptions;
        currentRow.grid_form.fields_dict['quantity_tongseng'].df.options = quantityBungkusOptions;
        currentRow.grid_form.fields_dict['quantity_sate'].df.options = quantityPorsiOptions;
        currentRow.grid_form.fields_dict['quantity_bakar_bbq'].df.options = quantityPorsiOptions;
        currentRow.grid_form.fields_dict['quantity_guling'].df.options = quantityPorsiOptions;
        currentRow.grid_form.fields_dict['quantity_masak_bombay'].df.options = quantityPorsiOptions;
        currentRow.grid_form.fields_dict['quantity_panggang'].df.options = quantityPorsiOptions;
        currentRow.grid_form.fields_dict['quantity_teriyaki'].df.options = quantityPorsiOptions;
        currentRow.grid_form.fields_dict['quantity_kuah_gulai'].df.options = quantityPorsiKuahOptions;
        currentRow.grid_form.fields_dict['quantity_kuah_kari'].df.options = quantityPorsiKuahOptions;
        currentRow.grid_form.fields_dict['quantity_kuah_semur'].df.options = quantityPorsiKuahOptions;
        currentRow.grid_form.fields_dict['quantity_kuah_sop'].df.options = quantityPorsiKuahOptions;
        currentRow.grid_form.fields_dict['quantity_kuah_tengkleng'].df.options = quantityPorsiKuahOptions;
        currentRow.grid_form.fields_dict['quantity_kuah_tongseng'].df.options = quantityPorsiKuahOptions;
        currentRow.grid_form.fields_dict['quantity_kering_bakar_bbq'].df.options = quantityKeringOptions;
        currentRow.grid_form.fields_dict['quantity_kering_goreng'].df.options = quantityKeringOptions;
        currentRow.grid_form.fields_dict['quantity_kering_masak_bombay'].df.options = quantityKeringOptions;
        currentRow.grid_form.fields_dict['quantity_kering_panggang'].df.options = quantityKeringOptions;
        currentRow.grid_form.fields_dict['quantity_kering_teriyaki'].df.options = quantityKeringOptions;
        currentRow.grid_form.fields_dict['quantity_kering_sate'].df.options = quantityKeringOptions;
      } else if (d.type === 'PAKET SUPER HEMAT') {
        if (d.is_package) {
          itemNameData = d.type + ' - ' + d.order_name + ' - ' + d.gender_type_lamb + ' - ' + d.gender_type;

          // get quantity unit
          if (packageSuperHematMenuPackageType) {
            totalQuantity1 = packageSuperHematMenuPackageType.quantity * d.quantity;
            totalUnit1 = packageSuperHematMenuPackageType.unit;
          }
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'PAKET SUPER EKONOMIS') {
        if (d.is_package) {
          itemNameData = d.type + ' - ' + d.gender_type_lamb + ' - ' + d.gender_type;

          // get quantity unit
          if (packageSuperEkonomisMenuPackageType) {
            totalQuantity1 = packageSuperEkonomisMenuPackageType.quantity * d.quantity;
            totalUnit1 = packageSuperEkonomisMenuPackageType.unit;
          }
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'PAKET TUMPENGAN SPESIAL') {
        packageName = d.order_name.split('-')[0].trim();
        if (d.is_package) {
          itemNameData = d.type + ' - ' + packageName + ' - ' + d.gender_type;

          // get quantity unit
          const packageTypes = _.cloneDeep(packageTumpenganSpesialMenuPackageType);
          const packageType = _.find(packageTypes, (o) => {
            return o.type === packageName;
          });
          if (packageType) {
            totalQuantity1 = packageType.quantity * d.quantity;
            totalUnit1 = packageType.unit;
          }
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'PAKET ARABIAN STYLE') {
        if (d.is_package) {
          itemNameData = d.type + ' - ' + d.order_name + ' - ' + d.gender_type;

          // get quantity unit
          const packageTypes = _.cloneDeep(packageArabianStyleMenuPackageType);
          const packageType = _.find(packageTypes, (o) => {
            return o.type === d.order_name;
          });
          if (packageType) {
            totalQuantity1 = packageType.quantity * d.quantity;
            totalUnit1 = packageType.unit;
          }
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'PAKET TUMPENG BOX' || d.type === 'PAKET ARABIAN') {
        if (d.is_package) {
          itemNameData = d.type + ' - ' + d.order_name + ' - ' + d.gender_type;
          // get quantity unit
          const packageTypes = _.cloneDeep(packageTumpengBoxMenuPackageType);
          const packageType = _.find(packageTypes, (o) => {
            return o.type === d.order_name;
          });
          if (packageType) {
            totalQuantity1 = packageType.quantity * d.quantity;
            totalUnit1 = packageType.unit;
          }
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'PAKET REGULER BENTO' || d.type === 'PAKET REGULER') {
        if (d.is_package) {
          //! perubahan nama dengan variable  
          itemNameData = d.type + ' - ' + d.order_name + ' - ' + d.gender_type;
          // get quantity unit
          const packageTypes = _.cloneDeep(packageRegulerBentoMenuPackageType);
          const packageType = _.find(packageTypes, (o) => {
            return o.type === d.order_name;
          });
          if (packageType) {
            totalQuantity1 = packageType.quantity * d.quantity;
            totalUnit1 = packageType.unit;
          }
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'PAKET PROMO REGULER') {
        if (d.is_package) {
          itemNameData = d.type + ' - ' + d.order_name + ' - ' + d.gender_type;
          // get quantity unit
          const packageTypes = _.cloneDeep(packageRegulerMenuPackageType);
          const packageType = _.find(packageTypes, (o) => {
            return o.type === d.order_name;
          });
          if (packageType) {
            totalQuantity1 = packageType.quantity * d.quantity;
            totalUnit1 = packageType.unit;
          }
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'PAKET PROMO ARABIAN') {
        if (d.is_package) {
          itemNameData = d.type + ' - ' + d.order_name + ' - ' + d.gender_type;
          // get quantity unit
          const packageTypes = _.cloneDeep(packagePromoArabianMenuPackageType);
          const packageType = _.find(packageTypes, (o) => {
            return o.type === d.order_name;
          });
          if (packageType) {
            totalQuantity1 = packageType.quantity * d.quantity;
            totalUnit1 = packageType.unit;
          }
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'PAKET AQIQAH EKONOMIS') {
        if (d.is_package) {
          itemNameData = d.type + ' - ' + d.order_name + ' - ' + d.gender_type;
          // get quantity unit
          const packageTypes = _.cloneDeep(packageAqiqahEkonomisMenuPackageType);
          const packageType = _.find(packageTypes, (o) => {
            return o.type === d.order_name;
          });
          if (packageType) {
            totalQuantity1 = packageType.quantity * d.quantity;
            totalUnit1 = packageType.unit;
          }
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'PAKET BOX ISTIMEWA') {
        if (!d.is_package) {
          itemNameData = d.type + ' - ' + d.order_name;

          // get quantity unit
          totalQuantity1 = d.quantity;
          totalUnit1 = d.unit;
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'PAKET ABG') {
        if (!d.is_package) {
          itemNameData = d.type + ' - ' + d.order_name;

          // get quantity unit
          totalQuantity1 = d.quantity;
          totalUnit1 = d.unit;
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'NASI NAMPAN') {
        if (!d.is_package) {
          itemNameData = d.type + ' - ' + d.order_name;

          // get quantity unit
          totalQuantity1 = d.quantity;
          totalUnit1 = d.unit;
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'PAKET PRASMANAN') {
        if (!d.is_package) {
          itemNameData = d.type + ' - ' + d.order_name;

          // get quantity unit
          totalQuantity1 = d.quantity;
          totalUnit1 = d.unit;
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'SATUAN') {
        if (!d.is_package) {
          itemNameData = d.type + ' ' + d.order_name + ' - ' + d.unit;

          // get quantity unit
          totalQuantity1 = d.quantity;
          totalUnit1 = d.unit;
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      } else if (d.type === 'MAKAN GRATIS') {
        if (!d.is_package) {
          if (d.order_name === 'NASI NAMPAN') {
            itemNameData = d.order_name + ' - ' + d.unit;
          } else {
            itemNameData = d.type + ' ' + d.order_name + ' - ' + d.unit;
          }
          // get quantity unit
          totalQuantity1 = d.quantity;
          totalUnit1 = d.unit;
        }
        notes = 'Total ' + totalQuantity1.toLocaleString() + ' ' + totalUnit1;
      }

      if (itemNameData) {
        frappe.show_progress('Please wait', 40, 100, 'Fetching Item Price...');

        // get price list
        await frappe.call({
          method: 'frappe.client.get_value',
          args: {
            doctype: 'Item Price',
            filters: {
              'item_name': itemNameData,
              'uom': d.unit,
              'price_list': 'Standard Selling',
              'selling': 1
            },
            fieldname: ['item_code', 'price_list_rate', 'item_name']
          },
          async: false,
          callback: (r) => {
            const result = r && r.message || null;
            if (result && result.item_code) {
              unitPrice = result.price_list_rate;
              itemCodePaket = result.item_code;
              itemNamePaket = result.item_name;
            }
          }
        });

        if (d.is_order_bungkus_cup) {
          await frappe.after_ajax(async () => {
            frappe.show_progress('Please wait', 60, 100, 'Fetching Item Price...');

            await frappe.call({
              method: 'frappe.client.get_value',
              args: {
                doctype: 'Item Price',
                filters: {
                  'item_name': itemNameDataBungkusCup,
                  'uom': 'UNIT',
                  'price_list': 'Standard Selling',
                  'selling': 1
                },
                fieldname: ['item_code', 'price_list_rate', 'item_name']
              },
              async: false,
              callback: (r) => {
                const result = r && r.message || null;
                if (result && result.item_code) {
                  unitPriceBungkusCup = result.price_list_rate;
                  itemCodeBungkusCup = result.item_code;
                  itemNameBungkusCup = result.item_name;
                }
              }
            });
          });
        }

        frappe.show_progress('Please wait', 100, 100, 'Completed');
        setTimeout(() => {
          if (cur_dialog) {
            cur_dialog.hide();
          }
        }, 1000);
      }
    }

    await frappe.after_ajax(() => {
      d.notes = notes;

      totalPrice = unitPrice * d.quantity;
      d.unit_price = unitPrice;
      d.total_price = totalPrice;
      d.item_code = itemCodePaket;
      d.item_name = itemNamePaket;

      if (d.is_order_bungkus_cup_qty) {
        totalPriceBungkusCup = unitPriceBungkusCup * d.is_order_bungkus_cup_qty;
      } else {
        totalPriceBungkusCup = unitPriceBungkusCup * totalQuantity1;
      }

      d.unit_price_bungkus_cup = unitPriceBungkusCup;
      d.total_price_bungkus_cup = totalPriceBungkusCup;
      d.item_code_bungkus_cup = itemCodeBungkusCup;
      d.item_name_bungkus_cup = itemNameBungkusCup;

      grandTotalPrice = totalPrice + totalPriceBungkusCup;
      d.grand_total_price = grandTotalPrice;
      d.total_quantity_1 = totalQuantity1;
      d.total_unit_1 = totalUnit1;
      d.total_quantity_2 = totalQuantity2;
      d.total_unit_2 = totalUnit2;

      // set non box quantity
      d.quantity_gulai = 0;
      d.quantity_kari = 0;
      d.quantity_semur = 0;
      d.quantity_sop = 0;
      d.quantity_tengkleng = 0;
      d.quantity_sate = 0;
      d.quantity_tongseng = 0;
      d.quantity_bakar_bbq = 0;
      d.quantity_guling = 0;
      d.quantity_masak_bombay = 0;
      d.quantity_panggang = 0;
      d.quantity_teriyaki = 0;
      d.quantity_kuah_gulai = 0;
      d.quantity_kuah_kari = 0;
      d.quantity_kuah_semur = 0;
      d.quantity_kuah_sop = 0;
      d.quantity_kuah_tengkleng = 0;
      d.quantity_kuah_tongseng = 0;

      currentRow.refresh_field('notes');
      currentRow.refresh_field('unit_price');
      currentRow.refresh_field('total_price');
      currentRow.refresh_field('item_code');
      currentRow.refresh_field('item_name');
      currentRow.refresh_field('unit_price_bungkus_cup');
      currentRow.refresh_field('total_price_bungkus_cup');
      currentRow.refresh_field('item_code_bungkus_cup');
      currentRow.refresh_field('item_name_bungkus_cup');
      currentRow.refresh_field('grand_total_price');
      currentRow.refresh_field('total_quantity_1');
      currentRow.refresh_field('total_unit_1');
      currentRow.refresh_field('total_quantity_2');
      currentRow.refresh_field('total_unit_2');

      // non box quantity
      currentRow.refresh_field('quantity_gulai');
      currentRow.refresh_field('quantity_kari');
      currentRow.refresh_field('quantity_semur');
      currentRow.refresh_field('quantity_sop');
      currentRow.refresh_field('quantity_tengkleng');
      currentRow.refresh_field('quantity_sate');
      currentRow.refresh_field('quantity_tongseng');
      currentRow.refresh_field('quantity_bakar_bbq');
      currentRow.refresh_field('quantity_guling');
      currentRow.refresh_field('quantity_masak_bombay');
      currentRow.refresh_field('quantity_panggang');
      currentRow.refresh_field('quantity_teriyaki');
      currentRow.refresh_field('quantity_kuah_gulai');
      currentRow.refresh_field('quantity_kuah_kari');
      currentRow.refresh_field('quantity_kuah_semur');
      currentRow.refresh_field('quantity_kuah_sop');
      currentRow.refresh_field('quantity_kuah_tengkleng');
      currentRow.refresh_field('quantity_kuah_tongseng');
      currentRow.refresh_field('quantity_kering_bakar_bbq');
      currentRow.refresh_field('quantity_kering_goreng');
      currentRow.refresh_field('quantity_kering_masak_bombay');
      currentRow.refresh_field('quantity_kering_panggang');
      currentRow.refresh_field('quantity_kering_teriyaki');
      currentRow.refresh_field('quantity_kering_sate');

      frappe.after_ajax(() => {
        totalOrderDetail();
      });
    });
  }
};

const setOrderDetailUnit = (frm, cdt, cdn) => {
  const d = locals[cdt][cdn];
  if (d && d.type && d.order_name) {
    if (d.type === 'NON BOX') {
      if (!d.is_package) {
        const unitOptions = [];
        d.unit = '';
        if (d.order_name === 'SATUAN - BUNGKUS') {
          unitOptions.push({
            value: 'BUNGKUS',
            label: 'BUNGKUS'
          });
        } else if (d.order_name === 'SATUAN - PORSI') {
          unitOptions.push({
            value: 'PORSI',
            label: 'PORSI'
          });
        }
        const currentRow = cur_frm.get_field('order_detail').grid.grid_rows[d.idx - 1];
        if (currentRow) {
          currentRow.grid_form.fields_dict['unit'].df.options = unitOptions;
          currentRow.refresh_field('unit');
        }
      }
    } else if (d.type === 'PAKET SUPER HEMAT') {
      // paket super hemat menus
      const paketSuperHematMenus = _.cloneDeep(paketSuperHematMenuIds);
      for (let i = 0; i < paketSuperHematMenus.length; i++) {
        let isPsh = 0;
        // default menus
        if (['domba_panggang', 'acar', 'sambal'].includes(paketSuperHematMenus[i])) {
          isPsh = 1;
        }
        d['is_psh_' + paketSuperHematMenus[i]] = isPsh;
      }
      if (d.order_name === 'PSH NASI BRIYANI') {
        d.is_psh_nasi_briyani = 1;
      } else if (d.order_name === 'PSH NASI KEBULI') {
        d.is_psh_nasi_kebuli = 1;
      } else if (d.order_name === 'PSH NASI MANDHI') {
        d.is_psh_nasi_mandhi = 1;
      } else if (d.order_name === 'PSH NASI PUTIH') {
        d.is_psh_nasi_putih = 1;
      }
    } else if (d.type === 'PAKET SUPER EKONOMIS') {
      // paket super ekonomis menus
      const paketSuperEkonomisMenus = _.cloneDeep(paketSuperEkonomisMenuIds);
      for (let i = 0; i < paketSuperEkonomisMenus.length; i++) {
        let isPse = 1;
        // default menus
        // if (['domba_panggang', 'acar', 'sambal'].includes(paketSuperEkonomisMenus[i])) {
        //   isPsh = 1;
        // }
        d['is_pse_' + paketSuperEkonomisMenus[i]] = isPse;
      }
    } else if (d.type === 'PAKET PREMIUM') {
      // d['is_nasi_putih'] = 1;
      // d['is_sate_goreng'] = 1;
      // d['is_kuah_gulai'] = 1;
      // d['is_mix_vege'] = 1;
      // d['is_ayam_bakar'] = 1;
      // d['is_kerupuk'] = 1;
      // d['is_fruit_tea'] = 1;
      // d['is_alat_makan_set'] = 1;
    } else if (d.type === 'PAKET HEMAT SPESIAL') {
      // d['is_sate_goreng'] = 1;
      // d['is_mie_goreng'] = 1;
      // d['is_kuah_gulai'] = 1;
      // d['is_timun'] = 1;
      // d['is_mix_vege'] = 1;
      // d['is_kerupuk'] = 1;
      // d['is_puding'] = 1;
      // d['is_sendok'] = 1;
    } else if (d.type === 'PAKET ARABIAN STYLE') {
      // paket arabian style menus
      const paketArabianStyleMenus = _.cloneDeep(paketArabianStyleMenuIds);
      for (let i = 0; i < paketArabianStyleMenus.length; i++) {
        let isPas = 0;
        // default menus
        if (['domba_panggang', 'timun', 'sambal'].includes(paketArabianStyleMenus[i])) {
          isPas = 1;
        }
        d['is_pas_' + paketArabianStyleMenus[i]] = isPas;
      }
      // if (['PAS HEMAT NASI BRIYANI', 'PAS STANDAR NASI BRIYANI', 'PAS MEDIUM NASI BRIYANI', 'PAS GOLD NASI BRIYANI'].includes(d.order_name)) {
      //   d.is_pas_nasi_briyani = 1;
      // } else if (['PAS HEMAT NASI KEBULI', 'PAS STANDAR NASI KEBULI', 'PAS MEDIUM NASI KEBULI', 'PAS GOLD NASI KEBULI'].includes(d.order_name)) {
      //   d.is_pas_nasi_kebuli = 1;
      // }
    } else if (d.type === 'PAKET TUMPENGAN SPESIAL') {
      // paket tumpengan spesial menus
      const paketTumpenganSpesialMenus = _.cloneDeep(paketTumpenganSpesialMenuIds);
      for (let i = 0; i < paketTumpenganSpesialMenus.length; i++) {
        d['is_pts_' + paketTumpenganSpesialMenus[i]] = 1;
      }
    } else if (d.type === 'PAKET TUMPENG BOX' || d.type === 'PAKET ARABIAN') {
      // paket tumpeng box menus
      const paketTumpengBoxMenus = _.cloneDeep(paketTumpengBoxMenuIds);
      for (let i = 0; i < paketTumpengBoxMenus.length; i++) {
        d['is_ptb_' + paketTumpengBoxMenus[i]] = 1;
      }
    } else if (d.type === 'PAKET REGULER BENTO' || d.type === 'PAKET REGULER') {
      // paket reguler bento menus
      const paketRegulerBentoMenus = _.cloneDeep(paketRegulerBentoMenuIds);
      for (let i = 0; i < paketRegulerBentoMenus.length; i++) {
        d['is_prb_' + paketRegulerBentoMenus[i]] = 1;
      }
    } else if (d.type === 'PAKET PROMO REGULER') {
      // paket reguler menus
      const paketRegulerMenus = _.cloneDeep(paketRegulerMenuIds);
      for (let i = 0; i < paketRegulerMenus.length; i++) {
        d['is_reg_' + paketRegulerMenus[i]] = 1;
      }
    } else if (d.type === 'PAKET PROMO ARABIAN') {
      // paket reguler menus
      const paketPromoArabianMenus = _.cloneDeep(paketPromoArabianMenuIds);
      for (let i = 0; i < paketPromoArabianMenus.length; i++) {
        d['is_ppa_' + paketPromoArabianMenus[i]] = 1;
      }
    } else if (d.type === 'PAKET AQIQAH EKONOMIS') {
      // paket aqiqah ekonomis menus
      const paketAqiqahEkonomisMenus = _.cloneDeep(paketAqiqahEkonomisMenuIds);
      for (let i = 0; i < paketAqiqahEkonomisMenus.length; i++) {
        d['is_pae_' + paketAqiqahEkonomisMenus[i]] = 1;
      }
    } else if (d.type === 'PAKET BOX ISTIMEWA') {
      // paket box istimewa menus
      const paketBoxIstimewaMenus = _.cloneDeep(paketBoxIstimewaMenuIds);
      for (let i = 0; i < paketBoxIstimewaMenus.length; i++) {
        let isPbi = 0;
        // default menus
        if (['sambal_dadak'].includes(paketBoxIstimewaMenus[i])) {
          isPbi = 1;
        }
        d['is_pbi_' + paketBoxIstimewaMenus[i]] = isPbi;
      }

      const paketBoxIstimewaPbiMenus = _.cloneDeep(paketBoxIstimewaMenuPackageTypes);
      const paketBoxIstimewaPbiMenu = _.find(paketBoxIstimewaPbiMenus, (o) => {
        return o.value === d.order_name;
      });
      if (paketBoxIstimewaPbiMenu && paketBoxIstimewaPbiMenu.menus &&
        paketBoxIstimewaPbiMenu.menus.length > 0) {
        for (let i = 0; i < paketBoxIstimewaPbiMenu.menus.length; i++) {
          d['is_pbi_' + paketBoxIstimewaPbiMenu.menus[i]] = 1;
        }
      }
    } else if (d.type === 'PAKET ABG') {
      // paket box abg menus
      const paketBoxAbgMenus = _.cloneDeep(paketBoxAbgMenuIds);
      for (let i = 0; i < paketBoxAbgMenus.length; i++) {
        d['is_abg_' + paketBoxAbgMenus[i]] = 0;
      }

      const paketBoxAbgAbgMenus = _.cloneDeep(paketBoxAbgMenuPackageTypes);
      const paketBoxAbgAbgMenu = _.find(paketBoxAbgAbgMenus, (o) => {
        return o.value === d.order_name;
      });
      if (paketBoxAbgAbgMenu && paketBoxAbgAbgMenu.menus &&
        paketBoxAbgAbgMenu.menus.length > 0) {
        for (let i = 0; i < paketBoxAbgAbgMenu.menus.length; i++) {
          d['is_abg_' + paketBoxAbgAbgMenu.menus[i]] = 1;
        }
      }
    } else if (d.type === 'NASI NAMPAN') {
      // nasi nampan menus
      const nasiNampanMenus = _.cloneDeep(nasiNampanMenuIds);
      for (let i = 0; i < nasiNampanMenus.length; i++) {
        d['is_nn_' + nasiNampanMenus[i]] = 0;
      }

      const nasiNampanNnMenus = _.cloneDeep(nasiNampanMenuPackageTypes);
      const nasiNampanNnMenu = _.find(nasiNampanNnMenus, (o) => {
        return o.value === d.order_name;
      });
      if (nasiNampanNnMenu && nasiNampanNnMenu.menus &&
        nasiNampanNnMenu.menus.length > 0) {
        for (let i = 0; i < nasiNampanNnMenu.menus.length; i++) {
          d['is_nn_' + nasiNampanNnMenu.menus[i]] = 1;
        }
      }
    } else if (d.type === 'PAKET PRASMANAN') {
      // paket prasmanan menus
      const paketBoxPrasmananMenus = _.cloneDeep(paketPrasmananMenuIds);
      for (let i = 0; i < paketBoxPrasmananMenus.length; i++) {
        d['is_pr_' + paketBoxPrasmananMenus[i]] = 0;
      }

      const paketBoxPrasmananPrMenus = _.cloneDeep(paketPrasmananMenuPackageTypes);
      const paketBoxPrasmananPrMenu = _.find(paketBoxPrasmananPrMenus, (o) => {
        return o.value === d.order_name;
      });
      if (paketBoxPrasmananPrMenu && paketBoxPrasmananPrMenu.menus &&
        paketBoxPrasmananPrMenu.menus.length > 0) {
        for (let i = 0; i < paketBoxPrasmananPrMenu.menus.length; i++) {
          d['is_pr_' + paketBoxPrasmananPrMenu.menus[i]] = 1;
        }
      }
    } else if (d.type === 'SATUAN') {
      if (d.order_name === 'PAKET BOX SATUAN') {
        const SatuanMenus = _.cloneDeep(paketSatuanMenuIds);
        for (let i = 0; i < SatuanMenus.length; i++) {
          d['is_st_' + SatuanMenus[i]] = 1;
        }
      } else {
        const SatuanMenus = _.cloneDeep(paketSatuanMenuIds);
        for (let i = 0; i < SatuanMenus.length; i++) {
          d['is_st_' + SatuanMenus[i]] = 0;
        }
      }
    }
  }
};

const totalOrderDetail = () => {
  let totalQuantityBox = 0;
  let totalQuantityActualBox = 0;
  let totalQuantityBungkus = 0;
  let totalQuantityPorsi = 0;
  let totalQuantityPcs = 0;
  let totalQuantityEkor = 0;
  let grandTotalQuantityActualEkor = 0;
  let totalPrice = 0;
  const units = _.cloneDeep(allUnits);

  $.each(cur_frm.doc['order_detail'], (index, d) => {
    for (let i = 0; i < units.length; i++) {
      if (d.total_unit_1 && d.total_unit_1 === units[i]) {
        if (units[i] === 'BOX') {
          totalQuantityBox += d.total_quantity_1;
          if (d.type === 'PAKET SUPER HEMAT' || d.type === 'PAKET TUMPENGAN SPESIAL' || d.type === 'SATUAN' ||
            d.type === 'PAKET ABG' || d.type === 'NASI NAMPAN' || d.type === 'PAKET PRASMANAN' || d.type === 'PAKET SUPER EKONOMIS' ||
            d.type === 'PAKET BOX ISTIMEWA' || d.type === 'MAKAN GRATIS' || d.type === 'PAKET ARABIAN STYLE') {
            totalQuantityActualBox += d.total_quantity_1;
          }
        } else if (units[i] === 'BUNGKUS') {
          totalQuantityBungkus += d.total_quantity_1;
        } else if (units[i] === 'PORSI') {
          totalQuantityPorsi += d.total_quantity_1;
        } else if (units[i] === 'EKOR') {
          totalQuantityEkor += d.total_quantity_1;
        } else if (units[i] === 'PCS') {
          if (d.type === 'SATUAN' && d.order_name === 'PAKET BOX SATUAN') {
            totalQuantityBox += d.total_quantity_1;
          } else {
            totalQuantityPcs += d.total_quantity_1;
          }
        }
      } else if (d.total_unit_2 && d.total_unit_2 === units[i]) {
        if (units[i] === 'BOX') {
          totalQuantityBox += d.total_quantity_2;
        } else if (units[i] === 'BUNGKUS') {
          totalQuantityBungkus += d.total_quantity_2;
        } else if (units[i] === 'PORSI') {
          totalQuantityPorsi += d.total_quantity_2;
        } else if (units[i] === 'EKOR') {
          totalQuantityEkor += d.total_quantity_2;
        }
      }
    }
    totalPrice += d.grand_total_price;
    if (d.is_package && d.quantity) {
      grandTotalQuantityActualEkor += d.quantity;
    }
  });

  const isHideAqiqahPackageMenu = hideAqiqahPackageMenu();
  if (!isHideAqiqahPackageMenu) {
    const totalQuantityAqiqahPackageMenuBox = _.sumBy(cur_frm.doc['aqiqah_package_menu'], 'quantity') || 0;
    totalQuantityActualBox += totalQuantityAqiqahPackageMenuBox;

    cur_frm.set_value('total_quantity_aqiqah_package_menu_box', totalQuantityAqiqahPackageMenuBox);
    cur_frm.refresh_field('total_quantity_aqiqah_package_menu_box');
  }

  cur_frm.set_value('total_quantity_order_box', totalQuantityBox);
  cur_frm.set_value('total_quantity_actual_box', totalQuantityActualBox);
  cur_frm.set_value('total_quantity_order_bungkus', totalQuantityBungkus);
  cur_frm.set_value('total_quantity_order_porsi', totalQuantityPorsi);
  cur_frm.set_value('total_quantity_order_pcs', totalQuantityPcs);
  cur_frm.set_value('total_quantity_actual_pcs', totalQuantityPcs);
  cur_frm.set_value('total_quantity_order_ekor', totalQuantityEkor);
  cur_frm.set_value('total_quantity_actual_ekor', totalQuantityEkor);
  cur_frm.set_value('grand_total_quantity_actual_ekor', grandTotalQuantityActualEkor);
  cur_frm.set_value('total_price', totalPrice);
  cur_frm.refresh_field('total_quantity_order_box');
  cur_frm.refresh_field('total_quantity_actual_box');
  cur_frm.refresh_field('total_quantity_order_bungkus');
  cur_frm.refresh_field('total_quantity_order_porsi');
  cur_frm.refresh_field('total_quantity_order_pcs');
  cur_frm.refresh_field('total_quantity_actual_pcs');
  cur_frm.refresh_field('total_quantity_order_ekor');
  cur_frm.refresh_field('total_quantity_actual_ekor');
  cur_frm.refresh_field('grand_total_quantity_actual_ekor');
  cur_frm.refresh_field('total_price');

  if (cur_frm.doc['items'] && cur_frm.doc['items'].length > 0) {
    cur_frm.doc['items'][0]['rate'] = totalPrice || 0;
    cur_frm.doc['items'][0]['price_list_rate'] = cur_frm.doc['items'][0]['rate'];
    cur_frm.doc['items'][0]['amount'] = cur_frm.doc['items'][0]['rate'] * cur_frm.doc['items'][0]['qty'];
    if (cur_frm.doc.__islocal || cur_frm.doc.__unsaved) {
      cur_frm.cscript.recalculate();
    }
    cur_frm.refresh_field('items');
  }

  // set discount
  let totalDiscount = cur_frm.doc['total_discount'] || 0;
  if (cur_frm.doc.__islocal) {
    $.each(cur_frm.doc['order_detail'], (index, d) => {
      if (d.type) {
        if (d.type === 'PAKET AQIQAH') {
          if (d.order_name && d.quantity && d.unit &&
            d.is_package && d.gender_type) {
            const orderNames = d.order_name.split('-');
            if (orderNames.length === 2) {
              if (aqiqahPackageMenuNames.includes(orderNames[0].trim())) {
                totalDiscount += d.quantity * discountBoxPackage;
              }
            }
          }
        } else if (d.type === 'NON BOX') {
          if (d.order_name && d.quantity && d.unit &&
            d.is_package && d.menu_type) {
            totalDiscount += d.quantity * discountNonBoxPackage;
          }
        }
      }
    });
  }

  const totalShipping = cur_frm.doc['total_shipping_price'] || 0;
  const totalEquitment = cur_frm.doc["total_equipment_rental_services"] || 0;
  const totalPayment = (totalPrice + totalShipping + totalEquitment) - totalDiscount;
  cur_frm.set_value('total_discount', totalDiscount);
  cur_frm.set_value('total_payment', totalPayment);
  cur_frm.refresh_field('total_discount');
  cur_frm.refresh_field('total_payment');

  frappe.after_ajax(() => {
    cur_frm.set_value('discount_amount', totalDiscount);
    cur_frm.refresh_field('discount_amount');

    if (cur_frm.doc.__islocal || cur_frm.doc.__unsaved) {
      frappe.after_ajax(() => {
        cur_frm.set_value('grand_total', totalPayment);
        cur_frm.refresh_field('grand_total');
        cur_frm.set_value('rounded_total', totalPayment);
        cur_frm.refresh_field('rounded_total');

        frappe.after_ajax(() => {
          setPaymentTerms();
        });
      });
    } else {
      frappe.after_ajax(() => {
        setPaymentTerms();
      });
    }
  });
};

const hideAqiqahPackageMenu = () => {
  let isHideAqiqahPackageMenu = 1;
  const orderDetail = _.find(cur_frm.doc['order_detail'], (o) => {
    return (o.type && o.type === 'PAKET AQIQAH' || o.type === 'PAKET TUMPENG BOX' || o.type === 'PAKET ARABIAN' || o.type === 'PAKET REGULER BENTO' || o.type === 'PAKET REGULER' ||
      o.type === 'PAKET PROMO REGULER' || o.type === 'PAKET PROMO ARABIAN' || o.type === 'PAKET AQIQAH EKONOMIS' || o.type === 'SATUAN' || o.type === 'PAKET PREMIUM' || o.type === 'PAKET HEMAT SPESIAL' && o.order_name && o.quantity && o.unit &&
      ((o.is_package && o.gender_type) || !o.is_package));
  });
  if (orderDetail) {
    isHideAqiqahPackageMenu = 0;
  }
  return isHideAqiqahPackageMenu;
};

const showDetailMenu = () => {
  const isHideAqiqahPackageMenu = hideAqiqahPackageMenu();
  if (isHideAqiqahPackageMenu) {
    cur_frm.clear_table('aqiqah_package_menu');
    cur_frm.refresh_field('aqiqah_package_menu');
  }
  cur_frm.set_df_property('menu_paket_aqiqah_section', 'hidden', isHideAqiqahPackageMenu);
};

const setDefaultTime = () => {
  const today = frappe.datetime.now_datetime();
  let defaultArrived = moment(today);
  let defaultEvent = moment(today);
  if (cur_frm.doc['arrived_date_time']) {
    defaultArrived = moment(cur_frm.doc['arrived_date_time']);
  }
  if (cur_frm.doc['event_date_time']) {
    defaultEvent = moment(cur_frm.doc['event_date_time']);
  }
  const startDateArrived = moment(defaultArrived).format('DD-MM-YYYY');
  const startDateEvent = moment(defaultEvent).format('DD-MM-YYYY');
  const startTimeArrived = moment(startDateArrived + ' 00:00:00', 'DD-MM-YYYY HH:mm:ss');
  const startTimeEvent = moment(startDateEvent + ' 00:00:00', 'DD-MM-YYYY HH:mm:ss');
  cur_frm.set_value('arrived_date_time', startTimeArrived);
  cur_frm.set_value('event_date_time', startTimeEvent);
};

const recalculateNonBoxMenuData = () => {
  cur_frm.clear_table('non_box_menu');
  cur_frm.refresh_field('non_box_menu');

  const orderDetailNonBoxMenuOrders = [];
  $.each(cur_frm.doc['order_detail'], (index, d) => {
    if (d.type && d.type === 'NON BOX' && d.order_name && parseInt(d.quantity, 10) && d.unit) {
      if ((d.is_package && d.gender_type) || !d.is_package) {
        orderDetailNonBoxMenuOrders.push(d);
      }
    }
  });

  if (orderDetailNonBoxMenuOrders.length > 0) {
    const nonBoxBungkusMenus = _.cloneDeep(nonBoxMenuBungkusTypes);
    const nonBoxKeringMenus = _.cloneDeep(nonBoxMenuKeringTypes);
    const nonBoxPorsiMenus = _.cloneDeep(nonBoxMenuPorsiTypes);
    const nonBoxPorsiKuahMenus = _.cloneDeep(nonBoxMenuPorsiKuahTypes);

    for (let i = 0; i < orderDetailNonBoxMenuOrders.length; i++) {
      const nonBoxMenuOrder = orderDetailNonBoxMenuOrders[i];

      if (nonBoxMenuOrder.is_package) {
        if (nonBoxMenuOrder.unit === 'PAKET') {
          if (nonBoxMenuOrder.menu_type === '1 MENU' || nonBoxMenuOrder.menu_type === '2 MENU' ||
            nonBoxMenuOrder.menu_type === '2 MENU KUAH' || nonBoxMenuOrder.menu_type === 'MENU KERING') {
            for (let j = 0; j < nonBoxBungkusMenus.length; j++) {
              if (nonBoxMenuOrder['is_' + nonBoxBungkusMenus[j].value]) {
                const newNonBox = cur_frm.add_child('non_box_menu');
                newNonBox.order_type = nonBoxMenuOrder['unit_' + nonBoxBungkusMenus[j].value];
                newNonBox.meat_cook_type = nonBoxBungkusMenus[j].label;
                newNonBox.quantity = parseInt(nonBoxMenuOrder['quantity_' + nonBoxBungkusMenus[j].value], 10);
                newNonBox.unit = nonBoxMenuOrder['unit_' + nonBoxBungkusMenus[j].value];
              }
            }
            if (nonBoxMenuOrder.menu_type === 'MENU KERING') {
              for (let j = 0; j < nonBoxKeringMenus.length; j++) {
                if (nonBoxMenuOrder['is_' + nonBoxKeringMenus[j].value]) {
                  const newNonBox = cur_frm.add_child('non_box_menu');
                  newNonBox.order_type = nonBoxMenuOrder['unit_' + nonBoxKeringMenus[j].value];
                  newNonBox.meat_cook_type = nonBoxKeringMenus[j].label;
                  newNonBox.quantity = parseInt(nonBoxMenuOrder['quantity_' + nonBoxKeringMenus[j].value], 10);
                  newNonBox.unit = nonBoxMenuOrder['unit_' + nonBoxKeringMenus[j].value];
                }
              }
            }
            if (nonBoxMenuOrder.menu_type === '2 MENU') {
              for (let j = 0; j < nonBoxPorsiMenus.length; j++) {
                if (nonBoxMenuOrder['is_' + nonBoxPorsiMenus[j].value]) {
                  const newNonBox = cur_frm.add_child('non_box_menu');
                  newNonBox.order_type = nonBoxMenuOrder['unit_' + nonBoxPorsiMenus[j].value];
                  newNonBox.meat_cook_type = nonBoxPorsiMenus[j].label;
                  newNonBox.quantity = parseInt(nonBoxMenuOrder['quantity_' + nonBoxPorsiMenus[j].value], 10);
                  newNonBox.unit = nonBoxMenuOrder['unit_' + nonBoxPorsiMenus[j].value];
                }
              }
            } else if (nonBoxMenuOrder.menu_type === '2 MENU KUAH') {
              for (let j = 0; j < nonBoxPorsiKuahMenus.length; j++) {
                if (nonBoxMenuOrder['is_' + nonBoxPorsiKuahMenus[j].value]) {
                  const newNonBox = cur_frm.add_child('non_box_menu');
                  newNonBox.order_type = nonBoxMenuOrder['unit_' + nonBoxPorsiKuahMenus[j].value];
                  newNonBox.meat_cook_type = nonBoxPorsiKuahMenus[j].label;
                  newNonBox.quantity = parseInt(nonBoxMenuOrder['quantity_' + nonBoxPorsiKuahMenus[j].value], 10);
                  newNonBox.unit = nonBoxMenuOrder['unit_' + nonBoxPorsiKuahMenus[j].value];
                }
              }
            }
          }
        }
      } else {
        // satuan bungkus - satuan porsi
        if (nonBoxMenuOrder.unit === 'BUNGKUS') {
          for (let j = 0; j < nonBoxBungkusMenus.length; j++) {
            if (nonBoxMenuOrder['is_' + nonBoxBungkusMenus[j].value]) {
              const newNonBox = cur_frm.add_child('non_box_menu');
              newNonBox.order_type = nonBoxMenuOrder['unit_' + nonBoxBungkusMenus[j].value];
              newNonBox.meat_cook_type = nonBoxBungkusMenus[j].label;
              newNonBox.quantity = parseInt(nonBoxMenuOrder['quantity_' + nonBoxBungkusMenus[j].value], 10);
              newNonBox.unit = nonBoxMenuOrder['unit_' + nonBoxBungkusMenus[j].value];
            }
          }
        } else if (nonBoxMenuOrder.unit === 'PORSI') {
          for (let j = 0; j < nonBoxPorsiMenus.length; j++) {
            if (nonBoxMenuOrder['is_' + nonBoxPorsiMenus[j].value]) {
              const newNonBox = cur_frm.add_child('non_box_menu');
              newNonBox.order_type = nonBoxMenuOrder['unit_' + nonBoxPorsiMenus[j].value];
              newNonBox.meat_cook_type = nonBoxPorsiMenus[j].label;
              newNonBox.quantity = parseInt(nonBoxMenuOrder['quantity_' + nonBoxPorsiMenus[j].value], 10);
              newNonBox.unit = nonBoxMenuOrder['unit_' + nonBoxPorsiMenus[j].value];
            }
          }
        }
      }
    }
  }

  cur_frm.refresh_field('non_box_menu');
  totalNonBoxMenu();
  totalOrderDetail();
};

const setNonBoxMenuData = (frm, cdt, cdn) => {
  const d = locals[cdt][cdn];
  if (d && d.type && d.order_name) {
    if (d.type === 'NON BOX') {
      recalculateNonBoxMenuData();
    }
  }
};

const setGlobalData = (frm, cdt, cdn) => {
  const d = locals[cdt][cdn];
  if (d && !d.is_global) {
    d.is_global_qty = 0;
  }
};

const setRiceType = (frm, cdt, cdn) => {
  const d = locals[cdt][cdn];
  const currentRow = cur_frm.get_field('order_detail').grid.grid_rows[d.idx - 1];
  // if(d.type === 'PAKET ARABIAN STYLE'){
    
  // }
  if (d && d.rice_type === 'BRIYANI' && d.type === 'PAKET ARABIAN STYLE') {
    d.is_pas_nasi_briyani = 1;
    d.is_pas_nasi_kebuli = 0;
    currentRow.refresh_field('is_pas_nasi_briyani');
    currentRow.refresh_field('is_pas_nasi_kebuli');
  } else if (d && d.rice_type === 'KEBULI' && d.type === 'PAKET ARABIAN STYLE') {
    d.is_pas_nasi_kebuli = 1;
    d.is_pas_nasi_briyani = 0;
    currentRow.refresh_field('is_pas_nasi_briyani');
    currentRow.refresh_field('is_pas_nasi_kebuli');
  }
};

const setNonBoxMenuDataQuantity = (frm, cdt, cdn) => {
  const d = locals[cdt][cdn];
  const currentRow = cur_frm.get_field('order_detail').grid.grid_rows[d.idx - 1];

  if (currentRow) {
    if (d && d.type && d.order_name) {
      if (d.type === 'NON BOX') {
        const quantityBungkusOptions = [{
          value: 0,
          label: 0
        }];
        const quantityPorsiOptions = [{
          value: 0,
          label: 0
        }];
        const quantityPorsiKuahOptions = [{
          value: 0,
          label: 0
        }];
        const quantityKeringOptions = [{
          value: 0,
          label: 0
        }];

        if (d.is_package && d.menu_type) {
          const typeName = d.order_name.split('-')[1].trim();
          const itemNameData = d.type + ' - ' + d.order_name.split('-')[0].trim() + ' ' + typeName + ' - ' + d.gender_type + ' - ' + d.menu_type;

          const types = _.cloneDeep(nonBoxMenuPackageTypes);
          for (let i = 0; i < types.length; i++) {
            if (types[i].value === typeName) {
              for (let j = 0; j < types[i].menus.length; j++) {
                if (types[i].menus[j].value === d.menu_type) {
                  for (let k = 0; k < types[i].menus[j].quantity_units.length; k++) {
                    if (types[i].menus[j].quantity_units[k].value === 1) {
                      // set quantity
                      for (let l = 1; l <= d.quantity; l++) {
                        quantityBungkusOptions.push({
                          value: types[i].menus[j].quantity_units[k].quantity * l,
                          label: types[i].menus[j].quantity_units[k].quantity * l
                        });
                      }
                    } else if (types[i].menus[j].quantity_units[k].value === 2) {
                      // set quantity
                      for (let l = 1; l <= d.quantity; l++) {
                        quantityPorsiOptions.push({
                          value: types[i].menus[j].quantity_units[k].quantity * l,
                          label: types[i].menus[j].quantity_units[k].quantity * l
                        });
                      }
                    } else if (types[i].menus[j].quantity_units[k].value === 3) {
                      totalQuantity2 = types[i].menus[j].quantity_units[k].quantity * d.quantity;
                      totalUnit2 = types[i].menus[j].quantity_units[k].unit;
                      // set quantity
                      for (let l = 1; l <= d.quantity; l++) {
                        quantityPorsiKuahOptions.push({
                          value: types[i].menus[j].quantity_units[k].quantity * l,
                          label: types[i].menus[j].quantity_units[k].quantity * l
                        });
                      }
                    } else if (types[i].menus[j].quantity_units[k].value === 4) {
                      // set quantity
                      for (let l = 1; l <= d.quantity; l++) {
                        quantityKeringOptions.push({
                          value: types[i].menus[j].quantity_units[k].quantity * l,
                          label: types[i].menus[j].quantity_units[k].quantity * l
                        });
                      }
                    }
                  }
                  break;
                }
              }
            }
          }
        } else if (!d.is_package) {
          // set quantity
          if (d.unit === 'BUNGKUS') {
            quantityBungkusOptions.push({
              value: d.quantity,
              label: d.quantity
            });
          } else if (d.unit === 'PORSI') {
            quantityPorsiOptions.push({
              value: d.quantity,
              label: d.quantity
            });
          }
        }

        currentRow.grid_form.fields_dict['quantity_gulai'].df.options = quantityBungkusOptions;
        currentRow.grid_form.fields_dict['quantity_kari'].df.options = quantityBungkusOptions;
        currentRow.grid_form.fields_dict['quantity_semur'].df.options = quantityBungkusOptions;
        currentRow.grid_form.fields_dict['quantity_sop'].df.options = quantityBungkusOptions;
        currentRow.grid_form.fields_dict['quantity_tengkleng'].df.options = quantityBungkusOptions;
        currentRow.grid_form.fields_dict['quantity_sate'].df.options = quantityBungkusOptions;
        currentRow.grid_form.fields_dict['quantity_tongseng'].df.options = quantityBungkusOptions;
        currentRow.grid_form.fields_dict['quantity_bakar_bbq'].df.options = quantityPorsiOptions;
        currentRow.grid_form.fields_dict['quantity_guling'].df.options = quantityPorsiOptions;
        currentRow.grid_form.fields_dict['quantity_masak_bombay'].df.options = quantityPorsiOptions;
        currentRow.grid_form.fields_dict['quantity_panggang'].df.options = quantityPorsiOptions;
        currentRow.grid_form.fields_dict['quantity_teriyaki'].df.options = quantityPorsiOptions;
        currentRow.grid_form.fields_dict['quantity_kuah_gulai'].df.options = quantityPorsiKuahOptions;
        currentRow.grid_form.fields_dict['quantity_kuah_kari'].df.options = quantityPorsiKuahOptions;
        currentRow.grid_form.fields_dict['quantity_kuah_semur'].df.options = quantityPorsiKuahOptions;
        currentRow.grid_form.fields_dict['quantity_kuah_sop'].df.options = quantityPorsiKuahOptions;
        currentRow.grid_form.fields_dict['quantity_kuah_tengkleng'].df.options = quantityPorsiKuahOptions;
        currentRow.grid_form.fields_dict['quantity_kuah_tongseng'].df.options = quantityPorsiKuahOptions;
        currentRow.grid_form.fields_dict['quantity_kering_bakar_bbq'].df.options = quantityKeringOptions;
        currentRow.grid_form.fields_dict['quantity_kering_goreng'].df.options = quantityKeringOptions;
        currentRow.grid_form.fields_dict['quantity_kering_masak_bombay'].df.options = quantityKeringOptions;
        currentRow.grid_form.fields_dict['quantity_kering_panggang'].df.options = quantityKeringOptions;
        currentRow.grid_form.fields_dict['quantity_kering_teriyaki'].df.options = quantityKeringOptions;
        currentRow.grid_form.fields_dict['quantity_kering_sate'].df.options = quantityKeringOptions;

        currentRow.refresh_field('quantity_gulai');
        currentRow.refresh_field('quantity_kari');
        currentRow.refresh_field('quantity_semur');
        currentRow.refresh_field('quantity_sop');
        currentRow.refresh_field('quantity_tengkleng');
        currentRow.refresh_field('quantity_sate');
        currentRow.refresh_field('quantity_tongseng');
        currentRow.refresh_field('quantity_bakar_bbq');
        currentRow.refresh_field('quantity_guling');
        currentRow.refresh_field('quantity_masak_bombay');
        currentRow.refresh_field('quantity_panggang');
        currentRow.refresh_field('quantity_teriyaki');
        currentRow.refresh_field('quantity_kering_bakar_bbq');
        currentRow.refresh_field('quantity_kering_goreng');
        currentRow.refresh_field('quantity_kering_masak_bombay');
        currentRow.refresh_field('quantity_kering_panggang');
        currentRow.refresh_field('quantity_kering_teriyaki');
        currentRow.refresh_field('quantity_kering_sate');
      }
    }
  }
};

const setAqiqahPackageMenuOrderType = (frm, cdt, cdn) => {
  const d = locals[cdt][cdn];
  const currentRow = cur_frm.get_field('aqiqah_package_menu').grid.grid_rows[d.idx - 1];

  if (currentRow) {
    const orderDetailAqiqahPackageMenuOrderTypes = [];
    $.each(cur_frm.doc['order_detail'], (index, d) => {
      if (d.type && d.type === 'PAKET AQIQAH' || d.type === 'PAKET TUMPENG BOX' || d.type === 'PAKET ARABIAN' || d.type === 'PAKET REGULER BENTO' || d.type === 'PAKET REGULER' ||
        d.type === 'PAKET PROMO REGULER' || d.type === 'PAKET PROMO ARABIAN' || d.type === 'PAKET AQIQAH EKONOMIS' || d.type === 'SATUAN' || d.type === 'PAKET PREMIUM' || d.type === 'PAKET HEMAT SPESIAL' && d.order_name && d.quantity && d.unit &&
        ((d.is_package && d.gender_type) || !d.is_package)) {
        if (d.type !== 'SATUAN') {
          orderDetailAqiqahPackageMenuOrderTypes.push({
            value: d.order_name,
            label: d.order_name
          });
        } else if (d.order_name === 'PAKET BOX SATUAN') {
          orderDetailAqiqahPackageMenuOrderTypes.push({
            value: d.order_name,
            label: d.order_name
          });
        }
      }
    });

    const orderDetailAqiqahPackageMenuOrderTypeOptions = [];
    $.each(orderDetailAqiqahPackageMenuOrderTypes, (index, d) => {
      const orderType = _.find(orderDetailAqiqahPackageMenuOrderTypeOptions, (o) => {
        return d.value === o.value;
      });
      if (!orderType) {
        orderDetailAqiqahPackageMenuOrderTypeOptions.push(d);
      }
    });

    currentRow.grid_form.fields_dict['order_type'].df.options = orderDetailAqiqahPackageMenuOrderTypeOptions;

    currentRow.refresh_field('order_type');
  }
};

const setAqiqahPackageMenuItem = (frm, cdt, cdn, isClearAll = false) => {
  const d = locals[cdt][cdn];
  const currentRow = cur_frm.get_field('aqiqah_package_menu').grid.grid_rows[d.idx - 1];
  d.rice_type = '';
  let meat_cook_type_1 = [
    '',
    {
      value: 'BAKAR BBQ',
      name: 'BAKAR BBQ',
    },
    {
      value: 'GULAI',
      name: 'GULAI',
    },
    {
      value: 'GULING',
      name: 'GULING',
    },
    {
      value: 'KARI',
      name: 'KARI',
    },
    {
      value: 'BOMBAY',
      name: 'BOMBAY',
    },
    {
      value: 'PANGGANG',
      name: 'PANGGANG',
    },
    {
      value: 'SEMUR',
      name: 'SEMUR',
    },
    {
      value: 'SOP',
      name: 'SOP',
    },
    {
      value: 'TENGKLENG',
      name: 'TENGKLENG',
    },
    {
      value: 'SATE',
      name: 'SATE',
    },
    {
      value: 'SATE GORENG',
      name: 'SATE GORENG',
    },
    {
      value: 'TERIYAKI',
      name: 'TERIYAKI',
    },
    {
      value: 'TONGSENG',
      name: 'TONGSENG',
    },
    {
      value: 'DOMBA GORENG',
      name: 'DOMBA GORENG',
    },
  ];
  let meat_cook_type_2 = [
    '',
    {
      value: 'BAKAR BBQ',
      name: 'BAKAR BBQ',
    },
    {
      value: 'GULAI',
      name: 'GULAI',
    },
    {
      value: 'GULING',
      name: 'GULING',
    },
    {
      value: 'KARI',
      name: 'KARI',
    },
    {
      value: 'BOMBAY',
      name: 'BOMBAY',
    },
    {
      value: 'PANGGANG',
      name: 'PANGGANG',
    },
    {
      value: 'SEMUR',
      name: 'SEMUR',
    },
    {
      value: 'SOP',
      name: 'SOP',
    },
    {
      value: 'TENGKLENG',
      name: 'TENGKLENG',
    },
    {
      value: 'SATE',
      name: 'SATE',
    },
    {
      value: 'SATE GORENG',
      name: 'SATE GORENG',
    },
    {
      value: 'TERIYAKI',
      name: 'TERIYAKI',
    },
    {
      value: 'TONGSENG',
      name: 'TONGSENG',
    },
    {
      value: 'DOMBA GORENG',
      name: 'DOMBA GORENG',
    }
  ];
  currentRow.grid_form.fields_dict['meat_cook_type_1'].df.options = meat_cook_type_1;
  currentRow.grid_form.fields_dict['meat_cook_type_2'].df.options = meat_cook_type_2;
  currentRow.grid_form.fields_dict['rice_type'].df.read_only = 0;
  currentRow.refresh_field('meat_cook_type_1');
  currentRow.refresh_field('meat_cook_type_2');
  currentRow.refresh_field('rice_type');

  const addAddOnOptions = [];
  if (d && d.order_type) {
    let addOns = [];

    if (isClearAll) {
      d.type = '-';
      d.add_on = '';
    }

    const orderTypes = d.order_type.split('-');
    if (orderTypes.length === 2) {
      const orderType = orderTypes[1].trim();
      if (orderTypes[0].trim() === 'PA') {
        d.type = 'PA ' + orderType;
        // d.is_use_mix_vegetables = 0;
        // d.is_use_crackers = 0;
        // d.is_use_fruits = 0;
        // d.is_use_pickles = 0;
        // d.is_use_spoon = 0;
        // d.is_use_banana = 0;
        // d.is_use_tempe_orek = 0;
        // d.is_use_pudding = 0;
      } else if (orderTypes[0].trim() === 'PR') {
        d.type = 'PR ' + orderType;
        // d.is_use_mix_vegetables = 0;
        // d.is_use_crackers = 0;
        // d.is_use_fruits = 0;
        // d.is_use_pickles = 0;
        // d.is_use_spoon = 0;
        // d.is_use_banana = 0;
        // d.is_use_tempe_orek = 0;
        // d.is_use_pudding = 0;
      } else if (orderTypes[0].trim() === 'PPR') {
        d.type = 'PPR ' + orderType;
        // d.is_use_mix_vegetables = 0;
        // d.is_use_crackers = 0;
        // d.is_use_fruits = 0;
        // d.is_use_pickles = 0;
        // d.is_use_spoon = 0;
        // d.is_use_banana = 0;
        // d.is_use_tempe_orek = 0;
        // d.is_use_pudding = 0;
      } else if (orderTypes[0].trim() === 'PPA') {
        d.type = 'PPA ' + orderType;
        // d.is_use_mix_vegetables = 0;
        // d.is_use_crackers = 0;
        // d.is_use_fruits = 0;
        // d.is_use_pickles = 0;
        // d.is_use_spoon = 0;
        // d.is_use_banana = 0;
        // d.is_use_tempe_orek = 0;
        // d.is_use_pudding = 0;
      }  else if (orderTypes[0].trim() === 'PAE') {
        d.type = 'PAE ' + orderType;
        d.is_use_mix_vegetables = 0;
        d.is_use_crackers = 0;
        d.is_use_fruits = 0;
        // d.is_use_pickles = 0;
        d.is_use_spoon = 0;
        // d.is_use_banana = 0;
        // d.is_use_tempe_orek = 0;
        // d.is_use_pudding = 0;
      } else if (d.order_type.startsWith('PAKET PREMIUM')) {  
        d.type = d.order_type;
        if(d.order_type.startsWith('PAKET PREMIUM ARABIAN')){
          let rice_types = [
            {
              value: 'MANDHI',
              label: 'MANDHI',
            },
            {
              value: 'BRIYANI',
              label: 'BRIYANI',
            },
            {
              value: 'KEBULI',
              label: 'KEBULI',
            },
          ];
          currentRow.grid_form.fields_dict['rice_type'].df.options = rice_types;
        }else{
          d.rice_type = 'PUTIH';
        currentRow.grid_form.fields_dict['rice_type'].df.read_only = 1;
        }
        let meat_cook_type_1 = [
          '',
          {
            value: 'SATE GORENG',
            label: 'SATE GORENG',
          },
          {
            value: 'DOMBA TERIYAKI',
            label: 'DOMBA TERIYAKI',
          },
          {
            value: 'DOMBA BBQ',
            label: 'DOMBA BBQ',
          },
          {
            value: 'DOMBA PANGGANG',
            label: 'DOMBA PANGGANG',
          },
          {
            value: 'DOMBA BOMBAY',
            label: 'DOMBA BOMBAY',
          },
        ];
        let meat_cook_type_2 = [
          '',
          {
            value: 'GULAI',
            label: 'GULAI',
          },
          {
            value: 'TONGSENG',
            label: 'TONGSENG',
          },
          {
            value: 'TENGKLENG',
            label: 'TENGKLENG',
          },
          {
            value: 'SOP',
            label: 'SOP',
          },
          {
            value: 'KARI',
            label: 'KARI',
          },
        ];
        d.is_use_mix_vegetables = 1;
        d.is_use_crackers = 1;
        d.is_use_ayam_bakar = 1;
        d.is_use_fruit_tea = 1;
        d.is_use_alat_makan_set = 1;
        d.is_use_fruits = 0;
        d.is_use_pickles = 0;
        d.is_use_spoon = 0;
        d.is_use_banana = 0;
        d.is_use_tempe_orek = 0;
        d.is_use_pudding = 0;
        currentRow.grid_form.fields_dict['meat_cook_type_1'].df.options = meat_cook_type_1;
        currentRow.grid_form.fields_dict['meat_cook_type_2'].df.options = meat_cook_type_2;
        currentRow.refresh_field('meat_cook_type_1');
        currentRow.refresh_field('meat_cook_type_2');
        currentRow.refresh_field('rice_type');
      }else if (d.order_type.startsWith('PAKET HEMAT SPESIAL')) {
        d.type = d.order_type;
        if(d.order_type.startsWith('PAKET HEMAT SPESIAL ARABIAN')){
          let rice_types = [
            {
              value: 'MANDHI',
              label: 'MANDHI',
            },
            {
              value: 'BRIYANI',
              label: 'BRIYANI',
            },
            {
              value: 'KEBULI',
              label: 'KEBULI',
            },
          ];
          currentRow.grid_form.fields_dict['rice_type'].df.options = rice_types;
        }else{
          d.rice_type = 'PUTIH';
        currentRow.grid_form.fields_dict['rice_type'].df.read_only = 1;
        }
        let meat_cook_type_1 = [
          '',
          {
            value: 'SATE GORENG',
            label: 'SATE GORENG',
          },
          {
            value: 'DOMBA TERIYAKI',
            label: 'DOMBA TERIYAKI',
          },
          {
            value: 'DOMBA BBQ',
            label: 'DOMBA BBQ',
          },
          {
            value: 'DOMBA PANGGANG',
            label: 'DOMBA PANGGANG',
          },
          {
            value: 'DOMBA BOMBAY',
            label: 'DOMBA BOMBAY',
          },
        ];
        let meat_cook_type_2 = [
          '',
          {
            value: 'GULAI',
            label: 'GULAI',
          },
          {
            value: 'TONGSENG',
            label: 'TONGSENG',
          },
          {
            value: 'TENGKLENG',
            label: 'TENGKLENG',
          },
          {
            value: 'SOP',
            label: 'SOP',
          },
          {
            value: 'KARI',
            label: 'KARI',
          },
        ];
        d.is_use_mix_vegetables = 1;
        d.is_use_sendok = 1;
        d.is_use_mie_goreng = 1;
        d.is_use_timun = 1;
        d.is_use_crackers = 1;
        d.is_use_pudding = 1;
        d.is_use_ayam_bakar = 0;
        d.is_use_fruit_tea = 0;
        d.is_use_alat_makan_set = 0;
        d.is_use_fruits = 0;
        d.is_use_pickles = 0;
        d.is_use_spoon = 0;
        d.is_use_banana = 0;
        d.is_use_tempe_orek = 0;
        currentRow.grid_form.fields_dict['meat_cook_type_1'].df.options = meat_cook_type_1;
        currentRow.grid_form.fields_dict['meat_cook_type_2'].df.options = meat_cook_type_2;
        currentRow.refresh_field('meat_cook_type_1');
        currentRow.refresh_field('meat_cook_type_2');
        currentRow.refresh_field('rice_type');
      }else if(d.order_type.startsWith('PAKET TUMPENG MINI')){
        d.type = 'PAKET ' + orderType;
        d.rice_type = 'KUNING';
        d.is_use_tempe_kering = 1;
        d.is_use_mie_goreng = 1;
        d.is_use_crackers = 1;
        d.is_use_ayam_bakar = 1;
        d.is_use_alat_makan_set = 1;
        d.is_use_telur_dadar_iris = 1;
        d.is_use_lalapan_timun = 1;
        d.is_use_mix_vegetables = 0;
        d.is_use_sendok = 0;
        d.is_use_timun = 0;
        d.is_use_pudding = 0;
        d.is_use_fruit_tea = 0;
        d.is_use_fruits = 0;
        d.is_use_pickles = 0;
        d.is_use_spoon = 0;
        d.is_use_banana = 0;
        d.is_use_tempe_orek = 0;
        currentRow.grid_form.fields_dict['rice_type'].df.read_only = 1;
        currentRow.refresh_field('rice_type');
      } else {
        d.type = 'PAKET ' + orderType;
        // d.is_use_mix_vegetables = 1;
        // d.is_use_crackers = 1;
        // d.is_use_fruits = 1;
        // d.is_use_pickles = 1;
        // d.is_use_spoon = 1;
        // d.is_use_banana = 0;
        // d.is_use_tempe_orek = 1;
        // d.is_use_pudding = 0;
      }
      if (d.type === 'PAKET B') {
        addOns = ['BALADO TELUR', 'KENTANG BALADO'];
      } else if (d.type === 'PAKET C') {
        addOns = ['AYAM GORENG', 'AYAM BAKAR', 'AYAM PANGGANG'];
      }

      for (let i = 0; i < addOns.length; i++) {
        addAddOnOptions.push({
          value: addOns[i],
          label: addOns[i]
        });
      }
    } else if (d.order_type === 'PAKET BOX SATUAN') {
      d.type = d.order_type;
      // d.is_use_mix_vegetables = 0;
      // d.is_use_crackers = 1;
      // d.is_use_fruits = 0;
      // d.is_use_pickles = 0;
      // d.is_use_spoon = 0;
      // d.is_use_banana = 0;
      // d.is_use_tempe_orek = 0;
      // d.is_use_pudding = 0;
    }
  }
  if (currentRow) {
    currentRow.grid_form.fields_dict['add_on'].df.options = addAddOnOptions;

    currentRow.refresh_field('add_on');
    currentRow.refresh_field('is_use_mix_vegetables');
    currentRow.refresh_field('is_use_crackers');
    currentRow.refresh_field('is_use_fruits');
    currentRow.refresh_field('is_use_pickles');
    currentRow.refresh_field('is_use_spoon');
    currentRow.refresh_field('is_use_banana');
    currentRow.refresh_field('is_use_tempe_orek');
    currentRow.refresh_field('is_use_pudding');
    currentRow.refresh_field('is_use_ayam_bakar');
    currentRow.refresh_field('is_use_alat_makan_set');
    currentRow.refresh_field('is_use_mie_goreng');
    currentRow.refresh_field('is_use_fruit_tea');
    currentRow.refresh_field('is_use_timun');
    currentRow.refresh_field('is_use_sendok');
    currentRow.refresh_field('is_use_tempe_kering');
    currentRow.refresh_field('is_use_telur_dadar_iris');
    currentRow.refresh_field('is_use_lalapan_timun');
  }
};

const totalAqiqahPackageMenu = () => {
  const totalQuantityAqiqahPackageMenuBox = _.sumBy(cur_frm.doc['aqiqah_package_menu'], 'quantity') || 0;
  cur_frm.set_value('total_quantity_aqiqah_package_menu_box', totalQuantityAqiqahPackageMenuBox);
  cur_frm.set_value('total_quantity_actual_box', totalQuantityAqiqahPackageMenuBox);
  cur_frm.refresh_field('total_quantity_aqiqah_package_menu_box');
  cur_frm.refresh_field('total_quantity_actual_box');
};

const setNonBoxMenuItem = (frm, cdt, cdn) => {
  const d = locals[cdt][cdn];
  const currentRow = cur_frm.get_field('non_box_menu').grid.grid_rows[d.idx - 1];

  const addMeatCookTypeOptions = [];

  if (d && d.order_type) {
    let meatCookTypes = [];

    d.meat_cook_type = '';
    d.unit = '';

    if (d.order_type === 'BUNGKUS') {
      meatCookTypes = ['GULAI', 'KARI', 'SEMUR', 'SOP', 'TENGKLENG', 'TONGSENG'];
      d.unit = 'BUNGKUS';
    } else if (d.order_type === 'PORSI') {
      meatCookTypes = [
        'BAKAR BBQ', 'GULING', 'MASAK BOMBAY', 'PANGGANG', 'TERIYAKI', 'SATE',
        'KUAH GULAI', 'KUAH KARI', ' KUAH SEMUR', 'KUAH SOP', 'KUAH TENGKLENG', 'KUAH SATE', 'KUAH TONGSENG'
      ];
      d.unit = 'PORSI';
    }
    for (let i = 0; i < meatCookTypes.length; i++) {
      addMeatCookTypeOptions.push({
        value: meatCookTypes[i],
        label: meatCookTypes[i]
      });
    }
  }
  if (currentRow) {
    currentRow.grid_form.fields_dict['meat_cook_type'].df.options = addMeatCookTypeOptions;

    currentRow.refresh_field('meat_cook_type');
    currentRow.refresh_field('unit');
  }
};

const totalNonBoxMenu = () => {
  let totalQuantityNonBoxMenuBungkus = 0;
  let totalQuantityNonBoxMenuPorsi = 0;
  $.each(cur_frm.doc['non_box_menu'], (index, d) => {
    if (d.quantity && d.unit) {
      if (d.unit === 'BUNGKUS') {
        totalQuantityNonBoxMenuBungkus += parseInt(d.quantity, 10);
      } else if (d.unit === 'PORSI') {
        totalQuantityNonBoxMenuPorsi += parseInt(d.quantity, 10);
      }
    }
  });
  cur_frm.set_value('total_quantity_non_box_menu_bungkus', totalQuantityNonBoxMenuBungkus);
  cur_frm.set_value('total_quantity_non_box_menu_porsi', totalQuantityNonBoxMenuPorsi);
  cur_frm.set_value('total_quantity_actual_bungkus', totalQuantityNonBoxMenuBungkus);
  cur_frm.set_value('total_quantity_actual_porsi', totalQuantityNonBoxMenuPorsi);
  cur_frm.refresh_field('total_quantity_non_box_menu_bungkus');
  cur_frm.refresh_field('total_quantity_non_box_menu_porsi');
  cur_frm.refresh_field('total_quantity_actual_bungkus');
  cur_frm.refresh_field('total_quantity_actual_porsi');
};

const setFreeItems = () => {
  let isFreeTumbler = 0;
  let isFreeBingkai = 0;
  const orderDetailData = cur_frm.doc['order_detail'] || [];
  for (let i = 0; i < orderDetailData.length; i++) {
    const orderDetail = orderDetailData[i];
    if (orderDetail.type && orderDetail.type === 'PAKET AQIQAH' || orderDetail.type === 'PAKET TUMPENG BOX' || orderDetail.type === 'PAKET ARABIAN' || orderDetail.type === 'PAKET REGULER BENTO' ||
      orderDetail.type === 'PAKET REGULER' || orderDetail.type === 'PAKET PROMO REGULER' || orderDetail.type === 'PAKET PROMO ARABIAN' || orderDetail.type === 'PAKET AQIQAH EKONOMIS' && 
      orderDetail.order_name && orderDetail.quantity && orderDetail.unit && ((orderDetail.is_package && orderDetail.gender_type) || !orderDetail.is_package)) {
      isFreeTumbler = 1;
      isFreeBingkai = 1;
      break;
    } else if (orderDetail.type &&
      (orderDetail.type === 'NON BOX' || orderDetail.type === 'PAKET SUPER HEMAT' || orderDetail.type === 'PAKET ARABIAN STYLE'
      || orderDetail.type === 'PAKET SUPER EKONOMIS') &&
      orderDetail.order_name && orderDetail.quantity && orderDetail.unit &&
      ((orderDetail.is_package && orderDetail.gender_type) || !orderDetail.is_package)) {
      isFreeBingkai = 1;
    }
  }
  cur_frm.set_value('is_free_tumbler', isFreeTumbler);
  cur_frm.set_value('is_free_bingkai', isFreeBingkai);

  const tumblerBingkaiQuantity = setTumblerBingkaiQuantity();
  cur_frm.set_value('free_tumbler_quantity', tumblerBingkaiQuantity.free_tumbler_quantity);
  cur_frm.set_value('free_bingkai_quantity', tumblerBingkaiQuantity.free_bingkai_quantity);
  cur_frm.refresh_field('free_tumbler_quantity');
  cur_frm.refresh_field('free_bingkai_quantity');
};

////////////////////////////////////// child tables //////////////////////////////////////
frappe.ui.form.on('Aqiqah Detail', {
  form_render: (frm, cdt, cdn) => {
    $('.row-actions').hide();
    $('.grid-footer-toolbar').hide();
  },
});

frappe.ui.form.on('Order Detail', {
  form_render: (frm, cdt, cdn) => {
    $('.row-actions').hide();
    $('.grid-footer-toolbar').hide();
    setOrderDetailItem(frm, cdt, cdn);
    setNonBoxMenuDataQuantity(frm, cdt, cdn);
  },
  order_detail_remove: (frm, cdt, cdn) => {
    recalculateNonBoxMenuData();
    totalOrderDetail();
    showDetailMenu();
    setFreeItems();
  },
  type: (frm, cdt, cdn) => {
    setOrderDetailItem(frm, cdt, cdn, true);
    showDetailMenu();
    setFreeItems();
  },
  is_package: (frm, cdt, cdn) => {
    setOrderDetailItem(frm, cdt, cdn);
    showDetailMenu();
    setFreeItems();
  },
  order_name: async (frm, cdt, cdn) => {
    setOrderDetailUnit(frm, cdt, cdn);
    await setOrderDetailNotes(frm, cdt, cdn);
    showDetailMenu();
    setFreeItems();
  },
  rice_type: async (frm, cdt, cdn) => {
    setRiceType(frm, cdt, cdn);
  },
  gender_type: async (frm, cdt, cdn) => {
    await setOrderDetailNotes(frm, cdt, cdn);
    showDetailMenu();
    setFreeItems();
  },
  menu_type: async (frm, cdt, cdn) => {
    await setOrderDetailNotes(frm, cdt, cdn);
    showDetailMenu();
    setFreeItems();
  },
  quantity: async (frm, cdt, cdn) => {
    await setOrderDetailNotes(frm, cdt, cdn);
    showDetailMenu();
    setFreeItems();
  },
  unit: async (frm, cdt, cdn) => {
    await setOrderDetailNotes(frm, cdt, cdn);
    showDetailMenu();
    setFreeItems();
  },
  is_order_bungkus_cup: async (frm, cdt, cdn) => {
    await setOrderDetailNotes(frm, cdt, cdn);
  },
  is_order_bungkus_cup_qty: async (frm, cdt, cdn) => {
    await setOrderDetailNotes(frm, cdt, cdn);
  },
  is_global: (frm, cdt, cdn) => {
    setGlobalData(frm, cdt, cdn);
  },
  is_gulai: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_gulai: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_kari: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_kari: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_semur: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_semur: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_sop: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_sop: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_tengkleng: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_tengkleng: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_sate: async (frm, cdt, cdn) => {
    await setOrderDetailNotes(frm, cdt, cdn);
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_sate: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_tongseng: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_tongseng: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_bakar_bbq: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_bakar_bbq: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_guling: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_guling: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_masak_bombay: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_masak_bombay: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_panggang: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_panggang: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_teriyaki: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_teriyaki: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_kuah_gulai: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_kuah_gulai: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_kuah_kari: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_kuah_kari: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_kuah_semur: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_kuah_semur: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_kuah_sop: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_kuah_sop: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_kuah_tengkleng: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_kuah_tengkleng: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_kuah_tongseng: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_kuah_tongseng: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_kering_bakar_bbq: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_kering_bakar_bbq: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_kering_goreng: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_kering_goreng: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_kering_masak_bombay: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_kering_masak_bombay: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_kering_panggang: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_kering_panggang: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_kering_teriyaki: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_kering_teriyaki: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  },
  is_kering_sate: async (frm, cdt, cdn) => {
    await setOrderDetailNotes(frm, cdt, cdn);
    setNonBoxMenuData(frm, cdt, cdn);
  },
  quantity_kering_sate: (frm, cdt, cdn) => {
    setNonBoxMenuData(frm, cdt, cdn);
  }
});

frappe.ui.form.on('Aqiqah Package Menu', {
  form_render: (frm, cdt, cdn) => {
    $('.row-actions').hide();
    $('.grid-footer-toolbar').hide();
    setAqiqahPackageMenuOrderType(frm, cdt, cdn);
    setAqiqahPackageMenuItem(frm, cdt, cdn);
  },
  aqiqah_package_menu_remove: (frm, cdt, cdn) => {
    totalOrderDetail();
  },
  order_type: (frm, cdt, cdn) => {
    setAqiqahPackageMenuItem(frm, cdt, cdn, true);
  },
  quantity: (frm, cdt, cdn) => {
    totalOrderDetail();
  },
});

frappe.ui.form.on('Non Box Menu', {
  form_render: (frm, cdt, cdn) => {
    $('.row-actions').hide();
    $('.grid-footer-toolbar').hide();
  },
  non_box_menu_remove: (frm, cdt, cdn) => {
    totalNonBoxMenu();
  },
  order_type: (frm, cdt, cdn) => {
    setNonBoxMenuItem(frm, cdt, cdn);
  },
  quantity: (frm, cdt, cdn) => {
    totalNonBoxMenu();
  },
});

frappe.ui.form.on('Payment Schedule', {
  form_render: (frm, cdt, cdn) => {
    $('.row-actions').hide();
    $('.grid-footer-toolbar').hide();
  },
  payment_amount: (frm, cdt, cdn) => {
    const d = locals[cdt][cdn];
    const paymentAmount = d['payment_amount'] || 0;
    d.base_payment_amount = paymentAmount;
    const grandTotal = cur_frm.doc['grand_total'] || 0;
    const invoicePortion = grandTotal ? (paymentAmount / grandTotal * 100) : 0;
    d.invoice_portion = invoicePortion;
  },
});
