SELECT so.name AS 'ID:Link/Sales Order:190',
        sa.wo_code AS 'No. WO',
        so.status  AS 'Status:180',
        so.customer_name AS 'Nama Customer:200',
        so.aqiqah_name AS 'Nama Anak:180',
        DATE_FORMAT(so.event_date_time, "%%H:%%i") AS 'Waktu Acara',
        so.event_date  AS 'Tanggal Acara:180',
        so.transaction_date AS 'Tanggal Transaksi:180',
        so.contact_phone AS 'Nomor Tlpn:180',
        so.contact_mobile AS 'Nomor Hp:180',
        sa.sub_district_name AS 'Keluarahan:180',
        ad.region_district_name AS 'Kecamatan:180',
        CASE 
                WHEN od.type != 'NON BOX' THEN od.total_quantity_1
                ELSE '0'
        END AS 'Jumlah Box',
        CASE 
                WHEN od.type != 'MAKAN GRATIS' THEN od.quantity
                ELSE '0'
        END AS 'Jumlah Domba',
        od.order_name AS 'Nama Paket:180',
        FORMAT(od.total_price, 'c', 'id-ID') AS 'Grand Total:180',
        so.per_delivered AS 'Delivered (Persentase)',
        so.per_billed AS 'Amount Billed (Persentase)',
        so.billing_status AS 'Billing Status',
        so.price_list_currency AS 'Currency',
        us.full_name AS 'Sales Name',
        so.source_information AS 'Sebaran Informasi'
FROM `tabSales Order` so LEFT JOIN `tabSKPH Analysis` sa ON so.name = sa.sales_order LEFT JOIN `tabCustomer` co ON so.customer = co.name 
        LEFT JOIN `tabLead` le ON co.lead_name = le.name LEFT JOIN `tabUser` us ON le.created_by = us.name LEFT JOIN `tabOrder Detail` od ON od.parent = so.name 
        LEFT JOIN `tabAddress` ad ON so.shipping_address_name = ad.name
WHERE so.status NOT IN ('Cancelled') AND sa.sales_order_status NOT IN ('Cancelled') AND sa.status_data NOT IN ('Cancelled') AND
 (DATE_FORMAT(so.event_date, "%%Y-%%m-%%d") BETWEEN DATE_FORMAT(%(from_event_date)s, '%%Y-%%m-%%d') AND DATE_FORMAT(%(to_event_date)s, '%%Y-%%m-%%d'))
ORDER BY sa.wo_sequence ASC