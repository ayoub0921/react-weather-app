import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'
import '../../styles/forecast.css'


const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const Forecast = ({ forecastData }) => {


    const getDay = new Date().getDay();
    const day = WEEK_DAYS.slice(getDay, WEEK_DAYS.length)
                         .concat(WEEK_DAYS.slice(0, getDay));


    return (
        <Accordion allowZeroExpanded className='row forecast'>
            <h3 className='title'>next week</h3>
            {forecastData.list.splice(0, 7).map((item, index) => (
                <AccordionItem key={index} className="col-md-auto col-lg-6" >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className='weather-details'>
                                <div className='first'>
                                    <img className='image'  src={`icons/${item.weather[0].icon}.png`} alt="" />
                                    <label className='day' htmlFor="">{day[index]}</label>
                                </div>
                                <div className="center">
                                    <span className='mx-3'>{item.weather[0].description}</span>&nbsp;
                                </div>
                                <div className='last'>
                                    <span>{Math.floor(item.main.temp_min - 273)}°&nbsp;</span> 
                                    <span>/ {Math.round(item.main.temp_max - 273)}°</span>
                                </div>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="more-details row mx-auto">
                            <div className='col-md-6'>
                                <label htmlFor="">Pressure:&nbsp;</label>
                                <span>{item.main.pressure}hpa</span>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="">humidity:&nbsp;</label>
                                <span>{item.main.humidity}%</span>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="">Clouds:&nbsp;</label>
                                <span>{item.clouds.all}%</span>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="">wind speed:&nbsp;</label>
                                <span>{item.wind.speed}m/s</span>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="">sea level:&nbsp;</label>
                                <span>{item.main.sea_level}m</span>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="">feels like:&nbsp;</label>
                                <span>{Math.floor(item.main.feels_like-273)}°</span>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}

        </Accordion>
    )
}

export default Forecast