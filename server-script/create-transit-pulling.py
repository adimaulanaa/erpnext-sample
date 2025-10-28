salesOrderId = frappe.form_dict.sales_order
location = frappe.form_dict.location
createBy = frappe.form_dict.created_by
createAt = frappe.form_dict.created_at

statusCode = ''
erorrCode = ''
erorrMessage = ''
checkMatriksError = ''
deliveryNoteId = ''
childName = ''
merchendise = '-'
quantityMerchendise = 0

createTransit = False
hasNotNone = False

pack = []
loc = {}
soData = {}
infoPacakge = []
merchPacakge = []


try: 
    try:
        pack = frappe.db.get_list(
            'Packaging', 
            filters={
                'sales_order': salesOrderId,
            },
            fields= ['name'],
            limit= 0
        )
        if pack is not None:
            if len(pack) > 0:
                try:
                    mtrk = frappe.db.get_list(
                        'Transit Pulling', 
                        filters={
                            'sales_order': salesOrderId,
                        },
                        fields= ['name'],
                        limit= 0
                    )
                    if mtrk is not None:
                        if len(mtrk) > 0:
                            createTransit = False
                            hasNotNone = True
                            erorrMessage = 'Sales Order sudah ada di Transit Pulling'
                        else:
                            createTransit = True
                except Exception as e:
                    createTransit = True
                    hasNotNone = True
                    erorrMessage = 'Sales Order sudah ada di Transit Pulling'
            
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
                createTransit = False
                erorrMessage = 'Sales Order belum ada di Packaging'
    except Exception as e:
        createTransit = False
        erorrMessage = 'Sales Order belum ada di Packaging'

    if hasNotNone == False:
        if soData is not None:
            sumChildren = []
            aqiqah = soData.aqiqah_detail
            aqiqahDetail = soData.aqiqah_package_menu
            for ch in aqiqah:
                names = ch.aqiqah_name
                sumChildren.append(names)
            childName = ", ".join(sumChildren)

            # set tumbler
            if soData.is_free_tumbler == 1:
                merchPacakge.append({
                    "type": "TUMBLER",
                    "type_name": "Tumbler",
                    "quantity": soData.free_tumbler_quantity,
                    "sales_order": salesOrderId
                })
            
            # set bingkai
            if soData.is_free_bingkai == 1:
                merchPacakge.append({
                    "type": "BINGKAI",
                    "type_name": "Bingkai",
                    "quantity": soData.free_bingkai_quantity,
                    "sales_order": salesOrderId
                })

            # set gift
            if soData.is_gift_note == 1:
                merchendise = soData.gift_note
                quantityMerchendise = soData.gift_quantity

            if len(soData.order_detail) > 0:
                for e in soData.order_detail:
                    infoPacakge.append({
                        "type": e.type,
                        "type_name": e.item_name,
                        "quantity": e.quantity,
                        "sales_order": salesOrderId
                })
            # # set menu
            # if len(aqiqahDetail) > 0:
            #     for e in aqiqahDetail:
            #         infoPacakge.append({
            #             "type": e.type,
            #             "type_name": e.order_type,
            #             "quantity": e.quantity,
            #             "sales_order": salesOrderId
            #     })
    else :
        frappe.throw(_("Sales Order sudah ada di Transit Pulling"))

    if hasNotNone == False:
        if createTransit == True:
            try:
                packaging = frappe.get_doc(
                    'Packaging',
                    pack[0].name
                )
                trans = frappe.get_doc({
                    "doctype": "Transit Pulling",
                    "sales_order": soData.name,
                    "customer_name": soData.customer_name,
                    "transaction_date": soData.event_date,
                    "event_date": soData.event_date_time,
                    "is_submit": 0,
                    'delivery' : packaging.delivery,
                    "aqiqah_name": childName,
                    "quantity_merchendise": quantityMerchendise,
                    "merchendise": merchendise,
                    "notes": soData.notes,
                    "merchandise_package": merchPacakge,
                    "info_pacakge": infoPacakge,
                    "created_by": createBy,
                    "created_at": createAt,
                    "updated_by": createBy,
                    "updated_at": createAt,
                })
                trans.insert()
                statusCode = 200
            except Exception as e:
                statusCode = 404
                erorrMessage = e
                frappe.throw(_('Gagal dalam membuat Transit Pulling'))

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
                    else:
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
    else :
        frappe.throw(_("Sales Order sudah ada di Transit Pulling"))
except Exception as e:
    frappe.throw(_("Gagal membuat Transit Pulling"))


frappe.response['statusCode'] = statusCode
frappe.response['erorrCode'] = erorrCode
frappe.response['erorrMessage'] = erorrMessage
