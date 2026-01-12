---
title : "Tutorial Hugo (Part 2): Cara Membuat Project Baru dan Pasang Tema PaperMod"
description : "Langkah demi langkah membuat website dengan Hugo. Mulai dari perintah hugo new site, struktur folder, instalasi tema PaperMod, hingga menjalankannya di localhost."
date : 2026-01-12T21:55:53+07:00
author : "21masbhe"
featured : false
draft : false
comment : true
toc : true
keywords :
  - cara membuat project hugo
  - install tema hugo papermod
  - struktur folder hugo
  - perintah hugo server
  - hugo new site
  - tutorial hugo bahasa indonesia
kategori :
  - Tutorial
topik :
  - Hugo
  - Web Development
images :
  - img/header/membuat-project-hugo.webp
tumbnail :
  - img/tumbnail/membuat-project-hugo.webp
---

Halo calon blogger modern! Kembali lagi di seri **"Tutorial Membuat Blog dengan Hugo"**.

Di [Part 1 kemarin](/1-persiapan-instalasi-alat-hugo/), kita sudah bersusah payah menyiapkan "dapur"nya. Kita sudah menginstal VS Code, Git, dan Hugo Extended. Sekarang, alat-alat tempur itu sudah siap digunakan.

Di **Part 2** ini, kita akan masuk ke bagian yang paling seru: **Praktek!**

Kita akan menyulap folder kosong menjadi sebuah website yang utuh dalam hitungan detik. Kita juga akan memasang "baju" (tema) agar blog Anda terlihat ganteng.

Siap? Buka VS Code Anda, dan mari kita mulai.

## Langkah 1: Membuat Kerangka Website (Generasi Awal)

Hugo memiliki perintah ajaib yang bisa membuatkan struktur folder website secara otomatis. Anda tidak perlu membuat folder satu per satu secara manual.

1.  Buka **Visual Studio Code**.
2.  Buka Terminal di VS Code (`Ctrl + ` `).
3.  Arahkan terminal ke folder tempat Anda ingin menyimpan project (misalnya di `Documents`).
4.  Ketik perintah berikut:

```bash
hugo new site blog-saya

```
![hugo new site dijalankan]

*(Anda bisa mengganti `blog-saya` dengan nama folder yang Anda inginkan, misal `web-ku`, `portofolio`, dll).*

**Apa yang terjadi?**
Dalam sekejap mata, Hugo membuat folder baru bernama `blog-saya`.

Sekarang, **PENTING**: Kita harus masuk ke folder tersebut. Ketik perintah:

```bash
cd blog-saya

```

Sekarang perhatikan di panel kiri VS Code (File Explorer). Anda akan melihat struktur folder seperti ini:

Jangan bingung dulu, ini penjelasannya singkatnya:

* **`content/`**: Di sinilah Anda akan menulis artikel (file .md).
* **`layouts/`** & **`static/`**: Tempat modifikasi tampilan (kita bahas nanti).
* **`hugo.toml`**: Pusat kendali atau pengaturan utama website Anda.

## Langkah 2: Menginstal Tema (PaperMod)

Hugo tanpa tema ibarat kerangka manusia tanpa kulit. Masih polos dan menyeramkan. Hugo tidak menyertakan tema bawaan, jadi kita harus mengunduhnya.

Kita akan menggunakan tema **PaperMod**.
*Kenapa PaperMod?* Karena tema ini sangat cepat, minimalis, mendukung *Dark Mode* otomatis, dan paling populer di komunitas Hugo.

### Cara Install Tema dengan Git

Pastikan terminal Anda sudah berada di dalam folder `blog-saya`. Ikuti 2 perintah ini:

**1. Inisialisasi Git:**
Agar kita bisa mengunduh tema dan nanti meng-upload blog ke GitHub, kita harus menjadikan folder ini sebagai repository Git.

```bash
git init

```

**2. Download Tema:**
Kita akan mengunduh PaperMod sebagai *submodule* (agar mudah di-update nantinya).

```bash
git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
```

Tunggu proses download selesai. Jika berhasil, akan muncul folder `PaperMod` di dalam folder `themes`.

## Langkah 3: Mengaktifkan Tema

Tema sudah didownload, tapi Hugo belum tahu kalau kita ingin memakainya. Kita harus memberitahu Hugo lewat file konfigurasi.

1. Klik file **`hugo.toml`** di panel kiri VS Code.
2. File ini mungkin isinya masih sedikit. Tambahkan kode berikut di baris paling bawah:

```toml
theme = "PaperMod"

```

Simpan file (`Ctrl + S`).

Sehingga isi file `hugo.toml` atau ada juga yang `config.toml` Anda kurang lebih menjadi seperti ini:

```toml
baseURL = '[https://example.org/](https://example.org/)'
languageCode = 'en-us'
title = 'Blog Saya'
theme = 'PaperMod'

```

## Langkah 4: Membuat Artikel Pertama (Halo Dunia!)

Website sudah ada, tema sudah siap. Tapi isinya masih kosong. Mari kita buat postingan pertama.

Kembali ke terminal, ketik perintah:

```bash
hugo new content posts/postingan-pertama.md

```

Hugo otomatis membuat file baru di `content/posts/postingan-pertama.md`. Buka file tersebut. Anda akan melihat bagian atas yang diapit tanda `---`. Itu disebut **Front Matter**.

Ubah isinya menjadi seperti ini:

```
  ---
  title: "Postingan Pertama Saya"
  date: 2026-01-13T09:00:00+07:00
  draft: true
  ---
  Halo dunia!
  Ini adalah artikel pertama saya menggunakan **Hugo**.
  Ternyata tidak sesulit yang dibayangkan, ya?
```

*Catatan: `draft: true` artinya tulisan ini masih draf dan belum siap terbit. Tapi kita bisa melihatnya di mode preview.*

## Langkah 5: Menjalankan Server Lokal (Live Preview)

Inilah momen yang ditunggu-tunggu! Mari kita lihat hasil kerja keras Anda di browser.

Ketik perintah ini di terminal:

```bash
hugo server -D

```

* **`hugo server`**: Perintah menyalakan mesin web server lokal.
* **`-D`**: Singkatan dari *Draft*. Kita menyuruh Hugo menampilkan tulisan yang statusnya masih `draft: true`.

Jika sukses, terminal akan menampilkan tulisan:
`Web Server is available at http://localhost:1313/`

Buka browser (Chrome/Firefox), lalu ketik alamat: **`localhost:1313`**

Tadaaa! 🎉
Selamat! Blog Anda sudah hidup di komputer Anda. Coba ubah teks di artikel Anda lalu simpan (`Ctrl+S`), browser akan otomatis me-refresh dan menampilkan perubahannya secara instan. Ajaib, kan?

## Apa Selanjutnya?

Sekarang Anda sudah punya blog yang berjalan lancar di komputer sendiri (localhost). Tapi, teman Anda di luar sana belum bisa melihatnya.

Di **Part 3 (Terakhir)**, kita akan melakukan langkah final: **Deploy ke Internet**. Kita akan mengunggah blog ini ke **GitHub Pages** agar bisa diakses oleh seluruh dunia secara **GRATIS** dan punya domain sendiri.

Jangan lewatkan part terakhir, karena di situlah blog Anda benar-benar menjadi "nyata".

**Sampai jumpa di Part 3!**