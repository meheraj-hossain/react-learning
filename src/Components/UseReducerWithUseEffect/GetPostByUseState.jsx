import {useState, useEffect} from "react";
export default function GetPostByUseState() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.co/posts/1')
            .then(response => response.json())
            .then((info) => {
                setLoading(false);
                setData(info);
            })
            .catch(()=> {
                setLoading(false);
                setData({});
                setError('Not Working');
            })
    }, []);

    return(
        <div>
            <h1>
                { loading ? 'Loading' : data.title }
                { error ?? null}
            </h1>
        </div>
    )
}