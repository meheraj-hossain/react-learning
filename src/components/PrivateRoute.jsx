import useAuth from "../hooks/useAuth.jsx";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";

export default function PrivateRoute({children}){
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}