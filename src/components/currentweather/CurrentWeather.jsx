import React from 'react'
import { TiWeatherWindy, TiWeatherSunny } from 'react-icons/ti'
import { WiHumidity } from 'react-icons/wi'
import { GiPositionMarker } from 'react-icons/gi'
import '../../styles/currentWeather.css'




const CurrentWeather = ({ weatherData }) => {


    console.log(weatherData.weather[0].icon);

    

    return (
        <div className='weather'>
            <div className="top d-flex justify-content-between  align-items-center">
                <h3 className='city'><GiPositionMarker /> {weatherData.city}</h3>
                <p>current weather</p>
            </div>
            <div className='weather-image'>
                <img src={`icons/${weatherData.weather[0].icon}.png`} alt="weather" className='weather-icon scale-up-top' />
                <p className='weather-desc'>{weatherData.weather[0].description}</p>
            </div>
            <div className="bottom">
                <div className="details">
                    <div className='windy'>
                        <TiWeatherWindy fontSize='30px' />
                        <span>{weatherData.wind.speed} km/h</span>
                    </div>
                    <div className='sunny'>
                        <TiWeatherSunny fontSize='30px' />
                        <span>{weatherData.main.pressure} hPa</span>
                    </div>
                    <div className="humidity">
                        <WiHumidity fontSize='30px' />
                        <span>{weatherData.main.humidity} %</span>
                    </div>
                </div>
                <div className="weather-value">
                    <h2>{Math.floor(weatherData.main.temp - 273)}°</h2>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather