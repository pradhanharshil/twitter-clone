import style from "./Navbar.module.css";
import user from "../../assets/images/user.jpg";
import dots from "../../assets/icons/dots.png"
import CardContent from "../Widgets/CardContent";

const UserInfoCard = () => {
    return (
        <div className={style.user_info_card}>
            <div className={style.img_content}>
                <img
                    src={user}
                    className={style.user_info_card_img}
                    alt="User" />
                <CardContent
                    className={style.user_detail}
                    title="Ubuntu"
                    text="@Ubuntu" />
            </div>
            <div>
                <img
                    className={style.options_img}
                    src={dots}
                    alt="" />
            </div>
        </div>
    );
}

export default UserInfoCard;