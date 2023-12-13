import React from 'react';
import oneLogo from '../../assets/Ekosistem.png';
import twoLogo from '../../assets/Kebijakan.png';
import threeLogo from '../../assets/Leaves.png';
import fourLogo from '../../assets/Public.png';
import seaImage from '../../assets/Undersea.jpg';
import Logo from '../../assets/Logo BOL - Text.png';
import beachImage from '../../assets/Beach.jpg';
import '../../styles/Main.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navLinks = {
    program: '/program',
    about: '/about',
    contact: '/contact',
    login: '/login',
    donate: '/donate',
  };

  const redirectTo = (path) => {
    navigate(path);
  };

  return (
    <nav className="nav">
      <span className="usLogo">
        <img src={Logo} alt="Logo" onClick={() => redirectTo('/')} style={{ cursor: 'pointer' }} />
      </span>
      <ul className="desktop">
        <li onClick={() => redirectTo(navLinks.program)}>
          <a href="#Program">OUR PROGRAM</a>
        </li>
        <li onClick={() => redirectTo(navLinks.about)}>
          <a href="#About">ABOUT</a>
        </li>
        <li onClick={() => redirectTo(navLinks.contact)}>
          <a href="#Contact">CONTACT</a>
        </li>
        <li onClick={() => redirectTo(navLinks.login)}>
          <a href="#Login">LOGIN</a>
        </li>
      </ul>
      <div className="donateBtn" onClick={() => redirectTo(navLinks.donate)}>
        <a href="#Donate" className="btnA">
          DONATE
        </a>
      </div>
    </nav>
  );
};

const Main = () => (
  <div className="main-page">
    <Navbar />
    <img src={seaImage} alt="beach" className="background-image" />
    <div className="content">
      <h4 className="title">
        BRING <span>OCEANS</span> LIFE
      </h4>
      <p className="description">
        Selamat datang di Bring Oceans Life, platform berkomitmen pada perlindungan dan konservasi ekosistem pesisir dan laut.
        Kami mendorong pemanfaatan berkelanjutan dan pemulihan ekosistem, serta mengutamakan manajemen berkelanjutan perikanan
        skala kecil untuk melindungi ekosistem dan meningkatkan ekonomi lokal. Dengan inovasi ramah lingkungan di wilayah pesisir,
        laut, dan pulau-pulau kecil, kami memberdayakan masyarakat untuk ikut serta dalam menjaga keberlanjutan. Bergabunglah bersama
        kami membangun masa depan berkelanjutan, di mana harmoni antara manusia dan lingkungan menjadi kunci keberhasilan.
      </p>
      <div className="moreBtn">
        <a href="#More" className="btnB">
          SELENGKAPNYA
        </a>
      </div>
    </div>
    <BitAboutSection {...bitAbout} />
    <ProgramSection />
  </div>
);

const BitAboutSection = ({ title, content, buttonText, expImage }) => (
  <section className="bit-about-section">
    <div className="bit-about-content">
      <h4>{title}</h4>
      <p>{content}</p>
      <div className="moreBtn">
        <a href="#More" className="btnB">
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
  expImage: beachImage,
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

export default Main;