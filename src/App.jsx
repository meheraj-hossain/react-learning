import Counter from "./components/Counter.jsx";
import ClickCounter from "./components/ClickCounter.jsx";
import Section from "./components/Section.jsx";
import React from "react";
import ThemeContext from "./Contexts/ThemeContext.jsx";


export default class App extends React.Component{
    state = {
        theme: "dark",
        switchTheme: () => {
            this.setState(({theme})=> {
                if (theme === "dark"){
                    return {
                        theme:"light",
                    };
                }
                return {
                    theme: "dark"
                }
            });
        },
    }

    render() {
        return (
            <div>
                <Counter>
                    { (count, incrementCount) => (
                        <ClickCounter incrementCount={incrementCount} count={count} />
                    )}
                </Counter>
                <ThemeContext.Provider value={this.state} >
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
