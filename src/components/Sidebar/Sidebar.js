import { useState, useEffect } from "react";
import style from "./Sidebar.module.css";
import Input from "../Widgets/Input";
import FloatingPanel from "./FloatingPanel";
import trends from "../../mobx/trends/Trends";
import Suggestion from "./Suggestion";
import CardContent from "../Widgets/CardContent";

const Sidebar = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users")
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className={style.sidebar}>
            <div className={style.sidebar_area}>
                <Input
                    className={style.search}
                    placeholder="Search Twitter"
                    type="text" />
                <FloatingPanel
                    header="What's happening"
                    data={trends}
                    render={
                        trends => trends.trends.map(trend =>
                            <CardContent
                                className={style.trend_item}
                                key={trend.trend}
                                title={`#${trend.trend}`}
                                text={`${trend.tweets} Tweets`} />)
                    } />
                <FloatingPanel
                    styles={style.center}
                    header="Who to follow"
                    data={users}
                    render={
                        users => users.map(user =>
                            <Suggestion
                                key={user.login}
                                img={user.avatar_url}
                                user={user.login} />)
                    } />
            </div>
        </div>
    );
}

export default Sidebar;