import React, { Component } from "react";
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";


class weather__daily extends React.Component{
    render(){
        return(
            <div className="weather__daily">
                <div className="wheather__card">
                        <p>03:00 </p>
                        <img src={mostlyCloudy} />
                        <p>8°C</p>
                  </div>
                  <div className="wheather__card">
                        <p>06:00 </p>
                        <img src={mostlyCloudy}  />
                        <p>9°C</p>
                  </div>
                  <div className="wheather__card">
                        <p>09:00 </p>
                        <img src={clear}  />
                        <p>14°C</p>
                  </div>
                  <div className="wheather__card">
                        <p>12:00 </p>
                        <img src={clear}  />
                        <p>17°C</p>
                  </div>
                  <div className="wheather__card">
                        <p>15:00 </p>
                        <img src={clear} />
                        <p>18°C</p>
                  </div>
                  <div className="wheather__card">
                        <p>18:00 </p>
                        <img src={clear}  />
                        <p>16°C</p>
                  </div>
                  <div className="wheather__card">
                        <p>21:00 </p>
                        <img src={mostlyCloudy}  />
                        <p>13°C</p>
                  </div>
            </div>
        )
    }
}
export default weather__daily;