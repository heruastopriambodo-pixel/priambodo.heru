// Tunggu sampai DOM (elemen HTML) selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Dapatkan elemen tombol dan elemen salam berdasarkan ID
    const tombolUbah = document.getElementById('tombol-ubah');
    const elemenSalam = document.getElementById('salam');

    // 2. Tentukan fungsi yang akan dijalankan saat tombol diklik
    tombolUbah.addEventListener('click', function() {
        
        // Logika Waktu
        const waktuSekarang = new Date();
        const jam = waktuSekarang.getHours();
        let pesanBaru;

        if (jam < 12) {
            pesanBaru = "Selamat Pagi! Terima kasih sudah mengunjungi website ini.";
        } else if (jam < 18) {
            pesanBaru = "Selamat Siang/Sore! Semoga harimu menyenangkan.";
        } else {
            pesanBaru = "Selamat Malam! Saatnya bersantai.";
        }

        // 3. Ubah isi teks elemen salam
        elemenSalam.textContent = pesanBaru;
        
        // Nonaktifkan tombol agar tidak diklik berkali-kali
        tombolUbah.textContent = "Pesan Sudah Tampil!";
        tombolUbah.disabled = true;
    });
    
    // Isi teks awal saat halaman dimuat (sebelum tombol diklik)
    elemenSalam.textContent = "Klik tombol di bawah ini untuk melihat pesan sapaan khusus!";
    console.log("Script JS siap.");
});