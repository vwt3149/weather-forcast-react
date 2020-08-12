import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

import { lineChart } from '../../../charts/charts';

import './DailyChart.scss';
const DailyChart = ({ daily }) => {
  const [state, setState] = useState({});
  useEffect(() => {
    const data = {
      maxTemp: [],
      minTemp: [],
      days: [],
    };

    daily.data.forEach((day) => {
      const tempMax = Math.round(day.temperatureHigh);
      const tempMin = Math.round(day.temperatureLow);
      const daysString = moment(day.time * 1000).format('ddd');

      data.maxTemp.push(tempMax);
      data.minTemp.push(tempMin);
      data.days.push(daysString);
    });
    setState(lineChart(data));
  }, [daily]);
  return (
    <div className='DailyChart'>
      <h2>{daily.data.length} Day Weather</h2>
      {state && (
        <div className='DailyChart__container'>
          <Line
            data={state.data}
            options={state.options}
            legend={state.legend}
          />
        </div>
      )}
    </div>
  );
};

export default DailyChart;
