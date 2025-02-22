import {useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user , loading} = useContext(AuthContext) ;

    if (loading){
        return (
            <div className="text-center">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }
    return (
        <div>
            {user ? children : <Navigate to="/login"></Navigate>}
        </div>
    );
};

PrivateRoutes.propTypes = {
    children : PropTypes.object.isRequired , 
}


export default PrivateRoutes;