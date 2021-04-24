import TopBar from "./TopBar";
import style from "./Feed.module.css";
import BottomNav from "../Navbar/BottomNav";

const Feed = ({ render, title }) => {
    return (
        <div className={style.feed}>
                <TopBar title={title} />
                <div className={style.tweets_list}>
                    {render}
                </div>
                <BottomNav />
        </div>
    );
};

export default Feed;