import Title from "./Components/Title.jsx";
import ShowCount from "./Components/ShowCount.jsx";
import Button from "./Components/Button.jsx";
import {useState} from "react";

export default function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = () => {
        setCount1(prevState => prevState + 1)
    }
    const incrementByFive = () => {
        setCount2(prevState => prevState + 5)
    }

    return (
        <div>
            <Title/>
            <ShowCount count={count1} title='Counter 1'/>
            <Button handleClick={incrementByOne} >
                Increment By One
            </Button>
            <hr/>
            <ShowCount count={count2} title='Counter 2'/>
            <Button handleClick={incrementByFive}>
                Increment By Five
            </Button>
        </div>
    )
}
