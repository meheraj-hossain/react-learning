import withCounter from "./HOC/withCounter.jsx";
import PropTypes from "prop-types";

const ClickCounter = ({count, incrementCount}) => {
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
    incrementCount: PropTypes.func.isRequired,
}

export default withCounter(ClickCounter);

