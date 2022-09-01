import './App.css';
import Search from './components/search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrentWeather from './components/currentweather/CurrentWeather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './components/services/api';
import { useState } from 'react';
import Forecast from './components/forecast/Forecast';

function App() {

  const [currentweather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSaerchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentweatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
    const WeatherForecast = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

    Promise.all([currentweatherFetch, WeatherForecast])
      .then(async (res) => {
        const currentWeather = await res[0].json();
        const forecast = await res[1].json();
        setCurrentWeather({ city: searchData.label, ...currentWeather });

        setForecast({ city: searchData.label, ...forecast })
      })

    console.log("current weather", currentweather)
    console.log("forecast", forecast)

  }






  return (
    <div className="container">
      <Search onSearchData={handleSaerchChange} />
      {currentweather && <CurrentWeather weatherData={currentweather} />}

      {forecast && <Forecast forecastData={forecast} />}

    </div>
  );
}

export default App;
