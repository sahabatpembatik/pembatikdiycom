---
title : "Tutorial Hugo (Part 3): Membuat Postingan dan Menu Navigasi"
description : "Panduan langkah demi langkah membuat artikel pertama menggunakan Markdown, memahami Front Matter, dan mengatur menu navigasi di Hugo."
date : 2026-01-12T21:56:53+07:00
author : "21masbhe"
featured : false
draft : false
comment : true
toc : true
keywords : 
  - Hugo
  - Markdown
  - Front Matter
  - Konfigurasi Menu
kategori : 
  - Tutorial
topik :
  - Web Development
  - Static Site Generator
seri : 
  - Belajar Hugo dari Nol
---

Halo! Di **Part 2**, kita sudah berhasil membuat project Hugo dan memasang tema (baik itu PaperMod atau tema simpel lainnya).

Sekarang, website Anda masih kosong melompong. Di **Part 3** ini, kita akan belajar cara "mengisi" rumah kosong tersebut dengan artikel, memahami apa itu Markdown, dan mengatur menu navigasi agar website terlihat profesional.

### 1. Membuat File Postingan Baru

Di Hugo, Anda tidak membuat file HTML secara manual. Kita menggunakan perintah CLI (Command Line) untuk membuat kerangka artikel.

Buka terminal (PowerShell/CMD) di dalam folder project Anda, lalu ketik:

```powershell
hugo new posts/artikel-pertama-saya.md

```

**Penjelasan:**

* `posts/` : Ini adalah folder di dalam direktori `content`. Beberapa tema mungkin menggunakan nama folder `post` (tanpa s) atau `blog`. Cek dokumentasi tema Anda, tapi biasanya `posts` adalah standar.
* `.md` : Ekstensi file Markdown.

### 2. Memahami Front Matter (Metadata)

Sekarang, buka file yang baru saja dibuat tersebut (`content/posts/artikel-pertama-saya.md`) menggunakan Text Editor (Notepad/VS Code).

Di bagian paling atas, Anda akan melihat kotak yang diapit tanda `+++` (TOML) atau `---` (YAML). Ini disebut **Front Matter**. Isinya adalah informasi tentang artikel tersebut.

Contoh (Format TOML):

```toml
+++
title = "Artikel Pertama Saya"
date = 2026-01-12T23:00:00+07:00
draft = true
+++

```

**Poin Penting:**

* **`draft = true`**: Ini artinya artikel masih berupa **konsep**. Hugo tidak akan menampilkannya di website versi final kecuali Anda mengubahnya menjadi `false` atau memaksa server untuk menampilkan draft.

### 3. Mulai Menulis dengan Markdown

Di bawah penutup Front Matter (`+++` atau `---`), mulailah menulis isi artikel Anda. Hugo menggunakan format **Markdown**.

Contoh isi artikel:

```markdown
Halo dunia! Ini adalah paragraf pertama saya di Hugo.

## Ini Adalah Sub-Judul (Heading 2)

Saya bisa membuat teks menjadi **tebal (bold)** atau *miring (italic)* dengan mudah.

* Ini adalah daftar (list)
* Poin kedua
* Poin ketiga

[Klik di sini](https://google.com) untuk membuat link.

```

### 4. Menampilkan Hasil (Local Server)

Simpan file tersebut. Kembali ke terminal, dan jalankan server.

Karena status artikel tadi masih `draft = true`, kita **wajib** menggunakan bendera `-D` agar artikelnya muncul:

```powershell
hugo server -D

```

Buka browser di `http://localhost:1313`. Selamat! Artikel pertama Anda sudah muncul.

### 5. Mengatur Menu Navigasi (Config)

Agar pengunjung mudah menjelajah, kita perlu menambahkan menu di bagian atas (Home, Blog, About, dll).

Buka file konfigurasi utama Anda (`hugo.toml`). Tambahkan kode berikut di bagian bawah:

```toml
[menu]

  [[menu.main]]
    identifier = "home"
    name = "Beranda"
    url = "/"
    weight = 10

  [[menu.main]]
    identifier = "posts"
    name = "Artikel"
    url = "/posts/"
    weight = 20

  [[menu.main]]
    identifier = "about"
    name = "Tentang"
    url = "/about/" # Pastikan Anda nanti membuat file content/about.md
    weight = 30

```

* **Weight**: Menentukan urutan menu. Angka lebih kecil akan muncul di sebelah kiri.
* **URL**: Arah link tujuan.

### 6. "Menerbitkan" Artikel

Jika artikel Anda sudah selesai ditulis dan siap dibaca publik (bukan draft lagi):

1. Buka file artikel `.md` tadi.
2. Ubah `draft = true` menjadi `draft = false`.
3. Simpan file.

Sekarang, jika Anda menjalankan perintah `hugo server` (tanpa `-D`), artikel tersebut akan tetap muncul. Ini artinya artikel siap untuk di-deploy ke internet.


### Apa Selanjutnya?

Website Anda sudah punya konten dan menu navigasi. Tapi, ini masih berjalan di komputer lokal Anda (localhost). Teman Anda belum bisa melihatnya.

Di **Part 4 (Terakhir)**, kita akan membahas cara **Deployment**: Meng-online-kan website Hugo Anda secara **GRATIS** menggunakan GitHub Pages atau Netlify.
