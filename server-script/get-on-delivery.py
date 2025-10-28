name = frappe.form_dict.name
statusCode = 404

doc = {}
soData = {}
delivery = {}


# Mendefinisikan nilai tanggal dan waktu yang tidak valid
year = 0000
month = 0
day = 00
hour = 0
minute = 00
second = 0
address = ''
cutting = ''
number = ''
# Creating formatted string using f-string
date_string = f"{year:04d}-{month:02d}-{day:02d} {hour:02d}:{minute:02d}:{second:02d}"

def getDeliveryTime(salesOrderId):
    try:
        deliveryBox = frappe.db.get_list("SKPH Delivery Schedule", filters={'sales_order': salesOrderId}, fields=['actual_time'])
        return deliveryBox[0]['actual_time']
    except Exception as e:
        return

try:
    # Mendapatkan satu data objek dengan kondisi tertentu
    pack = frappe.get_doc('On Delivery', name)

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

if doc.sales_order != '':
    salesOrder = doc.sales_order
    product = []
    aqiqahDetail = []
    # get data sales order
    try:
        # Mendapatkan data
        sales = frappe.get_doc('Sales Order', salesOrder)

        # Melakukan pengecekan menggunakan if kondisi
        if sales is not None:
            # Lakukan sesuatu dengan data
            message = 200
            soData = sales
            salesOrder = sales.name
            if soData.notes is None:
                noteSalesOrder = ''
            else:
                noteSalesOrder = soData.notes

            if soData.note_after_submit is None:
                noteAfterSubmitSO = ''
            else:
                noteAfterSubmitSO = soData.note_after_submit

            if soData.is_cutting_witnessed == 1:
                cutting = 'DISAKSIKAN'
            else:
                cutting = 'TIDAK DISAKSIKAN'
            
            if soData.contact_mobile != '':
                if soData.contact_phone != '':
                    number = soData.contact_mobile + ' / ' + soData.contact_phone
                else: 
                    number = soData.contact_mobile
            elif soData.contact_mobile != '':
                number = soData.contact_mobile
            
            addrData = soData.address_display
            # Menghilangkan \n
            address = addrData.replace('\n', '')
            # Mengganti <br> dengan spasi
            address = address.replace('<br>', ' ')
            # Menghapus teks 'Email:' dan seterusnya
            address = address.split('Email:')[0]
        else:
            message = 400
            soData = {}
            noteSalesOrder = ''
            address = ''
            cutting = ''
            number = ''
    except Exception as e:
        message = 400
        soData = {}

    try:
        # Mendapatkan data
        order = frappe.db.get_list(
            'Order Detail', 
            filters={
                'parent': salesOrder,
                'parenttype': "Sales Order"
            },
            fields= ['order_name', 'gender_type', 'total_unit_1'],
            limit= 0
        )

        frappe.response['order'] = order        

        # Melakukan pengecekan menggunakan if kondisi
        if order is not None:
            # Lakukan sesuatu dengan data
            for orders in order:
                productCode = '-'
                key = orders['order_name']
                gender = orders['gender_type']
                menus = []
                #  code paket
                try:
                    code = frappe.db.get_list(
                        'Product Detail', 
                        filters={
                            'product_name': key,
                            'gender_type': gender
                        },
                        fields= ['product_code'],
                        limit= 0
                    )
                    if code is not None:
                        sumberCode = code[0]
                        productCode = sumberCode['product_code']
                except Exception as e:
                    typePackage = ''
                    erorrCode = 400
                #  menu paket
                try:
                    menu = frappe.db.get_list(
                        'Aqiqah Package Menu', 
                        filters={
                            'order_type': key,
                            'parent': salesOrder
                        },
                        fields= ['*'],
                        limit= 0
                    )
                    if menu is not None:
                        for idMenu in menu:
                            if idMenu['meat_cook_type_1'] != '':
                                menus.append({
                                    'menu': idMenu['meat_cook_type_1'],
                                    'quantity': idMenu['quantity']
                                })
                            if idMenu['meat_cook_type_2'] != '':
                                menus.append({
                                    'menu': idMenu['meat_cook_type_2'],
                                    'quantity': idMenu['quantity']
                                })
                except Exception as e:
                    typePackage = ''
                    erorrCode = 400
                
                try : 
                    menuOrder = frappe.db.get_list(
                        'Non Box Menu', 
                        filters={
                            'parent': salesOrder
                        },
                        fields= ['name', 'quantity', 'meat_cook_type'],
                        limit= 0
                    )
                    if menuOrder is not None:
                        if len(menuOrder) > 0:
                            for e in menuOrder:
                                menus.append({
                                    'menu': e.meat_cook_type,
                                    'quantity': e.quantity,
                                })
                except Exception as e:
                    frappe.throw(_("Gagal get data"))

                product.append({
                    "type": key,
                    "product_code": productCode,
                    "unit": orders['total_unit_1'],
                    "menu": menus
                })
                
        else:
            product = []
    except Exception as e:
        product = []

    docSales = {
        'name': soData.name,
        'customer_name': soData.customer_name,
        'address_display': address,
        'contact_mobile': number,
        'is_cutting_witnessed': cutting,
        'order_delivery': soData.order_delivery,
        'event_date_time': soData.event_date_time,
        'arrived_date_time': soData.arrived_date_time,
        'event_date': soData.event_date,
        'location': soData.location,
        'notes': noteSalesOrder,
        'note_after_submit': noteAfterSubmitSO,
        'aqiqah_name': doc.aqiqah_name,
        'product': product,
    }

if doc is not None:
    pkStart = date_string
    pkFinish = date_string
    note = '-'
    ttd = ''
    if doc.notes is not None:
        note = doc.notes
    
    if doc.ttd is not None:
        ttd = doc.ttd

    timeDelivery = getDeliveryTime(doc.sales_order)

    delivery = {
        "name": doc.name,
        "is_submit": doc.is_submit,
        "transaction_date": doc.transaction_date,
        "event_date": doc.event_date,
        "pl_arrived_time": timeDelivery,
        "sales_order": doc.sales_order,
        "aqiqah_name": doc.aqiqah_name,
        "merchendise": doc.merchendise,
        "quantity_merchendise": doc.quantity_merchendise,
        "notes": note,
        "ttd": ttd,
        "merchandise_package": doc.merchandise_package,
        "info_pacakge": doc.info_pacakge,
        "sales": docSales
    }

frappe.response['statusCode'] = statusCode
frappe.response['data'] = delivery