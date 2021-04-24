import CardContent from "../Widgets/CardContent";
import style from "./Messages.module.css";
import user from "../../assets/images/user.jpg";

const MessageCard = () => {
    return (
        <div className={style.message_card}>
            <img
                className={style.image}
                src={user}
                alt="User" />
            <CardContent
                className={style.card_content_component}
                title="Username"
                text="Sample text message" />
        </div>
    )
}

export default MessageCard;
