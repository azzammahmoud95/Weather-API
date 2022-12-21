import React from "react";
import { render } from "react-dom";


class Header extends  React.Component{
    render(){
        return(
            <form className="app__header" >
            <input type="text" placeholder="Type City Name" className="search__input" onChange={event => {
            this.setState({ input: event.target.value })
          }}></input>
            <button className="btn-find-weather"  onClick={event => {
            this.props.event(this.state.input);
          }}>FIND WEATHER</button>
            </form>
        )
    }
}
export default Header;