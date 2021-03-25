import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import tweetsList from "../../mobx/tweet/TweetsList";
import style from "./Tweet.module.css";
import UserImage from "./UserImage";
import Panel from "./Panel";
import user from "../../assets/images/user.jpg";
import dots from "../../assets/icons/dots.png";
import CardContent from "../Widgets/CardContent";
import Menu from "../Menu/Menu";
import Button from "../Widgets/Button";

const content = `A new version of ubuntu 21.04 has been
released. It comes with some exciting features
like new GNOME 4.0, support for fractional
scaling out of the box and many more.`;

const TweetCard = ({
    text = content, 
    time = `1h ago`, 
    likes, retweets, 
    deleteTweet = null, 
    id = null,
    edited = false
}) => {
    const menuRef = useRef(null);
    const inputRef = useRef(null);
    const tweetTextRef = useRef(null);
    const editButtonRef = useRef(null);
    const [edit, setEdit] = useState(true);
    const handler = () => {
        menuRef.current.style.display = "block";
    }
    const clickHandler = () => {
        tweetsList.editTweet(id, inputRef.current.value);
        editButtonRef.current.style.display = "none";
        inputRef.current.style.display = "none";
        tweetTextRef.current.style.display = "block";
        setEdit(state => !state);
    }
    const editHandler = () => {
        if (edit) {
            tweetTextRef.current.style.display = "none";
            inputRef.current.style.display = "block";
            editButtonRef.current.style.display = "block";
            inputRef.current.value = text;
        } else {
            tweetTextRef.current.style.display = "block";
            inputRef.current.style.display = "none";
            editButtonRef.current.style.display = "none";
        }
        setEdit(state => !state);
    }
    return (
        <div className={style.container}>
            <div className={style.tweet}>
                <UserImage img={user} />
                <div className={style.content}>
                    <div className={style.heading}>
                        <div className={style.user}>
                            <CardContent
                                className={style.card_content}
                                title="Ubuntu"
                                text="@Ubuntu" />
                            <span className={style.tweet_time}>{time}</span>
                            {edited
                                ? <span className={style.tweet_time}>Edited</span>
                                : null}
                        </div>
                        <div>
                            <img
                                onClick={handler}
                                className={style.dots}
                                src={dots}
                                alt="Dots" />
                        </div>
                    </div>
                    <Link to={`/tweet/${id}`}>
                        <div ref={tweetTextRef} className={style.tweet_text}>{text}</div>
                    </Link>
                    <textarea
                        className={style.textarea_edit}
                        ref={inputRef} />
                    <Button
                        onClick={clickHandler}
                        className={style.edit_button}
                        ref={editButtonRef}
                        children="Save" />
                    <Panel
                        likes={likes}
                        retweets={retweets} />
                </div>
            </div>
            <Menu
                ref={menuRef}
                deleteHandler={deleteTweet}
                editHandler={editHandler} />
        </div>
    );
}

export default observer(TweetCard);