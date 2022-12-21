import React, { Component } from "react";
//import Search from "./components/Search";

// import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
// import MyName from "./components/MyName";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/partlycloudy.svg";
import "./App.css";
import Weather from "./components/Weather";
import Weather__daily from "./components/Weather__daily";
import Content from "./components/Content";
import Header from "./components/Header";
// import Search from "./components/Search";
import FakeWeather from "./data/FakeWeather.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDaysOfTheWeek: FakeWeather,
        isLoaded: false
    };
    this.fetchData=this.fetchData.bind(this)
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };
fetchData = (city) =>{
    let fetchData=`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=e6ae59da57e3433390c99c6ca26571eb`
    fetch(fetchData)
    
    .then(respond => respond.json())
    .then(data =>{console.log(data);this.setState({allDaysOfTheWeek: data});this.setState({isLoaded: true})})
}
  render() {
    return (
      <div className="App">
        {console.log("hey")}
      <Header event={this.handleInputChange}/>
      <main>
        {this.state.isLoaded &&
      <Content ObjectWeather={FakeWeather}   description={this.state.allDaysOfTheWeek.list[0].weather[0].description}
      minTemp={this.state.allDaysOfTheWeek[0].main.temp_min}
      maxTemp={this.state.allDaysOfTheWeek[0].main.temp_max}
      humidity={this.state.allDaysOfTheWeek[0].main.humidity}
      pressure={this.state.allDaysOfTheWeek[0].main.pressure}
      src={this.state.allDaysOfTheWeek[0].weather[0].id}
      data={this.state.allDaysOfTheWeek.list.slice(1,7)}
      />}

      </main>
      </div>
    );
  }
}

export default App;