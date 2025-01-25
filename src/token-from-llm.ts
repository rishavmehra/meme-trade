import OpenAI from "openai";

const opneai = new OpenAI()

export default async function tokenFromLLM(content: string): Promise<string> {

    const completion = await opneai.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages:[
            {
                "role": "system", 
                "content": "You are an AI agent that needs to tell me if this tweet is about buying a token. Return me either the address of the solana token, or return me null if you cant find a solana token address in this tweet. Only return if it says it is a bull post. The token address will be very visible in the tweet."
            },
            {
                "role": "user",
                content: content
            }
        ]
    });

    return completion.choices[0].message.content ?? "null";
}
