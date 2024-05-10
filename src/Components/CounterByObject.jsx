import {useReducer} from "react";

const initialState = {
    counter: 0,
    counter2: 0
};
const reducer = (initialState, action) => {
    switch (action.type) {
        case `counterIncrement`:
            return { ...initialState, counter: initialState.counter + action.value };
        case `counterDecrement`:
            return { ...initialState, counter: initialState.counter - action.value };
        case `counter2Increment`:
            return { ...initialState, counter2: initialState.counter2 + action.value };
        case `counter2Decrement`:
            return { ...initialState, counter2: initialState.counter2 - action.value };
        default:
            return initialState;
    }
};
function CounterByObject() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>
                counter - {state.counter}
            </p>
            <button type="button" onClick={() => dispatch({
                type: `counterIncrement`,
                value: 1
            })}>
                Increment By One
            </button>
            <button type="button" onClick={() => dispatch({
                type: `counterDecrement`,
                value: 1
            })}>
                Decrement By One
            </button>
            <br/>

            <p>
                counter - {state.counter2}
            </p>
            <button type="button" onClick={() => dispatch({
                type: `counter2Increment`,
                value: 1
            })}>
                Increment By One
            </button>
            <button type="button" onClick={() => dispatch({
                type: `counter2Decrement`,
                value: 1
            })}>
                Decrement By One
            </button>

        </div>
    );
}

export default CounterByObject;