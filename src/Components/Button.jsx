import PropTypes from "prop-types";
export default function Button({handleClick, children}) {
    console.log(`rendering button ${children}`);
    return(
        <div>
            <button type="button" onClick={handleClick}>
                {children}
            </button>
        </div>
    )
}

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,

}