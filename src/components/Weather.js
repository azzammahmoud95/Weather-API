import React, { Component } from "react";
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
// import FakeWeather from "./data/FakeWeather.json";

class Weather extends React.Component {
    render() {
        return (
            <div className="weather__now">
                <img src={mostlyCloudy} className="img__now" />
                <p className="subHeader">{this.props.status}</p>
                <p><span>Temprature </span>{this.props.temperature}&deg; to{this.props.temperatureto}&deg;C</p>
                <p><span>Humidity</span> {this.props.humidity}% <span>pressure</span> {this.props.pressure}</p>
            </div>
        )
    }
}

export default Weather;
