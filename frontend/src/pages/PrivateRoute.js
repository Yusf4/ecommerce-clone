import { Navigate,Outlet } from "react-router-dom";
    const isAuthenticated=()=>{
        return localStorage.getItem('authToken');
    }
    const PrivateRoute=()=>{

    return isAuthenticated()? <Outlet/>: <Navigate to="/login"/>;

};
export default PrivateRoute;