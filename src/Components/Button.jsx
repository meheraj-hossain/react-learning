import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line react-refresh/only-export-components
function Button({handleClick, children}) {
    console.log(`rendering button ${children}`);
    return(
        <div>
            <button type="button" onClick={handleClick}>
                {children}
            </button>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Button);

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,

}