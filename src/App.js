import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import DailyWeather from "./components/DailyWeather/DailyWeather";
import Navbar from "./components/common/Navbar/Navbar";
import "./App.css";

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
