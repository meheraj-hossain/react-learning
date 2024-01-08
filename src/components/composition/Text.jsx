import PropTypes from "prop-types";

export default function Text({insertEmoji}) {
    let text = 'I am Meheraj';
    return (
        <div>
            {(insertEmoji) ? insertEmoji(text, '👌') : text}
        </div>
    )
}

Text.propTypes = {
    insertEmoji: PropTypes.func.isRequired,
}