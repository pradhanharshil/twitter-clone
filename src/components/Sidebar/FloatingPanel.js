import { observer } from "mobx-react-lite";
import { ClipLoader } from "react-spinners";
import style from "./Sidebar.module.css";

const FloatingPanel = ({ header, render, data, styles = null, loading = false }) => {
    const css = 'margin: 25% 0;'
    return (
        <div className={style.floating_panel}>
            <div className={style.header}>{header}</div>
            <div className={styles}>
                {loading
                    ? <ClipLoader
                        color="#248cfa"
                        loading={true}
                        css={css} />
                    : render(data)}
            </div>
        </div>
    );
}

export default observer(FloatingPanel);