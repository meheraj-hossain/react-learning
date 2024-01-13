//using <consumer>
// import HoverCounter from "./HoverCounter.jsx";
// import Counter from "./Counter.jsx";
// import ThemeContext from "../Contexts/ThemeContext.jsx";
//
// export default function Content() {
//     return (
//         <div>
//             <h1>
//                 This is a Content
//             </h1>
//             <Counter>
//                 {(count, incrementCount) => (
//                     <ThemeContext.Consumer>
//                         {({theme, switchTheme}) => (
//                             <HoverCounter incrementCount={incrementCount} count={count} theme={theme} switchTheme={switchTheme}/>
//                         )}
//                     </ThemeContext.Consumer>
//                 )}
//             </Counter>
//         </div>
//     )
// }

//using context API in class
// import HoverCounter from "./HoverCounter.jsx";
// import Counter from "./Counter.jsx";
// import ThemeContext from "../Contexts/ThemeContext.jsx";
// import React from "react";
//
// export default class Content extends React.Component {
//     render() {
//         const {theme, switchTheme} = this.context;
//         return (
//             <div>
//                 <h1>
//                     This is a Content
//                 </h1>
//                 <Counter>
//                     {(count, incrementCount) =>
//                         <HoverCounter incrementCount={incrementCount} count={count} theme={theme}
//                                       switchTheme={switchTheme}/>
//                     }
//                 </Counter>
//             </div>
//         )
//     }
// }
//
// Content.contextType = ThemeContext;

//using context API in function
import HoverCounter from "./HoverCounter.jsx";
import Counter from "./Counter.jsx";
import ThemeContext from "../Contexts/ThemeContext.jsx";
import {useContext} from "react";

export default function Content() {
    const context = useContext(ThemeContext);
    const {theme, switchTheme} = context;

    return (
        <div>
            <h1>
                This is a Content
            </h1>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter incrementCount={incrementCount} count={count} theme={theme} switchTheme={switchTheme}/>
                )}
            </Counter>
        </div>
    )
}
