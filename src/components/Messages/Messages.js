import style from "./Messages.module.css";
import MessageCard from "./MessageCard";

const Messages = () => {
    return (
        <div className={style.messages}>
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
        </div>
    );
}

export default Messages;