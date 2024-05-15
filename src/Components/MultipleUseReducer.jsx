import {useReducer} from "react";

const initialState = 0;
const initialState2 = 5;
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
function MultipleUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [state2, dispatch2] = useReducer(reducer, initialState2);

    return (
        <div>
            <p>
                counter - {state}
            </p>
            <button type="button" onClick={() => dispatch("increment")}>
                Increment
            </button>
            <button type="button" onClick={() => dispatch(`decrement`)}>
                Decrement
            </button>
            <br/>
            <p>
                counter - {state2}
            </p>
            <button type="button" onClick={() => dispatch2("increment")}>
                Increment By One
            </button>
            <button type="button" onClick={() => dispatch2(`decrement`)}>
                Decrement By One
            </button>
        </div>
    );
}

export default MultipleUseReducer;