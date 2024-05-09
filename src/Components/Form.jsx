import {useEffect, useRef} from "react";
import Input from "./Input.jsx";

function Form() {

    const focusRef = useRef(null);
    useEffect(() => {
        focusRef.current.focus();
    }, []);

    return(
        <div>
            <p>
                <Input ref={focusRef} placeholder="Enter Your Text" type="text" />
            </p>
        </div>
    )
}

export default Form;