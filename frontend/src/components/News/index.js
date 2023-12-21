import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

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
        const response = await axios.get('/api/news');
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

const NewsSection = ({ news, redirectToNewsDetail }) => (
  <section className="newss-section">
    {news.length === 0 ? (
      <div className="no-newss-container">
        <p className="no-newss-message">
          There is no News Update, We Will Update Soon
        </p>
      </div>
    ) : (
      <ul>
        {news.map((news) => (
          <li key={news._id} onClick={() => redirectToNewsDetail(news._id)}>
            <h2>{news.title}</h2>
            <p>{news.description}</p>
          </li>
        ))}
      </ul>
    )}
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