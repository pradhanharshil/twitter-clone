import {    
    makeObservable,
    observable,
    computed,
    action
} from "mobx";

class Tweet {
    id= parseInt(Math.random() * 100000);
    text = null;
    likes = parseInt(Math.random() * 500);
    retweets = parseInt(Math.random() * 500);
    edited = false;
    time = new Date().toDateString();
    replies = [];
    constructor(text) {
        makeObservable(this, {
            text: observable,
            likes: observable,
            retweets: observable,
            replies: observable,
            reply: action,
            deleteReply: action,
            getLikes: computed,
            getRetweets: computed,
            getTime: computed,
            getText: computed
        });
        this.text = text;
    }
    reply(text) {
        this.replies.push(new Tweet(text));
    }
    deleteReply(id) {
        const index = this.replies.findIndex(reply => reply.id === id);
        if (index > -1) {
            this.replies.splice(index , 1);
        }
    }
    get getText() {
        return this.text;
    }
    get getTime() {
        return this.time;
    }
    get getLikes() {
        return this.likes;
    }
    get getRetweets() {
        return this.retweets;
    }
}

export default Tweet;