import React from 'react';

import '../../styles/Main.css';
import Logo from '../../assets/Logo BOL - Text.png';

const Footer = () => (
  <section id="footer">
    <div className="footer">
      <div className="row">
        <div className="footer-col" style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <img src={Logo} alt="Logo" style={{ width: '200px' }} />
          </div>
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

export default Footer;