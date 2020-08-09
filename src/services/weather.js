import axios from 'axios';
const proxy = 'https://cors-anywhere.herokuapp.com';
const ENDPOINT = 'https://api.darksky.net/forecast';

export const getWeather = async (lat, lng) => {
  try {
    const res = await axios.get(
      `${proxy}/${ENDPOINT}/${process.env.REACT_APP_DARK_SKY_API}/${lat},${lng}?units=si`
    );
    console.log(res, '>>>> WEATHER DATA <<<');
    return res;
  } catch (error) {
    console.log(error, '>>>> WEATHER DATA <<<');
    throw error;
  }
};

export const getWeatherDaily = async (lat, lng, timestamp) => {
  try {
    const res = await axios.get(
      `${proxy}/${ENDPOINT}/${process.env.REACT_APP_DARK_SKY_API}/${lat},${lng},${timestamp}?units=si&?exclude=currently,minutely,flags`

      //https://api.darksky.net/forecast/49a578a52c9b0f5e2185a41f5490272b/45.2551338,19.8451756,1596578400?units=si&?exclude=currently,flags
    );
    console.log(res, '>>>> WEATHER DATA DAILY<<<');
    return res;
  } catch (error) {
    console.log(error, '>>>> WEATHER DATA DAILY <<<');
    throw error;
  }
};
