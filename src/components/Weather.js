import React, { Component } from "react";
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";

class Weather extends React.Component {
    render() {
        return (
            <div className="weather__now">
                <img src={mostlyCloudy} className="img__now" />
                <p className="subHeader">Overcast clouds</p>
                <p><span>Temprature</span> 10° to 11°C</p>
                <p><span>Humidity</span> 78% <span>pressure</span> 1008.48</p>
            </div>
        )
    }
}

export default Weather;