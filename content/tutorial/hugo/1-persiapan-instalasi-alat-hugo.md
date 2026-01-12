---
title : "Tutorial Hugo (Part 1): Cara Membuat Blog Super Cepat untuk Pemula"
description : "Panduan lengkap tutorial Hugo Bahasa Indonesia. Pelajari cara install Hugo Extended, Git, dan VS Code untuk membuat blog static site generator yang cepat dan aman."
date : 2026-01-12T21:53:53+07:00
author : "21masbhe"
featured : false
draft : false
comment : true
toc : true
keywords :
  - tutorial hugo bahasa indonesia
  - cara membuat blog dengan hugo
  - static site generator adalah
  - hugo vs wordpress
  - install hugo windows
  - hosting gratis github pages
kategori :
  - Tutorial
topik :
  - Hugo
  - Blogging
  - Web Development
images :
  - img/header/instalasi-hugo.webp
tumbnail :
  - img/tumbnail/instalasi-hugo.webp
---

Pernahkah Anda membuka sebuah website, lalu harus menunggu 5 hingga 10 detik hanya agar tulisan muncul? Kesal, bukan? Di era internet yang serba *sat-set* ini, kecepatan adalah segalanya. Pengunjung tidak suka menunggu, dan yang lebih penting: **Google membenci website lambat.**

Jika Anda ingin memiliki blog pribadi, portofolio, atau situs dokumentasi yang kecepatannya *ngebut*, aman dari serangan hacker, dan biaya hostingnya **gratis**, maka Anda berada di tempat yang tepat.

Lupakan WordPress yang berat. Tinggalkan Blogger yang fiturnya terbatas. Mari berkenalan dengan masa depan dunia blogging: **Hugo**.

Selamat datang di seri **"Tutorial Membuat Blog dengan Hugo"**. Ini adalah **Bagian 1**, di mana kita akan membangun fondasi yang kokoh, mulai dari persiapan alat hingga instalasi Hugo di komputer Anda.

Kita akan membahas ini dengan santai, langkah demi langkah, jadi jangan khawatir jika Anda merasa gaptek atau belum pernah menyentuh koding sama sekali. Siapkan kopi Anda, mari kita mulai!

## Apa Itu Hugo dan Mengapa Lebih Baik dari WordPress?

Sebelum kita mengunduh apa pun, kita perlu menyamakan persepsi dulu. Apa sih sebenarnya Hugo itu?

Hugo adalah sebuah **Static Site Generator (SSG)** tercepat di dunia saat ini yang dibuat menggunakan bahasa pemrograman **Go (Golang)** dari Google.

### "Tunggu, apa bedanya Hugo dengan WordPress?"

Pertanyaan bagus! Untuk memahaminya, mari kita bayangkan sebuah **Restoran**.

![Perbandingan WordPress vs Hugo: Restoran A la Carte vs Prasmanan](/img/tutorial/wordpress-vs-hugo.jpg "WordPress vs Hugo")

**1. WordPress (CMS Dinamis) = Restoran A la Carte**
Di restoran *A la Carte*, saat Anda memesan Nasi Goreng, koki di dapur baru akan mulai memotong bawang, menggoreng nasi, dan menatanya di piring. Semuanya dadakan.

* **Kekurangan:** Jika ada 1.000 pelanggan datang bersamaan, dapur akan kewalahan (*server down*), dan pelayanan jadi lambat (*loading* lama).

**2. Hugo (Static Site Generator) = Katering / Prasmanan**
Di sistem katering, makanan sudah dimasak dan dikemas rapi **sebelum** tamu datang. Saat tamu datang, makanan tinggal diserahkan. Tidak ada proses memasak dadakan.

* **Kelebihan:** **Sangat Cepat!** Karena server hanya mengirim file HTML yang sudah jadi. **Sangat Aman** (karena tidak ada database), dan **Murah** (bisa hosting gratis di GitHub Pages, Netlify, atau Vercel).

Singkatnya: Hugo mengubah artikel tulisan Anda menjadi file HTML murni dalam hitungan milidetik.

## Persiapan Alat Perang (Environment Setup)

Membangun blog dengan Hugo sedikit berbeda dengan mendaftar di Facebook. Kita akan bekerja layaknya seorang *developer* profesional. Tapi tenang, alat-alatnya gratis dan tidak menuntut spesifikasi komputer "dewa".

Kita membutuhkan 3 alat utama:

1.  **Visual Studio Code (VS Code):** *Text Editor* tempat kita menulis kode dan artikel.
2.  **Git:** Mesin waktu (*Version Control*) untuk menyelamatkan kode kita dan upload ke GitHub.
3.  **Hugo:** Mesin generator pembuat website.

Mari kita instal satu per satu.

### 1. Instalasi Text Editor: Visual Studio Code

Jangan gunakan Notepad atau Microsoft Word untuk menulis kode blog. Itu ide buruk. Kita butuh editor yang pintar. Pilihan terbaik saat ini adalah **Visual Studio Code (VS Code)**.

* **Download:** Kunjungi [code.visualstudio.com](https://code.visualstudio.com/) dan unduh sesuai OS Anda.
* **Instalasi:** Lakukan instalasi standar (*Next, Next, Finish*).
* *Tips Pro untuk Pengguna Windows:* Saat instalasi, centang opsi **"Add to PATH"** dan **"Add 'Open with Code' action to Windows Explorer context menu"**.

Setelah terinstal, buka VS Code. Agar lebih nyaman, kita pasang ekstensi pendukung:

1.  Klik ikon kotak-kotak di menu kiri (**Extensions**).
2.  Cari **"Hugo"**.
3.  Pilih **"Hugo Language and Syntax Support"** lalu klik Install.

![Tampilan instalasi Ekstensi Hugo di Visual Studio Code](/img/tutorial/ekstension-hugo.jpg "Ekstensi Hugo VS Code")

### 2. Instalasi Git (Sang Penyelamat)

Git adalah sistem kontrol versi. Anggap saja ini fitur *"Save Game"*. Git juga jembatan kita untuk meng-online-kan blog ke GitHub nanti.

* **Download:** Buka [git-scm.com](https://git-scm.com/).
* **Instalasi Windows:** Download dan install. Anda akan melihat banyak sekali pilihan teknis. Jangan panik! Biarkan semuanya **default** (bawaan), terus klik *Next* sampai selesai.

**Wajib Dilakukan Setelah Install Git:**
Kita perlu memberi tahu Git siapa pemilik komputer ini. Buka **Terminal** (atau **Git Bash** di Windows), lalu ketik perintah ini satu per satu:

```bash
git config --global user.name "Nama Anda"
git config --global user.email "emailanda@gmail.com"
```

![Git Bash atau VS Code Terminal](/img/tutorial/terminal-git.jpg)

### 3. Instalasi Hugo (Inti Tutorial Ini)

Ini adalah langkah yang paling krusial.

> **PERINGATAN PENTING:** Pastikan Anda menginstal **Hugo versi Extended**. Versi Standard tidak bisa memproses fitur modern yang dipakai oleh tema-tema blog kekinian.

#### A. Untuk Pengguna Windows (Cara Paling Mudah)

Kita gunakan **Winget** (Package Manager bawaan Windows 10 & 11).

1. Klik kanan tombol Start, pilih **Terminal (Admin)** atau **PowerShell (Admin)**.
2. Ketik perintah sakti ini, lalu tekan Enter:
`winget install Hugo.Hugo.Extended`

![PowerShell (Administrator) proses instalasi Hugo](/img/tutorial/winget-hugo.jpg)

*(Jika gagal, silakan cari alternatif menggunakan Chocolatey atau instalasi manual).*

#### B. Untuk Pengguna macOS

Buka Terminal dan gunakan Homebrew: `brew install hugo`

## Verifikasi: Apakah Semua Sudah Siap? (The Moment of Truth)

Kita sudah menginstal banyak hal. Sekarang saatnya cek apakah komputer Anda sudah siap.

1. Buka **Visual Studio Code**.
2. Di menu atas, pilih **Terminal > New Terminal**. Panel hitam akan muncul di bagian bawah layar.
3. Ketik perintah berikut untuk mengecek Hugo:

```bash
hugo version

```

**Hasil yang diharapkan:**
Anda harus melihat tulisan mirip seperti gambar di bawah ini. Perhatikan kata **+extended**.

![Hugo Version](/img/tutorial/hugo-version.jpg)

Jika kata `+extended` itu ada, SELAMAT! Anda sudah berhasil melewati tahap tersulit bagi pemula.


## Troubleshooting: Masalah yang Sering Muncul

**Error: "Hugo is not recognized as an internal or external command"**

* **Solusi:** Windows belum sadar ada aplikasi baru. Coba **Restart komputer** Anda. Jika masih gagal, Anda mungkin perlu mengatur Environment Variables (PATH) secara manual di Windows.


## Apa Selanjutnya?

Sampai di sini, Anda sudah memiliki lingkungan kerja (*environment*) yang setara dengan *web developer* profesional.

Di **Part 2**, kita akan mulai masuk ke bagian serunya. Kita akan menjalankan perintah "sihir" untuk membuat struktur blog dalam 1 detik, memasang tema yang cantik, dan melihat tampilan blog pertama Anda di browser!

Tetap semangat, perjalanan menjadi blogger modern baru saja dimulai.

**Ada kendala saat instalasi? Tulis pesan error yang Anda temui di kolom komentar di bawah, mari kita diskusikan solusinya!**