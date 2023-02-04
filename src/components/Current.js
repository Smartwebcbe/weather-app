import React from "react";
import { Card } from 'react-bootstrap';

export function Current({ currentweather, city, region, country }) {
    return (

        <div className="container text-white text-center mt-5">
            <p><h4>Current Weather of {city},{region},{country}</h4></p>
            <div className="row align-items-center">
                <div className="col-md">
                    <Card bg="primary">
                        <Card.Body><span><img src={currentweather.condition.icon}/></span><span>{currentweather.condition.text}</span></Card.Body>
                    </Card>
                </div>
                <div className="col-md"><Card bg="primary">
                    <Card.Body><span>Temp(in c): {currentweather.temp_c}</span></Card.Body>
                </Card>
                </div>
                <div className="col-md"><Card bg="primary">
                    <Card.Body><span>Temp(in f): {currentweather.temp_f}</span></Card.Body>
                </Card>
                </div>
                <div className="col-md"><Card bg="primary">
                    <Card.Body><span>Humidity: {currentweather.humidity}</span></Card.Body>
                </Card>
                </div>

            </div>



            <div className="row mt-4">
                <div className="col-md"><Card bg="primary">
                    <Card.Body><span>Wind degree: {currentweather.wind_degree}</span></Card.Body>
                </Card>
                </div>
                <div className="col-md"><Card bg="primary">
                    <Card.Body><span>Wind Dir: "{currentweather.wind_dir}"</span></Card.Body>
                </Card>
                </div>
                <div className="col-md"><Card bg="primary">
                    <Card.Body><span>Wind speed(kph): {currentweather.wind_kph}</span></Card.Body>
                </Card>
                </div>
                <div className="col-md"><Card bg="primary">
                    <Card.Body><span>Wind speed(mph): {currentweather.wind_mph}</span></Card.Body>
                </Card>
                </div>
            </div>




        </div>




    )
}