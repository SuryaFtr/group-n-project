import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/About.css';
import Logo from '../../assets/Logo BOL - Text.png';
import vectorImage from '../../assets/Vector.png';

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
          <a href={navLinks.about} className="active">About</a>
        </li>
        <li onClick={() => redirectTo(navLinks.program)}>
          <a href={navLinks.program}>Program</a>
        </li>
        <li onClick={() => redirectTo(navLinks.events)}>
          <a href={navLinks.events}>Events</a>
        </li>
        <li onClick={() => redirectTo(navLinks.news)}>
          <a href={navLinks.news}>News</a>
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

const About = () => (
  <div>
    <div className="about" id="about">
    <Navbar />
    <div className="about-text">
      <h1>ABOUT</h1>
    </div>
    </div>
    <AboutSection {...fullAbout} />
    <AboutSection1/>
    <AboutSection2/>
    <AboutSection3/>
    <AboutSection4/>
    <FooterSection />
    <p className="copyright">2023 - Bring Oceans Life by Group N. All Rights Reserved. Made With Love.</p>
  </div>
);

const AboutSection = ({ title, content, expImage }) => (
    <section className="about-section">
      <div className="bit-about-image">
        <img src={expImage} alt="Bit About" />
      </div>
      <div className="about-content">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </section>
  );
  
  const fullAbout = {
    title: 'WELCOME',
    content:
      'Mengakar pada tekad untuk melestarikan kawasan pesisir, laut, dan mengelola pulau-pulau kecil, Bring Oceans Life berdiri sebagai garda terdepan dalam memberikan kontribusi nyata. Melalui serangkaian usaha pelestarian lingkungan dan sumberdaya pesisir laut, Bring Oceans Life berpegang teguh pada prinsip-prinsip pemberdayaan masyarakat dan riset. Website ini adalah refleksi dari dedikasi kami terhadap konservasi yang berkelanjutan.',
    expImage: vectorImage,
  };

const AboutSection1 = () => (
    <section className="about-section1">
      <div className="about-content">
        <p>Dalam perjalanan kami, kami menyadari bahwa keberlanjutan tidak dapat dicapai sendirian. Dengan memanfaatkan pengalaman sejarah dan mengambil inspirasi dari pelajaran berharga, kami menerapkan pendekatan kolaboratif yang berakar pada prinsip-prinsip demokrasi dan kesetaraan. Dengan memberikan dan menerima, kami berupaya memberikan yang terbaik bagi lingkungan dan masyarakat.</p>
        <br />
        <p>Saat ini, Bring Oceans Life terus berkembang dengan semangat untuk merenung dan mengevaluasi upaya-upaya kami. Melalui proses introspeksi, koreksi, dan reorientasi, kami mengadopsi sikap otoritik untuk membawa perubahan positif dalam pembangunan wilayah pesisir, pulau-pulau kecil, dan lautan secara berkelanjutan.</p>
        <br />
        <p>Secara historis, Bring Oceans Life Indonesia lahir sebagai manifestasi semangat kesadartahuan yang menjadi landasan utama perjuangan kami. Kesadaran kritis akan pentingnya mengelola sumberdaya kelautan dengan seimbang antara eksploitasi demi kesejahteraan masyarakat dan pelestarian untuk keberlanjutan, terus mendorong pergerakan kami menuju tujuan bersama.</p>
      </div>
    </section>
  );

const AboutSection2 = () => (
  <section className="about-section1">
    <div className="about-content1">
      <h4>LATAR BELAKANG</h4>
      <p style={{ textAlign: 'center' }}>Berdiri di Jakarta, pada tahun 2023 dan diaktenotariskan pada tanggal 23 Desember 2023, Bring Oceans Life merupakan Organisasi yang gerakannya berorientasi pada:</p>
      <br />
      <div className="grid-container-1">
        <div className="grid-item-1">
          <h3>EKOSISTEM SEHAT</h3>
          <p style={{ textAlign: 'center' }}>Mempromosikan perlindungan alam melalui inovasi dan pemulihan ekosistem yang terdegradasi, dengan fokus pada pelestarian biodiversitas dan keseimbangan ekosistem.</p>
        </div>
        <div className="grid-item-1">
          <h3>KEBIJAKAN BERKELANJUTAN</h3>
          <p style={{ textAlign: 'center' }}>Memperjuangkan terciptanya kebijakan pembangunan yang berkelanjutan, adil, dan menghargai kearifan lokal. Sinergi dan co-management menjadi landasan untuk memastikan keadilan dan keberlanjutan.</p>
        </div>
        <div className="grid-item-1">
          <h3>REVOLUSI RAMAH LINGKUNGAN</h3>
          <p style={{ textAlign: 'center' }}>Mengembangkan prototipe teknologi alternatif yang sederhana dan mudah diadopsi oleh masyarakat, dengan tujuan meminimalkan dampak negatif terhadap lingkungan. Teknologi ini menjadi pilar utama dalam transformasi menuju gaya hidup ramah lingkungan.</p>
        </div>
        <div className="grid-item-1">
          <h3>KEKUATAN MASYARAKAT</h3>
          <p style={{ textAlign: 'center' }}>Memberdayakan ekonomi masyarakat melalui pemanfaatan sumberdaya pesisir dan laut secara berkelanjutan. Program ini bertujuan menciptakan kemandirian ekonomi dan meningkatkan kesejahteraan masyarakat lokal.</p>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection3 = () => (
  <section className="about-section1">
      <div className="about-content1">
        <h4>VISI</h4>
        <p className='titles3'>MENGHIDUPKAN SEMANGAT PERTAHANAN LINGKUNGAN</p>
        <br />
        <p>Suatu dedikasi bersama dari masyarakat dan pihak-pihak terkait untuk mengelola sumber daya di wilayah pesisir dan lautan dengan cara yang berkelanjutan dan cerdas, berlandaskan pada prinsip-prinsip ilmiah.</p>
      </div>
    </section>
);

const AboutSection4 = () => (
  <section className="about-section1">
    <div className="about-content1">
      <h4>MISI</h4>
      <div className="grid-container-1">
        <div className="grid-item-1">
          <h3>PENGEMBANGAN KONSEP ILMUAN</h3>
          <p style={{ textAlign: 'center' }}>Meneliti dan mengembangkan konsep-konsep ilmiah, baik dalam praktik maupun teori. Melakukan kajian ilmiah yang terkait dengan tantangan pengelolaan sumber daya dan lingkungan di wilayah kepulauan kecil, pesisir, dan lautan.</p>
        </div>
        <div className="grid-item-1">
          <h3>PENYEBARLUASAN ILMU DAN HASIL PENELITIAN</h3>
          <p style={{ textAlign: 'center' }}>Menyampaikan hasil kajian ilmiah, penelitian, dan pengembangan ilmu pengetahuan yang mendukung upaya konservasi dan rehabilitasi lingkungan di daerah kepulauan kecil, pesisir, dan lautan kepada masyarakat umum.</p>
        </div>
        <div className="grid-item-1">
          <h3>PENGEMBANGAN PUSAT BASIS DATA</h3>
          <p style={{ textAlign: 'center' }}>Membangun pusat basis data yang mendukung upaya konservasi lingkungan dan memberdayakan masyarakat di wilayah pesisir dan kepulauan kecil.</p>
        </div>
        <div className="grid-item-1">
          <h3>TEKNOLOGI RAMAH LINGKUNGAN UNTUK KESEJAHTERAAN MASYARAKAT</h3>
          <p style={{ textAlign: 'center' }}>Mengembangkan, memperkenalkan, dan menerapkan teknologi alternatif yang ramah lingkungan untuk meningkatkan kesejahteraan masyarakat di daerah pesisir dan kepulauan kecil.</p>
        </div>
        <div className="grid-item-1">
          <h3>PENINGKATAN KUALITAS SDM DAN PEMBERDAYAAN MASYARAKAT</h3>
          <p style={{ textAlign: 'center' }}>Melakukan gerakan peningkatan kualitas Sumber Daya Manusia (SDM) melalui pemberdayaan ekonomi lokal, penegakan hukum, peningkatan kesadaran kritis, kampanye publik, serta penguatan kelembagaan lokal di masyarakat pesisir dan kepulauan kecil.</p>
        </div>
        <div className="grid-item-1">
          <h3>KERJASAMA DAN JARINGAN PENGEMBANGAN</h3>
          <p style={{ textAlign: 'center' }}>Menggalang kerjasama dan membangun jaringan dengan organisasi non-pemerintah, kelompok swadaya masyarakat (KSM), pemerintah, lembaga perwakilan rakyat, pelaku bisnis sektor swasta, lembaga, dan individu donor/penyandang dana, selama sesuai dengan visi YKL Indonesia.</p>
        </div>
        <div className="grid-item-1">
          <h3>LAYANAN PROFESIONAL DAN ASISTENSI TEKNIS</h3>
          <p style={{ textAlign: 'center' }}>Menyediakan layanan profesional dan bantuan teknis kepada kelompok swadaya masyarakat, lembaga swadaya masyarakat, dan institusi pemerintahan yang mendukung konservasi lingkungan dan pemberdayaan masyarakat di daerah pesisir dan kepulauan kecil.</p>
        </div>
        <div className="grid-item-1">
          <h3>ADVOKASI KEBIJAKAN PENGELOLAAN SDA</h3>
          <p style={{ textAlign: 'center' }}>Mendorong adopsi kebijakan pengelolaan sumber daya alam yang terpadu, berkeadilan, dan berkelanjutan di daerah kepulauan kecil, pesisir, dan lautan.</p>
        </div> 
      </div>
    </div>
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

export default About;