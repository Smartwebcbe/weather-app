import React from "react";
import { Accordion, ProgressBar } from 'react-bootstrap';



export function Forecast({ forecastweather, city, region, country }) {


  return (
    <div className="container mt-5 text-white text-center">
      <p><h4>Weather forecast of {city},{region},{country}</h4></p>

      {forecastweather.forecastday.map((forecastday) => {

        const { date, day, hour } = forecastday;
        const { mintemp_c, maxtemp_c, temp_c, condition: { text, icon } } = day;
        return (

          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-sm ">
                     <h6>Day: {date}</h6> 
                    </div>
                    <div class="col-sm">
                      {<img src={icon} />}<h6> {text}</h6>
                    </div>
                    <div class="col-sm">
                      <h6>Min Temp: {mintemp_c}c</h6>
                    </div>
                    <div class="col-sm">
                      <h6>Max Temp: {maxtemp_c}c</h6>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {hour.map((hourforecast, index) => {
                  return (
                    // <ProgressBar now={avgtemp_c} label={`${avgtemp_c}%`} />
                    <div className="container">
                      <p><h6>Hrs: {index}.00 / Temp: {hourforecast.temp_c}c / <img src={hourforecast.condition.icon} /> <ProgressBar now={hourforecast.temp_c} label={`${hourforecast.temp_c}%`} /></h6></p>
                    </div>
                  )
                })}

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )
      })}



    </div>
  )
}