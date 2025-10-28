SELECT sk.sales_order AS 'Sales Order:Link/Sales Order:180',
      sk.child_name AS 'Nama Anak',
      sk.rice_type AS 'Nasi',
      sk.product_code AS 'Type Kambing',
      sk.lamb_quantity AS 'Qty Kambing',
      sk.box_type AS 'Box',
      sk.box_quantity AS 'Qty',
      sk.menu_sate AS 'Menu Sate',
      sk.porsi_sate_quantity AS 'Porsi Sate',
      sk.menu_non_sate AS 'Menu Non Sate',
      sk.porsi_non_sate_quantity AS 'Porsi Non Sate',
      so.total_payment AS 'Amount:200'
FROM `tabSKPH Analysis` sk LEFT JOIN `tabSales Order` so ON so.name = sk.sales_order
WHERE sk.status_data = 'OK' AND sk.sales_order_status != 'Cancelled'
  AND (DATE_FORMAT(sk.event_date, "%%Y-%%m-%%d") BETWEEN DATE_FORMAT(%(from_event_date)s, '%%Y-%%m-%%d') AND DATE_FORMAT(%(to_event_date)s, '%%Y-%%m-%%d'))
ORDER BY sk.leave_date_time ASC
