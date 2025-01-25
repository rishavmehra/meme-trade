import axios from "axios";

const TWEET_MAX_TIME = 10*1*60*60*1000;

interface Tweet {
    content: string,
    id: string,
    createdAt: string,
}

export default async function getTweets(userName: string): Promise<Tweet[]> {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://twttrapi.p.rapidapi.com/user-tweets?username=${userName}`,
        headers: { 
          'x-rapidapi-host': 'twttrapi.p.rapidapi.com', 
          'x-rapidapi-key': process.env.TWITTER_API
        }
      };

    const response = await axios.request(config)
    const timeLineResponse = response.data.data.user_result.result.timeline_response.timeline.instructions.filter((x:any)=> x.__typename === "TimelineAddEntries");

    const tweets: Tweet[]= []
    timeLineResponse[0].entries.map((x: any)=>{
        try{
            tweets.push({
                content: x.content.content.tweetResult.result.legacy.full_text,
                id: x.content.content.tweetResult.result.core.user_result.result.legacy.id_str,
                createdAt: x.content.content.tweetResult.result.legacy.created_at,
            })
        } catch(e){

        }
    })
    return tweets.filter(x=> new Date(x.createdAt).getTime() > Date.now() - TWEET_MAX_TIME )
}
