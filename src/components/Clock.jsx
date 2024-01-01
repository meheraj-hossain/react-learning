import React from "react";
import Button from "./Button.jsx";

class Clock extends React.Component {
    state = {date: new Date(), locale: "en-US"};

    componentDidMount() {
        this.clock = setInterval(() => this.changeTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clock)
    }

    change = (locale) => {
        this.setState({
            locale
        })
    }

    changeTime() {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        const {date, locale} = this.state;

        return (
            <>
                <h1 className="heading">
                    <span className="text">
                        {date.toLocaleTimeString(locale)}
                    </span>
                </h1>
                <Button locale="bn-BD" changeFunction={this.change}/>
            </>
        )
    }
}

export default Clock;

