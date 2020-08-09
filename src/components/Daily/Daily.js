import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { containerVariant } from '../../framerMotion/variants';

import DailyContainer from '../UI/DailyContainer';
import WeatherSlider from '../UI/WeatherSlider';
import { getWeatherDaily } from '../../services/weather';

import './Daily.scss';

const Daily = ({ daily, coordinates, onClickItem }) => {
  const [selected, setSelected] = useState(daily.data[0].time);

  const onClickedItem = async (timestamp) => {
    setSelected(timestamp);
    const { lat, lng } = coordinates;
    try {
      const res = await getWeatherDaily(lat, lng, timestamp);
      onClickItem(res);
      console.log('>> GET WEATHER BY DAY << ', res);
    } catch (error) {
      console.log('>> GET WEATHER BY DAY << error', error);
    }
  };
  return (
    <motion.section variants={containerVariant} className='Daily'>
      <h2>Daily</h2>
      <WeatherSlider arr={daily.data.length} slider={'Daily-slider'}>
        <AnimateSharedLayout>
          <ul className={'Daily__list'}>
            {daily.data.map((day, i) => {
              return (
                <DailyContainer
                  onClick={onClickedItem}
                  id={day.time}
                  date={day.time}
                  temperatureMax={day.temperatureHigh}
                  temperatureMin={day.temperatureLow}
                  icon={day.icon}
                  key={i}
                  selected={selected}
                />
              );
            })}
          </ul>
        </AnimateSharedLayout>
      </WeatherSlider>
    </motion.section>
  );
};

export default Daily;
