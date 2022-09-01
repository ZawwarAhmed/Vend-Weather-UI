import instance from "./instance";

export const getCurrentWeather = async (city) => {
  try {
    const requestBody = { city: city };
    const response = await instance.post(`/api/getCurrentWeather`, requestBody);
    const data = response.data;
    const currentWeatherData = data.data;
    return currentWeatherData;
  } catch (error) {
    throw error.message;
  }
};
