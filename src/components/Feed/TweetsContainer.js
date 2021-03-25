import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import TweetCard from "../Tweet/TweetCard";
import NewTweet from "../Tweet/NewTweet";
import tweetsList from "../../mobx/tweet/TweetsList";

const TweetsContainer = () => {
    useEffect(() => {
        document.title = "Twitter";
    }, []);
    if (tweetsList.tweets.length === 0) {
        return (
            <>
                <NewTweet />
                <TweetCard />
                <TweetCard />
            </>
        );
    }
    return (
        <>
            <NewTweet />
            {tweetsList.tweets.map(tweet =>
                <TweetCard
                    edited={tweet.edited}
                    likes={tweet.getLikes}
                    retweets={tweet.getRetweets}
                    key={tweet.id}
                    id={tweet.id}
                    deleteTweet={() => tweetsList.deleteTweet(tweet.id)}
                    time={tweet.getTime}
                    text={tweet.getText} />)
            }
        </>
    );
}

export default observer(TweetsContainer);