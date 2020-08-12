import React from 'react';
import './Current.scss';
import { motion } from 'framer-motion';
import { containerVariant } from '../../framerMotion/variants';

const Current = ({ current }) => {
  const motionDrag = 50;
  const summaryIcon = current.icon.split('-').join(' ');
  const apparentTemp = Math.round(current.apparentTemperature);
  const temp = Math.round(current.temperature);
  const windSpeed = Math.round(current.windSpeed);
  const humidity = (current.humidity * 100).toFixed(0);
  return (
    <motion.main variants={containerVariant} className='Current'>
      <div className='Current__location'>
        <div className='Current__city'>
          {`${
            current.city || current.village || current.town || current.state
          }, ${current.country}`}
        </div>
      </div>
      <div className='Current__data'>
        <div className='Current__info'>
          <div className='Current__icon'>
            <motion.img
              drag
              dragConstraints={{
                left: -motionDrag,
                right: motionDrag,
                top: -motionDrag,
                bottom: motionDrag,
              }}
              src={`../../assets/icons/weather/svg/${current.icon}.svg`}
              alt={`${current.icon}`}
            />
          </div>

          <div className='Current__temp'>
            {temp}
            <img src='../../assets/icons/weather/degree.svg' alt='degree' />
          </div>
          <div className='Current__celsius'>C</div>
        </div>
      </div>
      <div className='Current__textDesc'>{summaryIcon}</div>
      <div className='Current__otherInfo'>
        <div className='Current__feel'>Feels like {apparentTemp}C</div>
        <div className='Current__wind'>Wind {windSpeed}km/h</div>
        <div className='humidity'>Humidity {humidity}%</div>
        <div className='psi'>Barometer {current.pressure}psi</div>
      </div>
    </motion.main>
  );
};

export default Current;
