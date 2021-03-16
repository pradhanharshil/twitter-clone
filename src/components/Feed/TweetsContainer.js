import { observer } from "mobx-react-lite";
import TweetCard from "../Tweet/TweetCard";
import NewTweet from "../Tweet/NewTweet";
import tweetsList from "../../mobx/tweet/TweetsList";

const TweetsContainer = () => {
    return (
        <>
            <NewTweet />
            <TweetCard />
            <TweetCard />
            {tweetsList.tweets.map(tweet =>
                <TweetCard
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