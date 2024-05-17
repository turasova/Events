import axios from 'axios';

const carsInstance = axios.create({
  baseURL: 'https://661f772216358961cd94639f.mockapi.io',
});

export const fetchAllEvents = async () => {
  const { data } = await carsInstance.get(`/events`);
  // console.log(data);
  return data;
};
