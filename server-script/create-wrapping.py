salesOrderId = frappe.form_dict.sales_order
location = frappe.form_dict.location
createBy = frappe.form_dict.created_by
createAt = frappe.form_dict.created_at

statusCode = ''
erorrCode = ''
erorrMessage = ''
checkMatriksError = ''
salesOrderName = ''
historyKitchenId = ''
status = 'SIAP PRODUKSI'
gelarParent = ''
gelarParentfield = ''
gelarQuantity = ''
valueStart = ''
valueFinish = ''


salesOrder = {}
historyKitchen = {}
loc = {}
matriksDoc = {}
soData = {}

is_kitchen_all_submitted = True

infoPackage = []
listData = []
gelarData = []
sasa = []

createWrapping = False
getMatriks = False
statusSo = False

# Mendefinisikan nilai tanggal dan waktu yang tidak valid
year = 0000
month = 0
day = 00
hour = 0
minute = 00
second = 0
# Creating formatted string using f-string
date_string = f"{year:04d}-{month:02d}-{day:02d} {hour:02d}:{minute:02d}:{second:02d}"


def getMenus():
    filter = ['batch_1', 'batch_2', 'batch_3', 'batch_4', 'batch_5', 'batch_6', 'batch_7', 'batch_8', 'batch_9', 'batch_10', 'batch_11', 'batch_12', 'batch_13', 'batch_14', 'batch_15', 'batch_16', 'batch_17']
     # ! BOM
    try:
        # Mendapatkan satu data objek dengan kondisi tertentu
        schadule = frappe.db.get_list(
            'SKPH Matriks Kitchen Schedule', 
            filters={
                'parent_sales_order': salesOrderId,
                'parentfield': ('in', filter)
            },
            fields= ['*'],
            limit= 0
            )

        # Melakukan pengecekan menggunakan if kondisi
        if schadule is not None:
            return  schadule
        else:
            return  []
    except Exception as e:
        frappe.throw(_("Gagal dalam get menu"))

def setTimeFromGelarBox():
    try:
        scWr = frappe.db.get_list(
            'SKPH Gelar Schedule', 
            filters={
                'sales_order': salesOrderId,
            },
            fields= ['parent', 'parentfield', 'quantity', 'sales_order', 'additional_quantity', 'idx'],
            limit= 0
        )
        if scWr is not None:
            
            if len(scWr) > 0:
                gelarSchadule = scWr[0]
                gelarParent = gelarSchadule.parent
                gelarParentfield = gelarSchadule.parentfield
                gelarIdx = gelarSchadule.idx
                gelarQuantity = gelarSchadule.quantity
                gelarQuantityAdd = gelarSchadule.additional_quantity
            else:
                gelarSchadule = {}
    except Exception as e:
        gelarSchadule = {}

    if gelarParent != '':
        try:
            # Mendapatkan data
            if 'BOX' in gelarParent:
                glsDoc = frappe.get_doc('SKPH Gelar Box', gelarParent)
            else:
                glsDoc = frappe.get_doc('SKPH Gelar Bungkus', gelarParent)
           
            # Melakukan pengecekan menggunakan if kondisi
            if glsDoc is not None:
                # Lakukan sesuatu dengan data
                gelarDoc = glsDoc
                fieldStart = f"{gelarParentfield}_time_start"
                fieldFinish = gelarParentfield + '_time_finish'
                # mendapatkan data dari doc
                startTime = gelarDoc.get(fieldStart)
                finishTime = gelarDoc.get(fieldFinish)
                # date1= frappe.utils.add_to_date(startTime, days=10, as_string=True)
                # date2= frappe.utils.add_to_date(startTime)
                hourStart = str(startTime)
                hourFinish = str(finishTime)

                parseIntStart = int(hourStart[0:2])
                parseIntFinish = int(hourFinish[0:2])

                substractStart = parseIntStart - 1
                substractFinish = parseIntFinish - 1

                finalValueStart = str(substractStart) + hourStart[2:len(hourStart)]
                finalValueFinish = str(substractFinish) + hourFinish[2:len(hourFinish)]
                global valueStart
                global valueFinish
                valueStart = finalValueStart
                valueFinish = finalValueFinish
                
            else:
                statusCode = 404
                gelarDoc = {}
        except Exception as e:
            statusCode = 404
            gelarDoc = {}

# check RPH
try:
    kitchen = frappe.db.get_list(
        'History Kitchen', 
        filters={
            'sales_order': salesOrderId,
        },
        fields= ['name'],
        limit= 0
    )
    if kitchen is not None:
        if len(kitchen) > 0:
            historyKitchenId = kitchen[0].name
            try:
                # Mendapatkan data
                hk = frappe.get_doc('History Kitchen', historyKitchenId)
                # Melakukan pengecekan menggunakan if kondisi
                if hk is not None:
                    # Lakukan sesuatu dengan data
                    for element in hk.kitchen_schedule:
                        if element.group_menu_is_submit == 0 and element.is_rejected == 0 and element.is_not_suitable == 0:
                            frappe.response['data'] = element
                            is_kitchen_all_submitted = False
                            break
                    if is_kitchen_all_submitted == False:
                        raise 'Mohon Submit semua menu di Kitchen'
            except Exception as e:
                erorrMessage = e
            if is_kitchen_all_submitted:
                try:
                    mtrk = frappe.db.get_list(
                        'Wrapping', 
                        filters={
                            'sales_order': salesOrderId,
                        },
                        fields= ['name'],
                        limit= 0
                    )
                    if mtrk is not None:
                        if len(mtrk) > 0:
                            createWrapping = False
                            checkMatriksError = 'Sales Order sudah ada di Wrapping'
                        else:
                            createWrapping = True
                except Exception as e:
                    createWrapping = True

                if historyKitchenId != '':
                    try:
                        # Mendapatkan data
                        hk = frappe.get_doc('History Kitchen', historyKitchenId)
                        # Melakukan pengecekan menggunakan if kondisi
                        if hk is not None:
                            # Lakukan sesuatu dengan data
                            historyKitchen = hk
                        else:
                            statusCode = 404
                            historyKitchen = {}
                    except Exception as e:
                        statusCode = 404
                        historyKitchen = {}
                
                try:
                    # Mendapatkan data
                    so = frappe.get_doc('Sales Order', salesOrderId)
                    # Melakukan pengecekan menggunakan if kondisi
                    if so is not None:
                        # Lakukan sesuatu dengan data
                        soData = so
                        statusSo = True
                    else:
                        statusCode = 404
                        soData = {}
                except Exception as e:
                    statusCode = 404
                    soData = {}
                
                # location
                if location != '':
                    try:
                        # Mendapatkan data
                        locs = frappe.get_doc('Kanban Location', location)
                        # Melakukan pengecekan menggunakan if kondisi
                        if locs is not None:
                            # Lakukan sesuatu dengan data
                            statusCode = 200
                            loc = locs
                        else:
                            statusCode = 404
                            loc = {}
                    except Exception as e:
                        statusCode = 404
                        loc = {}
            
        else:
            createWrapping = False
            checkMatriksError = 'Sales Order belum ada di History Kitchen'
except Exception as e:
    createWrapping = False
    checkMatriksError = 'Sales Order belum ada di History Kitchen'

if is_kitchen_all_submitted:
    # set data wrapping
    if historyKitchen is not None:
        listKitch = getMenus()
        listPackage = historyKitchen.info_pacakge
        for lp in listPackage:
            infoPackage.append({
                'is_package': lp.is_package,
                'type': lp.type,
                'order_name': lp.order_name,
                'quantity':  lp.quantity
            })
        
        if  len(listKitch) > 0:
            for lk in listKitch:
                wrapping_tool = frappe.db.get_list(
                    'Wrapping Tools',
                    filters={
                        'bom_no': lk.bom
                    },
                    fields=['name']
                )
                if len(wrapping_tool) > 0:
                    tool_name = wrapping_tool[0].name
                else:
                    tool_name = ''
                data = {
                    "doctype": "Wrapping",
                    "sales_order": historyKitchen.sales_order,
                    "customer_name": historyKitchen.customer_name,
                    "status": status,
                    "transaction_date": historyKitchen.transaction_date,
                    "is_submit": 0,
                    "aqiqah_name": historyKitchen.aqiqah_name,
                    "wo_code": lk.wo_code_text,
                    "package": historyKitchen.type_package,
                    "info_pacakge": infoPackage,
                    "menu": lk.menu,
                    "quantity": lk.quantity,
                    "bom": lk.bom,
                    "max_capacity": lk.max_capacity,
                    "tool": tool_name,
                    "time_start": '00:00:00',
                    "time_finish": '00:00:00',
                    "pic_id": '',
                    "pic_name": lk.pic,
                    "notes": lk.notes,
                    "is_checklist_hp": lk.is_checklist_hp,
                }
                listData.append(data)
                # waktu Wrapping dari stop kitchen

    if len(listData) > 0:
        try:
            matrs = frappe.db.get_list(
                'SKPH Matriks Kitchen Schedule', 
                filters={
                    'parent_sales_order': salesOrderId,
                },
                fields= ['parent', 'parentfield', 'quantity', 'parent_sales_order'],
                limit= 0
            )
            if matrs is not None:
                if len(matrs) > 0:
                    gelarData = matrs
                    # Membuat list baru tanpa record yang memiliki parentfield dengan kata "default"
                    filtered_data = [item for item in gelarData if "default" not in item.get("parentfield")]
                    gelarParent = filtered_data[0].parent
                    gelarParentfield = filtered_data[0].parentfield
                    gelarQuantity = filtered_data[0].quantity
                    getMatriks = True
                else:
                    getMatriks = False
        except Exception as e:
            getMatriks = False
        
        # if getMatriks == True:
            # try:
            #     # Mendapatkan data
            #     mtkDoc = frappe.get_doc('SKPH Matriks Kitchen', gelarParent)
            
            #     # Melakukan pengecekan menggunakan if kondisi
            #     if mtkDoc is not None:
            #         # Lakukan sesuatu dengan data
            #         matriksDoc = mtkDoc
            #         fieldStart = f"{gelarParentfield}_time_start"
            #         fieldFinish = f"{gelarParentfield}_time_finish"
            #         # mendapatkan data dari doc
            #         valueStart = matriksDoc.get(fieldStart)
            #         valueFinish = matriksDoc.get(fieldFinish)
                    
            #     else:
            #         matriksDoc = {}
            # except Exception as e:
            #     matriksDoc = {}


    if createWrapping == True:
        if historyKitchen is not None:
            setTimeFromGelarBox()
            # menus = getMenus()
            if len(listData) > 0:
                for data in listData:
                    try:
                        wrap = frappe.get_doc({
                            "doctype": "Wrapping",
                            "sales_order": historyKitchen.sales_order,
                            "customer_name": historyKitchen.customer_name,
                            "status": status,
                            "transaction_date": historyKitchen.transaction_date,
                            "is_submit": 0,
                            "aqiqah_name": historyKitchen.aqiqah_name,
                            "wo_code": data['wo_code'],
                            "package": data['package'],
                            "info_pacakge": infoPackage,
                            "menu": data['menu'],
                            "quantity": data['quantity'],
                            "bom": data['bom'],
                            "max_capacity": data['max_capacity'],
                            "tool": data['tool'],
                            "time_start": valueStart,
                            "time_finish": valueFinish,
                            "pic_id": data['pic_id'],
                            "pic_name": data['pic_name'],
                            "notes": data['notes'],
                            "is_checklist_hp": data['is_checklist_hp'],
                            "wr_time_start": date_string,
                            "wr_time_finish": date_string,
                            "is_cook": 0,
                            "is_pause": 0,
                            "wr_pic_id": '',
                            "wr_pic_name": '',
                            "is_wr_time_start": 0,
                            "is_wr_time_finish": 0,
                            "wr_notes": '',
                            "is_no_issue": 0,
                            "is_overage": 0,
                            "is_lack": 0,
                            "quantity_overage": 0,
                            "quantity_lack": 0,
                            "location": '',
                            "record_description": '',
                            "created_by": createBy,
                            "created_at": createAt,
                            "updated_by": createBy,
                            "updated_at": createAt,
                        })
                        wrap.insert()
                        statusCode = 200
                    except Exception as e:
                        statusCode = 404
                        erorrMessage = e
                        frappe.throw(_('Gagal dalam membuat Wrapping'))
        if erorrMessage == '':
            try:
                coutip = ':::'
                so = str(salesOrderId)
                sq = str(loc.sequence)
                checkKanbanHist = frappe.db.get_list(
                    'Kanban History',
                    filters={
                        'sales_order' : salesOrderId,
                        'kanban_location' : loc.name,
                        'sequence' : loc.sequence,
                        'sales_order_kanban_sequence' : so + coutip + sq
                    },
                    fields=['name'],
                )
                if len(checkKanbanHist) == 0:
                    kanbanHist = frappe.get_doc({
                        "doctype": "Kanban History",
                        "sales_order": salesOrderId,
                        "customer_name": soData.customer_name,
                        "transaction_date": soData.event_date,
                        "sales_order_status": soData.status,
                        "kanban_location": loc.name,
                        "sequence": loc.sequence,
                        "location": loc.position,
                        "status": loc.status,
                        "application": "KANBAN SCANNER",
                        "scanned_application": "KANBAN SCANNER",
                        "kanban_type": "TYPE 1",
                        "scanned_at": createAt,
                        "scanned_by": createBy,
                        "sales_order_kanban_sequence": so + coutip + sq,
                        "created_by": createBy,
                        "created_at": createAt,
                        "updated_by": createBy,
                        "updated_at": createAt
                    })
                    kanbanHist.insert()
                statusCode = 200
            except Exception as e:
                statusCode = 404
                erorrMessage = e
                frappe.throw(_('Gagal dalam membuat Kanban History'))

            # get kanban history
            createKanban = {}
            try:
                # Mendapatkan data
                kanban = frappe.db.get_list(
                    'Kanban History', 
                    filters={
                        'sales_order': kanbanHist.sales_order,
                        'sequence': kanbanHist.sequence
                    },
                    fields= ['*'],
                    limit= 0
                )
                # Melakukan pengecekan menggunakan if kondisi
                if kanban is not None:
                    # Lakukan sesuatu dengan data
                    statusCode = 200
                    createKanban = kanban[0]
                else:
                    statusCode = 404
                    createKanban = {}
            except Exception as e:
                statusCode = 404
                createKanban = {}
                # erorrMessage = e
            
            if erorrMessage == '':
                try:
                    # Mendapatkan objek dokumen yang ingin diperbarui
                    update_so = frappe.get_doc('Sales Order', salesOrderId)
                    # Memperbarui nilai bidang
                    update_so.kanban_history = createKanban.name
                    update_so.sequence = createKanban.sequence
                    update_so.location = createKanban.location
                    update_so.kanban_status = createKanban.status
                    update_so.scanned_at = createKanban.scanned_at
                    update_so.scanned_by = createKanban.scanned_by
                    update_so.scanned_application = createKanban.scanned_application
                    # Menyimpan perubahan
                    update_so.save()
                    statusCode = 200
                except Exception as e:
                    statusCode = 404
                    erorrMessage = e
                    frappe.throw(_('Gagal dalam update sales order'))    
    else:
        erorrMessage = 'Sales Order sudah ada di Wrapping'

if is_kitchen_all_submitted == False:
    frappe.throw(_("Mohon Submit semua menu di Kitchen"))

frappe.response['statusCode'] = statusCode
frappe.response['erorrCode'] = erorrCode
# frappe.response['data1'] = valueStart
# frappe.response['data2'] = valueFinish

frappe.response['erorrMessage'] = erorrMessage