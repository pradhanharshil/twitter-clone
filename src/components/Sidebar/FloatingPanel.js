import { observer } from "mobx-react-lite";
import style from "./Sidebar.module.css";

const FloatingPanel = ({ header, render, data, styles=null }) => {
    return (
        <div className={style.floating_panel}>
            <div className={style.header}>{header}</div>
            <div className={styles}>
                {render(data)}
            </div>
        </div>
    );
}

export default observer(FloatingPanel);