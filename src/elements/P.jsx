import PropTypes from "prop-types";

export default function P({children}) {
    return (
        <p>
            {children}
        </p>
    )
}

P.propTypes = {
    children: PropTypes.node.isRequired,
}