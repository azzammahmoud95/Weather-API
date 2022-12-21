import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    input: ""
  };
  }
  render() {
    return (
      <div>
        
        <input
          name="city"
          type="text"
          className="searching"
          onChange={event => {
            this.setState({ input: event.target.value })
          }}
          placeholder="Type City Name"
        />
        <button
          onClick={event => {
            this.state.city(this.state.input);
          }}
        >
          Finding Weather
        </button>
        
      </div>
    );
  }
}
export default Search;
