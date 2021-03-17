import style from "./Tweet.module.css";
import like from "../../assets/icons/like.png";
import comment from "../../assets/icons/comment.png";
import retweet from "../../assets/icons/retweet.png";
import reply from "../../assets/icons/reply.png";

const Panel = ({likes=null, retweets=null}) => {
    return (
        <div className={style.panel}>
            <img
                className={style.icon}
                src={comment}
                alt="Comment" />
            <div className={style.tweet_count}>
                <img
                    className={style.icon}
                    src={retweet}
                    alt="Retweet" />
                <p className={style.count}>{retweets}</p>
            </div>
            <div className={style.tweet_count}>
                <img
                    className={style.icon}
                    src={like}
                    alt="Like" />
                <p className={style.count}>{likes}</p>
            </div>
            <img
                className={style.icon}
                src={reply}
                alt="Reply" />
        </div>
    );
}

export default Panel;