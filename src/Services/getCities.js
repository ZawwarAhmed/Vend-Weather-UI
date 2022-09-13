import instance from "./instance";

export const getCities = async () => {
  try {
    const response = await instance.get(`/api/getCities`);
    const data = response.data;
    const citiesData = data.data;
    return citiesData.map(city => city.name)
  } catch (error) {
    throw error.message;
  }
};
