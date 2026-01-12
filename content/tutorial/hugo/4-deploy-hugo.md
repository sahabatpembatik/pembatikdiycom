---
title : "Tutorial Hugo (Part 4): Cara Deploy Website ke Internet Gratis"
description : "Cara mudah meng-online-kan website Hugo Anda menggunakan layanan gratis GitHub Pages dan Netlify."
date : 2026-01-12T21:57:53+07:00
author : "21masbhe"
featured : true
draft : false
comment : true
toc : true
keywords : 
  - Hugo
  - Deployment
  - GitHub Pages
  - Netlify
  - Hosting Gratis
kategori : 
  - Tutorial
topik :
  - Web Development
  - DevOps Dasar
seri : 
  - Belajar Hugo dari Nol
---

## Tutorial Hugo (Part 4): Cara Deploy Website Hugo Anda Secara Gratis

Selamat! Anda sudah berhasil membuat project Hugo, memasang tema, dan membuat artikel pertama Anda. Sekarang, saatnya menunjukkan hasil kerja keras Anda kepada dunia dengan melakukan **Deployment**.

Di Part 4 ini, kita akan belajar cara mempublikasikan website Hugo Anda secara **gratis** menggunakan dua platform populer: **GitHub Pages** dan **Netlify**.

### Memahami Proses Build Hugo

Sebelum deploy, Anda perlu tahu bahwa Hugo tidak langsung mengupload file `.md` atau `.toml` Anda. Hugo akan "membangun" (build) semua file tersebut menjadi **file HTML, CSS, dan JavaScript statis** yang siap diupload.

Untuk melakukan build, jalankan perintah ini di terminal project Anda:

```powershell
hugo

```

Setelah perintah ini dijalankan, Anda akan melihat folder baru bernama `public/` di dalam direktori project Anda. Folder inilah yang berisi semua file website yang siap untuk di-online-kan.

### Opsi 1: Deploy Menggunakan GitHub Pages (Cocok untuk Pemula)

GitHub Pages adalah cara termudah dan gratis untuk hosting website statis langsung dari repositori GitHub Anda.

**Langkah 1: Buat Repositori GitHub Baru**

1. Buka [GitHub](https://github.com/) dan login.
2. Buat repositori baru. Beri nama yang sama dengan **username GitHub Anda** diikuti `.github.io`.
* **Contoh:** Jika username Anda `johndoe`, nama repositorinya `johndoe.github.io`. Ini penting agar GitHub Pages bisa mengenali sebagai personal site.
* Jika ini untuk project, Anda bisa beri nama apa saja, misalnya `my-hugo-site`.



**Langkah 2: Inisialisasi Git di Project Lokal Anda**

Buka terminal di folder root project Hugo Anda, lalu jalankan perintah ini:

```powershell
git init
git add .
git commit -m "Initial commit Hugo site"

```

**Langkah 3: Push Folder `public` ke Repositori GitHub**

Ini adalah cara paling sederhana untuk GitHub Pages, yaitu hanya mengupload isi folder `public`.

```powershell
git remote add origin https://github.com/USERNAME_ANDA/REPOS_ANDA.github.io.git
git subtree add --prefix public origin master

```

**Penjelasan:**

* `--prefix public`: Memberi tahu Git bahwa hanya isi dari folder `public` yang akan di-push ke branch utama (`master`) repositori GitHub Anda.

**Langkah 4: Konfigurasi GitHub Pages**

1. Di repositori GitHub Anda, pergi ke tab **Settings**.
2. Di sidebar kiri, klik **Pages**.
3. Di bagian "Source", pilih branch **`master`** (atau `main` jika itu nama branch default Anda) dan folder **`/ (root)`**.
4. Klik **Save**.

Tunggu beberapa menit. Website Anda akan online di alamat `https://USERNAME_ANDA.github.io`.

### Opsi 2: Deploy Menggunakan Netlify (Fitur Lebih Lengkap & Otomatis)

Netlify menawarkan deployment yang lebih otomatis dan cepat, serta fitur tambahan seperti SSL gratis, domain kustom, dan form.

**Langkah 1: Buat Akun Netlify**

1. Buka [Netlify](https://www.netlify.com/) dan daftar (bisa pakai akun GitHub).

**Langkah 2: Buat Repositori GitHub/GitLab/Bitbucket untuk Seluruh Project Hugo Anda**

Untuk Netlify, Anda akan mengupload **seluruh folder project Hugo Anda** ke GitHub (bukan hanya folder `public`).

1. Buat repositori baru di GitHub (misal: `my-hugo-project`).
2. Push seluruh project Hugo Anda ke repositori tersebut.
```powershell
git init
git add .
git commit -m "Full Hugo project commit for Netlify"
git remote add origin https://github.com/USERNAME_ANDA/my-hugo-project.git
git push -u origin master

```



**Langkah 3: Hubungkan Netlify dengan Repositori Anda**

1. Di dashboard Netlify, klik **"Add new site"** lalu **"Import an existing project"**.
2. Pilih **GitHub** (atau penyedia Git lainnya).
3. Cari dan pilih repositori Hugo Anda (`my-hugo-project`).
4. Pada pengaturan deployment, Netlify biasanya mendeteksi Hugo secara otomatis:
* **Build command:** `hugo --minify`
* **Publish directory:** `public`


5. Klik **"Deploy site"**.

Netlify akan secara otomatis mengambil kode dari GitHub, menjalankan perintah `hugo --minify`, dan mempublikasikan isi dari folder `public`. Setiap kali Anda melakukan `git push` ke repositori, Netlify akan secara otomatis membangun ulang dan memperbarui website Anda.

### Konfigurasi `baseURL` Penting

Sebelum deploy ke mana pun, pastikan `baseURL` di file `hugo.toml` Anda diatur dengan benar ke alamat URL final website Anda.

Contoh:

```toml
baseURL = "https://usernameanda.github.io/" # Untuk GitHub Pages
# ATAU
baseURL = "https://namasitusanda.netlify.app/" # Untuk Netlify (ganti dengan URL yang diberikan Netlify)

```

Ini penting agar semua link dan aset di website Anda mengarah ke lokasi yang benar setelah online.


Selamat! Website Hugo Anda sekarang sudah online dan bisa diakses oleh siapa saja di internet. Anda sudah berhasil melewati seluruh seri tutorial ini.
