frappe.query_reports['List Sales Order'] = {
    filters: [{
        fieldname: 'from_event_date',
        label: ('From Event Date'),
        fieldtype: 'Date',
        default: frappe.datetime.add_days(frappe.datetime.get_today()),
        reqd: 1
    },
    {
        fieldname: 'to_event_date',
        label: ('To Event Date'),
        fieldtype: 'Date',
        default: frappe.datetime.add_days(frappe.datetime.get_today()),
        reqd: 1
    }]
};
