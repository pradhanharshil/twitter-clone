import {makeAutoObservable} from "mobx";
import Tweet from "./Tweet";

class TweetsList {
    tweets = [];
    constructor() {
       makeAutoObservable(this);
    }
    get getCount() {
        return this.tweets.length;
    }
    get getTweets() {
        return this.tweets;
    }
    addTweet(text) {
        if (text==="" || text===null) {
            alert("Content required");
            return;
        }
        this.tweets.push(new Tweet(text));
    }
    deleteTweet(id) {
        const index = this.tweets.findIndex(item => item.id === id);
        if (index > -1) {
            this.tweets.splice(index, 1);
        }
    }
    find(id) {
        const index = this.tweets.findIndex(item => item.id === id);
        return this.tweets[index];
    }
}

export default new TweetsList();