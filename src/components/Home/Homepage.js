import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import style from "./Homepage.module.css";
import Auth from "../Auth/Auth";
import Layout from "./Layout";
import TweetsContainer from "../Feed/TweetsContainer";
import Messages from "../Messages/Messages";
import Notifications from "../Notifications/Notifications";

const Homepage = () => {
    return (
        <div className={style.homepage}>
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={
                            () => (
                                <Layout title="Home">
                                    <TweetsContainer />
                                </Layout>
                            )
                        } />
                    <Route
                        exact
                        path="/messages"
                        component={
                            () => (
                                <Layout title="Messages">
                                    <Messages />
                                </Layout>
                            )
                        } />
                    <Route
                        exact
                        path="/notifications"
                        component={
                            () => (
                                <Layout title="Notifications">
                                    <Notifications />
                                </Layout>
                            )
                        } />
                    <Route
                        exact
                        path="/login"
                        component={
                            () => <Auth title="Login" />
                        } />
                    <Route
                        exact
                        path="/signup"
                        component={
                            () => <Auth title="Signup" />
                        } />
                </Switch>
            </Router>
        </div>
    );
};

export default Homepage;