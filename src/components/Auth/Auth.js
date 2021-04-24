import style from "./Auth.module.css";
import Input from "../Widgets/Input";
import Button from "../Widgets/Button";

const Auth = ({ onSubmit = null, title }) => {
    return (
        <div className={style.form}>
            <p>{title.toUpperCase()}</p>
            <Input
                placeholder="Email"
                type="email"
                className={style.input} />
            <Input
                placeholder="Password"
                type="password"
                className={style.input} />
            <Button
                className={style.button}
                children="Submit"
                onClick={onSubmit} />
        </div>
    )
}

export default Auth;
