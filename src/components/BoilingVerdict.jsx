import PropTypes from "prop-types";

export default function BoilingVerdict({celsius = 0}) {
    if (celsius >= 100) {
        return (
            <p>
                The water would boil
            </p>
        )
    } else {
        return (
            <p>
                The water would not boil
            </p>
        )
    }

}

BoilingVerdict.propTypes = {
    celsius: PropTypes.number.isRequired
}