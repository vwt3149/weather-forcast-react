import React from 'react';

import { motion } from 'framer-motion';
import { spinnerVariant } from '../../../framerMotion/variants';
import GridLoader from 'react-spinners/GridLoader';

import './Spinner.scss';

const Spinner = () => {
  return (
    <div className='Spinner'>
      <div>
        <GridLoader size={30} color={'#bdc3c7'} />
      </div>
    </div>
  );
};

export default Spinner;
