status = frappe.form_dict.status
salesOrder = frappe.form_dict.sales_order
customerName = frappe.form_dict.customer_name
transactionDate = frappe.form_dict.transaction_date
deliveryId = frappe.form_dict.delivery_id
deliveryName = frappe.form_dict.delivery_name
rphMeat = frappe.form_dict.rph_meat
rphBone = frappe.form_dict.rph_bone
rphOffal = frappe.form_dict.rph_offal
storeMeat = frappe.form_dict.store_meat
storeBone = frappe.form_dict.store_bone
storeOffal = frappe.form_dict.store_offal
picMeatId = frappe.form_dict.pic_meat_id
picMeatName = frappe.form_dict.pic_meat_name
rphSate = frappe.form_dict.rph_sate
totalRphSate = frappe.form_dict.total_rph_sate
storeSate = frappe.form_dict.store_sate
totalStoreSate = frappe.form_dict.total_store_sate
picIdSate = frappe.form_dict.pic_id_sate
picNameSate = frappe.form_dict.pic_name_sate
description = frappe.form_dict.description
createBy = frappe.form_dict.created_by
createAt = frappe.form_dict.created_at
updateBy = frappe.form_dict.updated_by
updateAt = frappe.form_dict.updated_at
message = 404
erorrCode = 404
erorrMessage = ''

try:
    doc = frappe.get_doc({
        "doctype": "RPH",
        "status": status,
        "sales_order": salesOrder,
        "customer_name": customerName,
        "transaction_date": transactionDate,
        "delivery_id": deliveryId,
        "delivery_name": deliveryName,
        "rph_meat": rphMeat,
        "rph_bone": rphBone,
        "rph_offal": rphOffal,
        "store_meat": storeMeat,
        "store_bone": storeBone,
        "store_offal": storeOffal,
        "pic_meat_id": picMeatId,
        "pic_meat_name": picMeatName,
        "rph_sate": rphSate,
        "total_rph_sate": totalRphSate,
        "store_sate": storeSate,
        "total_store_sate": totalStoreSate,
        "pic_id_sate": picIdSate,
        "pic_name_sate": picNameSate,
        "description": description,
        "created_by": createBy,
        "created_at": createAt,
        "updated_by": updateBy,
        "updated_at": updateAt,
    })
    doc.insert()
    message = 200
except Exception as e:
    message = 404
    erorrMessage = e

frappe.response['statusCode'] = message
frappe.response['erorrMessage'] = erorrMessage