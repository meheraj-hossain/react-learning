import {NavLink} from "react-router-dom";
import headerStyles from '../styles/Header.module.css';

export default function Header() {
    return (
        <div className="header">
            <ul>
                <li>
                    <NavLink to="/"
                             className={(navInfo) => navInfo.isActive ? headerStyles.active : null}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us"
                             className={(navInfo) => navInfo.isActive ? headerStyles.active : null}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/posts"
                             className={(navInfo) => navInfo.isActive ? headerStyles.active : null}>Posts</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/dashboard"
                             className={(navInfo) => navInfo.isActive ? headerStyles.active : null}>Dashboard</NavLink>
                </li>
            </ul>
        </div>
    )
}