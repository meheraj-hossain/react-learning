import PropTypes from "prop-types";

export default function Heading({children}) {
    return (
        <h1>
            {children}
        </h1>
    )
}

Heading.propTypes = {
    children: PropTypes.string.isRequired,
}