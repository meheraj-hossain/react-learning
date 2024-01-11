import PropTypes from "prop-types";

export default function HoverCounter({count, incrementCount}) {
    return (
        <div>
            <h1 onMouseOver={incrementCount}>
                Hovered {count} times
            </h1>
        </div>
    )
}

HoverCounter.propTypes = {
    count: PropTypes.number.isRequired,
    incrementCount: PropTypes.func.isRequired
}