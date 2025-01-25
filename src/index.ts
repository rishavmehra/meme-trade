require("dotenv").config()
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import getTweets from "./get-tweets";
import tokenFromLLM from "./token-from-llm";
import { swap } from "./token-swap";

const SOL_AMOUNT = 0.001*LAMPORTS_PER_SOL

async function main(userName: string) {
    const newTweets = await getTweets(userName)
    console.log(newTweets);
    for (let tweet of newTweets) {
        const tokenAddress = await tokenFromLLM(tweet.content)
        if (tokenAddress!=="null"){
            console.log(`trying to execute the tweets transaction => ${tweet.content}`);
            await swap(tokenAddress, SOL_AMOUNT)
        }
    }
}

main("AltcoinGordon")