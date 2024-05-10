import {useReducer} from "react";

const initialState = 5;
const reducer = (initialState, action) => {
    switch (action) {
        case `increment`:
            return initialState + 1;
        case `decrement`:
            return initialState - 1;
        default:
            return initialState;
    }
};
function CounterByPrimitive() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>
                counter - {state}
            </p>
            <button type="button" onClick={()=>dispatch("increment")}>
                Increment By One
            </button>
            <button type="button" onClick={()=>dispatch(`decrement`)}>
                Decrement By One
            </button>
        </div>
    );
}

export default CounterByPrimitive;