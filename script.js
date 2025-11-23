// Pastikan semua kode dijalankan setelah semua elemen HTML (DOM) selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // =======================================
    // 1. Logika Klik Tombol Salam
    // =======================================
    
    // Dapatkan tombol dan elemen salam
    const tombolUbah = document.getElementById('tombol-ubah');
    const elemenSalam = document.getElementById('salam');

    // Teks default sebelum tombol diklik
    elemenSalam.textContent = "Klik tombol di bawah ini untuk melihat pesan sapaan khusus!";

    tombolUbah.addEventListener('click', function() {
        
        // Logika Waktu
        const waktuSekarang = new Date();
        const jam = waktuSekarang.getHours();
        let pesanBaru;

        if (jam < 12) {
            pesanBaru = "Selamat Pagi! Tetap semangat membangun masa depan yang cerah.";
        } else if (jam < 18) {
            pesanBaru = "Selamat Siang/Sore! Semoga produktif dan membawa kemajuan.";
        } else {
            pesanBaru = "Selamat Malam! Saatnya istirahat dan mempersiapkan Indonesia yang lebih baik.";
        }

        // Ubah isi teks elemen salam
        elemenSalam.textContent = pesanBaru;
        
        // Nonaktifkan tombol
        tombolUbah.textContent = "Pesan Sudah Tampil!";
        tombolUbah.disabled = true;
    });

    // =======================================
    // 2. Logika Klik Proyek A, B, dan C
    // =======================================

    // Dapatkan elemen proyek dan tempat pesan
    const proyekA = document.getElementById('proyek-a');
    const proyekB = document.getElementById('proyek-b');
    const proyekC = document.getElementById('proyek-c');
    const pesanProyek = document.getElementById('pesan-proyek');

    // ----------------------------------------------------
    // Menambahkan Event Listener untuk Proyek A, B, C
    // ----------------------------------------------------

    proyekA.addEventListener('click', function() {
        // Pesan yang diminta untuk Proyek A
        pesanProyek.textContent = "Hallo, ini ada projek webiste pertama saya";
    });

    proyekB.addEventListener('click', function() {
        // Pesan yang diminta untuk Proyek B
        pesanProyek.textContent = "Tunggu ya , kita akan maju melakah kedepan";
    });

    proyekC.addEventListener('click', function() {
        // Pesan yang diminta untuk Proyek C
        pesanProyek.textContent = "Tanggal Mainnya, kita sesuaikan";
    });

    // Logging di konsol
    console.log("Script JavaScript berhasil dimuat dan siap beraksi.");
});