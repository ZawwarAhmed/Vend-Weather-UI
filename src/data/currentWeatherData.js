import { getCurrentWeather } from "../APIs/getCurrentWeather";

export async function currentWeatherResponse(city) {
    return await getCurrentWeather(city)
}