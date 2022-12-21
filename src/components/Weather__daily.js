import React, { Component } from "react";
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
// import FakeWeather from "./data/FakeWeather.json";

class weather__daily extends React.Component{
    render(){
        return(
            <div className="weather__daily">
                <div className="wheather__card">
                        <p>{this.props.time_1}</p>
                      {this.props.img_1}
                        <p>{this.props.temperature_1}&deg;C</p>
                  </div>
                <div className="wheather__card">
                        <p>{this.props.time_2} </p>
                     {this.props.img_2}
                        <p>{this.props.temperature_2}&deg;C</p>
                  </div>
                  <div className="wheather__card">
                        <p>{this.props.time_3} </p>
                       {this.props.img_3}
                        <p>{this.props.temperature_3}&deg;C</p>
                  </div>
                  <div className="wheather__card">
                        <p>{this.props.time_4} </p>
                      {this.props.img_4} 
                        <p>{this.props.temperature_4}&deg;C</p>
                  </div>
                  <div className="wheather__card">
                        <p>{this.props.time_5} </p>
                        {this.props.img_5} 
                        <p>{this.props.temperature_5}&deg;C</p>
                  </div>
                  <div className="wheather__card">
                        <p>{this.props.time_6} </p>
                         {this.props.img_6}
                        <p>{this.props.temperature_6}&deg;C</p>
                  </div>
                  <div className="wheather__card">
                        <p>{this.props.time_7} </p>
                        {this.props.img_7}
                        <p>{this.props.temperature_7}&deg;C</p> 
                  </div>
             </div>
        )
    }
}
export default weather__daily;