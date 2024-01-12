import HoverCounter from "./HoverCounter.jsx";
import Counter from "./Counter.jsx";
import ThemeContext from "../Contexts/ThemeContext.jsx";

export default function Content() {
    return (
        <div>
            <h1>
                This is a Content
            </h1>
            <Counter>
                {(count, incrementCount) => (
                    <ThemeContext.Consumer>
                        {({theme}) => (
                            <HoverCounter incrementCount={incrementCount} count={count} theme={theme}/>
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    )
}