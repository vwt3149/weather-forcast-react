import React from 'react';

import './Footer.scss';
const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer__container'>
        <h4>Site powered by:</h4>
        <ul className='Footer__list'>
          <li className='Footer__listItem'>
            <a href='https://darksky.net/poweredby/'>Dark Sky</a>
          </li>
          <li className='Footer__listItem'>
            <a href='https://opencagedata.com/'>OpenCage Geocoding</a>
          </li>
          <li className='Footer__listItem'>
            <a href='https://ipinfo.io/'>Ip Info</a>
          </li>
          <li className='Footer__listItem'>
            <a href='https://www.flaticon.com/'>Flat Icon</a>
          </li>
        </ul>
      </div>

      <div className='Footer__container'>
        <h4>Social</h4>
        <ul className='Footer__list'>
          <li className='Footer__listItem'>
            <a href='https://www.linkedin.com/in/adrijan-kolosnjaji-30433116b'>
              Linked In
            </a>
          </li>
          <li className='Footer__listItem'>
            <a href='https://www.facebook.com/'>FaceBook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
