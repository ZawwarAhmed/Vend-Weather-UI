import { getCurrentWeather } from "../Services/getCurrentWeather";

export async function currentWeatherResponse(city) {
    return await getCurrentWeather(city)
}

// const currentWeatherDTO = new getCurrentWeatherResponse(currentWeatherResponse(city));