import {Outlet} from "react-router-dom";

export default function Index() {
    return(
        <div>
            <h1>
                Hello World!
            </h1>
            <Outlet />
        </div>
    )
}