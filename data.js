const LearningData = {
  "grades": {
    "10": {
      "dasar": {
        "materials": [
          {
            "title": "Pengenalan Algoritma dan Pemrograman",
            "description": "Dasar-dasar pemahaman algoritma, representasi, dan langkah awal pemrograman.",
            "apersepsi": "\n<div class=\"apersepsi\">\n  <h4>💡 Apersepsi</h4>\n  <p>Pernahkah kamu bertanya bagaimana sebuah aplikasi sederhana — misalnya kalkulator atau program menampilkan daftar nilai — \n  bisa selalu melakukan langkah yang benar untuk menghasilkan keluaran yang diharapkan? Di balik itu semua ada <b>algoritma</b>:\n  urutan langkah logis untuk menyelesaikan masalah. Pemrograman adalah seni dan teknik menuliskan algoritma tersebut dalam bahasa\n  yang dipahami komputer.</p>\n  <p>Pada materi ini kita akan mulai dari konsep paling dasar: apa itu algoritma, bagaimana merepresentasikannya (flowchart & pseudocode),\n  lalu cara menerjemahkannya ke kode program sederhana.</p>\n</div>\n",
            "pemantik": "\n<div class=\"pemantik\">\n  <h4>❓ Pertanyaan Pemantik</h4>\n  <ul>\n    <li>Apa yang dimaksud dengan algoritma menurutmu dengan kata sederhana?</li>\n    <li>Berikan contoh kegiatan sehari-hari yang bisa dijelaskan sebagai algoritma.</li>\n    <li>Mengapa penting membuat langkah yang jelas sebelum menulis kode?</li>\n    <li>Apa bedanya pseudocode dan kode sumber (source code)?</li>\n  </ul>\n</div>\n",
            "materi": "\n<div class=\"materi\">\n  <h4>📘 Materi Pembelajaran</h4>\n\n  <h5>1. Apa itu Algoritma?</h5>\n  <p>Algoritma adalah urutan instruksi atau langkah yang jelas dan terbatas untuk menyelesaikan masalah.</p>\n\n  <h5>2. Mengapa Algoritma Penting?</h5>\n  <ol>\n    <li>Memastikan solusi dapat diikuti dan direproduksi.</li>\n    <li>Membantu menemukan pendekatan paling efisien.</li>\n    <li>Mengurangi kesalahan ketika diimplementasikan ke kode.</li>\n  </ol>\n\n  <h5>3. Cara Merepresentasikan Algoritma</h5>\n  <ul>\n    <li><b>Deskripsi Naratif</b>: Menulis langkah-langkah dalam kalimat biasa.</li>\n    <li><b>Pseudocode</b>: Menuliskan langkah dengan sintaks mirip kode tetapi sederhana dan mudah dibaca.</li>\n    <li><b>Flowchart</b>: Diagram visual menggunakan simbol (start, process, decision, end).</li>\n  </ul>\n\n  <h5>4. Contoh: Menentukan Bilangan Genap atau Ganjil</h5>\n  <p><b>Pseudocode</b>:</p>\n  <pre>\n1. Mulai\n2. Baca nilai n\n3. Jika n % 2 == 0 maka\n   Cetak \"Genap\"\n   Jika tidak\n   Cetak \"Ganjil\"\n4. Selesai\n  </pre>\n\n  <h5>5. Langkah Menyusun Algoritma Sederhana</h5>\n  <ol>\n    <li>Identifikasi input dan output.</li>\n    <li>Rincikan langkah pemrosesan dari awal sampai akhir.</li>\n    <li>Gunakan contoh kasus kecil untuk menguji langkah.</li>\n    <li>Refine (perbaiki) bila ada langkah yang ambigu.</li>\n  </ol>\n\n  <h5>6. Praktik Singkat (Latihan)</h5>\n  <p>Buatlah pseudocode untuk: <i>Menghitung rata-rata dari tiga bilangan</i> dan uji dengan contoh nilai.</p>\n</div>\n",
            "refleksi": "\n<div class=\"refleksi\">\n  <h4>📝 Refleksi</h4>\n  <ul>\n    <li>Sebutkan tiga manfaat menyusun algoritma sebelum menulis program.</li>\n    <li>Bagaimana pseudocode membantu tim saat bekerja bersama?</li>\n    <li>Apakah kamu menemukan langkah yang bisa disederhanakan dari latihan tadi?</li>\n  </ul>\n  <p><em>Catatan:</em> Pemahaman dasar ini akan mempermudah mempelajari struktur kontrol dan fungsi pada materi selanjutnya.</p>\n</div>\n",
            "quiz": {
              "questions": [
                {
                  "question": "Algoritma adalah...",
                  "options": [
                    "Urutan langkah logis untuk menyelesaikan masalah",
                    "Bahasa pemrograman tertentu",
                    "Perangkat keras komputer",
                    "Jenis database"
                  ],
                  "correct": 0
                },
                {
                  "question": "Flowchart paling cocok digunakan untuk...",
                  "options": [
                    "Memvisualisasikan alur logika suatu algoritma",
                    "Menulis program yang bisa dieksekusi langsung",
                    "Menyimpan data dalam database",
                    "Mengompilasi kode sumber"
                  ],
                  "correct": 0
                },
                {
                  "question": "Dalam pseudocode, tujuan utamanya adalah...",
                  "options": [
                    "Menuliskan solusi dalam bentuk yang mudah dibaca manusia sebelum menjadi kode",
                    "Menjalankan program di komputer",
                    "Mengganti flowchart secara otomatis",
                    "Mengoptimalkan memori komputer"
                  ],
                  "correct": 0
                }
              ]
            }
          }
        ]
      }
    },
    "11": {
      "menengah": {
        "materials": [
          {
            "title": "Fungsi, Array, dan Rekursi — Konsep & Praktik",
            "description": "Memahami fungsi/prosedur, cara menggunakan array, dan konsep dasar rekursi.",
            "apersepsi": "\n<div class=\"apersepsi\">\n  <h4>💡 Apersepsi</h4>\n  <p>Pernahkah kamu menulis beberapa baris kode yang hampir sama berulang-ulang? Atau ingin menyimpan sekumpulan nilai agar mudah diproses bersama?\n  Untuk itu kita mengenal <b>fungsi</b> agar kode bisa dipakai ulang dan <b>array</b> untuk menyimpan banyak nilai. Rekursi adalah teknik di mana sebuah fungsi memanggil dirinya sendiri — berguna untuk beberapa tipe masalah.</p>\n</div>\n",
            "pemantik": "\n<div class=\"pemantik\">\n  <h4>❓ Pertanyaan Pemantik</h4>\n  <ul>\n    <li>Apa keuntungan menggunakan fungsi dibanding menulis ulang kode?</li>\n    <li>Kapan kamu memilih array dibanding variabel tunggal?</li>\n    <li>Apa risiko utama saat menggunakan rekursi?</li>\n  </ul>\n</div>\n",
            "materi": "\n<div class=\"materi\">\n  <h4>📘 Materi Pembelajaran</h4>\n\n  <h5>1. Fungsi / Prosedur</h5>\n  <p>Fungsi adalah blok kode yang diberi nama untuk melakukan tugas tertentu. Fungsi dapat menerima parameter dan mengembalikan nilai (atau tidak, jika prosedur).</p>\n  <p><b>Contoh (pseudocode):</b></p>\n  <pre>\nfunction tambah(a, b)\n  hasil = a + b\n  return hasil\nend\n  </pre>\n\n  <h5>2. Array (Satu Dimensi)</h5>\n  <p>Array adalah struktur data yang menyimpan kumpulan elemen berurutan yang diakses dengan indeks.</p>\n  <ul>\n    <li>Mengakses elemen: arr[0], arr[1], ...</li>\n    <li>Looping dengan perulangan untuk memproses semua elemen</li>\n  </ul>\n\n  <h5>3. Rekursi: Konsep Dasar</h5>\n  <p>Rekursi adalah teknik di mana fungsi memanggil dirinya sendiri dengan submasalah yang lebih kecil. Harus memiliki kondisi berhenti (base case) agar tidak terjadi panggilan tak berujung.</p>\n  <p><b>Contoh: Faktorial</b></p>\n  <pre>\nfunction faktorial(n)\n  if n == 0 then\n    return 1\n  else\n    return n * faktorial(n - 1)\n  end\nend\n  </pre>\n\n  <h5>4. Latihan Praktik</h5>\n  <p>Buat fungsi untuk mencari nilai maksimum dari sebuah array berisi 5 angka. Uji fungsi dengan contoh nilai.</p>\n</div>\n",
            "refleksi": "\n<div class=\"refleksi\">\n  <h4>📝 Refleksi</h4>\n  <ul>\n    <li>Apa manfaat fungsi dalam pengembangan perangkat lunak?</li>\n    <li>Berikan contoh masalah yang lebih mudah diselesaikan dengan rekursi daripada loop biasa.</li>\n    <li>Bagaimana cara mencegah stack overflow pada rekursi?</li>\n  </ul>\n</div>\n",
            "quiz": {
              "questions": [
                {
                  "question": "Fungsi berguna karena...",
                  "options": [
                    "Memungkinkan penggunaan ulang kode dan memecah masalah menjadi bagian lebih kecil",
                    "Meningkatkan ukuran file program secara signifikan",
                    "Selalu berjalan lebih cepat daripada kode inline",
                    "Mengganti kebutuhan komentar"
                  ],
                  "correct": 0
                },
                {
                  "question": "Array adalah...",
                  "options": [
                    "Kumpulan elemen berurutan yang dapat diakses dengan indeks",
                    "Fungsi untuk mengurutkan data",
                    "Jenis variabel yang hanya menyimpan teks",
                    "Metode visualisasi data"
                  ],
                  "correct": 0
                },
                {
                  "question": "Syarat penting rekursi agar berhenti adalah...",
                  "options": [
                    "Kondisi berhenti (base case)",
                    "Menggunakan loop di setiap panggilan",
                    "Memanggil fungsi lain di dalamnya",
                    "Menjalankan program dalam mode debug"
                  ],
                  "correct": 0
                }
              ]
            }
          }
        ]
      }
    },
    "12": {
      "lanjut": {
        "materials": [
          {
            "title": "Pemrograman Berorientasi Objek dan Algoritma Lanjutan",
            "description": "Konsep OOP dasar serta pengantar analisis kompleksitas dan algoritma penting.",
            "apersepsi": "\n<div class=\"apersepsi\">\n  <h4>💡 Apersepsi</h4>\n  <p>Ketika proyek perangkat lunak menjadi besar, menyusun kode dengan rapi dan terstruktur menjadi penting. <b>Pemrograman Berorientasi Objek (OOP)</b>\n  membantu mengatur kode menjadi kelas dan objek sehingga lebih mudah dipelihara. Selain itu, pemahaman tentang kompleksitas algoritma membantu memilih solusi yang efisien untuk masalah berskala besar.</p>\n</div>\n",
            "pemantik": "\n<div class=\"pemantik\">\n  <h4>❓ Pertanyaan Pemantik</h4>\n  <ul>\n    <li>Apa perbedaan utama antara prosedural dan berorientasi objek?</li>\n    <li>Kapan sebuah algoritma yang sederhana tidak memadai untuk data besar?</li>\n    <li>Apa arti notasi O(n) dalam analisis kompleksitas?</li>\n  </ul>\n</div>\n",
            "materi": "\n<div class=\"materi\">\n  <h4>📘 Materi Pembelajaran</h4>\n\n  <h5>1. Konsep Dasar OOP</h5>\n  <ul>\n    <li><b>Kelas</b>: Cetak biru (blueprint) untuk objek.</li>\n    <li><b>Objek</b>: Instance dari kelas yang memiliki atribut dan metode.</li>\n    <li><b>Encapsulation</b>: Menyembunyikan data internal kelas.</li>\n    <li><b>Inheritance</b>: Pewarisan sifat dari kelas induk ke kelas anak.</li>\n    <li><b>Polymorphism</b>: Kemampuan objek yang berbeda merespon panggilan metode yang sama.</li>\n  </ul>\n\n  <h5>2. Contoh Kelas Sederhana (pseudocode)</h5>\n  <pre>\nclass Mahasiswa\n  field nama\n  field nim\n  function cetakInfo()\n    print(nama + \" - \" + nim)\n  end\nend\n  </pre>\n\n  <h5>3. Analisis Kompleksitas (Pengenalan)</h5>\n  <p>Notasi Big-O menyatakan bagaimana jumlah langkah tumbuh terhadap ukuran input. Contoh:</p>\n  <ul>\n    <li>O(1): waktu konstan</li>\n    <li>O(n): linear</li>\n    <li>O(n^2): kuadrat (misal nested loop)</li>\n  </ul>\n\n  <h5>4. Algoritma Penting (Ringkasan)</h5>\n  <ul>\n    <li><b>Merge Sort</b>: Divide and Conquer, O(n log n)</li>\n    <li><b>Dijkstra</b>: Algoritma jalur terpendek (graf berbobot non-negatif)</li>\n    <li><b>Dynamic Programming</b>: Teknik menyimpan solusi submasalah untuk efisiensi</li>\n  </ul>\n\n  <h5>5. Latihan</h5>\n  <p>Desain kelas sederhana untuk 'Buku' yang memiliki atribut judul, penulis, dan metode untuk menampilkan informasi buku.</p>\n</div>\n",
            "refleksi": "\n<div class=\"refleksi\">\n  <h4>📝 Refleksi</h4>\n  <ul>\n    <li>Jelaskan bagaimana OOP membantu pengelolaan proyek besar.</li>\n    <li>Berikan contoh kapan kamu memilih algoritma O(n log n) dibanding O(n^2).</li>\n    <li>Apa langkah pertama saat kamu dihadapkan pada masalah baru yang ingin dipecahkan dengan kode?</li>\n  </ul>\n</div>\n",
            "quiz": {
              "questions": [
                {
                  "question": "Salah satu pilar OOP adalah...",
                  "options": [
                    "Encapsulation",
                    "Compilation",
                    "Normalization",
                    "Garbage collection"
                  ],
                  "correct": 0
                },
                {
                  "question": "Notasi O(n^2) biasanya muncul ketika...",
                  "options": [
                    "Terdapat nested loop terhadap input n",
                    "Program berjalan dalam waktu konstan",
                    "Hanya satu operasi dilakukan",
                    "Input tidak berpengaruh"
                  ],
                  "correct": 0
                },
                {
                  "question": "Teknik dynamic programming berguna karena...",
                  "options": [
                    "Menyimpan hasil submasalah untuk menghindari komputasi ulang",
                    "Mengubah semua perulangan menjadi rekursi",
                    "Menjamin semua algoritma menjadi O(1)",
                    "Hanya bekerja pada graf"
                  ],
                  "correct": 0
                }
              ]
            }
          }
        ]
      }
    }
  }
};