// import CounterByPrimitive from "./Components/CounterByPrimitive.jsx";
// import CounterByObject from "./Components/CounterByObject.jsx";
// import MultipleUseReducer from "./Components/MultipleUseReducer.jsx";
import ComponentA from "./Components/UseReducerWithUseContext/ComponentA.jsx";
import React, {useReducer} from "react";

export const counterContext = React.createContext();
const initialState = 101;
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

export default function AppV1() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="app">
            <p>
                count - {state}
            </p>
            <counterContext.Provider value={{countDispatch: dispatch}}>
                <ComponentA/>
            </counterContext.Provider>
        </div>
    )
}