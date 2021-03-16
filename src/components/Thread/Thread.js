import tweetsList from "../../mobx/tweet/TweetsList";
import style from "./Thread.module.css";

const Thread = ({ match }) => {
    const id = parseInt(match.params.id);
    const data = tweetsList.find(id);
    console.log(data);
    return (
        <div className={style.thread}>
            Tweet thread
        </div>
    );
}

export default Thread;