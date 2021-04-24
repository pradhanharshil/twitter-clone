import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import home from "../../assets/icons/home.png";
import notifications from "../../assets/icons/notifications.png";
import messages from "../../assets/icons/messages.png";
import search from "../../assets/icons/search.png";

// home, search, notification, message
const BottomNav = () => {
    return (
        <div className={style.bottom_nav}>
            <div className={style.bottom_nav_items}>
                <Link to="/">
                    <img
                        className={style.bottom_nav_img}
                        src={home}
                        alt="Home" />
                </Link>
                <img
                    className={style.bottom_nav_img}
                    src={search}
                    alt="Search" />
                <Link to="/notifications">
                    <img
                        className={style.bottom_nav_img}
                        src={notifications}
                        alt="notifications" />
                </Link>
                <Link to="/messages">
                    <img
                        className={style.bottom_nav_img}
                        src={messages}
                        alt="messages" />
                </Link>
            </div>
        </div>
    );
}

export default BottomNav;