import React from 'react';
import moment from 'moment';
import { motion, AnimateSharedLayout } from 'framer-motion';
import './DailyContainer.scss';
import { onTapContainer, onHoverContainer } from '../../framerMotion/variants';

const DailyContainer = ({
  date,
  temperatureMax,
  temperatureMin,
  icon,
  id,
  onClick,
  selected,
}) => {
  const tempMax = Math.round(temperatureMax);
  const tempMin = Math.round(temperatureMin);
  const summaryIcon = icon.split('-').join(' ');

  return (
    <motion.li
      whileTap={{ scale: 0.9 }}
      className={`DailyContainer `}
      onClick={() => onClick(id)}
    >
      <h3 className='DailyContainer__heading'>
        {moment(date * 1000).format('ddd D')}
      </h3>
      <div className='DailyContainer__icon'>
        <img src={`../../assets/icons/weather/svg/${icon}.svg`} alt={icon} />
      </div>
      <div className='DailyContainer__temp'>
        <span>
          {tempMax}
          <img
            className='DailyContainer__degree-max'
            src='../../assets/icons/weather/degree.svg'
            alt='degree'
          />
        </span>

        {tempMin}
        <img
          className='DailyContainer__degree-min'
          src='../../assets/icons/weather/degree.svg'
          alt='degree'
        />
      </div>
      <div className='DailyContainer__summary'>{summaryIcon}</div>
      {selected === id && (
        <motion.div
          className='bottomBorder'
          layoutId='bottomBorder'
          initial={false}
          animate={{ borderBottom: '2px solid #fff' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        ></motion.div>
      )}
    </motion.li>
  );
};

export default DailyContainer;
