import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/Main.css';
import Logo from '../../assets/Logo BOL - Text.png';
import beachImage from '../../assets/Beach.jpg';
import vectorImage from '../../assets/Vector1.png';
import oneLogo from '../../assets/Ekosistem.png';
import twoLogo from '../../assets/Kebijakan.png';
import threeLogo from '../../assets/Leaves.png';
import fourLogo from '../../assets/Public.png';

const Navbar = () => {
  const navigate = useNavigate();

  const navLinks = {
    home: '/',
    about: '/about',
    program: '/program',
    news: '/news',
    contact: '/contact',
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
          <a href={navLinks.home} className="active">
            Home
          </a>
        </li>
        <li onClick={() => redirectTo(navLinks.about)}>
          <a href={navLinks.about}>About</a>
        </li>
        <li onClick={() => redirectTo(navLinks.program)}>
          <a href={navLinks.program}>Program</a>
        </li>
        <li onClick={() => redirectTo(navLinks.news)}>
          <a href={navLinks.news}>News</a>
        </li>
        <li onClick={() => redirectTo(navLinks.contact)}>
          <a href={navLinks.contact}>Contact</a>
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

const Main = () => (
  <div>
    <div className="home" id="home">
    <Navbar />
    <div className="home-text">
      <h1>Bring Oceans Life</h1>
      <p>Selamat datang di Bring Oceans Life, platform berkomitmen pada perlindungan dan konservasi ekosistem pesisir dan laut.
         Kami mendorong pemanfaatan berkelanjutan dan pemulihan ekosistem, serta mengutamakan manajemen berkelanjutan perikanan
         skala kecil untuk melindungi ekosistem dan meningkatkan ekonomi lokal. Dengan inovasi ramah lingkungan di wilayah pesisir,
         laut, dan pulau-pulau kecil, kami memberdayakan masyarakat untuk ikut serta dalam menjaga keberlanjutan. Bergabunglah bersama
         kami membangun masa depan berkelanjutan, di mana harmoni antara manusia dan lingkungan menjadi kunci keberhasilan.
      </p>
      <div className="button">
        <a href="#About" className="btn">Selengkapnya</a>
      </div>
    </div>
    </div>
    <BitAboutSection {...bitAbout} />
    <ProgramSection />
    <QuotesSection />
    <NewsSection />
    <DonateSection />
    <FooterSection />
    <p className="copyright">2023 - Bring Oceans Life by Group N. All Rights Reserved. Made With Love.</p>
  </div>
);

const BitAboutSection = ({ title, content, buttonText, expImage }) => (
  <section className="bit-about-section">
    <div className="bit-about-content">
      <h4>{title}</h4>
      <p>{content}</p>
      <div className="moreBtn">
        <a href="#About" className="btn1">
          {buttonText}
        </a>
      </div>
    </div>
    <div className="bit-about-image">
      <img src={expImage} alt="Bit About" />
    </div>
  </section>
);

const bitAbout = {
  title: 'Conserving the Ocean for a Better Future',
  content:
    'Berawal dari komitmen terhadap pentingnya konservasi kawasan pesisir, laut dan pengelolaan pulau-pulau kecil, kami hadir untuk memberikan kontribusi melalui upaya-upaya pelestarian lingkungan hidup dan sumberdaya pesisir laut yang diusahakan dengan prinsip-prinsip pemberdayaan masyarakat dan riset.',
  buttonText: 'Selengkapnya',
  expImage: vectorImage,
};

const ProgramSection = () => (
  <section id="program" className="program-section">
    <h1>OUR PROGRAM</h1>
    <div className="grid-container">
      {programs.map((program, index) => (
        <ProgramItem key={index} {...program} />
      ))}
    </div>
  </section>
);

const ProgramItem = ({ logo, title, description }) => (
  <div className="item">
    <img src={getLogo(logo)} alt={`${title} Logo`} />
    <p>
      <span>{title}</span>
      <br />
      <br />
      {description}
    </p>
  </div>
);

const getLogo = (logoName) => {
  switch (logoName) {
    case 'Ekosistem.png':
      return oneLogo;
    case 'Kebijakan.png':
      return twoLogo;
    case 'Leaves.png':
      return threeLogo;
    case 'Public.png':
      return fourLogo;
    default:
      return null;
  }
};

const programs = [
  {
    logo: 'Ekosistem.png',
    title: 'EKOSISTEM SEHAT',
    description: 'Mempromosikan perlindungan alam melalui inovasi dan pemulihan ekosistem yang terdegradasi, dengan fokus pada pelestarian biodiversitas dan keseimbangan ekosistem.',
  },
  {
    logo: 'Kebijakan.png',
    title: 'KEBIJAKAN BERKELANJUTAN',
    description: 'Memperjuangkan terciptanya kebijakan pembangunan yang berkelanjutan, adil, dan menghargai kearifan lokal. Sinergi dan co-management menjadi landasan untuk memastikan keadilan dan keberlanjutan.',
  },
  {
    logo: 'Leaves.png',
    title: 'REVOLUSI RAMAH LINGKUNGAN',
    description: 'Mengembangkan prototipe teknologi alternatif yang sederhana dan mudah diadopsi oleh masyarakat, dengan tujuan meminimalkan dampak negatif terhadap lingkungan. Teknologi ini menjadi pilar utama dalam transformasi menuju gaya hidup ramah lingkungan.',
  },
  {
    logo: 'Public.png',
    title: 'KEKUATAN MASYARAKAT',
    description: 'Memberdayakan ekonomi masyarakat melalui pemanfaatan sumberdaya pesisir dan laut secara berkelanjutan. Program ini bertujuan menciptakan kemandirian ekonomi dan meningkatkan kesejahteraan masyarakat lokal.',
  },
];

const QuotesSection = () => (
  <section id="quotes" className="quotes-section">
    <div className="quote-box">
      <blockquote>
      Kami membutuhkan dukungan Anda untuk mendukung upaya kami dalam Pendidikan, 
      Aktivisme, dan Ilmu Pengetahuan, untuk Membantu Meningkatkan Kesehatan Lingkungan
      Laut dan Penghentian Polusi Plastik.
      </blockquote>
      <p className="author">BRING OCEANS LIFE</p>
        <div className="donateBtn">
          <a href="#Donate" className="btn2">
            DONATE
          </a>
        </div>
    </div>
  </section>
);

const NewsSection = () => (
  <section id="news" className='news-section'>
    <h1>NEWS</h1>
      <div className="grid-container-4">
        <div className="box-1">
          <img src={beachImage} alt="Gambar 1" />
          <a href="#link1">Section 1.10.33 of "de Finibus Bonorum et Malorum"....</a>
        </div>
        <div className="box-1">
          <img src={beachImage} alt="Gambar 2" />
          <a href="#link2">Section 1.10.33 of "de Finibus Bonorum et Malorum"....</a>
        </div>
        <div className="box-1">
          <img src={beachImage} alt="Gambar 3" />
          <a href="#link3">Section 1.10.33 of "de Finibus Bonorum et Malorum"....</a>
        </div>
      </div>
  </section>
);

function DonateSection() {
  return (
      <section id="gabung">
          <div className="box-gabung">
              <p>"Bersama-sama kita ciptakan gelombang perubahan untuk membangun planet yang lebih sehat dan adil bagi semua."</p>
                <div className="donateBtn1">
                  <a href="#Donate" className="btn3">
                    DONATE
                  </a>
                </div>
          </div>
      </section>
  );
}

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

export default Main;