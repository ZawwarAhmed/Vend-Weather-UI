import { getDailyWeather } from "../APIs/getDailyWeather";

export async function dailyWeatherResponse(city) {
  return await getDailyWeather(city);
}
