import React, { useEffect, useState } from 'react';
import { Toast, notify } from './services/nortify';
import { motion } from 'framer-motion';
import { parentVariant } from './framerMotion/variants';

import { setSearchStorage, getSearchStorage } from './services/localStorage';
import { getCoordinatesOpenCage, getLocationIpInfo } from './services/location';
import { getWeather } from './services/weather';
import Navigation from './components/Navigation/Navigation';
import Current from './components/Current/Current';
import Daily from './components/Daily/Daily';
import Hourly from './components/Hourly/Hourly';
import DayDetails from './components/DayDetails/DayDetails';
import { SpinnerApp } from './components/UI/Spinner/Spinner';
import DailyChart from './components/Daily/DailyChart/DailyChart';
import Footer from './components/Footer/Footer';

import './App.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingHourly, setIsLoadingHourly] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState(null);

  const [weather, setWeather] = useState({
    current: null,
    daily: null,
    hourly: null,
    alerts: null,
    coordinates: null,
  });

  const forwardGeocoding = async () => {
    let searchCity;
    setIsLoading(true);
    setError(false);
    try {
      if (!search) {
        const storage = getSearchStorage();
        storage
          ? (searchCity = storage)
          : (searchCity = await getLocationIpInfo());
      } else {
        searchCity = search;
        setSearchStorage(search);
      }
      const {
        lat,
        lng,
        city,
        country,
        village,
        town,
        state,
      } = await getCoordinatesOpenCage(searchCity);

      const weather = await getWeather(lat, lng);
      const { currently, daily, hourly, alerts } = weather.data;

      setWeather({
        daily,
        hourly,
        alerts,
        current: { ...currently, city, country, village, town, state },
        coordinates: { lat, lng },
      });

      setIsLoading(false);
    } catch (error) {
      setError(true);
      notify.error('Some thing went wrong, try searching again.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    forwardGeocoding();
  }, [search]);

  const onSearchHandler = (inputData) => {
    setSearch(inputData);
  };

  const onDailyItemClicked = (data) => {
    setWeather({
      ...weather,
      hourly: data.data.hourly,
    });
  };

  return (
    <>
      {error && <Toast />}
      <Navigation onSearchHandler={onSearchHandler} />
      {!isLoading && !error ? (
        <motion.div
          variants={parentVariant}
          initial={'init'}
          animate={'current'}
          className='App'
        >
          <Current current={weather.current} />
          <Daily
            setIsLoadingHourly={setIsLoadingHourly}
            daily={weather.daily}
            coordinates={weather.coordinates}
            onClickItem={onDailyItemClicked}
          />
          <Hourly hourly={weather.hourly} loading={isLoadingHourly} />
          <DailyChart daily={weather.daily} />
          <DayDetails details={weather.daily.data[0]} alerts={weather.alerts} />
        </motion.div>
      ) : (
        <SpinnerApp />
      )}

      <Footer />
    </>
  );
};

export default App;
