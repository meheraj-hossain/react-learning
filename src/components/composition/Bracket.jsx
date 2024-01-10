import React from "react";

export default class Bracket extends React.Component {
    addBracket = (text) => `[ ${text} ]`;

    render() {
        // eslint-disable-next-line react/prop-types
        return this.props.children({br: this.addBracket});
    }
}