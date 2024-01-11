import PropTypes from "prop-types";
export default function ClickCounter ({count, incrementCount}) {
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    )
}

ClickCounter.propTypes = {
    count: PropTypes.number.isRequired,
    incrementCount: PropTypes.func.isRequired
}



