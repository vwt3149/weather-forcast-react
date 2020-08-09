import React, { useEffect } from 'react';

import './WeatherSlider.scss';
const WeatherSlider = ({ children, arr, slider }) => {
  const width = arr * 150;

  // useEffect(() => {
  //   console.log(document.querySelector(`.Hourly__container`).offsetWidth);
  //   console.log(document.querySelector(`.${slider}`).offsetWidth);
  // }, []);

  // let scrollX = 0;
  // const leftArrowHandler = () => {
  //   const wrapper = document.querySelector('.WeatherSlider__wrapper ');

  //   if (scrollX > 0) {
  //     scrollX -= 600; //Math.floor(wrapper.offsetWidth / 150) * 150;
  //     // const left = document.querySelector(`.${slider}`).scroll(scrollX, 0);
  //     const left = document.querySelector(`.${slider}`);
  //     left.style.transform = `translateX(-${scrollX}px)`;

  //     console.log(wrapper.offsetWidth, scrollX);
  //   }
  // };
  // const rightArrowHandler = () => {
  //   if (scrollX < width && width > 1200) {
  //     const wrapper = document.querySelector('.WeatherSlider__wrapper ');
  //     scrollX += 600;
  //     // document.querySelector(`.${slider}`).scroll(scrollX, 0);
  //     const right = document.querySelector(`.${slider}`);
  //     right.style.transform = `translateX(-${scrollX}px)`;

  //     console.log(wrapper.offsetWidth, scrollX);
  //   }
  // };
  return (
    <div className='WeatherSlider'>
      <div className={`WeatherSlider__wrapper `}>
        <div
          className={`WeatherSlider__container ${slider}`}
          style={{ width: `${width}px` }}
        >
          {children}
        </div>
      </div>
      {/* <div className='WeatherSlider__arrowLeft' onClick={leftArrowHandler}>
        <img src='../../assets/icons/arrows/left.svg' alt='left' />
      </div>
      <div className='WeatherSlider__arrowRight' onClick={rightArrowHandler}>
        <img src='../../assets/icons/arrows/right.svg' alt='right' />
      </div> */}
    </div>
  );
};

export default WeatherSlider;
