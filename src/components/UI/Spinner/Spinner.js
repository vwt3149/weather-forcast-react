import React from 'react';
import GridLoader from 'react-spinners/GridLoader';
import { useMediaQuery } from 'react-responsive';
import './Spinner.scss';

const SpinnerApp = () => {
  return (
    <div className='Spinner Spinner__main'>
      <div>
        <GridLoader size={30} color={'#bdc3c7'} />
      </div>
    </div>
  );
};
const SpinnerHourly = () => {
  const isPhone = useMediaQuery({ query: '(max-width: 599px)' });

  return (
    <div className='Spinner Spinner__hourly'>
      <div>
        <GridLoader size={isPhone ? 10 : 30} color={'#bdc3c7'} />
      </div>
    </div>
  );
};

export { SpinnerApp, SpinnerHourly };
