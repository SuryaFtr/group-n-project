import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/Program.css';
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
          <a href={navLinks.program} className="active">Program</a>
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

const Program = () => (
  <div>
    <div className="program">
    <Navbar />
    <div className="program-text">
      <h1>PROGRAM</h1>
    </div>
    </div>
    <ProgramSection/>
    <FooterSection />
    <p className="copyright">2023 - Bring Oceans Life by Group N. All Rights Reserved. Made With Love.</p>
  </div>
);

const ProgramSection = () => (
  <section className="about-section1">
    <div className="about-content1">
      <h4>OUR PROGRAM</h4>
      <p style={{ textAlign: 'center' }}>Saat ini, kami sedang menjalankan beberapa program. Berikut adalah rincian program-program tersebut:</p>
      <br />
      <div className="grid-container-1">
        <div className="grid-item-1">
          <h3>OCEANS COMMUNITIES</h3>
          <p style={{ textAlign: 'center' }}>Mission - Menghubungkan dan memberdayakan masyarakat yang didorong oleh saluran air (samudera, laut, danau, sungai) untuk mengatasi polusi plastik dan tantangan keberlanjutan lainnya.
            <br />
            Focus - Bermitra dengan inisiatif lokal, bisnis ramah lingkungan, pemerintah, atau kelompok masyarakat.
            <br />
            Values - Kolaborasi jangka panjang, prinsip ekonomi sirkular, Tujuan Pembangunan Berkelanjutan PBB.
            <br />
            Benefits - Memperkuat upaya lokal, menghubungkan komunitas secara global, memberikan dukungan finansial dan sumber daya.</p>
        </div>
        <div className="grid-item-1">
          <h3>TREES AND SEAS</h3>
          <p style={{ textAlign: 'center' }}>Bridging the gap - Menghubungkan konservasi laut dan hutan, menekankan keterkaitan kesehatan lingkungan.</p>
        </div>
        <div className="grid-item-1">
          <h3>GLOBAL PLASTICS TREATY</h3>
          <p style={{ textAlign: 'center' }}>Addressing the root cause - Mendukung kerangka kerja global untuk menetapkan standar dan peraturan produksi, penggunaan, dan pembuangan plastik.
            <br />
            Empowering local action - Mendukung negara-negara dalam menerapkan kebijakan polusi plastik yang selaras dengan perjanjian global.</p>
        </div>
        <div className="grid-item-1">
          <h3>PLASTIC OCEANS INTERNATIONAL: A CATALYST FOR CHANGE</h3>
          <p style={{ textAlign: 'center' }}>Mission - Memberantas polusi plastik dan membina komunitas berkelanjutan di seluruh dunia.
            <br />
            Methodology - Pendidikan, advokasi, sains, dan kolaborasi komunitas.
            <br />
            Impact - Menginspirasi tindakan lokal dan global, mendukung beragam inisiatif, mendorong perubahan sistemik melalui kebijakan dan berbagi pengetahuan.</p>
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

export default Program;