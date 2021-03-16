import { observer } from "mobx-react-lite";
import TopBar from "./TopBar";
import style from "./Feed.module.css";
import TweetCard from "../Tweet/TweetCard";
import NewTweet from "../Tweet/NewTweet";
import tweetsList from "../../mobx/tweet/TweetsList";

const Feed = () => {
    return (
        <div className={style.feed}>
            <TopBar />
            <div className={style.tweets_list}>
                <NewTweet />
                <TweetCard />
                <TweetCard />
                {tweetsList.tweets.map(tweet => 
                    <TweetCard 
                        likes={tweet.getLikes}
                        retweets={tweet.getRetweets}
                        key={tweet.id} 
                        time={tweet.getTime} 
                        text={tweet.getText} />)
                }
            </div>
        </div>
    );
};

export default observer(Feed);