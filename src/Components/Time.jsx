import {useEffect, useState, useRef} from "react";

function Time() {
    const [date, setDate] = useState(new Date());
    const buttonRef = useRef(null);
    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
       buttonRef.current = setInterval(tick, 1000);

       return () => {
           clearInterval(buttonRef.current);
       }

    }, []);
    return(
        <div>
            <p>
                {date.toLocaleTimeString()}
            </p>
            <button type="button" onClick={() => clearInterval(buttonRef.current)}>
                Clean Up
            </button>
        </div>
    )
}

export default Time;