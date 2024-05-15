import {useEffect, useReducer} from "react";

const initialState = {
    loading: true,
    error: '',
    data: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                loading: false,
                data: action.data,
                error: ''
            }
        case 'failure':
            return {
                loading: false,
                data:{},
                error: 'Not Working'
            }
        default:
            return state;
    }
}


export default function GetPostByUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then((info) => {
                dispatch({type: 'success', data:info })
            })
            .catch(()=> {
                dispatch({type: 'failure', error: 'Not Working', data: {} })
            })
    }, []);

    return(
        <div>
            <h1>
                { state.loading ? 'Loading' : state.data.title }
                { state.error ?? null}
            </h1>
        </div>
    )
}