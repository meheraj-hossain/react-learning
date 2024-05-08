import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
function Title() {
    console.log('rendering title..');
    return (
        <h2>
            Use Callback Hook Tutorial
        </h2>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Title);
