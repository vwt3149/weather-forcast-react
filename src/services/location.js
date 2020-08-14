import axios from 'axios';
const proxy = 'https://cors-anywhere.herokuapp.com';
const ENDPOINT = 'https://api.opencagedata.com/geocode/v1/json?';
const key = `key=${process.env.REACT_APP_OPEN_CAGE_API}`;

export const getLocationCoordinates = async (city) => {
  const query = `q=${city}`;

  try {
    const res = await axios.get(
      `${ENDPOINT}${query}&${key}&no_annotations=1&limit=1`
    );
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

export const getLocationByIp = async () => {
  try {
    const ip = await axios.get(
      `${proxy}/https://ipinfo.io?token=${process.env.REACT_APP_IP_INFO}`
    );

    // console.log(ip, '>>> ip info <<<');
    return ip.data.city;
  } catch (error) {
    // console.log(error, '>>> ip info error <<<');
    throw error;
  }
};
