import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
function Input({placeholder, type}, ref){
    return(
            <input ref={ref} type={type} placeholder={placeholder}/>
    )
}

const forwardRef = React.forwardRef(Input)
export default forwardRef;

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,

}
