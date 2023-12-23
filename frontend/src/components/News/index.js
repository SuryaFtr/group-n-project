import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { API_BASE_URL } from '../../components/function';

import '../../styles/News.css';
import Logo from '../../assets/Logo BOL - Text.png';

const Navbar = () => {
  const navigate = useNavigate();

  const navLinks = {
    home: '/',
    about: '/about',
    program: '/program',
    news: '/news',
    events: '/events',
    signIn: '/login',
  };

  const redirectTo = (path) => {
    navigate(path);
  };

  return (
    <header>
      <a href={navLinks.home} className="logo" onClick={() => redirectTo(navLinks.home)}>
        <img src={Logo} alt="Logo" />
      </a>

      <ul className="navbar">
        <li onClick={() => redirectTo(navLinks.home)}>
          <a href={navLinks.home}>Home</a>
        </li>
        <li onClick={() => redirectTo(navLinks.about)}>
          <a href={navLinks.about}>About</a>
        </li>
        <li onClick={() => redirectTo(navLinks.program)}>
          <a href={navLinks.program}>Program</a>
        </li>
        <li onClick={() => redirectTo(navLinks.events)}>
          <a href={navLinks.events}>Events</a>
        </li>
        <li onClick={() => redirectTo(navLinks.news)}>
          <a href={navLinks.news} className="active">News</a>
        </li>
      </ul>

      <div className="main">
        <a href={navLinks.signIn} className="user" onClick={() => redirectTo(navLinks.signIn)}>
          Sign In
        </a>
      </div>
    </header>
  );
};

const News = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/news`);
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const redirectToNewsDetail = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <div>
      <div className="newss">
        <Navbar />
        <div className="newss-text">
          <h1>NEWS</h1>
        </div>
      </div>
      <NewsSection news={news} redirectToNewsDetail={redirectToNewsDetail} />
      <FooterSection />
      <p className="copyright">2023 - Bring Oceans Life by Group N. All Rights Reserved. Made With Love.</p>
    </div>
  );
};

const NewsSection = () => (
  <section className="news-section">
    <section id="news" className='news-section'>
      <div className="grid-container-4">
        <ul className="box-1">
          <li>
            <img src="https://yklindonesia.org/wp-content/uploads/2023/01/HIU01.jpeg" alt="" />
            <h2 >
              Hiu sebagai 'Dokter' di Ekosistem
            </h2>
            <p className='desc-text'>
              Hiu memiliki karakter biologis yang spesifik seperti berumur panjang, fekunditas rendah, jumlah anakan sedikit, lambat dalam mencapai matang kelamin dan pertumbuhannya lambat, sehingga sekali terjadi over eksploitasi, sangat sulit bagi populasinya untuk kembali pulih.

              Kebanyakan hiu adalah termasuk hewan predator pada lingkungan terumbu karang dan lautan, mereka berada pada tingkat atas dari rantai makanan yang menentukan keseimbangan dan mengontrol jaring-jaring makanan yang komplek di bawah mereka. AWI (2009) menerangkan bahwa sebagai predator tingkat atas, hiu juga berperan sebagai penjaga lingkungan laut mereka.

              Hiu berperan sebagai predator puncak dalam suatu ekosistem di mana dia menjaga agar semua populasi di bawahnya tetap stabil dan tetap berkelanjutan. Ketika hiu hilang atau terancam keberadaannya pada suatu ekosistem pada suatu daerah maka spesies di bawahnya itu akan bertumbuh lebih banyak.

              Kondisi ini meski terlihat menguntungkan, namun pada faktanya akan terjadi lonjakan ikan tuna yang kemudian akan menghabisi populasi ikan kakap, akibatnya jumlah ikan kecil yang akan terus menerus menurun sejalan dengan hilangnya habitat ikan kakap.

              Hiu juga dikenal sebagai ‘dokter’ di ekosistemnya di mana dia akan memakan ikan yang sakit dan yang cacat di suatu kelompok dan hanya meninggalkan ikan yang sehat. Kumpulan ikan yang sehat ini akan memiliki kemungkinan besar untuk hidup sampai dewasa dan bertelur kembali. Ikan itu berhasil menyelesaikan siklus hidupnya dan mendapatkan lagi statusnya spesies tersebut.

              Bicara konservasi hiu

              Dari 117 jenis hiu yang terdapat di Indonesia, hanya 1 jenis yang sudah berstatus dilindungi penuh, yaitu hiu paus (Rhyncodon typus). Empat jenis hiu lainnya, yaitu hiu koboy (Carcharhinus longimanus) dan 3 jenis hiu martil (Spyhrna leweni, Sphyrna zygaena, dan Sphyrna mokarran) termasuk yang dilarang ekspor melalui Permen KP No. 5 Tahun 2018.

              Sedangkan ada 8 jenis hiu yang masuk CITES (Konvensi Internasional Perdagangan Satwa Liar), yang artinya pemanfaatan untuk perdagangan luar negerinya diperbolehkan, namun dengan aturan ketat.

              Dalam rangka pengelolaan hiu yang berkelanjutan, KKP telah menyusun Rencana Aksi Nasional (RAN) Konservasi Hiu dan Pari 2016-2020. KKP juga sedang menyusun rancangan perlindungan terbatas hiu, berupa larangan penangkapan hiu hamil, hiu anakan, dan hiu di kawasan konservasi.

              Penetapan status perlindungan ikan hiu tentunya harus dilakukan secara bijaksana dan berdasarkan prinsip kehati – hatian, karena menyangkut sosial dan ekonomi sebagian masyarakat, khususnya masyarakat nelayan yang menjadikan ikan hiu sebagai tangkapan utama (Tanjung Luar-NTB) dan konsumsi lokal (Aceh, Toraja) karena murah dagingnya.

              Kehati-hatian itu berarti kekayaan alam Indonesia seperti ikan hiu dan pari boleh kita manfaatkan secara optimal untuk kesejahtraan masyarakatnya, namun dengan tetap menjaga kelestariannya sehingga ikan hiu itu dapat dimanfaatkan secara berkelanjutan.

              Selain itu, ketersediaan data biologi dan perikanan hiu masih terbatas, baru untuk beberapa spesies. Untuk menetapkan status perlindungan harus didukung dengan data dan informasi yang akurat, serta harus mendapat rekomendasi ilmiah dari LIPI selaku otoritas keilmuan.

              Sebelumnya, YKL Indonesia melakukan survei akhir untuk melihat frekuensi kemunculan biota penting dilindungi dan terancam punah. Pendekatan yang digunakan secara partisipatif. Metodenya melalui pertanyaan atau wawancara langsung dengan nelayan menggunakan form survei KBA Monitoring, dengan berbagai pertanyaan kunci di dalamnya.

              Terdapat beberapa jenis yang mereka sebutkan, namun hanya berdasarkan ciri-ciri morfologi umum dan penamaan lokal saja. Sehingga, hasil identifikasi tersebut tidak sampai pada klasifikasi spesies, karena terdapat beberapa jenis hiu yang untuk menentukan nama spesiesnya harus dengan mengidentifikasi ciri-ciri khusus dan spesifik yang belum bisa nelayan interpretasikan.

              Berdasarkan hasil wawancara langsung dengan beberapa perwakilan nelayan di Pulau Lanjukang, ditemukan beberapa jenis hiu yang kadang dijumpai nelayan, yaitu Hiu Tikus, Hiu Tinumbu/Hiu Mako sirip pendek dan Hiu Sirip Hitam sebanyak kurang lebih 100 ekor/tahun.

              Selain itu, Hiu dompala (nama lokal) disebutkan ciri-cirinya sering berdiam pada substrat pasir, ditemukan sekitar 20 ekor/tahun. Selain itu, Hiu Paus (Whale Shark) sebanyak 1 kali terlihat sepanjang satu tahun terakhir.

              Dari beberapa jenis yang disebutkan di atas, hanya beberapa jenis yang diatur status konservasi dan perdagangannya di Indonesia. Hiu Paus (Rhincodon typus), dikenal juga dengan nama whale shark, Hiu Paus, Geger Lintang, Hiu Bodoh, Hiu Bintang, Hiu Tutul, Hiu Bingkoh.

              Sesuai dengan Surat Keputusan Menteri Kelautan dan Perikanan RI No. 18 Kepmen KP tahun 2013 tentang Penetapan Status Perlindungan Penuh Ikan Hiu Paus (Rhincodon typus) ditetapkan dengan status Perlindungan Penuh.

              Hiu Paus dinilai dalam Red list IUCN pada tahun 2016 dengan status Terancam Punah (Endangered).
              Selain itu, Hiu Tikus juga ditemukan di perairan Pulau Langkai dan Lanjukang. Tidak diketahui pasti nama spesiesnya, namun status konservasi dan perdagangannya telah diatur di Indonesia. Terdapat dua spesies Hiu Tikus yang di atur, yakni (Alopias superciliosus) dan (Alopias pelagicus).

              Sesuai dengan pada CITES CoP 17 tahun 2016 jenis ini telah masuk dalam Apendix II CITES dan dilarang mengeluarkan rekomedasi ekspor dari berdasarkan surat Edaran Direktur KKHL No. 2078/PRL.5/X/2017.

              erkait dengan tangkapan sampingan (bycatch) sesuai dengan Pasal 73 Permen KP No. 30 tahun 2012 jo Permen KP No. 26 tahun 2013 tentang Usaha Perikanan Tangkap di WPP NRI wajib dilepas dan dilaporkan jika mati, demikian juga pada Bab X Pasal 39 Permen KP No. 12 tahun 2012 tentang usaha perikanan tangkap di laut lepas.

              Selain jenis tersebut di atas yang telah di atur status konservasi dan perdagangannya di Indonesia, sebenarnya masih ada beberapa spesies hiu lain yang telah di atur, seperti Hiu Martil (Sphyrna lewini), Hiu Martil (Shyrna mokarran), Hiu Martil (Shyrna zygaena), Hiu Koboi (Carcharhinus longimanus), dan Hiu Lanjaman (Carcharhinus falciformis).

              Sementara untuk jenis Hiu Mako Sirip Pendek dan Hiu Sirip Hitam, dan Hiu dompala (nama lokal di Makassar dan sekitarnya), yang pernah ditemukan atau dijumpai nelayan di Perairan Pulau Langkai dan Lanjukang dalam satu tahun terakhir, semuanya masuk dalam Red list IUCN.

              Hiu Mako Sirip Pendek (Isurus oxyrinchus) dinilai dalam Red list IUCN pada tahun 2018 dengan status Terancam Punah (Endangered). Sementara Hiu Tikus memiliki dua spesies yang hampir sama yakni Carcharhinus limbatus dan Carcharhinus melanopterus, dinilai dalam Red list IUCN pada tahun 2020 dengan status Rentan (Vulnerable).

              Dengan masuknya jenis-jenis tersebut dalam Red list IUCN dengan status rentan hingga terancam punah, menandakan bahwa masih terdapat banyak ancaman bagi hiu yang dapat mengakibatkan kepunahan jika tidak segera diatur.

              Meskipun belum semua jenis yang di atur status konservasi dan perdagangannya di Indonesia, dan masih bisa dimanfaatkan secara optimal, namun sebaiknya perlu melakukan sesuatu untuk mengantisipasi terjadinya perubahan status konservasi pada jenis-jenis hiu di Indonesia. Tentunya, dengan tetap menjaga kelestariannya pemanfaatannya dapat dilakukan secara berkelanjutan.

              Sumber:
              1. Direktorat Konservasi dan Keanekaragaman Hayati Laut, Direktorat Jenderal Pengelolaan Ruang Laut, Kementerian Kelautan dan Perikanan (KKP)
              2. www.iucnredlist.org/
              3. https://cites.org/
              4. YKL Indonesia
            </p>
          </li>
        </ul>
        <ul className="box-1">
          <li>
            <img src="https://yklindonesia.org/wp-content/uploads/2022/10/PenyuLanjukang03-2048x1365-1-1536x1024.jpg" alt="" />
            <h2 >
              Mengenal Penyu Sisik dan Penyu Hijau
            </h2>
            <p className='desc-text'>
              Seluruh spesies penyu memiliki siklus hidup yang sama. Mempunyai pertumbuhan yang sangat lambat dan memerlukan sekitar 20 sampai 50 tahun tahun untuk mencapai usia reproduksi. Saat dewasa hidup bertahun-tahun di satu tempat sebelum bermigrasi untuk kawin dengan menempuh jarak yang jauh hingga 3000 km.

              Penyu betina menyimpan sperma penyu jantan di dalam tubuhnya untuk membuahi tiga hingga tujuh kumpulan telur (nantinya menjadi 3 sampai 7 sarang) yang akan di telurkan pada musim tersebut.

              Secara anatomi, penyu memiliki karapas, yaitu bagian tubuh yang dilapisi zat tanduk, yang berada di bagian punggung dan berfungsi sebagai pelindung. Selain itu, penyu juga memiliki lapisan penutup dan pelindung di bagian dada dan perut yang disebut dengan Plastron.

              Bentuknya kurang lebih mirip dengan kura-kura, namun dengan bentuk kaki yang cukup berbeda. Penyu memiliki bentuk kaki yang sedikit pipih. Kaki dengan bentuk pipih ini berfungsi juga sebagai sirip dayung dan pada bagian kaki belakang memiliki fungsi tambahan yakni sebagai alat penggali dan kemudi.

              Secara morfologi, penyu memiliki perbedaan karakteristik eksternal antara spesies. Seperti misalnya, jenis cangkang (lunak atau keras) serta ada atau tidaknya lempengan sisik di kepala (scales) dan di karapas (scutes). Jumlah dan susunan lempengan (scutes) pada cangkang, baik cangkang bagian atas (karapas) maupun cangkang bagian bawah (plastron), serta jumlah lempengan sisik (scales) pada kepala.

              Bicara konservasi penyu

              Kementerian Kelautan dan Perikanan (KKP) melalui Direktorat Konservasi dan Keanekaragaman Hayati Laut (KKHL), Direktorat Jenderal Pengelolaan Ruang Laut (Ditjen PRL) menyusun Rencana Aksi Nasional (RAN) Konservasi Penyu untuk tahun 2021-2025. Dokumen RAN Konservasi Penyu ini memberikan arahan dan acuan bagi stakehoders dalam melakukan upaya konservasi penyu secara terintegrasi.

              Penyu merupakan salah satu jenis yang dilindungi secara nasional dan internasional, serta termasuk dalam target prioritas pengelolaan konservasi jenis ikan di KKP. Sebelumnya, Dit. KKHL telah melakukan evaluasi terhadap pelaksanaan RAN konservasi penyu periode 2016-2020 dan mengidentifikasi isu serta tantangan konservasi penyu.

              Ada 6 tantangan dalam konservasi penyu, yaitu pendataan, riset, populasi, habitat, kelembagaan, ekonomi, dan kegiatan aktivitas perikanan. Berdasarkan tantangan tersebut, maka isu dalam RAN konservasi penyu periode berikut di kelompokan menjadi pendataan, riset dan penilaian populasi; kerusakan habitat; kelembagaan dan penegakan hukum; kontribus ekonomi; dan aktivitas manusia. Untuk menjawab isu dan tantangan tersebut maka diusulkan 5 sasaran dan 13 strategi dalam RAN konservasi penyu periode kedua.

              Melalui riset aksi partisipatif yang dilakukan YKL Indonesia bersama masyarakat/nelayan Pulau Langkai dan Lanjukang Kota Makassar, terdapat dua jenis penyu yang paling sering dijumpai, yaitu Penyu Sisik (Eretmochelys imbricata) dan Penyu Hijau (Chelonia mydas).

              Penyu Sisik (Eretmochelys imbricata) mulai dinilai dalam Red List Spesies Terancam IUCN pada tahun 2008. Eretmochelys imbricata yang tergolong dalam famili Cheloniidae dan saat ini terdaftar sebagai Terancam Punah (Critically Enangered). Begitu juga dengan Penyu Hijau (Chelonia mydas), spesies satu ini sama-sama famili Cheloniidae dan terdaftar dalam Red list IUCN Sangat Terancam Punah (Critically Enangered).

              Jumlah penyu semakin berkurang karena banyak diburu untuk diambil pelindung tubuhnya (karapas dan plastron) sebagai hiasan, telurnya sebagai sumber protein tinggi dan obat, juga dagingnya sebagai bahan makanan. Semua penyu ini masuk dalam daftar CITES kategori Appendix I yang berarti dilarang dalam segala bentuk perdagangan internasional.

              Berdasarkan hasil wawancara langsung dengan beberapa perwakilan nelayan di Pulau Lanjukang, diketahui bahwa dengan adanya Proteksi Gama yang berjalan selama kurang lebih 1 tahun, pengambilan telur penyu di pesisir pulau sudah tidak ada lagi. Masyarakat secara sadar tidak lagi mengonsumsi telur penyu.

              Bahkan, sejak kehadiran program ini, terdapat kelompok masyarakat konservasi penyu di Pulau Lanjukang, yang sekaligus berdampak baik bagi wisata. Setelah masyarakat melakukan konservasi terhadap penyu yang naik ke pulau, tingkat kelangsungan hidup telur penyu yang sudah menetas lebih tinggi karena sudah tidak dikonsumsi lagi telurnya.

              Sumber:
              1. Direktorat Konservasi dan Keanekaragaman Hayati Laut (KKHL), Kementerian Kelautan dan Perikanan (KKP)
              2. www.iucnredlist.org/
              3. https://cites.org/
              4. YKL Indonesia
            </p>
          </li>
        </ul>
      </div>
    </section>
  </section>
);

const FooterSection = () => (
  <section id="footer">
    <div className="footer">
      <div className="row">
        <div className="footer-col" style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <img src={Logo} alt="Logo" style={{ width: '200px' }} />
          </div>
        </div>
        <div className="footer-col">
          <h4>TENTANG KAMI</h4>
          <ul>
            <li><a href="#tentang-kami">Tentang Kami</a></li>
            <li><a href="#program">Program</a></li>
            <li><a href="#berita">Berita</a></li>
            <li><a href="#kontak">Kontak</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>KONTAK KAMI</h4>
          <ul>
            <li><p>Primary : 0896-4974-35</p></li>
            <li><p>Primary : bringoceanslife@gmail.com</p></li>
            <li><p>Secondary : oceanslife@gmail.com</p></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default News;