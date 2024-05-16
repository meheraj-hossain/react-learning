import PropTypes from "prop-types";

export default function Button({href, text}) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {text}
        </a>
    )
}

Button.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string,
}