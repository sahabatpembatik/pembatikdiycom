---
title: Kumpulan Prompt Gemini Membuat Media Pembelajaran Interaktif
slug: propting-gemini-mpi
date: 2026-08-23T08:00:00+07:00
draft: false
description: Temukan kumpulan prompt Gemini pilihan untuk membantu guru membuat media pembelajaran interaktif, game edukasi, dan storyboard secara praktis!
author: 21masbhe
featured: false
comment: true
toc: true
keywords:
  - prompt membuat media interaktif gemini
  - media pembelajaran interaktif gemini ai
  - prompt ai untuk guru
  - cara menggunakan gemini untuk media pembelajaran
  - game edukasi html css js gemini
kategori:
  - Tutorial
topik:
  - AI dan Pendidikan
lastmod: 2026-08-23T15:53:32.933Z
---

Banyak guru ingin membuat **media pembelajaran interaktif** yang menarik, tetapi sering kali terbentur oleh keterbatasan waktu dan kemampuan teknis koding. Menulis kode pemrograman dari nol tentu membutuhkan waktu berhari-hari. Untungnya, kehadiran teknologi kecerdasan buatan seperti **Google Gemini** kini dapat membantu guru merancang media pembelajaran interaktif dengan cepat, mulai dari menyusun ide, menulis naskah, membuat gambar, hingga menghasilkan kode game edukasi siap pakai.

Namun, hasil yang diberikan oleh Gemini sangat bergantung pada instruksi yang Anda ketikkan. Menulis prompt untuk AI itu diibaratkan seperti **memberikan resep kepada seorang asisten koki**. Jika Anda hanya berkata, *"Tolong buatkan makanan yang enak,"* asisten koki akan bingung dan menyajikan hidangan acak. Sebaliknya, jika Anda memberikan instruksi detail seperti, *"Tolong buatkan nasi goreng pedas sedang dengan tambahan telur ceplok dan sosis untuk anak usia 10 tahun,"* Anda akan mendapatkan hidangan yang sangat pas di lidah. Begitu pula dengan Gemini—semakin spesifik dan berstruktur instruksi Anda, semakin akurat media interaktif yang dihasilkan.

Berikut adalah panduan lengkap dan kumpulan template prompt siap pakai untuk membantu Anda memproduksi bahan ajar interaktif berkualitas tinggi menggunakan Gemini!

## Prasyarat & Persiapan (Prerequisites)

Sebelum Anda mulai menyalin dan mempraktikkan prompt di bawah ini, pastikan Anda telah menyiapkan hal-hal berikut:

- [ ] **Akun Google/Belajar.id:** Akses laman resmi Gemini di [https://gemini.google.com](https://gemini.google.com) menggunakan akun Anda.
- [ ] **Capaian Pembelajaran (CP):** Tentukan satu CP atau Tujuan Pembelajaran (TP) spesifik yang ingin Anda sasar.
- [ ] **Karakteristik Siswa:** Pahami rentang usia dan tingkat kelas siswa Anda agar bahasa yang dihasilkan AI tetap ramah anak.
- [ ] **Aplikasi Editor Kode (Opsional):** Siapkan Notepad atau VS Code jika Anda berencana mengekstrak kode game HTML/JS.


## Menggunakan Prompt Gemini

Untuk mendapatkan hasil yang optimal, kita harus menggunakan formula khusus. Gunakan formula **PARTS (Persona, Aim, Recipients, Theme, Structure)** atau **Formula Prompt Efektif (Peran, Konteks, Tugas, Format, Batasan)** agar respons AI tidak meleset dari tujuan pembelajaran Anda.


Berikut adalah 4 eksperimen prompt praktis yang dapat langsung Anda salin dan sesuaikan di dalam chat Gemini:

### 1: Prompt Merancang Storyboard Media Interaktif
Sebelum merakit media, Anda harus menyusun alur cerita atau storyboard. Storyboard ini berfungsi memetakan adegan demi adegan secara terstruktur.

**Salin Prompt Ini ke Gemini:**
```text
Bertindaklah sebagai desainer media pembelajaran SD. Buatkan storyboard media interaktif tentang materi [Masukkan Materi Anda, Contoh: Siklus Air]. Buatlah tabel storyboard yang terdiri dari kolom:
1. Nomor Slide
2. Judul Bagian
3. Narasi/Teks (Gunakan bahasa anak SD yang menarik dan ramah anak)
4. Ide Visual (Gambar/Animasi apa yang harus muncul di layar)
5. Interaksi (Apa yang harus diklik atau digeser oleh siswa)

Sertakan garis besar isi media di awal dan juga ide pertanyaan pemantik di awal slide agar merangsang rasa ingin tahu siswa.
```

### 2: Prompt Membuat Gambar Visual / Ilustrasi Pendukung
Media pembelajaran interaktif membutuhkan visual pendukung yang relevan dan estetis agar menarik perhatian siswa secara visual.

**Salin Prompt Ini ke Gemini:**
```text
Sebagai guru [Masukkan Kelas, Contoh: SD Kelas IV], buatkan instruksi prompt gambar yang sangat detail tentang [Masukkan Objek Gambar, Contoh: Ilustrasi proses evaporasi air laut menjadi awan dengan karakter awan yang lucu dan tersenyum]. Gambar ini akan digunakan untuk [Masukkan Tujuan, Contoh: Menjelaskan tahap awal siklus hidrologi]. Gunakan gaya visual kartun yang cerah, edukatif, dan ramah anak.
```
*(Catatan: Anda dapat menggunakan teks deskripsi gambar yang dihasilkan Gemini untuk dimasukkan ke pembuat gambar AI terintegrasi)*.


### 3: Prompt Membuat Storybook / Kerangka Cerita Edukasi
Pendekatan narasi atau storytelling sangat efektif untuk menanamkan pemahaman mendalam dan nilai-nilai karakter pada siswa.

**Salin Prompt Ini ke Gemini:**
```text
Buatkan cerita bergambar sangat pendek (maksimal 8 kalimat) dengan tokoh utama [Masukkan Tokoh, Contoh: Kiko si Kucing kecil yang cerdas]. Pastikan cerita mengajarkan nilai [Masukkan Nilai Karakter, Contoh: tenggang rasa dan gemar berbagi makanan] dan semua kalimat menggunakan kata-kata sederhana yang ramah anak untuk [Masukkan Target Kelas, Contoh: Kelas 2 SD].
```

### 4: Prompt Membuat Game Edukasi Berbasis Canvas (HTML & JS)
Jika Anda ingin membuat game kuis interaktif yang bisa dijalankan secara *offline* di laptop atau HP siswa tanpa perlu menginstal aplikasi tambahan, mintalah kode pemrograman siap pakai kepada Gemini.

**Salin Prompt Ini ke Gemini:**
```text
Buatkan canvas game kuis interaktif sederhana tentang materi [Masukkan Materi, Contoh: Pecahan Matematika Kelas IV SD].

Ketentuan Game:
1. Gunakan teknologi single file HTML, CSS, dan vanilla JavaScript agar game dapat dijalankan secara offline di browser HP atau laptop siswa tanpa perlu server.
2. Berisi aktivitas kuis interaktif sebanyak 5 butir soal.
3. Desain ramah anak yang menarik (menggunakan palet warna cerah, tombol besar yang mudah diklik, dan responsif untuk layar sentuh handphone).
4. Sediakan elemen interaksi seret-lepas (drag & drop) atau aktivitas menjodohkan di dalam salah satu soalnya.
5. Lengkapi dengan fitur penilaian skor otomatis dan pop-up pesan apresiasi 'Selamat!' jika jawaban benar, atau 'Coba Lagi!' jika jawaban siswa salah.
```
*(Setelah Gemini memberikan kode, Anda cukup menyalin seluruh kode tersebut ke dalam Notepad, lalu menyimpannya dengan nama akhiran `.html`, misalnya `game-kuis.html`. Game pun siap dimainkan siswa secara offline!)*.

---

## Tips Tambahan & Troubleshooting bagi Guru

Saat berkolaborasi dengan AI Gemini untuk memproduksi bahan ajar interaktif, Anda mungkin menghadapi beberapa situasi berikut:

1. **Respons AI Terlalu Panjang atau Bahasanya Terlalu Kaku**
   * *Solusi:* Berikan perintah perbaikan (*refine prompt*). Contohnya: *"Sederhanakan bahasa di atas agar lebih ramah untuk anak usia 7 tahun dan buat kalimatnya tidak lebih dari 12 kata per kalimat."*.
2. **Kode HTML Game Tidak Berjalan Saat Dibuka**
   * *Solusi:* Salin pesan eror yang muncul di peramban, lalu kirimkan kembali ke Gemini dengan instruksi: *"Kode JavaScript pada bagian kuis tidak berfungsi di browser. Periksa bagian fungsi pencocokan skor dan berikan perbaikan kodenya."*.
3. **Keterbatasan Etika dan Akurasi**
   * *Solusi:* Selalu lakukan cek fakta (*cross-check*) terhadap data, rumus, atau soal yang dihasilkan oleh Gemini. Pastikan AI bertindak sebagai kolaborator cerdas pendukung kreativitas Anda, bukan sebagai pengganti mutlak peran pedagogis Anda di kelas.


Pemanfaatan Google Gemini sebagai mesin kreasi membantu guru menghemat waktu secara signifikan dalam menyusun media pembelajaran yang dinamis dan berpusat pada murid. Dengan menerapkan teknik penulisan prompt yang jelas, spesifik, dan berstruktur, Anda dapat mengubah konsep pembelajaran yang abstrak menjadi sebuah game edukatif yang nyata, menyenangkan, dan bermakna bagi siswa.

Apakah Anda sudah siap bereksperimen dengan template prompt di atas untuk kelas Anda esok hari? Dari keempat jenis prompt tersebut, tipe media interaktif mana yang paling ingin Anda coba buat pertama kali? 

Sampaikan rencana kreatif Anda di kolom komentar di bawah ini! Mari kita saling bertukar ide dan berdiskusi untuk menciptakan iklim digitalisasi sekolah yang lebih inovatif.