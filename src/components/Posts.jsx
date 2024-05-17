import {Link} from "react-router-dom";

export default function Posts(){
    return (
        <div>
            <h1>
                List
            </h1>
            <ul>
                <li>
                    <Link to="/post/1">
                        Post 1
                    </Link>
                </li>
                <li>
                    <Link to="/post/2">
                        Post 2
                    </Link>
                </li>
                <li>
                    <Link to="/post/3">
                        Post 3
                    </Link>
                </li>
            </ul>
        </div>
    )
}