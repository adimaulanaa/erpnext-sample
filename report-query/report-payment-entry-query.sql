SELECT pe.name AS 'Payment Entry:Link/Payment Entry:190',
        pe.status AS 'Status Payment Entry',
        si.name AS 'Sales Invoice:Link/Sales Invoice:190',
        si.sales_order AS 'Sales Order:Link/Sales Order:190',
        aq.aqiqah_name AS 'Nama Anak:180',
        FORMAT(pe.paid_amount, 'c', 'id-ID') AS 'Amount:180',
        pe.mode_of_payment AS 'Mode of Payment',
        us.full_name AS 'Nama Sales'
FROM `tabPayment Entry` pe LEFT JOIN `tabPayment Entry Reference` per ON per.parent = pe.name
LEFT JOIN `tabUser` us ON pe.created_by = us.name LEFT JOIN `tabSales Invoice` si ON si.name = pe.sales_invoice
LEFT JOIN `tabSales Order` aq ON aq.name = si.sales_order
WHERE (DATE_FORMAT(pe.posting_date, "%%Y-%%m-%%d") BETWEEN DATE_FORMAT(%(from_event_date)s, '%%Y-%%m-%%d') AND DATE_FORMAT(%(to_event_date)s, '%%Y-%%m-%%d'))
