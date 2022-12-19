import React from "react";
import { render } from "react-dom";


class Header extends  React.Component{
    render(){
        return(
            <form className="app__header" >
            <input type="text" placeholder="Type City Name" className="search__input"></input>
            <button className="btn-find-weather">FIND WEATHER</button>
            </form>
        )
    }
}
export default Header;