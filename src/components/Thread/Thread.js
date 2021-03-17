import { useEffect } from "react";
import style from "./Thread.module.css";
import tweetsList from "../../mobx/tweet/TweetsList";
import TweetCard from "../Tweet/TweetCard";
import Input from "../Widgets/Input";
import Button from "../Widgets/Button";

const Thread = ({ match }) => {
    const id = parseInt(match.params.id);
    const data = tweetsList.find(id);
    useEffect(() => {
        document.title = data ? data.getText : "Thread not found";
    }, [data]);

    if (data === undefined) {
        return (
            <TweetCard />
        );
    }
    return (
        <div>
            <TweetCard
                text={data.getText}
                likes={data.likes}
                retweets={data.retweets}
                time={data.getTime} />
            <div className={style.reply}>
                <Input 
                    className={style.text}
                    placeholder="Type a reply"
                    type="text"/>
                <Button 
                    className={style.button} 
                    children="Reply"/>
            </div>
        </div>
    );
}

export default Thread;