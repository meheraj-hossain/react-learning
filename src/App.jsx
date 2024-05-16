import "./assets/css/dark.css"
import GlobalStyle from "./Components/Styles/Global.styles.jsx";
import Tutorial from "./Components/Tutorial.jsx";
import {ThemeProvider} from "styled-components";
import {dark, light} from "./Components/Styles/Theme.jsx";
// import {useState} from "react";

export default function App() {
    // const [theme, setTheme] = useState('dark');

    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={dark}>
                <Tutorial/>
            </ThemeProvider>
        </>
    )

}