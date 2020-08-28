import axios from 'axios';
const proxy = 'https://cors-anywhere.herokuapp.com';
const BASE_URL = 'https://api.darksky.net';

export const getWeather = async (lat, lng) => {
  try {
    const res = await axios.get(
      `${proxy}/${BASE_URL}/forecast/${process.env.REACT_APP_DARK_SKY_API}/${lat},${lng}?units=si`
    );
    // console.log(res, '>>>> WEATHER DATA <<<');
    return res;
  } catch (error) {
    // console.log(error, '>>>> WEATHER DATA <<<');
    throw error;
  }
};

export const getWeatherDaily = async (lat, lng, timestamp) => {
  try {
    const res = await axios.get(
      `${proxy}/${BASE_URL}/forecast/${process.env.REACT_APP_DARK_SKY_API}/${lat},${lng},${timestamp}?units=si&?exclude=currently,minutely,flags`
    );
    // console.log(res, '>>>> WEATHER DATA DAILY<<<');
    return res;
  } catch (error) {
    // console.log(error, '>>>> WEATHER DATA DAILY <<<');
    throw error;
  }
};
