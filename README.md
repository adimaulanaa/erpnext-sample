# Kustomisasi ERPNext dan Pengembangan Frappe Framework

### Tujuan Repositori

Repositori ini menyajikan **contoh implementasi teknis dan kustomisasi** yang saya kembangkan menggunakan **ERPNext** dan **Frappe Framework**. Repositori ini bertujuan untuk mendemonstrasikan pengalaman saya dalam:

* Memperluas fungsionalitas ERPNext standar.
* Mengembangkan logika bisnis kustom di sisi server dan klien.
* Menerapkan praktik terbaik dalam pengembangan Frappe/Python.

Proyek ini adalah *sample* portofolio pribadi yang digunakan sebagai referensi.

---

### Sorotan Teknis (Panduan Tinjauan Kode)

Berikut adalah beberapa area kunci di repositori ini yang menunjukkan keahlian saya dalam pengembangan ERPNext. Calon Atasan disarankan untuk meninjau folder/file berikut:

| Area Keahlian | Implementasi yang Dapat Dilihat | Lokasi / Folder yang Disarankan |
| :--- | :--- | :--- |
| **Server Script** | Logika bisnis yang berjalan di sisi *server*, seperti *hook* **`before_save`** atau **`after_submit`** untuk validasi dan otomatisasi data. | Lihat `hooks.py` dan *methods* di file `.py` terkait. |
| **Custom Script (Client-Side)** | Kustomisasi perilaku formulir (**form behavior**) menggunakan JavaScript, seperti *field dependency*, *filtering*, atau *validation* sisi klien. | `/custom_app/public/js/[nama_doctype].js` atau melalui fitur Custom Script bawaan Frappe. |
| **Report Query** | Contoh pembangunan **Laporan Kustom** menggunakan *SQL Query* langsung untuk menyajikan data non-standar atau performa tinggi. | `/custom_app/[nama_modul_anda]/report/` |
| **Print Format Form** | Kustomisasi tata letak dokumen yang akan dicetak (seperti Invoice, Sales Order, dll.) menggunakan HTML/Jinja/Javascript. | `/custom_app/[nama_modul_anda]/print_format/` atau pengaturan *Print Format* kustom. |

---

### Teknologi & *Stack*

* **Platform Inti:** ERPNext & Frappe Framework (Versi **13**)
* **Bahasa Pemrograman:** Python, JavaScript
* **Metodologi:** Kustomisasi Frappe App.

---

### Catatan Penting

Kode dalam repositori ini adalah *sample* portofolio pribadi dan **bukan** kode properti intelektual (IP) dari perusahaan mana pun.

### Informasi Kontak

* **Nama:** **Adi Maulana**
* **Email:** **adimaulana0777@gmail.com**
* **LinkedIn:** **www.linkedin.com/in/adi-maulana**
