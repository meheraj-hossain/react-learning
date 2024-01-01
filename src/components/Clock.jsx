import React from "react";
import PropTypes from "prop-types";

class Clock extends React.Component {
    state = { date: new Date() };


    componentDidMount() {
        this.clock = setInterval( () => this.changeTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clock)
    }

    changeTime () {
        this.setState({
            date : new Date(),
        })
    }

    render() {
        const {date} = this.state;
        const { locale } = this.props;

        return (
            <h1 className="heading">
                <span className="text">
                    { date.toLocaleTimeString(locale) }
                </span>
            </h1>
        )
    }
}

Clock.propTypes = {
    locale: PropTypes.string.isRequired,
}

export default Clock;

