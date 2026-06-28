// ==================== DATA DIVISI ====================
const divisions = [
    { id: 'pendidikan', name: 'Divisi Pendidikan', description: 'Meningkatkan kualitas akademik, tahfizh, dan pengembangan minat bakat.', icon: '📖', color: '#4ade80', head: 'Alfi Muhammad Meira', wakil: 'Muhammad Zakwan Ilman',
      tujuan: 'Menciptakan lingkungan belajar kondusif, meningkatkan hafalan Al-Qur\'an, memfasilitasi pengembangan skill akademik & non-akademik.',
      proker: ['Pendalaman Tahfizh', 'Olimpiade Sains dan MTQ internal', 'Webinar motivasi belajar', 'Pembinaan bakat'] },
    { id: 'humas', name: 'Divisi Hubungan Masyarakat', description: 'Menjalin komunikasi efektif dan solidaritas antara sekolah, guru, dan santri.', icon: '🤝', color: '#38bdf8', head: 'Mohammad Sabri', wakil: 'Ahmad Iqra Mauladan Zahlan',
      tujuan: 'Memperkuat relasi internal & eksternal, meningkatkan citra positif IPMA.',
      proker: ['Open donasi & bakti sosial', 'Kunjungan pondok pesantren lain', 'Pengelolaan media sosial', 'Forum komunikasi santri-wali'] },
    { id: 'olahraga', name: 'Divisi Olahraga & Kesehatan', description: 'Mengembangkan potensi fisik, kesehatan, dan sportivitas santri.', icon: '⚽', color: '#f472b6', head: 'Muhammad Aditiya', wakil: 'Muhammad Rifat Taha',
      tujuan: 'Membentuk santri sehat jasmani-rohani, menggeliatkan semangat olahraga.',
      proker: ['Turnamen futsal & bulutangkis', 'Pemeriksaan kesehatan berkala', 'Pelatihan P3K', 'Senam pagi bersama'] },
    { id: 'kebersihan', name: 'Divisi Kebersihan', description: 'Menjaga keharmonisan dan ketertiban lingkungan madrasah.', icon: '🧹', color: '#a78bfa', head: 'Nur Fakhri Irsyad', wakil: 'Muhammad Aidil Afreza',
      tujuan: 'Mewujudkan lingkungan madrasah yang bersih, sehat, indah.',
      proker: ['Program Jumat Bersih', 'Penyediaan tempat sampah terpilah', 'Lomba kebersihan antar asrama', 'Penanaman tanaman hias'] },
    { id: 'keamanan', name: 'Divisi Keamanan', description: 'Memastikan keamanan, ketertiban, dan kedisiplinan di lingkungan madrasah.', icon: '🛡️', color: '#fb923c', head: 'Muhammad Dzaky', wakil: 'Muhammad Rafiq Aulia',
      tujuan: 'Menciptakan suasana pondok yang aman, tertib, dan disiplin.',
      proker: ['Piket malam bergilir', 'Pengaturan lalu lintas', 'Sosialisasi tata tertib', 'Kerjasama dengan satpam'] },
    { id: 'lingkungan', name: 'Divisi Lingkungan Hidup', description: 'Menjaga kelestarian lingkungan madrasah yang asri dan hijau.', icon: '🌱', color: '#34d399', head: 'Muhammad Arif Arriyuqari Adam', wakil: 'Faiz Abyan Efendi',
      tujuan: 'Meningkatkan kesadaran santri akan lingkungan, mengurangi sampah plastik.',
      proker: ['Penanaman 100 pohon', 'Bank sampah daur ulang', 'Kampanye go green', 'Lomba kebersihan lingkungan'] },
    { id: 'perlengkapan', name: 'Divisi Perlengkapan', description: 'Mengelola inventaris dan perlengkapan untuk mendukung kegiatan.', icon: '🔧', color: '#fbbf24', head: 'Muhammad Fathan Ramzani Usman', wakil: 'Andi Muhammad Afzal Walinga',
      tujuan: 'Mengelola sarana prasarana organisasi dengan baik, efektif.',
      proker: ['Inventarisasi barang', 'Perawatan rutin alat', 'Pengadaan perlengkapan acara', 'Penyewaan dan peminjaman'] },
    { id: 'sekretariat', name: 'Divisi Kesekretariatan', description: 'Mengelola administrasi, surat-menyurat, dan dokumentasi organisasi.', icon: '📋', color: '#f87171', head: 'Andi Muhammad Rif\'at Ramadhan', wakil: 'Mario Miracle Ramadhan',
      tujuan: 'Memastikan tertib administrasi, dokumentasi kegiatan, dan surat-menyurat.',
      proker: ['Pembuatan arsip digital', 'Notulensi rapat', 'Laporan pertanggungjawaban', 'Buku tamu administrasi'] }
];

// ==================== DATA MEMBERS ====================
const members = [
    { name: 'Alfi Muhammad Meira', role: 'Koordinator', division: 'pendidikan', initials: 'AM', color: '#4ade80', motto: "Belajar tanpa henti, berbagi tanpa batas.", hobi: "Membaca kitab", pendidikan: { sd: "SDIT Al-Furqan", smp: "MTsN 1 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "alfi_meira", photo: null },
    { name: 'Muhammad Zakwan Ilman', role: 'Wakil Koordinator', division: 'pendidikan', initials: 'ZI', color: '#4ade80', motto: "Terus melangkah meski peluh membasahi.", hobi: "Catur", pendidikan: { sd: "SDN 1 Rappocini", smp: "SMP IT Al-Biruni", sma: "MA TQ Al-Imam Ashim" }, instagram: "zakwan.ilman", photo: null },
    { name: 'Muhammad Arlank Syaputra', role: 'Anggota', division: 'pendidikan', initials: 'AS', color: '#4ade80', motto: "Mimpi setinggi langit.", hobi: "Futsal", pendidikan: { sd: "SD Islam Al-Azhar", smp: "SMP Muhammadiyah", sma: "MA TQ Al-Imam Ashim" }, instagram: "arlank_s", photo: null },
    { name: 'Syarifnur Al Qodri', role: 'Anggota', division: 'pendidikan', initials: 'SA', color: '#4ade80', motto: "Ilmu adalah cahaya.", hobi: "Kaligrafi", pendidikan: { sd: "SDIT Harapan Ummah", smp: "SMPN 3 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "syarif_alqodri", photo: null },
    { name: 'Ahmad Adn Zakir', role: 'Anggota', division: 'pendidikan', initials: 'AZ', color: '#4ade80', motto: "Konsistensi kunci sukses.", hobi: "Membaca novel", pendidikan: { sd: "SDN 2 Bontoala", smp: "SMPIT Al-Ikhlas", sma: "MA TQ Al-Imam Ashim" }, instagram: "adn_zakir", photo: null },
    { name: 'Rais Antarun Izzam', role: 'Anggota', division: 'pendidikan', initials: 'RI', color: '#4ade80', motto: "pikiran adalah segalanya", hobi: "melamun", pendidikan: { sd: "SD inpres 207 linrungloe", smp: "MTS al imam ashim", sma: "MA TQ Al-Imam Ashim" }, instagram: "rais._.antarun", photo: null },
    { name: 'Mohammad Sabri', role: 'Koordinator', division: 'humas', initials: 'MS', color: '#38bdf8', motto: "Hubungan baik membuka pintu.", hobi: "Fotografi", pendidikan: { sd: "SDN Inpres Bontonompo", smp: "SMPN 4 Gowa", sma: "MA TQ Al-Imam Ashim" }, instagram: "sabri_mh", photo: null },
    { name: 'Ahmad Iqra Mauladan Zahlan', role: 'Wakil Koordinator', division: 'humas', initials: 'AI', color: '#38bdf8', motto: "Kata-kata santun.", hobi: "Debat", pendidikan: { sd: "SDIT Ta'dib", smp: "SMPIT Al-Madinah", sma: "MA TQ Al-Imam Ashim" }, instagram: "iqra_mauladan", photo: null },
    { name: 'Ikhwanul Fattah Abbas', role: 'Anggota', division: 'humas', initials: 'IF', color: '#38bdf8', motto: "Senyum sedekah.", hobi: "Voli", pendidikan: { sd: "SDN Sudirman", smp: "SMPN 5 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "ikhwan_fattah", photo: null },
    { name: 'Aiman Taufiqurrahman', role: 'Anggota', division: 'humas', initials: 'AT', color: '#38bdf8', motto: "Pendengar baik.", hobi: "Leadership", pendidikan: { sd: "SDIT Al-Fityan", smp: "SMPN 2 Sungguminasa", sma: "MA TQ Al-Imam Ashim" }, instagram: "aiman_taufiq", photo: null },
    { name: 'Muhammad Wildan Hanif', role: 'Anggota', division: 'humas', initials: 'WH', color: '#38bdf8', motto: "Berani memulai.", hobi: "Public speaking", pendidikan: { sd: "SDN 1 Daya", smp: "SMPIT Nurul Fikri", sma: "MA TQ Al-Imam Ashim" }, instagram: "wildan_hanif", photo: null },
    { name: 'Muhammad Fathul Faiz', role: 'Anggota', division: 'humas', initials: 'FF', color: '#38bdf8', motto: "Koneksi kekayaan.", hobi: "Game", pendidikan: { sd: "SDIT Al-Hijrah", smp: "SMPIT Al-Abqari", sma: "MA TQ Al-Imam Ashim" }, instagram: "fathul_faiz", photo: null },
    { name: 'Muhammad Aditiya', role: 'Koordinator', division: 'olahraga', initials: 'MA', color: '#f472b6', motto: "Olahraga jiwa kuat.", hobi: "Basket", pendidikan: { sd: "SDN 2 Mamajang", smp: "SMPN 8 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "aditiya_m", photo: null },
    { name: 'Muhammad Rifat Taha', role: 'Wakil Koordinator', division: 'olahraga', initials: 'RT', color: '#f472b6', motto: "Bergerak terus.", hobi: "Futsal", pendidikan: { sd: "SDIT Al-Khaerat", smp: "SMPN 1 Gowa", sma: "MA TQ Al-Imam Ashim" }, instagram: "rifat_taha", photo: null },
    { name: 'Muhammad Rifqi Razi Altaf', role: 'Anggota', division: 'olahraga', initials: 'RA', color: '#f472b6', motto: "Sehat anugerah.", hobi: "Renang", pendidikan: { sd: "SDIT Al-Fajar", smp: "SMPN 1 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "rifqi_razi", photo: null },
    { name: 'Muhammad Ilman Zuhriy Rahman', role: 'Anggota', division: 'olahraga', initials: 'IZ', color: '#f472b6', motto: "Olahraga karakter.", hobi: "Sepakbola", pendidikan: { sd: "SDIT Al-Madinah", smp: "SMPN 3 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "ilman_zuhri", photo: null },
    { name: 'Muhammad Fakhri Doni', role: 'Anggota', division: 'olahraga', initials: 'FD', color: '#f472b6', motto: "Sportif.", hobi: "Bulutangkis", pendidikan: { sd: "SDN 1 Maros", smp: "SMPN 2 Maros", sma: "MA TQ Al-Imam Ashim" }, instagram: "fakhri_doni", photo: null },
    { name: 'Muhammad Amirul Khair', role: 'Anggota', division: 'olahraga', initials: 'AK', color: '#f472b6', motto: "Kesehatan mahkota.", hobi: "Lari", pendidikan: { sd: "SDIT Al-Bayan", smp: "SMPN 4 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "amirul_khair", photo: null },
    { name: 'Nur Fakhri Irsyad', role: 'Koordinator', division: 'kebersihan', initials: 'NF', color: '#a78bfa', motto: "Bersih pangkal sehat.", hobi: "Berkebun", pendidikan: { sd: "SDIT Al-Fajar", smp: "SMPN 2 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "fakhri_irsyad", photo: null },
    { name: 'Muhammad Aidil Afreza', role: 'Wakil Koordinator', division: 'kebersihan', initials: 'AA', color: '#a78bfa', motto: "Lingkungan bersih.", hobi: "Bersepeda", pendidikan: { sd: "SDN 1 Maros", smp: "SMPIT Al-Biruni", sma: "MA TQ Al-Imam Ashim" }, instagram: "aidil_afreza", photo: null },
    { name: 'Muhammad Akrom', role: 'Anggota', division: 'kebersihan', initials: 'MA', color: '#a78bfa', motto: "Kebersihan iman.", hobi: "Mengaji", pendidikan: { sd: "SDIT Al-Hikmah", smp: "SMPN 10 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "akrom_m", photo: null },
    { name: 'Andi Muhammad Dzaky Almer Ismail', role: 'Anggota', division: 'kebersihan', initials: 'AD', color: '#a78bfa', motto: "Rapih indah.", hobi: "Menggambar", pendidikan: { sd: "SDN 1 Antang", smp: "SMPN 22 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "dzaky_almer", photo: null },
    { name: 'Adibul Ahkam Yunani', role: 'Anggota', division: 'kebersihan', initials: 'AY', color: '#a78bfa', motto: "Jaga kebersihan.", hobi: "Futsal", pendidikan: { sd: "SDIT Al-Furqan", smp: "SMPN 6 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "adibul_ahkam", photo: null },
    { name: 'Nushair Natsir', role: 'Anggota', division: 'kebersihan', initials: 'NN', color: '#a78bfa', motto: "Bersih anugerah.", hobi: "Memancing", pendidikan: { sd: "SDIT Al-Abqari", smp: "SMPN 1 Gowa", sma: "MA TQ Al-Imam Ashim" }, instagram: "nushair_natsir", photo: null },
    { name: 'Muhammad Dzaky', role: 'Koordinator', division: 'keamanan', initials: 'MD', color: '#fb923c', motto: "Keamanan tanggung jawab bersama.", hobi: "Beladiri", pendidikan: { sd: "SDN Inpres Manggala", smp: "SMPN 11 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "dzaky_keamanan", photo: null },
    { name: 'Muhammad Rafiq Aulia', role: 'Wakil Koordinator', division: 'keamanan', initials: 'RA', color: '#fb923c', motto: "Siaga setiap saat.", hobi: "Bela diri", pendidikan: { sd: "SDIT Al-Furqan", smp: "SMPN 1 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "rafiq_aulia", photo: null },
    { name: 'Miftahurrahman', role: 'Anggota', division: 'keamanan', initials: 'MR', color: '#fb923c', motto: "Amanah.", hobi: "Berkemah", pendidikan: { sd: "SDIT Al-Fityan", smp: "SMPN 3 Maros", sma: "MA TQ Al-Imam Ashim" }, instagram: "miftah_rahman", photo: null },
    { name: 'Nofariq Rakha Yuanda', role: 'Anggota', division: 'keamanan', initials: 'NR', color: '#fb923c', motto: "Prioritas keamanan.", hobi: "Komik", pendidikan: { sd: "SDN 2 Panakkukang", smp: "SMPN 17 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "nofariq_rakha", photo: null },
    { name: 'dolby', role: 'Anggota', division: 'keamanan', initials: 'AH', color: '#fb923c', motto: "apapun itu yang penting tidur solusinya.", hobi: "cari masalah", pendidikan: { sd: "SDN 13 biru", smp: "MTS imam ashim", sma: "MA TQ Al-Imam Ashim" }, instagram: "dolby_project98", photo: null },
    { name: 'Muhammad Al Faiz', role: 'Anggota', division: 'keamanan', initials: 'AF', color: '#fb923c', motto: "Disiplin sukses.", hobi: "Catur", pendidikan: { sd: "SD Islam Al-Azhar", smp: "SMPN 9 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "al_faiz", photo: null },
    { name: 'Muhammad Arif Arriyuqari Adam', role: 'Koordinator', division: 'lingkungan', initials: 'AA', color: '#34d399', motto: "Alam guru terbaik.", hobi: "Berkebun", pendidikan: { sd: "SDN 1 Bontomarannu", smp: "SMPN 2 Bantimurung", sma: "MA TQ Al-Imam Ashim" }, instagram: "arif_adam", photo: null },
    { name: 'Faiz Abyan Efendi', role: 'Wakil Koordinator', division: 'lingkungan', initials: 'FE', color: '#34d399', motto: "Hijaukan bumi.", hobi: "Mendaki", pendidikan: { sd: "SDIT Al-Bayan", smp: "SMPN 3 Maros", sma: "MA TQ Al-Imam Ashim" }, instagram: "faiz_abyan", photo: null },
    { name: 'Muhammad Alif Erste Mario Alviza Putra Pratama', role: 'Anggota', division: 'lingkungan', initials: 'MP', color: '#34d399', motto: "Cintai lingkungan.", hobi: "Bersepeda", pendidikan: { sd: "SDIT Al-Istiqamah", smp: "SMPIT As-Salam", sma: "MA TQ Al-Imam Ashim" }, instagram: "alif_erste", photo: null },
    { name: 'Ahmad Faiz Hisyam Ansori', role: 'Anggota', division: 'lingkungan', initials: 'AH', color: '#34d399', motto: "Asri hati.", hobi: "Alam", pendidikan: { sd: "SDN 1 Bantaeng", smp: "SMPN 1 Bantaeng", sma: "MA TQ Al-Imam Ashim" }, instagram: "faiz_hisyam", photo: null },
    { name: 'Nur Muhammad Tanwir', role: 'Anggota', division: 'lingkungan', initials: 'NT', color: '#34d399', motto: "Hijau harmoni.", hobi: "Berkebun", pendidikan: { sd: "SDIT Al-Hijrah", smp: "SMPN 6 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "tanwir_nur", photo: null },
    { name: 'Ahmad Fabiyan', role: 'Anggota', division: 'lingkungan', initials: 'AF', color: '#34d399', motto: "Tanam pohon.", hobi: "Memancing", pendidikan: { sd: "SDN 1 Rappocini", smp: "SMPN 2 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "fabiyan_ahmad", photo: null },
    { name: 'Al Yusran Tahir', role: 'Anggota', division: 'lingkungan', initials: 'AY', color: '#34d399', motto: "Jaga alam.", hobi: "Camping", pendidikan: { sd: "SDIT Al-Furqan", smp: "SMPN 1 Maros", sma: "MA TQ Al-Imam Ashim" }, instagram: "yusran_tahir", photo: null },
    { name: 'Faiz', role: 'Anggota', division: 'lingkungan', initials: 'FZ', color: '#34d399', motto: "Lestarikan alam.", hobi: "Baca buku", pendidikan: { sd: "SDN 1 Daya", smp: "SMPIT Nurul Fikri", sma: "MA TQ Al-Imam Ashim" }, instagram: "faiz_lingkungan", photo: null },
    { name: 'Muhammad Fathan Ramzani Usman', role: 'Koordinator', division: 'perlengkapan', initials: 'FR', color: '#fbbf24', motto: "Rapikan barang.", hobi: "Teknologi", pendidikan: { sd: "SDIT Al-Istiqamah", smp: "SMPIT As-Salam", sma: "MA TQ Al-Imam Ashim" }, instagram: "fathan_usman", photo: null },
    { name: 'Andi Muhammad Afzal Walinga', role: 'Wakil Koordinator', division: 'perlengkapan', initials: 'AW', color: '#fbbf24', motto: "Sedia sebelum butuh.", hobi: "Perbaikan", pendidikan: { sd: "SDN 2 Panakkukang", smp: "SMPN 17 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "afzal_w", photo: null },
    { name: 'Nashri Fauzan Ramadhani Mony', role: 'Anggota', division: 'perlengkapan', initials: 'NF', color: '#fbbf24', motto: "Inventaris rapi.", hobi: "Gambar teknik", pendidikan: { sd: "SDIT Al-Bayan", smp: "SMPN 3 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "nashri_fauzan", photo: null },
    { name: 'Muhammad Fahmi', role: 'Anggota', division: 'perlengkapan', initials: 'MF', color: '#fbbf24', motto: "Kerja keras.", hobi: "Game", pendidikan: { sd: "SDN 1 Bontoala", smp: "SMPN 5 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "fahmi_m", photo: null },
    { name: 'Muhammad Maftuh Syauqi', role: 'Anggota', division: 'perlengkapan', initials: 'MS', color: '#fbbf24', motto: "Teliti.", hobi: "Membaca", pendidikan: { sd: "SDIT Al-Hikmah", smp: "SMPN 10 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "maftuh_syauqi", photo: null },
    { name: 'Andi Muhammad Rif\'at Ramadhan', role: 'Sekretaris', division: 'sekretariat', initials: 'AR', color: '#f87171', motto: "Administrasi rapi.", hobi: "Menulis", pendidikan: { sd: "SDN 1 Baruga", smp: "SMPN 2 Kendari", sma: "MA TQ Al-Imam Ashim" }, instagram: "rifat_ramadhan", photo: null },
    { name: 'Mario Miracle Ramadhan', role: 'Wakil Sekretaris', division: 'sekretariat', initials: 'MR', color: '#f87171', motto: "Detail penting.", hobi: "Design", pendidikan: { sd: "SDN 1 Antang", smp: "SMPN 22 Makassar", sma: "MA TQ Al-Imam Ashim" }, instagram: "mario_miracle", photo: null },
    { name: 'Muhammad Nhebuqa Nezhaar', role: 'Bendahara', division: 'sekretariat', initials: 'MN', color: '#f87171', motto: "Amanah.", hobi: "Menghitung", pendidikan: { sd: "SDIT Al-Hikmah", smp: "SMPIT Al-Madinah", sma: "MA TQ Al-Imam Ashim" }, instagram: "nezhaar", photo: null },
    { name: 'Muhammad Alif Rahman Diennur', role: 'Wakil Bendahara', division: 'sekretariat', initials: 'AD', color: '#f87171', motto: "Transparan.", hobi: "Membaca", pendidikan: { sd: "SDN 1 Bantaeng", smp: "SMPN 1 Bantaeng", sma: "MA TQ Al-Imam Ashim" }, instagram: "alif_rahman", photo: null }
];

// ========== GLOBAL VARIABLES ==========
// ==================== TYPING EFFECT BERGERAK SEPERTI DIKETIK ====================
const words = ["MADRASAH ALIYAH", "PESANTREN", "IPMA", "TAHFIZH QUR'AN"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isWaiting = false;

function typeEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    // Jika sedang dalam masa jeda, tunggu
    if (isWaiting) return;
    
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Menghapus huruf
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        
        // Jika sudah terhapus semua
        if (charIndex === 0) {
            isDeleting = false;
            isWaiting = true;
            wordIndex = (wordIndex + 1) % words.length;
            // Jeda 500ms sebelum mengetik kata berikutnya
            setTimeout(() => {
                isWaiting = false;
                typeEffect();
            }, 500);
            return;
        }
    } else {
        // Mengetik huruf
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        
        // Jika sudah selesai mengetik
        if (charIndex === currentWord.length) {
            isDeleting = true;
            isWaiting = true;
            // Jeda 2000ms sebelum menghapus
            setTimeout(() => {
                isWaiting = false;
                typeEffect();
            }, 2000);
            return;
        }
    }
    
    // Kecepatan: 100ms per huruf saat mengetik, 50ms per huruf saat menghapus
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

// Mulai efek mengetik setelah halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Tunggu sebentar agar elemen siap
    setTimeout(() => {
        typeEffect();
    }, 500);
});


let currentFilter = 'all';
let currentSearch = '';

function renderDivisions() {
    const grid = document.getElementById('divisions-grid');
    if (!grid) return;
    grid.innerHTML = divisions.map(div => {
        const memberCount = members.filter(m => m.division === div.id).length;
        return `<div class="division-card" data-div-id="${div.id}">
                    <div class="division-icon">${div.icon}</div>
                    <h3>${div.name}</h3>
                    <p>${div.description}</p>
                    <div class="division-meta">
                        <div class="member-count"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ${memberCount} Anggota</div>
                        <span class="view-btn" data-div="${div.id}">Detail</span>
                    </div>
                </div>`;
    }).join('');
    document.querySelectorAll('.view-btn').forEach(btn => btn.addEventListener('click', (e) => { e.stopPropagation(); openDivisionModal(btn.dataset.div); }));
    document.querySelectorAll('.division-card').forEach(card => card.addEventListener('click', (e) => { if(!e.target.classList.contains('view-btn')) { currentFilter = card.dataset.divId; filterMembers(currentFilter); document.getElementById('anggota').scrollIntoView({ behavior: 'smooth' }); } }));
}

function openDivisionModal(divId) {
    const div = divisions.find(d => d.id === divId);
    if(div) {
        document.getElementById('division-modal-icon').innerHTML = div.icon;
        document.getElementById('division-modal-name').innerText = div.name;
        document.getElementById('division-tujuan').innerText = div.tujuan;
        document.getElementById('division-proker').innerHTML = div.proker.map(p => `<li><i class="fas fa-chevron-right" style="color:var(--accent-2);"></i> ${p}</li>`).join('');
        document.getElementById('division-modal-overlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function renderMembers() {
    let filtered = members;
    if (currentFilter !== 'all') filtered = filtered.filter(m => m.division === currentFilter);
    if (currentSearch.trim() !== '') filtered = filtered.filter(m => m.name.toLowerCase().includes(currentSearch.toLowerCase()));
    const grid = document.getElementById('members-grid');
    if (!grid) return;
    grid.innerHTML = filtered.map((m, idx) => {
        const div = divisions.find(d => d.id === m.division);
        const avatarStyle = m.photo ? `background-image: url('${m.photo}'); background-size: cover; background-position: center;` : `background: ${m.color}20; color: ${m.color};`;
        const avatarContent = m.photo ? '' : m.initials;
        return `<div class="member-card" onclick="openMemberModal(${members.indexOf(m)})">
                    <div class="member-avatar" style="${avatarStyle}">${avatarContent}</div>
                    <div class="member-name">${m.name}</div>
                    <div class="member-role">${m.role}</div>
                    <div class="member-division"><span style="width:8px;height:8px;border-radius:2px;background:${m.color};display:inline-block;"></span> ${div ? div.name.replace('Divisi ','') : 'Inti'}</div>
                </div>`;
    }).join('');
}

function filterMembers(division) {
    currentFilter = division;
    document.querySelectorAll('.filter-tab').forEach(tab => {
        const isActive = (division === 'all' && tab.textContent === 'Semua') || (division !== 'all' && divisions.find(d => d.id === division)?.name.replace('Divisi ', '') === tab.textContent);
        tab.classList.toggle('active', isActive);
    });
    renderMembers();
}

function updateSearch() {
    currentSearch = document.getElementById('search-member-input').value;
    renderMembers();
}

function renderFilterTabs() {
    const container = document.getElementById('filter-tabs');
    if (!container) return;
    container.innerHTML = `<button class="filter-tab active" onclick="filterMembers('all')">Semua</button>` + divisions.map(div => `<button class="filter-tab" onclick="filterMembers('${div.id}')">${div.name.replace('Divisi ', '')}</button>`).join('');
}

window.openMemberModal = function(idx) {
    const m = members[idx];
    const div = divisions.find(d => d.id === m.division);
    const modalAvatar = document.getElementById('modal-avatar');
    if (m.photo) {
        modalAvatar.style.backgroundImage = `url('${m.photo}')`;
        modalAvatar.style.backgroundSize = 'cover';
        modalAvatar.style.backgroundPosition = 'center';
        modalAvatar.innerHTML = '';
    } else {
        modalAvatar.style.background = `${m.color}20`;
        modalAvatar.style.color = m.color;
        modalAvatar.innerHTML = m.initials;
        modalAvatar.style.fontSize = '2.5rem';
    }
    document.getElementById('modal-name').innerText = m.name;
    document.getElementById('modal-role').innerText = m.role;
    document.getElementById('modal-division').innerText = div ? div.name : 'Pengurus Inti';
    document.getElementById('modal-motto').innerText = m.motto || "Tidak ada motivasi tercatat.";
    document.getElementById('modal-hobi').innerHTML = `<span style="background:${m.color}20; padding:0.2rem 0.8rem; border-radius:50px;">${m.hobi || '-'}</span>`;
    const pendidikanHtml = `<div class="pendidikan-item"><strong>SD:</strong> ${m.pendidikan?.sd || '-'}</div><div class="pendidikan-item"><strong>SMP:</strong> ${m.pendidikan?.smp || '-'}</div><div class="pendidikan-item"><strong>SMA:</strong> ${m.pendidikan?.sma || '-'}</div>`;
    document.getElementById('modal-pendidikan').innerHTML = pendidikanHtml;
    const ig = m.instagram ? `https://instagram.com/${m.instagram.replace('@','')}` : null;
    const igHtml = ig ? `<a href="${ig}" target="_blank" class="social-link-modal"><i class="fab fa-instagram"></i> @${m.instagram.replace('@','')}</a>` : '<span style="color:gray;">Instagram tidak tersedia</span>';
    document.getElementById('modal-instagram').innerHTML = igHtml;
    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
};

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}
document.getElementById('modal-close').addEventListener('click', () => closeModal('modal-overlay'));
document.getElementById('modal-overlay').addEventListener('click', (e) => { if(e.target === e.currentTarget) closeModal('modal-overlay'); });
document.getElementById('division-modal-close').addEventListener('click', () => closeModal('division-modal-overlay'));
document.getElementById('division-modal-overlay').addEventListener('click', (e) => { if(e.target === e.currentTarget) closeModal('division-modal-overlay'); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') { closeModal('modal-overlay'); closeModal('division-modal-overlay'); } });

function renderOrgStructure() {
    const coreInti = [
        { name: "Dr. Amiril Mueminin, M.Pd.I.", role: "Penasehat", initials: "AM", bgGradient: "linear-gradient(135deg, #a855f7, #d946ef)" },
        { name: "Akbar Ismail, S.Ag.", role: "Pembina", initials: "AI", bgGradient: "linear-gradient(135deg, #f97316, #f59e0b)" },
        { name: "Rahmat Raihan", role: "Ketua Umum", initials: "RR", bgGradient: "linear-gradient(135deg, #10b981, #14b8a6)" },
        { name: "Fathur Mukhlis Ash Shiddiqy", role: "Wakil Ketua", initials: "FM", bgGradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }
    ];
    const container = document.getElementById('org-tree-container');
    if (!container) return;
    let html = `<div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">`;
    coreInti.slice(0,2).forEach(adv => {
        html += `<div class="org-node"><div class="org-avatar" style="background: ${adv.bgGradient};">${adv.initials}</div><h4>${adv.name}</h4><span>${adv.role}</span></div>`;
    });
    html += `</div><div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">`;
    coreInti.slice(2,4).forEach(lead => {
        html += `<div class="org-node leader"><div class="org-avatar" style="background: ${lead.bgGradient};">${lead.initials}</div><h4>${lead.name}</h4><span>${lead.role}</span></div>`;
    });
    html += `</div><div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">`;
    const sekretaris = members.find(m => m.role === 'Sekretaris');
    const wakilSekretaris = members.find(m => m.role === 'Wakil Sekretaris');
    const bendahara = members.find(m => m.role === 'Bendahara');
    const wakilBendahara = members.find(m => m.role === 'Wakil Bendahara');
    if(sekretaris) html += `<div class="org-node"><div class="org-avatar" style="background: ${sekretaris.color}20; color:${sekretaris.color};">${sekretaris.initials}</div><h4>${sekretaris.name}</h4><span>Sekretaris</span></div>`;
    if(wakilSekretaris) html += `<div class="org-node"><div class="org-avatar" style="background: ${wakilSekretaris.color}20; color:${wakilSekretaris.color};">${wakilSekretaris.initials}</div><h4>${wakilSekretaris.name}</h4><span>Wakil Sekretaris</span></div>`;
    if(bendahara) html += `<div class="org-node"><div class="org-avatar" style="background: ${bendahara.color}20; color:${bendahara.color};">${bendahara.initials}</div><h4>${bendahara.name}</h4><span>Bendahara</span></div>`;
    if(wakilBendahara) html += `<div class="org-node"><div class="org-avatar" style="background: ${wakilBendahara.color}20; color:${wakilBendahara.color};">${wakilBendahara.initials}</div><h4>${wakilBendahara.name}</h4><span>Wakil Bendahara</span></div>`;
    html += `</div><div class="org-connector"></div><div class="org-branches" id="org-branches"></div>`;
    container.innerHTML = html;
    const branchesContainer = document.getElementById('org-branches');
    if (branchesContainer) {
        branchesContainer.innerHTML = divisions.filter(d => d.id !== 'sekretariat').map(div => `<div class="org-branch"><h5>${div.name.replace('Divisi ', '')}</h5><p>${div.head}</p><small>Wakil: ${div.wakil}</small><br><small>${members.filter(m=>m.division===div.id).length} Anggota</small></div>`).join('');
    }
}

function initDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    function setTheme(isLight) {
        if (isLight) { document.body.classList.add('light'); themeToggle.querySelector('i').classList.remove('fa-moon'); themeToggle.querySelector('i').classList.add('fa-sun'); } 
        else { document.body.classList.remove('light'); themeToggle.querySelector('i').classList.remove('fa-sun'); themeToggle.querySelector('i').classList.add('fa-moon'); }
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setTheme(true); else setTheme(false);
    themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('light')));
}

// Particle effect
const canvasParticle = document.getElementById('particle-canvas');
let ctx = canvasParticle?.getContext('2d'), particles = [];
function resizeCanvas() { if(canvasParticle) { canvasParticle.width = window.innerWidth; canvasParticle.height = window.innerHeight; } }
class Particle { reset() { this.x = Math.random() * canvasParticle.width; this.y = Math.random() * canvasParticle.height; this.size = Math.random() * 2 + 0.5; this.speedX = (Math.random() - 0.5) * 0.4; this.speedY = (Math.random() - 0.5) * 0.4; this.opacity = Math.random() * 0.5 + 0.2; this.hue = Math.random() > 0.5 ? 140 : 45; } update() { this.x += this.speedX; this.y += this.speedY; if (this.x<0||this.x>canvasParticle.width||this.y<0||this.y>canvasParticle.height) this.reset(); } draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`; ctx.fill(); } }
function initParticles() { particles = []; for(let i=0;i<90;i++) { let p = new Particle(); p.reset(); particles.push(p); } }
function animateParticles() { if(!ctx) return; ctx.clearRect(0,0,canvasParticle.width,canvasParticle.height); particles.forEach(p=>{p.update(); p.draw();}); requestAnimationFrame(animateParticles); }
if(canvasParticle) { resizeCanvas(); initParticles(); animateParticles(); window.addEventListener('resize', () => { resizeCanvas(); initParticles(); }); }

function observeReveals() { const obs = new IntersectionObserver((e) => e.forEach(e=>e.isIntersecting&&e.target.classList.add('active')), {threshold:0.1}); document.querySelectorAll('.reveal').forEach(r=>obs.observe(r)); }
function animateCounters() { const obs = new IntersectionObserver((e) => { e.forEach(e=>{ if(e.isIntersecting && !e.target.classList.contains('counted')) { e.target.classList.add('counted'); let target=parseInt(e.target.dataset.target), cur=0, inc=target/40; let t=setInterval(()=>{ cur+=inc; if(cur>=target) { e.target.textContent=target; clearInterval(t); } else e.target.textContent=Math.floor(cur); },30); } }); }, {threshold:0.5}); document.querySelectorAll('.stat-number').forEach(r=>obs.observe(r)); }

window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if(nav) nav.classList.toggle('scrolled', window.scrollY>50);
    const backToTop = document.getElementById('backToTop');
    if(backToTop) { if(window.scrollY>500) backToTop.classList.add('show'); else backToTop.classList.remove('show'); }
    const progressBar = document.getElementById('progressBar');
    if(progressBar) { const scrolled = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100; progressBar.style.width = scrolled + '%'; }
});
document.getElementById('backToTop')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
const mobileBtn = document.querySelector('.mobile-menu-btn'), navLinks = document.querySelector('.nav-links');
if(mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => { mobileBtn.classList.toggle('active'); navLinks.classList.toggle('active'); });
    document.querySelectorAll('.nav-links a').forEach(l => l.addEventListener('click', () => { mobileBtn.classList.remove('active'); navLinks.classList.remove('active'); }));
}
window.addEventListener('load', () => setTimeout(() => document.getElementById('loading-screen')?.classList.add('hidden'), 600));
document.getElementById('search-member-input')?.addEventListener('input', updateSearch);

renderDivisions(); renderFilterTabs(); renderMembers(); renderOrgStructure(); observeReveals(); animateCounters(); initDarkMode();
window.filterMembers = filterMembers;

// Typing effect (di hero lama - tidak digunakan karena ada hero baru)
// Tapi tetap kita jalankan untuk hero lama

// ========== SPLINE 3D INITIALIZATION ==========
// Ini akan berjalan setelah DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi Spline setelah semua konten siap
    setTimeout(() => {
        initSplineScene();
        initInteractiveSpotlight();
    }, 100);
});

// Spline 3D functions
function initInteractiveSpotlight() {
    const container = document.querySelector('.spline-hero-container');
    const spotlight = document.getElementById('splineSpotlight');
    if (!container || !spotlight) return;
    
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        spotlight.style.left = `${mouseX - 250}px`;
        spotlight.style.top = `${mouseY - 250}px`;
        
        const textContent = document.querySelector('.spline-text-content');
        if (textContent) {
            const moveX = (mouseX - rect.width / 2) * 0.01;
            const moveY = (mouseY - rect.height / 2) * 0.01;
            textContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
    
    container.addEventListener('mouseleave', () => {
        spotlight.style.left = '50%';
        spotlight.style.top = '50%';
        spotlight.style.transform = 'translate(-50%, -50%)';
        
        const textContent = document.querySelector('.spline-text-content');
        if (textContent) {
            textContent.style.transform = 'translate(0, 0)';
        }
    });
    
    spotlight.style.left = '50%';
    spotlight.style.top = '50%';
    spotlight.style.transform = 'translate(-50%, -50%)';
}

async function initSplineScene() {
    const canvas = document.getElementById('spline-canvas');
    const loader = document.getElementById('splineLoader');
    
    if (!canvas) {
        console.error('Canvas not found');
        return;
    }
    
    try {
        // Dynamic import Spline runtime
        const module = await import('https://unpkg.com/@splinetool/runtime@1.9.0/build/runtime.js');
        const Application = module.Application;
        
        const app = new Application(canvas);
        const sceneUrl = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';
        
        await app.load(sceneUrl);
        
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
        
        console.log('Spline scene loaded!');
    } catch (error) {
        console.error('Spline error:', error);
        if (loader) {
            loader.innerHTML = '<p style="color: #ff4444;">Gagal memuat 3D scene. Coba refresh.</p>';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 3000);
        }
    }
}

// Text reveal for spline section
const textElements = document.querySelectorAll('.spline-text-content > *');
textElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
});
setTimeout(() => {
    textElements.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
}, 500);

// AI Chatbot
const knowledgePesantren = {
    "apa itu ma tq al imam ashim": "MA TQ Al-Imam Ashim adalah madrasah swasta di Makassar dengan program tahfizh 30 juz dan qiraat sab'ah.",
    "siapa pengasuh ponpes al imam ashim": "Pengasuh Pondok Pesantren Al-Imam Ashim adalah KH. Syam Amir Yunus.",
    "alamat ponpes": "Jl. Tamangapa Raya III, Makassar dan Jl. Macanda 2, Gowa.",
    "ketua ipma": "Ketua IPMA adalah Rahmat Raihan.",
    "jumlah anggota": "IPMA memiliki 47 anggota aktif.",
    "jumlah divisi": "Ada 8 divisi di IPMA."
};

function normalizeText(text) {
    return text.toLowerCase().replace(/[?,.!;:()"']/g, '').trim();
}

function getBotReplyPesantren(question) {
    const q = normalizeText(question);
    for (let key in knowledgePesantren) {
        if (q.includes(key) || key.includes(q)) {
            return knowledgePesantren[key];
        }
    }
    return "Maaf, saya belum paham. Coba tanyakan tentang profil MA TQ, pengasuh, alamat, ketua IPMA, jumlah anggota, atau divisi.";
}

// Chatbot initialization
const chatbotBtn = document.getElementById('chatbotBtnIpma');
if (chatbotBtn) {
    const chatbotContainer = document.getElementById('chatbotContainerIpma');
    const chatbotClose = document.getElementById('chatbotCloseIpma');
    const sendBtn = document.getElementById('chatbotSendIpma');
    const inputField = document.getElementById('chatbotInputIpma');
    const messagesContainer = document.getElementById('chatbotMessagesIpma');
    
    function addMessage(text, isUser) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message-ipma ${isUser ? 'user' : 'bot'}`;
        msgDiv.innerHTML = text;
        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    function sendMessage() {
        const text = inputField.value.trim();
        if (text === '') return;
        addMessage(text, true);
        inputField.value = '';
        setTimeout(() => {
            const reply = getBotReplyPesantren(text);
            addMessage(reply, false);
        }, 300);
    }
    
    sendBtn.addEventListener('click', sendMessage);
    inputField.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
    chatbotBtn.addEventListener('click', () => chatbotContainer.classList.toggle('active'));
    chatbotClose.addEventListener('click', () => chatbotContainer.classList.remove('active'));
    
    document.querySelectorAll('.suggestion-ipma').forEach(sug => {
        sug.addEventListener('click', () => {
            inputField.value = sug.getAttribute('data-question');
            sendMessage();
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!chatbotContainer.contains(e.target) && !chatbotBtn.contains(e.target)) {
            chatbotContainer.classList.remove('active');
        }
    });
}

// ==================== EFEK KATA BERGANTI OTOMATIS ====================
const wordsToSwitch = [
    "MA TQ Al-Imam Ashim",
    "Madrasah Aliyah",
    "Tahfizhul Qur'an",
    "Pusat Qiraat",
    "Lembaga Dakwah"
];
let wordSwitchIndex = 0;
let wordSwitchCharIndex = 0;
let isWordDeleting = false;

function wordSwitchEffect() {
    const wordElement = document.getElementById('switchingWord');
    if (!wordElement) return;
    
    const currentWord = wordsToSwitch[wordSwitchIndex];
    
    if (isWordDeleting) {
        wordElement.textContent = currentWord.substring(0, wordSwitchCharIndex - 1);
        wordSwitchCharIndex--;
        
        if (wordSwitchCharIndex === 0) {
            isWordDeleting = false;
            wordSwitchIndex = (wordSwitchIndex + 1) % wordsToSwitch.length;
            setTimeout(wordSwitchEffect, 500);
            return;
        }
    } else {
        wordElement.textContent = currentWord.substring(0, wordSwitchCharIndex + 1);
        wordSwitchCharIndex++;
        
        if (wordSwitchCharIndex === currentWord.length) {
            isWordDeleting = true;
            setTimeout(wordSwitchEffect, 2000);
            return;
        }
    }
    
    const speed = isWordDeleting ? 50 : 100;
    setTimeout(wordSwitchEffect, speed);
}

// Jalankan efek setelah DOM siap
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(wordSwitchEffect, 500);
});
