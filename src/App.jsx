import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import Index from "./components/Index.jsx";
import Posts from "./components/Posts.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Post from "./components/Post.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import PrivateOutlet from "./components/PrivateOutlet.jsx";
import Services from "./components/Services.jsx";

export default function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/*" element={<Index/>}>
                    <Route path="profile" element={<p>Profile</p>}/>
                </Route>
                <Route path="/index" element={<Navigate to="/"/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/post/:post_id" element={<Post/>}/>
                <Route path="/login" element={<Login/>}/>
                {/*technique 1*/}
                {/*<Route path="/dashboard" element={<PrivateRoute> <Dashboard/> </PrivateRoute>}/>*/}
                {/*technique 2*/}
                <Route path="/admin/*" element={<PrivateOutlet/>}>
                    <Route path="dashboard" element={<Dashboard title="Dashboard" />} />
                    <Route path="services" element={<Services />} />
                </Route>
            </Routes>
        </div>
    )

}