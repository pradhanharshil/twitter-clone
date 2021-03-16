import {observer} from "mobx-react-lite";
import style from "./Tweet.module.css";
import UserImage from "./UserImage";
import Panel from "./Panel";
import user from "../../assets/images/user.jpg";
import dots from "../../assets/icons/dots.png";

const content = `A new version of ubuntu 21.04 has been
released. It comes with some exciting features
like new GNOME 4.0, support for fractional
scaling out of the box and many more.`;

const TweetCard = ({text=content, time=`1h ago`, likes, retweets}) => {
    return (
        <div className={style.tweet}>
            <UserImage img={user} />
            <div className={style.content}>
                <div className={style.heading}>
                    <div>
                        <span className={style.bold}>Ubuntu</span>
                        <span className={style.uname}>@Ubuntu</span>
                        <span className={style.tweet_time}>{time}</span>
                    </div>
                    <div>
                        <img 
                            className={style.dots} 
                            src={dots} 
                            alt="Dots"/>
                    </div>
                </div>
                <div>{text}</div>
                <Panel 
                    likes={likes}
                    retweets={retweets}/>
            </div>
        </div>
    );
}

export default observer(TweetCard);