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

frappe.ui.form.on('Neraca', {
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

const setDataTable = async (frm, cdt, cdn) => {
    frappe.show_progress('Please wait', 0, 100, 'Clear Data..');
    const fromDateTime = moment(frm.doc['from_date']);
    const toDateTime = moment(frm.doc['to_date']);
    const fromDate = fromDateTime.format('YYYY-MM-DD');
    const toDate = toDateTime.format('YYYY-MM-DD');

    let errorMessage = [];
    cur_frm.clear_table('item');
    let totalAccount = 0;

    frappe.show_progress('Please wait', 10, 100, 'Setup Data..');
    if (fromDate && toDate) {
        const orFilters = [];
        const orFiltersAccount = [];
        const reportNeraca = [];
        const dataProfitLoss = [];
        const jurnalEntryData = [];
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
        console.log('orFilters', orFilters);
        if (orFilters.length > 0) {
            const list = [];
            await frappe.db.get_list('Journal Entry Account', {
                or_filters: orFilters,
                fields: ['account', 'credit', 'debit'],
                limit: 0
            }).then((jurnalAccount) => {
                if (jurnalAccount)  {
                    
                }
                for (let i = 0; i < jurnalAccount.length; i++) {
                    // filter account
                    orFiltersAccount.push(['name', '=', jurnalAccount[i].account]);
                }
                console.log('jurnalAccount', jurnalAccount);
                const groupedResult = setGroup(jurnalAccount);
                console.log(groupedResult);
            });

            if (orFiltersAccount.length > 0) {
                await frappe.db.get_list('Account', {
                    or_filters: orFiltersAccount,
                    fields: ['name', 'balance_type', 'classification', 'sub_classification', 'account_name'],
                    limit: 0
                }).then((account) => {
                    console.log('account', account);
                    if (account && account.length > 0) {
                        for (let i = 0; i < account.length; i++) {
                            if (account[i].balance_type) {
                                
                            } else {
                                errorMessage.push('Tipe Neraca ' + account[i].name + ' tidak ada');
                            }
                        }
                    }
                });
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