import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import style from "./Thread.module.css";
import tweetsList from "../../mobx/tweet/TweetsList";
import TweetCard from "../Tweet/TweetCard";
import Input from "../Widgets/Input";
import Button from "../Widgets/Button";

const Thread = ({ match }) => {
    const id = parseInt(match.params.id);
    const data = tweetsList.find(id);
    const replyRef = useRef(null);
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
                    ref={replyRef}
                    className={style.text}
                    placeholder="Type a reply"
                    type="text" />
                <Button
                    onClick={() => data.reply(replyRef.current.value)}
                    className={style.button}
                    children="Reply" />
            </div>
            {data.replies.map(reply =>
                <TweetCard
                    deleteTweet={reply.deleteReply(reply.id)}
                    key={reply.id}
                    text={reply.getText}
                    likes={reply.likes}
                    retweets={reply.retweets}
                    time={reply.getTime} />)
            }
        </div>
    );
}

export default observer(Thread);