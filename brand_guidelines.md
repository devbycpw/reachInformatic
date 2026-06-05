# Brand Guidelines

Panduan Identitas Visual ini disusun berdasarkan analisis aset visual pada berkas **Screenshot 2026-06-05 at 09.10.08 1.jpg**. Dokumen ini dirancang untuk memberikan pemahaman yang jelas dan mendalam mengenai filosofi desain, palet warna, sistem tipografi, serta implementasinya guna memastikan konsistensi visual di seluruh platform.

---

## 1. Filosofi & Pendekatan Desain

Berdasarkan riset mendalam terhadap tren desain modern dan pengalaman pengguna (*user experience*), dipilihlah gaya desain yang **cerah dan ringan (*bright and light design style*)**. 

*   **Tujuan:** Memastikan seluruh komponen visual dan warna memiliki kontras yang tinggi, menonjol (*stand out*), mudah dibaca, serta memberikan kenyamanan visual yang optimal bagi pengguna.
*   **Karakteristik:** Bersih, minimalis, profesional, dan berorientasi pada kemudahan navigasi informasi (kejelasan hierarki).

---

## 2. Palet Warna (Color Palette)

Identitas visual ini menggunakan kombinasi warna netral yang kuat serta warna aksen biru yang dinamis untuk menciptakan kesan profesional, modern, dan tepercaya.

| Kode Hex | Nama Warna (Saran) | Karakter & Representasi | Contoh Penggunaan |
| :--- | :--- | :--- | :--- |
| **`#1C1917`** | Charcoal / Dark Stone | Dominan gelap, memberikan kontras tajam. Pengganti hitam murni agar lebih lembut di mata. | Teks utama, judul, warna latar belakang elemen gelap (*dark mode/components*). |
| **`#D6D3D1`** | Light Gray / Platinum | Warna netral sekunder yang lembut dan bersih. | Batas elemen (*borders*), latar belakang komponen, teks sekunder (*subtle hints*). |
| **`#FFFFFF`** | Pure White | Bersih, memberikan ruang bernapas (*white space*) pada desain. | Latar belakang utama halaman, teks di atas latar belakang gelap. |
| **`#ADDBFF`** | Sky Blue | Lembut, segar, dan berfungsi sebagai aksen pendukung. | Efek *hover*, latar belakang kartu sorotan (*highlight cards*), status aktif ringan. |
| **`#0077E6`** | Electric Blue | Berenergi, profesional, tepercaya, dan sangat kontras. | Tombol utama (*Call to Action / CTA*), tautan aktif, ikon penting, penanda fokus. |

---

## 3. Sistem Tipografi (Typography)

Sistem tipografi menggunakan satu keluarga font tunggal yang sangat serbaguna untuk menjaga konsistensi yang ketat, yaitu **Inter**.

*   **Font Family:** Inter (Sangat dioptimalkan untuk keterbacaan di layar digital).
*   **Font Weights (Ketebalan):** `Regular` $ightarrow$ `Medium` $ightarrow$ `Semi Bold` $ightarrow$ `Bold`.

### Skala Tipografi (Type Scale)

Berikut adalah tabel spesifikasi hierarki teks yang harus dipatuhi secara ketat dalam implementasi UI/UX maupun desain grafis:

| Nama Gaya (Name) | Ketebalan (Font Weight) | Ukuran (Font Size) | Jarak Antar Baris (Line Height) | Jarak Huruf (Letter Spacing) | Rekomendasi Penggunaan |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Title L** | Bold | 36 | 40 | 0% | Judul halaman utama (*H1*), halaman depan (*Landing Page*). |
| **Title M** | Semi Bold | 24 | 32 | 0% | Judul bagian besar (*Sub-sections / H2*). |
| **Title S** | Semi Bold | 18 | 24 | 0% | Judul di dalam kartu komponen atau sub-bagian (*H3*). |
| **Headline L** | Bold | 16 | 20 | 0% | Judul artikel, teks penekanan utama. |
| **Headline M** | Semi Bold | 16 | 20 | 0% | Sub-judul atau penekanan menengah pada komponen UI. |
| **Headline S** | Medium | 16 | 20 | 0% | Penekanan ringan, teks label menu penting. |
| **Caption** | Medium | 14 | 16 | 0% | Keterangan gambar, teks bantuan bawah, atau *tooltip*. |
| **Body L** | Regular | 16 | 24 | 0% | Teks paragraf utama pada artikel atau dokumen panjang. |
| **Body M** | Medium | 14 | 18 | 0% | Teks deskripsi standar pada kartu (*cards*) atau input form. |
| **Body S** | Medium | 12 | 16 | 0,1px | Teks informasi sekunder atau syarat & ketentuan (*T&C*). |
| **HEADLINE CAPS** | Semi Bold | 12 | 16 | 0,4px | Label kategori atas, teks tombol kecil, format huruf kapital (*UPPERCASE*). |

---

## 4. Panduan Implementasi Praktis

Untuk menjaga agar desain tetap terlihat harmonis, perhatikan beberapa aturan kombinasi berikut:

1. **Kontras Teks dan Latar Belakang:**
   * Gunakan teks berwarna `#1C1917` di atas latar belakang `#FFFFFF` atau `#D6D3D1` untuk keterbacaan teks tubuh (*Body*) yang optimal.
   * Gunakan teks berwarna `#FFFFFF` saat ditempatkan di atas komponen tombol utama berwarna `#0077E6`.
2. **Penggunaan Warna Aksen (Biru):**
   * Jangan gunakan warna `#0077E6` secara berlebihan pada teks biasa. Warna ini dikhususkan untuk elemen interaktif seperti tombol, tautan hyper-link, atau ikon penunjuk aksi.
3. **Penerapan Jarak Huruf (*Letter Spacing*):**
   * Perhatikan bahwa gaya teks terkecil (**Body S** dan **HEADLINE CAPS**) membutuhkan sedikit *letter spacing* tambahan (0,1px dan 0,4px) agar huruf tidak terlihat terlalu rapat dan tetap nyaman dibaca pada resolusi layar yang rendah.
