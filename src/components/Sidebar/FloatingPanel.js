import { observer } from "mobx-react-lite";
import { ClipLoader } from "react-spinners";
import style from "./Sidebar.module.css";

const FloatingPanel = ({ header, render, data, styles = null, loading = false }) => {
    return (
        <div className={style.floating_panel}>
            <div className={style.header}>{header}</div>
            <div className={styles}>
                {loading
                    ? <ClipLoader
                        color="#248cfa"
                        loading={true} />
                    : render(data)}
            </div>
        </div>
    );
}

export default observer(FloatingPanel);