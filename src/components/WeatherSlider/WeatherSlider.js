import React from 'react';
import { SpinnerHourly } from '../UI/Spinner/Spinner';
import { useMediaQuery } from 'react-responsive';

import './WeatherSlider.scss';
const WeatherSlider = ({ children, arr, slider, loading }) => {
  const isPhone = useMediaQuery({ query: '(max-width: 599px)' });

  return (
    <div className='WeatherSlider'>
      <div className={`WeatherSlider__wrapper `}>
        {loading && <SpinnerHourly />}
        <div
          className={`WeatherSlider__container ${slider}`}
          style={{ width: `${arr * isPhone ? 70 : 150}px` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default WeatherSlider;
