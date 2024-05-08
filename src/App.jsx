import ClassComponents from "./Components/ClassComponents.jsx";
import FunctionalComponents from "./Components/FunctionalComponents.jsx";
import {useState} from "react";
export default function App () {
    const [show, setShow] = useState(true);

    return (
        <div className="app">
            { show && <FunctionalComponents /> }
            <p>
                <button type="button" onClick={()=> {setShow(prevState => !prevState)}}>
                    { show ? 'Hide Post' : 'Show Post'}
                </button>
            </p>
        </div>
    )
}