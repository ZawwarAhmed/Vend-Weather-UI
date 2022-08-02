import "./App.css";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import DailyWeather from "../DailyWeather/DailyWeather";
import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CurrentWeather />
      <DailyWeather />
    </div>
  );
}

export default App;
