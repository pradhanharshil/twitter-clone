import style from "./Feed.module.css";
import icon from "../../assets/icons/topbar.png";
import {Link} from "react-router-dom";

const TopBar = ({title}) => {
    return (
        <div className={style.topbar}>
            <Link to="/"><p>{title}</p></Link>
            <img
                className={style.logo}
                src={icon}
                alt="Icon" />
        </div>
    );
}

export default TopBar;