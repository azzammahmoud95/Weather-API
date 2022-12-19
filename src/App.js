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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "London"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
      <Header />
      <Content />
        
      </div>
    );
  }
}

export default App;
