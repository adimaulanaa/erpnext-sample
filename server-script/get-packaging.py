name = frappe.form_dict.name
statusCode = 404
statusIssue = 'TIDAK ADA MASALAH'

doc = {}
warpping = {}


# Mendefinisikan nilai tanggal dan waktu yang tidak valid
year = 0000
month = 0
day = 00
hour = 0
minute = 00
second = 0
# Creating formatted string using f-string
date_string = f"{year:04d}-{month:02d}-{day:02d} {hour:02d}:{minute:02d}:{second:02d}"

def getTypeBoxFromSO(sales_order):
    try:
        data_sales_order = frappe.get_doc('Sales Order', sales_order)
        if data_sales_order is not None:
            return data_sales_order.aqiqah_package_box_type
    except Exception as e:
        frappe.throw(_("Gagal ketika ambil tipe box"))

try:
    # Mendapatkan satu data objek dengan kondisi tertentu
    pack = frappe.get_doc('Packaging', name)

    # Melakukan pengecekan menggunakan if kondisi
    if pack is not None:
        statusCode = 200
        doc = pack
    else:
        statusCode = 400
        doc = {}
except Exception as e:
    statusCode = 400
    doc = {}

if doc is not None:
    pkStart = date_string
    pkFinish = date_string
    qty = 0
    if doc.is_pk_time_start == 1:
        pkStart = doc.pk_time_start
    if doc.is_pk_time_finish == 1:
        pkFinish = doc.pk_time_finish
    if doc.is_overage == 1:
        statusIssue = 'KELEBIHAN'
        qty = doc.quantity_overage
    if doc.is_lack == 1:
        statusIssue = 'KEKURANGAN'
        qty = doc.quantity_lack
    
    pl_type_box = getTypeBoxFromSO(doc.sales_order)

    packaging = {
        "name": doc.name,
        "is_submit": doc.is_submit,
        "transaction_date": doc.transaction_date,
        "sales_order": doc.sales_order,
        "aqiqah_name": doc.aqiqah_name,
        "wo_code": doc.wo_code,
        "delivery": doc.delivery if doc.delivery is not None else "-",
        "time_start": doc.time_start,
        "time_finish": doc.time_finish,
        "is_pk_time_start": doc.is_pk_time_start,
        "is_pk_time_finish": doc.is_pk_time_finish,
        "pk_time_start": pkStart,
        "packaging_menu": doc.packaging_menu,
        "pk_time_finish": pkFinish,
        "sequence": doc.sequence,
        "quantity": doc.quantity,
        "additional_menu": doc.additional_menu,
        "pl_type_box": pl_type_box,
        "type_box": doc.type_box,
        "issue" : statusIssue,
        "qty_issue" : qty,
        "info_pacakge": doc.info_pacakge
    }

frappe.response['statusCode'] = statusCode
frappe.response['data'] = packaging