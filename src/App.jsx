import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import Index from "./components/Index.jsx";
import Posts from "./components/Posts.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Post from "./components/Post.jsx";

export default function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Index />} >
                    <Route path="profile" element={<p>Profile</p>} />
                </Route>

                <Route path="/index" element={<Navigate to="/" /> } />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/post/:post_id" element={<Post />} />
            </Routes>
        </div>
    )

}