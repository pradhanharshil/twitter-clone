import style from "./Widgets.module.css";

const CardContent = ({ className, title, text }) => {
    return (
        <div className={className}>
            <span className={style.bold}>{title}</span>
            <span className={style.gray}>{text}</span>
        </div>
    );
}

export default CardContent;