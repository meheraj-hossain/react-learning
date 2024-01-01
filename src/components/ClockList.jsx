import Clock from "./Clock";
import PropTypes from "prop-types";

export default function ClockList({quantities = []}) {
    return(
        <div>
            {
                quantities.map(()=> (<Clock key={Math.random()}/>
                ))
            }
        </div>
    )
}

ClockList.propTypes = {
    quantities: PropTypes.array.isRequired
}


