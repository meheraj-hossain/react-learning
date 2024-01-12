import PropTypes from "prop-types";

export default function HoverCounter({count, incrementCount, theme}) {
    const style = theme === "dark" ? {
        backgroundColor:'#000000',
        color: '#ffffff'
    } : null;

    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>
                Hovered {count} times
            </h1>
        </div>
    )
}

HoverCounter.propTypes = {
    count: PropTypes.number.isRequired,
    theme: PropTypes.string.isRequired,
    incrementCount: PropTypes.func.isRequired
}