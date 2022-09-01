import instance from "./instance";

export const getDailyWeather = async (city) => {
  try {
    const requestBody = { city: city };
    const response = await instance.post(`/api/getDailyWeather`, requestBody);
    const data = response.data;
    const dailyWeatherData = data.data;
    return dailyWeatherData;
  } catch (error) {
    throw error.message;
  }
};
