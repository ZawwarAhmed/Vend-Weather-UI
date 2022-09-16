export class getCurrentWeatherResponse {
    city;
    day;
    date;
    time;
    currentWeather;
    currentTemperature;
    feelsLike;
    humidity;
    weatherIcon;
  
    constructor(currentWeatherData) {
      this.city = currentWeatherData.city;
      this.day = currentWeatherData.day;
      this.date = currentWeatherData.date;
      this.time = currentWeatherData.time;
      this.weather = currentWeatherData.weather;
      this.temperature = currentWeatherData.temperature;
      this.feelsLike = currentWeatherData.feelsLike;
      this.humidity = currentWeatherData.humidity;
      this.weatherIcon = currentWeatherData.weatherIcon;
    }
}