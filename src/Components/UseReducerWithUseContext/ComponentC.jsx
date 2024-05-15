import {useContext} from "react";
import {counterContext} from "../../App-v1.jsx";
export default function ComponentC() {
    const countContext = useContext(counterContext);
    console.log(countContext.countDispatch);
    return (
        <div>
            <button type="button" onClick={()=> { countContext.countDispatch('increment') }}>
                Increment By One
            </button>
            <button type="button" onClick={()=> { countContext.countDispatch('decrement') }}>
                Decrement By One
            </button>
        </div>
    )
}