import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={
                (props) => (
                    auth
                        ? <Component {...props} />
                        : <Redirect to="/login" />
                )
            } />
    );
}

export default PrivateRoute;