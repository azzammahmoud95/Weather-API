import React, { Component } from "react";
import Weather from "./Weather"
import Weather__daily from "./Weather__daily";
import clear from '../img/weather-icons/clear.svg';
import cloudy from '../img/weather-icons/cloudy.svg';
import drizzle from '../img/weather-icons/drizzle.svg';
// import FakeWeather from "./data/FakeWeather.json";
import Header from "./Header"

class Content extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
		const convertToCelsius = (index) => {
			return Number(
				this.props.ObjectWeather.list[index].main.temp - 273.15,
			).toFixed(0);
		};
        const ChangingImg = (index) => {
			if (
				this.props.ObjectWeather.list[index].weather[0].description ===
				'clear sky'
			)
				return <img src={clear} alt={'clear sky weather'}></img>;
			else if (
				this.props.ObjectWeather.list[index].weather[0].description ===
				'broken clouds'
			)
				return <img src={cloudy} alt={'broken clouds'}></img>;
			else if (
				this.props.ObjectWeather.list[index].weather[0].description ===
				'light rain'
			)
				return <img src={drizzle} alt={'drizzle sky weather'}></img>;
			else if (
				this.props.ObjectWeather.list[index].weather[0].description ===
				'moderate rain'
			)
				return <img src={drizzle} alt={'drizzle sky weather'}></img>;
			else if (
				this.props.ObjectWeather.list[index].weather[0].description ===
				'few clouds'
			)
				return <img src={cloudy} alt={'cloudy sky weather'}></img>;
			else {
				return <img src={cloudy} alt={'cloudy sky weather'}></img>;
			}
		};
        return (
            <div className="app__main">
                <Weather description={
						this.props.ObjectWeather.list[0].weather[0].description
					}
					temperature={Number(
						this.props.ObjectWeather.list[0].main.temp_min - 273.15,
					).toFixed(1)}
					temperatureto={Number(
						this.props.ObjectWeather.list[0].main.temp_max - 273.15,
					).toFixed(1)}
					humidity={this.props.ObjectWeather.list[0].main.humidity}
					pressure={this.props.ObjectWeather.list[0].main.pressure} />
                {/* <Weather__daily temperature_1="8°C" temperature_2="8°C" temperature_3="14°C" temperature_4="17°C" temperature_5="18°C" temperature_6="16°C" temperature_7="13°C" time_1="03:00" time_2="06:00" time_3="09:00" time_4="12:00" time_5="15:00" time_6="18:00" time_7="21:00"/> This was for step 3*/}
                <Weather__daily temperature_1={convertToCelsius(1)} temperature_2={convertToCelsius(5)} temperature_3={convertToCelsius(8)} temperature_4={convertToCelsius(1)} temperature_5={convertToCelsius(2)} temperature_6={convertToCelsius(16)} temperature_7={convertToCelsius(20)} time_1="03:00" time_2="06:00" time_3="09:00" time_4="12:00" time_5="15:00" time_6="18:00" time_7="21:00" img_1={ChangingImg(1)} img_2={ChangingImg(7)} img_3={ChangingImg(9)} img_4={ChangingImg(2)} img_5={ChangingImg(6)} img_6={ChangingImg(7)} img_7={ChangingImg(5)}/>

            </div>
        )
    }
}

export default Content;