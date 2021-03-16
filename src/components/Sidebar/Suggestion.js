import CardContent from "../Widgets/CardContent";
import Button from "../Widgets/Button";
import style from "./Sidebar.module.css";

const Suggestion = ({ img, user }) => {
    return (
        <div className={style.suggestion}>
            <div className={style.about}>
                <img className={style.image} src={img} alt="user" />
                <CardContent
                    className={style.suggestion_content}
                    title={user}
                    text={`@${user}`} />
            </div>
            <Button
                className={style.button}
                children="Follow" />
        </div>
    );
}

export default Suggestion;