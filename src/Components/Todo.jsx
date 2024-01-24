// import {useState} from "react";
//
// export default function Todo() {
//     const [todo, setTodo] = useState('');
//     const [warning, setWarning] = useState(null);
//     const handleInput = (e) => {
//         const inputValue = e.target.value;
//         const updateWarning = inputValue.includes('.js') ? 'You need JavaScript skill' : 'Nice typing skill';
//
//         setTodo(inputValue);
//         setWarning(updateWarning);
//     }
//
//     return (
//         <div>
//             <p>
//                 {todo}
//             </p>
//
//             <p>
//                 <textarea name="todo" id="" cols="30" rows="10" value={todo} onChange={handleInput}></textarea>
//             </p>
//
//             <h3>
//                 {warning}
//             </h3>
//         </div>
//     )
// }

// import {useState} from "react";
//
// export default function Todo() {
//     const [todo, setTodo] = useState({
//         title: '',
//         description: '',
//     })
//
//     const {title, description} = todo;
//     return(
//         <div>
//             <p>
//                 {title}
//             </p>
//
//             <p>
//                 {description}
//             </p>
//             <input type="text" value={title} onChange={(e)=> setTodo({
//                 ...todo,
//                 title: e.target.value,
//             })}/>
//             <textarea name="todo" id="" cols="30" rows="10" value={description} onChange={(e) => setTodo({
//                 ...todo,
//                 description: e.target.value,
//             })}></textarea>
//         </div>
//     )
//
// }

import {useState} from "react";

export default function Todo() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        for (let i=0; i < 5; i++) {
            setCount((prevState)=>  prevState + 1);
        }
    }

    return (
        <div>
            {count}
            <button type="button" onClick={handleClick}>
                Increment counter
            </button>
        </div>
    )
}

