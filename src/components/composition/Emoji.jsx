import React from "react";

export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji} `;

    render() {
        // eslint-disable-next-line react/prop-types
        return this.props.children({ob: this.addEmoji});
    }
}