# 📅 Jadwal Presentasi Kurikulum Sekolah

Aplikasi web sederhana untuk menampilkan jadwal presentasi kurikulum sekolah di lingkungan Yayasan BOPKRI Yogyakarta.

## ✨ Fitur

- 🏫 Menampilkan daftar sekolah yang akan presentasi
- 📅 Menampilkan hari dan tanggal presentasi
- 🕒 Menampilkan jam presentasi
- 🔗 Tombol Mulai Zoom untuk setiap sekolah
- 🔍 Pencarian sekolah
- 🗓️ Filter berdasarkan tanggal
- 📊 Dashboard statistik
  - Total Sekolah
  - Total Tanggal Presentasi
  - Hasil Ditampilkan
- ✅ Otomatis menandai sesi yang telah selesai
- 📱 Responsive untuk desktop dan mobile

## 🛠️ Teknologi yang Digunakan

- React
- Vite
- Lucide React
- CSS

## 🚀 Menjalankan Project

### Install Dependencies

```bash
npm install
```

### Menjalankan Development Server

```bash
npm run dev
```

### Build Production

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## 📁 Struktur Folder

```text
src/
├── assets/
│   └── logo.png
├── components/
│   ├── ScheduleList.jsx
│   └── CreateByMe.jsx
├── data/
│   └── schedule.js
├── App.jsx
├── App.css
└── main.jsx
```

## 📌 Cara Menambahkan Link Zoom

Buka file:

```text
src/data/schedule.js
```

Kemudian ubah:

```js
link: '#'
```

Menjadi:

```js
link: 'https://zoom.us/j/xxxxxxxxxx'
```

## 👨‍💻 Author

Created by Mas Don

Portfolio:

https://portofolio-ku-gold.vercel.app
