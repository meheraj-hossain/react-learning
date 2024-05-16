import PropTypes from "prop-types";

export default function Tag({children}) {
    return (
        <span className="tag">
            {children}
        </span>
    )
}

Tag.propTypes = {
    children: PropTypes.string.isRequired,
}