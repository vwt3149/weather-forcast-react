import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Doughnut } from 'react-chartjs-2';
import { doughnutChart } from '../../charts/charts';

import './DayDetails.scss';
import DayDetail from './DayDetail/DayDetail';

const DayDetails = ({ details, alerts }) => {
  const [chartHumidity, setChartHumidity] = useState({});
  const [chartUV, setChartUV] = useState({});
  const [chartPrecipitation, setChartPrecipitation] = useState({});

  const weatherAlert = alerts && alerts[0];

  useEffect(() => {
    const humidity = doughnutChart(null, details.humidity);
    const uv = doughnutChart('uv', details.uvIndex);
    const precipitation = doughnutChart(null, details.precipProbability);

    setChartHumidity(humidity);
    setChartPrecipitation(precipitation);
    setChartUV(uv);
  }, []);

  return (
    <div className='DayDetails'>
      <h2>Day Details</h2>
      <div className='DayDetails__wrapper'>
        <DayDetail>
          <h3>Summary</h3>
          <div>
            <p>{details.summary}</p>
          </div>
        </DayDetail>
        <DayDetail>
          <h3>Sun Rise</h3>
          <div>
            <img
              src='../../../assets/icons/weather/svg/sunrise.svg'
              alt='sunrise'
            />
            <p className='DayDetail__time'>
              {moment(details.sunriseTime * 1000).format('LT')}
            </p>
          </div>
          <h3>Sun Set</h3>
          <div>
            <img
              src='../../../assets/icons/weather/svg/sunset.svg'
              alt='sunset'
            />

            <p className='DayDetail__time'>
              {moment(details.sunsetTime * 1000).format('LT')}
            </p>
          </div>
        </DayDetail>
        <DayDetail>
          <h3>Moon Phase</h3>
          <div className='DayDetail__moonPhase'>
            <img
              src='../../../assets/icons/weather/moon-new.svg'
              alt='moon'
              style={{ opacity: details.moonPhase < 0.25 && 1 }}
            />
            <img
              src='../../../assets/icons/weather/moon-first-quarter.svg'
              alt='moon'
              style={{
                opacity:
                  details.moonPhase >= 0.25 && details.moonPhase < 0.5 && 1,
              }}
            />
            <img
              src='../../../assets/icons/weather/moon-full.svg'
              alt='moon'
              style={{
                opacity:
                  details.moonPhase >= 0.5 && details.moonPhase < 0.75 && 1,
              }}
            />
            <img
              src='../../../assets/icons/weather/moon-last-quarter.svg'
              alt='moon'
              style={{
                opacity:
                  details.moonPhase >= 0.75 && details.moonPhase <= 1 && 1,
              }}
            />
          </div>
        </DayDetail>
        <DayDetail>
          <h3>Alerts</h3>
          {weatherAlert ? (
            <div className='DayDetail__alerts'>
              <p>{weatherAlert.title}</p>
              <p>{weatherAlert.regions[0]}</p>
              <p>{weatherAlert.description}</p>
            </div>
          ) : (
            <p>There are no alerts.</p>
          )}
        </DayDetail>
        <DayDetail>
          <div className='DayDetail__chart'>
            <div className='DayDetail__chartWrapper'>
              <h3>Humidity</h3>
              <div className='DayDetail__chartContainer'>
                <Doughnut
                  data={chartHumidity.data}
                  options={chartHumidity.options}
                  legend={chartHumidity.legend}
                  width={100}
                  height={100}
                />
                <span>{chartHumidity.percentage}%</span>
              </div>
            </div>
            <div className='DayDetail__chartWrapper'>
              <h3>Precipitation</h3>
              <div className='DayDetail__chartContainer'>
                <Doughnut
                  data={chartPrecipitation.data}
                  options={chartPrecipitation.options}
                  legend={chartPrecipitation.legend}
                  width={100}
                  height={100}
                />
                <span>{chartPrecipitation.percentage}%</span>
              </div>
            </div>
            <div className='DayDetail__chartWrapper'>
              <h3>UV index</h3>
              <div className='DayDetail__chartContainer'>
                <Doughnut
                  data={chartUV.data}
                  options={chartUV.options}
                  legend={chartUV.legend}
                  width={100}
                  height={100}
                />
                <span>{chartUV.percentage}</span>
              </div>
            </div>
            {/* <div className='DayDetail__chartWrapper'>
              <h3>Humidity</h3>
              <div className='DayDetail__chartContainer'>
                <Doughnut
                  data={chartData.data}
                  options={chartData.options}
                  legend={{ display: false, rtl: false }}
                  width={100}
                  height={100}
                />
                <span>80%</span>
              </div>
            </div> */}
          </div>
        </DayDetail>
      </div>
    </div>
  );
};

export default DayDetails;
