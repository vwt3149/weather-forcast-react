import axios from 'axios';
const proxy = 'https://cors-anywhere.herokuapp.com';
const BASE_URL_OPEN_CAGE_DATA = 'https://api.opencagedata.com';
const BASE_URL_IP_INFO = 'https://ipinfo.io';

const key = `key=${process.env.REACT_APP_OPEN_CAGE_API}`;

export const getCoordinatesOpenCage = async (city) => {
  const endpoint = `${BASE_URL_OPEN_CAGE_DATA}/geocode/v1/json?q=${city}&${key}&no_annotations=1&limit=1`;
  try {
    const res = await axios.get(endpoint);
    const { lat, lng } = res.data.results[0].geometry;
    const {
      city,
      country,
      village,
      town,
      state,
    } = res.data.results[0].components;
    // console.log(res, '>>> open cage <<<');
    return { lat, lng, city, country, village, town, state };
  } catch (error) {
    // console.log(error, '>>> open cage info error <<<');
    throw error;
  }
};

export const getLocationIpInfo = async () => {
  const endpoint = `${proxy}/${BASE_URL_IP_INFO}?token=${process.env.REACT_APP_IP_INFO}`;
  try {
    const ip = await axios.get(endpoint);
    // console.log(ip, '>>> ip info <<<');
    return ip.data.city;
  } catch (error) {
    // console.log(error, '>>> ip info error <<<');
    throw error;
  }
};
