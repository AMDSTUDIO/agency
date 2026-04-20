import { db, Service, Portfolio, Testimonial, Blog, User, GlobalSetting } from 'astro:db';

export default async function seed() {
  await db.insert(GlobalSetting).values([
    { key: "site_logo", value: "Creative Studio" },
    
    // Hero Section
    { key: "hero_badge", value: "🔥 DIGITAL & BISNIS" },
    { key: "hero_title", value: "Membangun Masa Depan <br/>\n<span class=\"text-gradient\">Digital & Bisnis</span>" },
    { key: "hero_desc", value: "Creative Studio adalah partner yang membantu bisnis Anda tumbuh di era digital, mulai dari pembuatan website, identitas brand hingga manajemen media sosial." },
    { key: "hero_btn_primary", value: "Mulai Proyek Anda" },
    { key: "hero_btn_secondary", value: "Lihat Layanan" },
    
    // Services Section
    { key: "services_title", value: "Layanan <span class=\"text-gradient\">Kami</span>" },
    { key: "services_desc", value: "Layanan terbaik kami dirancang untuk membawa bisnis Anda ke puncaknya di era digital." },
    
    // Portfolio Section
    { key: "portfolio_title", value: "Portfolio <span class=\"text-gradient\">Unggulan</span>" },
    { key: "portfolio_desc", value: "Lihat hasil karya terbaik kami yang telah membantu klien kami mencapai visinya." },
    
    // Testimonials Section
    { key: "testimonials_title", value: "Apa Kata <span class=\"text-gradient\">Klien Kami</span>" },
    { key: "testimonials_desc", value: "Kepercayaan klien adalah kebanggaan kami. Simak pengalaman mereka menggunakan layanan pengembangan dari kami." },
    
    // Blog Section
    { key: "blog_title", value: "Artikel & <span class=\"text-gradient\">Wawasan</span>" },
    { key: "blog_desc", value: "Temukan artikel, tips, dan wawasan terbaru mengenai industri digital dan bisnis." },
    
    // Footer Section
    { key: "footer_desc", value: "Partner digital yang siap tumbuh bersama bisnis Anda melalui teknologi dan desain modern." },
    { key: "footer_address", value: "<a href=\"https://share.google/l9YWRHkUpoeqBxmdK\" target=\"_blank\">Cibogo, Kec. Lembang, Kabupaten Bandung Barat,<br/>Jawa Barat 40931</a>" },
    { key: "footer_email", value: "hello@creativestudio.id" },
    
    // Contact Info
    { key: "whatsapp_number", value: "085163219924" },
    
    // Global SEO
    { key: "seo_brand_title", value: "Creative Agency - Ahli Web Development & Solusi Digital" },
    { key: "seo_meta_desc", value: "Konsultan rancang bangun piranti lunak, ekosistem website korporasi, dan agensi rekayasa lini desain produk terbaik secara nasional." }
  ]);

  await db.insert(User).values([
    { id: 'u1', username: 'superadmin', password: 'password123', role: 'Super Admin' },
    { id: 'u2', username: 'admin', password: 'password123', role: 'Admin' },
    { id: 'u3', username: 'editor', password: 'password123', role: 'Editor' }
  ]);

  await db.insert(Service).values([
    {
      id: "project-dev",
      icon: "💻",
      title: "Project Development",
      desc: "Layanan ini memberikan panduan strategis dan eksekusi komprehensif mulai dari tahap ideasi hingga peluncuran. Kami melakukan riset pasar mendalam, arsitektur teknis, desain antarmuka responsif, dan pengembangan web bertenaga tinggi yang disesuaikan dengan visi bisnis Anda untuk skalabilitas jangka panjang.",
      color: "hsl(252, 85%, 60%)"
    },
    {
      id: "consult-arch",
      icon: "🏛️",
      title: "Consultant Architecture",
      desc: "Merancang arsitektur sistem yang andal, efisien, dan siap berkembang. Konsultan ahli kami membantu menavigasi tumpukan teknologi modern yang membingungkan, memberikan solusi infrastruktur cloud dengan keandalan 99,9% SLA, mencegah penumpukan technical-debt sejak hari pertama operasional aplikasi Anda.",
      color: "hsl(199, 89%, 48%)"
    },
    {
      id: "consult-biz",
      icon: "🤝",
      title: "Consultant Bisnis",
      desc: "Manajemen portofolio digital Anda tidak akan lengkap tanpa strategi manajemen dan monetisasi yang cermat. Dari validasi MVP, penyempurnaan Product-Market-Fit, hingga penetrasi pasar, konsultan bisnis kami bertindak sebagai mitra jangka panjang yang membimbing strategi pertumbuhan yang rasional.",
      color: "hsl(340, 82%, 52%)"
    },
    {
      id: "graphic-design",
      icon: "🎨",
      title: "Graphic & Digital Designing",
      desc: "Identitas visual adalah kesan pertama yang tertinggal selamanya. Tim desain kreatif kami membangun aset berbasis filosofi merek yang ikonik, meliputi merancang logo vektor premium, tipografi, desain pos media sosial, antarmuka pengguna (UI), dan animasi transisi yang modern dan elegan.",
      color: "hsl(43, 96%, 56%)"
    },
    {
      id: "digital-marketing",
      icon: "📈",
      title: "Digital Marketing Strategy",
      desc: "Pergerakan dan eksposur organik membutuhkan strategi algoritma teliti. Kami menyusun strategi kampanye pemasaran berjenjang termasuk periklanan programatik, manajemen media sosial interaktif, analitik Conversion Rate Optimization (CRO), dan teknik peringkat SEO lanjutan (on-page/off-page).",
      color: "hsl(220, 80%, 65%)"
    },
    {
      id: "procurement",
      icon: "📦",
      title: "Pengadaan Barang & Jasa",
      desc: "Sebagai bagian dari transisi usaha kecil Anda menuju entitas korporat kelas menengah, kami menyediakan solusi satu pintu untuk penyewaan server perangkat keras, stasiun kerja komputasi berat, lisensi cloud SaaS skala besar, keamanan siber perimeter tingkat tinggi dan manajemen firewall.",
      color: "hsl(150, 60%, 50%)"
    },
    {
      id: "web-dev",
      icon: "🌐",
      title: "Website Development",
      desc: "Keahlian mutlak kami terletak pada merancang sistem perangkat lunak yang merender dalam hitungan milidetik. Pembangunan e-commerce dinamis, portal perusahaan, hingga aplikasi web progresif, situs web modern tanpa javascript yang membengkak guna meningkatkan SEO layaknya peluncuran metrik roket.",
      color: "hsl(300, 70%, 60%)"
    },
    {
      id: "live-streaming",
      icon: "📡",
      title: "Jasa Live Streaming",
      desc: "Siarkan momen penting, acara perusahaan, atau peluncuran produk Anda dengan layanan siaran langsung multi-kamera berkualitas tinggi. Tim broadcast kami menangani keseluruhan produksi on-site, manajemen audio sejernih kristal, hingga integrasi grafis secara real-time ke berbagai platform sosial secara serentak.",
      color: "hsl(350, 80%, 60%)"
    }
  ]);

  await db.insert(Portfolio).values([
    {
      id: "fintech-dash",
      title: "FinTech Dashboard Terkini",
      category: "Web Application",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "ai-startup",
      title: "Situs Portal Startup AI",
      category: "Web Design",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "ecom-app",
      title: "Aplikasi E-Commerce B2B",
      category: "iOS & Android",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "health-tracker",
      title: "Platform Manajemen Kesehatan",
      category: "Web Application",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "crypto-wallet",
      title: "Desain Sistem Dompet Kripto",
      category: "UI/UX Design",
      img: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "edu-platform",
      title: "Infrastruktur eLearning Skala Nasional",
      category: "Web Application",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
    }
  ]);

  await db.insert(Testimonial).values([
    {
      id: "t1",
      name: "Budi Santoso",
      role: "CEO, TechSolution",
      content: "Kerja sama dengan Creative Studio adalah investasi cerdas. Mereka berhasil mendongkrak penjualan dan engagement Pelanggan kami cukup drastis di tahun pertama peluncuran website kami.",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      id: "t2",
      name: "Siti Rahayu",
      role: "Founder, StartupIndo",
      content: "Sangat proaktif dan detail. Desain dan pemograman yang tim ini berikan sangat modern mendukung ekosistem produk yang cepat berubah secara dinamis.",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: "t3",
      name: "Ahmad Rizal",
      role: "Director, Utama Corp",
      content: "Pengerjaan selalu diselesaikan sangat cepat dengan kualitas akurasi yang luar biasa tinggi. Sangat direkomendasikan jika anda berencana migrasi web ke solusi digital yang lebih mutakhir.",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: "t4",
      name: "Dewi Lestari",
      role: "CMO, Bintang Baru",
      content: "Pendekatan mereka terhadap SEO dan kampanye pemasaran sungguh mendalam. Tim konsultan mereka mengedukasi departemen kami secara internal sembari memimpin eksekusi kampanye dengan ROI 300%.",
      avatar: "https://i.pravatar.cc/150?img=9"
    }
  ]);

  await db.insert(Blog).values([
    {
      id: "post-1",
      title: "Strategi Digital Marketing 2024",
      date: new Date("2024-01-15"),
      category: "Marketing",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
      author: "Admin",
      excerpt: "Pelajari tren terbaru pemasaran digital untuk meraup lebih banyak pelanggan potensial.",
      content: "<p>Dalam persaingan bisnis digital tahun 2024, visibilitas brand di internet bukanlah sekadar pelengkap, melainkan kebutuhan esensial. Analisa mendalam terhadap algoritma pemasaran mesin pencari dan penetrasi media sosial menunjukkan pergeseran besar terhadap interaksi organik ketimbang iklan konvensional.</p><p>Para ahli menyarankan bahwa konten otentik berbasis ulasan riil menghasilkan potensi konversi tiga kali lipat lebih banyak dibandingkan metrik iklan terpusat tahun-tahun sebelumnya.</p>"
    },
    {
      id: "post-2",
      title: "Pentingnya Website bagi Bisnis",
      date: new Date("2024-02-10"),
      category: "Technology",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      author: "Admin",
      excerpt: "Kenapa identitas digital menjadi ujung tombak perkembangan bisnis era kini.",
      content: "<p>Memiliki profil media sosial tidaklah cukup apabila Anda mengincar pasar B2B enterprise maupun kelas pasar menengah ke atas. Website berperan vital sebagai kantor pusat independen di ranah maya. Bebas dari jeratan aturan ketat perubahan kebijakan algoritma platform sosial.</p><p>Situs perusahaan membuktikan kredibilitas teknis sekaligus menawarkan alur navigasi pelanggan (funnel) yang dapat disesuaikan sepenuhnya dari ujung ke ujung operasional.</p>"
    },
    {
      id: "post-3",
      title: "Mengelola Keuangan Startup",
      date: new Date("2024-03-05"),
      category: "Business",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
      author: "Admin",
      excerpt: "Tips manajerial dan finansial untuk membuat skala startup Anda sehat dan profitable.",
      content: "<p>Banyak usaha rintisan kolaps di fase pendanaan A bukan akibat cacat teknikal proyeknya, melainkan ledakan beban pengeluaran tetap (burn rate) yang tidak mampu diimbangi proyeksi pemasukan dasar (ARR). Merancang margin profitabilitas struktural semenjak bulan pertama operasional terbukti memperpanjang garis pertahanan likuiditas fundamental perusahaan skala awal.</p>"
    }
  ]);
}
