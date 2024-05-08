import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line react-refresh/only-export-components
function ShowCount({count, title}) {
    console.log(`rendering ${title}`);

    return (
        <p>
            {title} is {count}
        </p>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(ShowCount);

ShowCount.propTypes = {
    count: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}