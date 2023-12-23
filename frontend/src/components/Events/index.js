import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { API_BASE_URL } from '../../components/function';

import '../../styles/Events.css';
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
          <a href={navLinks.events} className="active">Events</a>
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

const Events = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/event`);
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const redirectToEventDetail = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div>
      <div className="events">
        <Navbar />
        <div className="events-text">
          <h1>EVENTS</h1>
        </div>
      </div>
      <EventSection events={events} redirectToEventDetail={redirectToEventDetail} />
      <FooterSection />
      <p className="copyright">2023 - Bring Oceans Life by Group N. All Rights Reserved. Made With Love.</p>
    </div>
  );
};

const EventSection = ({ events, redirectToEventDetail }) => (
  <section className="events-section">
    {events.length === 0 ? (
      <div className="no-events-container">
        <p className="no-events-message">
          There is no Events Update, We Will Update Soon
        </p>
      </div>
    ) : (
      <section id="events" className='events-section'>
        <div className="grid-container-4">
          {events.map((event) => (
            <ul className="box-1">
              <li>
                <img src={event.pictureLink} alt="" />
                <h2 key={event._id} onClick={() => redirectToEventDetail(event._id)}>
                  {event.title}
                </h2>
                <p className='desc-text'>
                  {event.description}
                </p>
              </li>
            </ul>
          ))}
        </div>
      </section>
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

export default Events;