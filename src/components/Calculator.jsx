import React from "react";
import BoilingVerdict from "./BoilingVerdict.jsx";
import ComponentInput from "./ComponentInput.jsx";
import {convert, toFahrenheit, toCelsius} from "../lib/Converter.jsx";

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'cel'
    }

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        })
    }

    render() {
        const {temperature, scale} = this.state;
        const celsius = scale === "fah" ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === "cel" ? convert(temperature, toFahrenheit) : temperature;
        return (
            <>
                <ComponentInput scale="cel" temperature={celsius} temperatureChange={this.handleChange}/>
                <ComponentInput scale="fah" temperature={fahrenheit} temperatureChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </>
        )
    }
}