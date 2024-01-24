import ReactDOM from "react-dom/client";

let states = [];
let stateIndex = -1;

function useState(defaultValue) {
    const index = ++stateIndex;
    if (states[index]) return states[index];

    const setValue = (newValue) => {
        states[index][0] = newValue;
        customRender();
    };

    const returnArray = [defaultValue, setValue];
    states[index] = returnArray;
    return returnArray;
}

export default function App() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updateWarning = inputValue.includes('.js') ? 'You need JavaScript skill' : 'Nice typing skill';

        setTodo(inputValue);
        setWarning(updateWarning);
    }

    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea name="todo" id="" cols="30" rows="10" value={todo} onChange={handleInput}></textarea>
            </p>
            <h3>{warning}</h3>
        </div>
    )
}

// Create the root outside the render function
const root = ReactDOM.createRoot(document.getElementById('root'));

function customRender() {
    stateIndex = -1;
    // Use root.render() to update the content
    root.render(
        <App />
    );
}

customRender();
