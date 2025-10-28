salesOrder = frappe.form_dict.sales_order
createBy = frappe.form_dict.created_by
createAt = frappe.form_dict.created_at
updateBy = frappe.form_dict.updated_by
updateAt = frappe.form_dict.updated_at
message = 404
erorrCode = 404
erorrMessage = ''
childName = ''
customerName = ''
transactionDate = ''
typePackage = ''
rphData = {}

# get data sales order
try:
    # Mendapatkan satu data objek dengan kondisi tertentu
    so = frappe.get_doc('Sales Order', salesOrder)
    # Melakukan pengecekan menggunakan if kondisi
    if so is not None:
        # get nama anak
        sumChildren = []
        salesOrderName = so.name
        transactionDate = so.event_date
        customerName = so.customer_name
        orderDetail = so.order_detail
        aqiqahMenu = so.aqiqah_package_menu
        # get nama anak
        try:
            child = frappe.db.get_list(
                'Aqiqah Detail', 
                filters={
                    'parent': so.name,
                    'parenttype': "Sales Order"
                },
                fields= ['aqiqah_name'],
                limit= 0
            )
            if child is not None:
                for ch in child:
                    names = ch['aqiqah_name']
                    sumChildren.append(names)
        except Exception as e:
            aqiqah_name = ''
            erorrCode = 400
        
        # get nama paket
        try:
            order = frappe.db.get_list(
                'Order Detail', 
                filters={
                    'parent': so.name,
                    'parenttype': "Sales Order"
                },
                fields= ['order_name'],
                limit= 0
            )
            if order is not None:
                sumField = []
                for orders in order:
                    key = orders['order_name']
                    try:
                        code = frappe.db.get_list(
                            'Product Detail', 
                            filters={
                                'product_name': key,
                            },
                            fields= ['product_name', 'product_code'],
                            limit= 0
                        )
                        if code is not None:
                            sumberCode = code[0]
                            type = sumberCode['product_code']
                            sumField.append(type)
                    except Exception as e:
                        typePackage = ''
                        erorrCode = 400
                # Menyatukan elemen-elemen list menjadi satu string dengan pemisah koma dan spasi
                typePackage = ", ".join(sumField)
        except Exception as e:
            typePackage = ''

        childName = ", ".join(sumChildren)
        erorrCode = 200
    else:
        erorrCode = 400
        childName = ''
        typePackage = ''
except Exception as e:
    erorrCode = 400
    childName = ''
    typePackage = ''

# get rph
try:
    # Mendapatkan data
    rph = frappe.db.get_list(
            'RPH', 
            filters={
                'sales_order': salesOrder
            },
            fields= ['*'],
            limit= 0
        )

    # Melakukan pengecekan menggunakan if kondisi
    if rph is not None:
        # Lakukan sesuatu dengan data
        rphData = rph[0]
    else:
        rphData = {}
except Exception as e:
    rphData = {}

if rphData:
    # menambahkan data
    try:
        doc = frappe.get_doc({
            "doctype": "Freezer",
            "sales_order": salesOrder,
            "aqiqah_name": childName,
            "type_package": typePackage,
            "customer_name": customerName,
            "transaction_date": transactionDate,
            "delivery_id": rphData.delivery_id or '',
            "delivery_name": rphData.delivery_name or '',
            "rph_meat": rphData.rph_meat or 0,
            "rph_bone": rphData.rph_bone or 0,
            "rph_offal": rphData.rph_offal or 0,
            "store_meat": 0,
            "store_bone": 0,
            "store_offal": 0,
            "pic_meat_id": rphData.pic_meat_id or '',
            "pic_meat_name": rphData.pic_meat_name or '',
            "rph_sate": rphData.rph_sate or 0,
            "total_rph_sate": rphData.total_rph_sate or 0,
            "store_sate": 0,
            "total_store_sate": 0,
            "pic_id_sate": rphData.pic_id_sate or '',
            "pic_name_sate": rphData.pic_name_sate or '',
            "description": '',
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