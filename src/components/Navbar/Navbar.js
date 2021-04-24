import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import NavItem from "./NavItem";
import Button from "../Widgets/Button";
import home from "../../assets/icons/home.png";
import explore from "../../assets/icons/explore.png";
import notifications from "../../assets/icons/notifications.png";
import messages from "../../assets/icons/messages.png";
import bookmarks from "../../assets/icons/bookmarks.png";
import lists from "../../assets/icons/lists.png";
import profile from "../../assets/icons/profile.png";
import more from "../../assets/icons/more.png";
import twitter from "../../assets/images/twitter.png";
import UserInfoCard from "./UserInfoCard";

const Navbar = () => {
    return (
        <div className={style.nav}>
            <div className={style.nav_logo}>
                <div>
                    <img
                        src={twitter}
                        alt="Twitter"
                        className={style.twitter_logo} />
                </div>
            </div>
            <div className={style.nav_items}>
                <Link to="/">
                    <NavItem
                        name="Home"
                        logo={home} />
                </Link>
                <NavItem
                    name="Explore"
                    logo={explore} />
                <Link to="/notifications">
                    <NavItem
                        name="Notifications"
                        logo={notifications} />
                </Link>
                <Link to="/messages">
                    <NavItem
                        name="Messages"
                        logo={messages} />
                </Link>
                <NavItem
                    name="Bookmarks"
                    logo={bookmarks} />
                <NavItem
                    name="Lists"
                    logo={lists} />
                <NavItem
                    name="Profile"
                    logo={profile} />
                <NavItem
                    name="More"
                    logo={more} />
                <Button
                    className={style.item_button}
                    children="Tweet" />
                <UserInfoCard />
            </div>
        </div>
    );
}

export default Navbar;