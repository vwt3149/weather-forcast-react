import React from 'react';
import './HourlyContainer.scss';
const HourlyContainerContainer = () => {
  return (
    <div className='HourlyContainer'>
      <div className='HourlyContainer__icon'>Icon</div>
      <div className='HourlyContainer__temp'>20</div>
      <div className='HourlyContainer__summary'>Partly sunny</div>
      <div className='HourlyContainer__humidity'>10%</div>
      <div className='HourlyContainer__windSpeed'>5km/h</div>
      <span className='HourlyContainer__span'></span>
      <div className='HourlyContainer__time'>12pm</div>
    </div>
  );
};

export default HourlyContainerContainer;
