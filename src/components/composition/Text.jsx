import PropTypes from "prop-types";

export default function Text({insertEmoji, insertBracket}) {
    let text = 'I am Meheraj';

        if(insertEmoji) {
              text = insertEmoji(text, '👍');
        }
        if (insertBracket) {
             text = insertBracket(text);
        }
        return (
            <div>
                {text}
            </div>
        )
}

Text.propTypes = {
    insertEmoji: PropTypes.func.isRequired,
    insertBracket: PropTypes.func.isRequired,
}