import { Navigate } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";
import { useContext } from "react";
import { AuthContext } from "../authentication/Authentication";

const PrivateRoute = ({children}) => {
    const{user,loader}=useContext(AuthContext)

    if(loader){
        return <LoadingPage></LoadingPage>
    }
    if(user){
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
};

export default PrivateRoute;