import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import DailyWeather from "./components/DailyWeather";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";

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
