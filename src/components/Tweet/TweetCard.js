import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import style from "./Tweet.module.css";
import UserImage from "./UserImage";
import Panel from "./Panel";
import user from "../../assets/images/user.jpg";
import dots from "../../assets/icons/dots.png";
import CardContent from "../Widgets/CardContent";

const content = `A new version of ubuntu 21.04 has been
released. It comes with some exciting features
like new GNOME 4.0, support for fractional
scaling out of the box and many more.`;

const TweetCard = ({ text = content, time = `1h ago`, likes, retweets, deleteTweet = null, id=null }) => {
    return (
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
                    </div>
                    <div>
                        <img
                            onClick={deleteTweet}
                            className={style.dots}
                            src={dots}
                            alt="Dots" />
                    </div>
                </div>
                <Link to={`/tweet/${id}`}>
                    <div>{text}</div>
                </Link>
                <Panel
                    likes={likes}
                    retweets={retweets} />
            </div>
        </div>
    );
}

export default observer(TweetCard);