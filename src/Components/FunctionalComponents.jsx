import {useState, useEffect} from "react";

export default function FunctionalComponents() {
    const [count, setCount] = useState(0);
    // const [text, setText] = useState('');
    const [date, setDate] = useState(new Date());

    const tick = () => {
        console.log('clock ticking');
        setDate(new Date());
    }

    useEffect(() => {
        console.log('updating document title');
        document.title = `Clicked ${count} times`;

    }, [count]);

    useEffect(() => {
        console.log('starting timer');
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }

    }, []);

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <div>
            <p>
                Time: {date.toLocaleTimeString()}
            </p>
            {/*<p>*/}
            {/*    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>*/}
            {/*</p>*/}
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    )
}