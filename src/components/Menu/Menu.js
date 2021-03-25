import style from "./Menu.module.css";
import { forwardRef } from "react";

const Menu = forwardRef(({ deleteHandler, editHandler }, ref) => {
    return (
        <div
            className={style.menu} ref={ref}
            onClick={() => ref.current.style.display = "none"}
            onMouseLeave={() => ref.current.style.display = "none"}>
            <span onClick={deleteHandler}>Delete</span>
            <span onClick={editHandler}>Edit</span>
        </div>
    );
});

export default Menu;