const filter = [
    'Revenue', 'Cost of Revenue', 'Raw Material Cost', 'Direct Labour', 'Overhead',
    'Sales and Marketing Expense', 'Administrative Expense', 'Other Income', 'Other Expense',
    'System Depreciation and Amortization Costs', 'Tax and Zakat (EBIT)'];
    
frappe.ui.form.on('Profit and Loss', {
	setup: async (frm, cdt, cdn) => {
		// import library
		await frappe.require([
			'assets/js/lodash.min.js'
		]);

        // set reload
        setTimeout(() => {
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
        });
	},
	onload_post_render: async (frm, cdt, cdn) => {
        // set hidden element
        const isAdministrator = has_common(frappe.user_roles, ['Administrator']);
        if (!isAdministrator) {
            $('.comment-box').hide();
            $('.timeline-actions').hide();
            $('.new-timeline').hide();
        }
    },
    validate: async (frm, cdt, cdn) => {
        const validateTimestamp = await setTimestamp();
        if (validateTimestamp) {
            frappe.validated = true;
        } else {
            frappe.validated = false;
        }
    },
    from_date: async (frm, cdt, cdn) => {
        await setDataTable(frm, cdt, cdn);
    },
    to_date: async (frm, cdt, cdn) => {
        await setDataTable(frm, cdt, cdn);
    },
});

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

const setGroup = (data) => {
    const groupedData = {};

    data.forEach(item => {
        const { account, credit, debit } = item;

        if (!groupedData[account]) {
            groupedData[account] = {
                account,
                credit: 0,
                debit: 0
            };
        }

        groupedData[account].credit += credit;
        groupedData[account].debit += debit;
    });

    return Object.values(groupedData);
};

const setDataTable = async (frm, cdt, cdn) => {
    frappe.show_progress('Please wait', 0, 100, 'Clear Data..');
    const fromDateTime = moment(frm.doc['from_date']);
    const toDateTime = moment(frm.doc['to_date']);
    const fromDate = fromDateTime.format('YYYY-MM-DD');
    const toDate = toDateTime.format('YYYY-MM-DD');

    let errorMessage = [];
    cur_frm.clear_table('item');
    let totalAccount = 0;

    let totalRevenue = 0;
    let totalCostOfRevenue = 0;
    let totalRawMaterialCost = 0;
    let totalDirectLabour = 0;
    let totalOverhead = 0;
    let totalSalesAndMarketingExpense = 0;
    let totalAdministrativeExpense = 0;
    let totalOtherIncome = 0;
    let totalOtherExpense = 0;
    let totalDepreciationAndAmortization = 0;
    let totalTaxAndZakat = 0;

    frappe.show_progress('Please wait', 10, 100, 'Setup Data..');
    if (fromDate && toDate) {
        const orFilters = [];
        const orFiltersAccount = [];
        const listProfitLoss = [];
        const dataProfitLoss = [];
        let jurnalEntryData = [];
        frappe.show_progress('Please wait', 20, 100, 'Setup Data Jurnal Entry..');
        await frappe.db.get_list('Journal Entry', {
            filters: [
                ['posting_date', '>=', fromDate],
                ['posting_date', '<=', toDate],
                ['docstatus', '=', 1]
            ],
            fields: ['name'],
            limit: 0
        }).then(async (jurnal) => {
            for (let i = 0; i < jurnal.length; i++) {
                orFilters.push(['parent', '=', jurnal[i].name]);
            }
        });

        if (orFilters.length > 0) {
            await frappe.db.get_list('Journal Entry Account', {
                or_filters: orFilters,
                fields: ['account', 'credit', 'debit'],
                limit: 0
            }).then((jurnalAccount) => {
                const list = [];
                if (jurnalAccount && jurnalAccount.length > 0) {
                    for (let i = 0; i < jurnalAccount.length; i++) {
                        if (jurnalAccount[i].credit !== 0) {
                            list.push({
                                account: jurnalAccount[i].account,
                                value: jurnalAccount[i].credit
                            });
                        } else if (jurnalAccount[i].debit !== 0) {
                            list.push({
                                account: jurnalAccount[i].account,
                                value: jurnalAccount[i].debit
                            });
                        }
                        // filter account
                        orFiltersAccount.push(['name', '=', jurnalAccount[i].account]);
                    }
                    const groupedResult = setGroup(jurnalAccount);
                    console.log('jurnalAccount', jurnalAccount);
                    console.log('groupedResult', groupedResult);
                }
                
                if (list.length > 0) {
                    jurnalEntryData = _(list)
                    .groupBy('account')
                    .map((key, id) => ({
                        account: id,
                        value: _.sumBy(key, 'value')
                    }))
                    .value();
                }
            });

            if (orFiltersAccount.length > 0) {
                await frappe.db.get_list('Account', {
                    or_filters: orFiltersAccount,
                    fields: ['name', 'type_profit_and_loss', 'account_name', 'account_number'],
                    limit: 0
                }).then((account) => {
                    if (account && account.length > 0) {
                        for (let i = 0; i < account.length; i++) {
                            if (account[i].type_profit_and_loss) {
                                for (let j = 0; j < jurnalEntryData.length; j++) {
                                    if (account[i].name === jurnalEntryData[j].account) {
                                        listProfitLoss.push({
                                            account: jurnalEntryData[j].account,
                                            name: account[i].account_name,
                                            number: account[i].account_number,
                                            value: jurnalEntryData[j].value,
                                            type: account[i].type_profit_and_loss
                                        });
                                    }
                                }
                            } else {
                                errorMessage.push('Tipe Profit and Loss ' + account[i].name + ' tidak ada');
                            }
                        }
                    }
                });
                
                if (listProfitLoss.length > 0) {
                    for (let i = 0; i < filter.length; i++) {
                        for (let j = 0; j < listProfitLoss.length; j++) {
                            if (filter[i] === listProfitLoss[j].type) {
                                dataProfitLoss.push({
                                    account: listProfitLoss[j].account,
                                    name: listProfitLoss[j].name,
                                    number: listProfitLoss[j].number,
                                    value: listProfitLoss[j].value,
                                    type: listProfitLoss[j].type
                                });
                            }
                        }
                    }
                }
            }

            if (dataProfitLoss.length > 0) {
                for (let i = 0; i < dataProfitLoss.length; i++) {
                    const data = dataProfitLoss[i];
                    const item = cur_frm.add_child('item');
                    item.account = data.account;
                    item.account_number = data.number;
                    item.account_name = data.name;
                    item.value = data.value;
                    item.type = data.type;
                    totalAccount += parseInt(data.value, 10);
                    if (data.type === 'Revenue') {
                        totalRevenue += parseInt(data.value, 10);
                    } else if (data.type === 'Cost of Revenue') {
                        totalCostOfRevenue += parseInt(data.value, 10);
                    } else if (data.type === 'Raw Material Cost') {
                        totalRawMaterialCost += parseInt(data.value, 10);
                    } else if (data.type === 'Direct Labour') {
                        totalDirectLabour += parseInt(data.value, 10);
                    } else if (data.type === 'Overhead') {
                        totalOverhead += parseInt(data.value, 10);
                    } else if (data.type === 'Sales and Marketing Expense') {
                        totalSalesAndMarketingExpense += parseInt(data.value, 10);
                    } else if (data.type === 'Administrative Expense') {
                        totalAdministrativeExpense += parseInt(data.value, 10);
                    } else if (data.type === 'Other Income') {
                        totalOtherIncome += parseInt(data.value, 10);
                    } else if (data.type === 'Other Expense') {
                        totalOtherExpense += parseInt(data.value, 10);
                    } else if (data.type === 'System Depreciation and Amortization Costs') {
                        totalDepreciationAndAmortization += parseInt(data.value, 10);
                    } else if (data.type === 'Tax and Zakat (EBIT)') {
                        totalTaxAndZakat += parseInt(data.value, 10);
                    }
                }
                
                cur_frm.set_value('total_account', totalAccount);
                cur_frm.set_value('total_revenue', totalRevenue);
                cur_frm.set_value('total_cost_of_revenue', totalCostOfRevenue);
                cur_frm.set_value('total_raw_material_cost', totalRawMaterialCost);
                cur_frm.set_value('total_direct_labour', totalDirectLabour);
                cur_frm.set_value('total_overhead', totalOverhead);
                cur_frm.set_value('total_sales_and_marketing_expense', totalSalesAndMarketingExpense);
                cur_frm.set_value('total_administrative_expense', totalAdministrativeExpense);
                cur_frm.set_value('total_other_income', totalOtherIncome);
                cur_frm.set_value('total_other_expense', totalOtherExpense);
                cur_frm.set_value('total_depreciation_and_amortization', totalDepreciationAndAmortization);
                cur_frm.set_value('total_tax_and_zakat', totalTaxAndZakat);

                cur_frm.refresh_field('total_revenue');
                cur_frm.refresh_field('total_cost_of_revenue');
                cur_frm.refresh_field('total_raw_material_cost');
                cur_frm.refresh_field('total_direct_labour');
                cur_frm.refresh_field('total_overhead');
                cur_frm.refresh_field('total_sales_and_marketing_expense');
                cur_frm.refresh_field('total_administrative_expense');
                cur_frm.refresh_field('total_other_income');
                cur_frm.refresh_field('total_other_expense');
                cur_frm.refresh_field('total_depreciation_and_amortization');
                cur_frm.refresh_field('total_tax_and_zakat');
                cur_frm.refresh_field('total_account');
                cur_frm.refresh_field('item');
            }
        } else {
            errorMessage.push('Tidak ada data Profit and Loss dari tanggal ' + fromDate + ' sampai ' + toDate);
        }
    }

    frappe.show_progress('Please wait', 100, 100, 'Completed');
    await frappe.after_ajax(() => {
        if (cur_dialog) {
            cur_dialog.hide();
        }
        if (errorMessage.length > 0) {
            msgprint(errorMessage);
        }
    });
};