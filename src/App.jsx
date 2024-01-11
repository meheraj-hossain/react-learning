import Counter from "./components/Counter.jsx";
import ClickCounter from "./components/ClickCounter.jsx";
import HoverCounter from "./components/HoverCounter.jsx";

function App() {
    return (
        <div>
            <Counter>
                { (count, incrementCount) => (
                    <ClickCounter incrementCount={incrementCount} count={count} />
                )}
            </Counter>

            <Counter>
                { (count, incrementCount) => (
                    <HoverCounter incrementCount={incrementCount} count={count} />
                )}
            </Counter>
        </div>
    );
}

export default App;