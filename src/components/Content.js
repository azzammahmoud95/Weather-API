import React, { Component } from "react";
import Weather from "./Weather"
import Weather__daily from "./Weather__daily";


class Content extends React.Component {
    render() {
        return (
            <div className="app__main">
                <Weather />
                <Weather__daily />
            </div>
        )
    }
}

export default Content;
