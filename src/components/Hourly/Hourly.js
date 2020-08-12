import React from 'react';
import moment from 'moment';
import { motion } from 'framer-motion';
import WeatherSlider from '../WeatherSlider/WeatherSlider';

import './Hourly.scss';
import { containerVariant } from '../../framerMotion/variants';
const Hourly = ({ hourly, loading }) => {
  return (
    <motion.section variants={containerVariant} className='Hourly'>
      <h2>Hourly</h2>
      <hr />
      <WeatherSlider
        arr={hourly.data.length}
        slider={'Weather-slider'}
        loading={loading}
      >
        {hourly.data.map((hour, i) => {
          const windSpeed = Math.round(hour.windSpeed);
          const summaryIcon = hour.icon.split('-').join(' ');
          const temp = Math.round(hour.temperature);
          const precipProbability = (hour.precipProbability * 100).toFixed(0);

          return (
            <div className='Hourly__container' key={i}>
              <div className='Hourly__icon'>
                <img
                  src={`../../assets/icons/weather/svg/${hour.icon}.svg`}
                  alt={`${hour.icon}`}
                />
              </div>
              <div className='Hourly__temp'>
                {temp}
                <img
                  className='Hourly__degree'
                  src='../../assets/icons/weather/degree.svg'
                  alt='degree'
                />
              </div>
              <div className='Hourly__summary'>{summaryIcon}</div>
              <div className='Hourly__rain'>
                <img
                  src='../../assets/icons/weather/svg/humidity.svg'
                  alt='precip probability'
                />
                {precipProbability}%
              </div>
              <div className='Hourly__windSpeed'>
                <img
                  src='../../assets/icons/weather/svg/wind2.svg'
                  alt='km/h'
                />
                {windSpeed}km/h
              </div>
              <span className='Hourly__span'></span>
              <div className='Hourly__time'>
                {moment(hour.time * 1000).format('ddd h a')}
              </div>
            </div>
          );
        })}
      </WeatherSlider>
    </motion.section>
  );
};

export default Hourly;
