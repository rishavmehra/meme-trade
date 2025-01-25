# X-Trading-Bot

## Overview

X-Trading-Bot is an automated trading bot that leverages Twitter posts and OpenAI's language model to identify and execute trades on the Solana blockchain. The bot scans tweets from a specified user, analyzes the content to identify mentions of Solana token addresses, and performs token swaps based on the detected information.

## Features

- **Twitter Integration**: Fetches tweets from a specified Twitter user.
- **OpenAI Analysis**: Uses OpenAI's language model to analyze tweets and identify Solana token addresses.
- **Automated Trading**: Executes token swaps on the Solana blockchain based on the analyzed tweets.
- **Configurable Slippage**: Allows setting slippage for token swaps.

## Prerequisites

- Node.js
- npm or yarn or pnpm
- A Solana wallet with sufficient funds
- Twitter API key
- OpenAI API key

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/rishavmehra/meme-trade.git
    cd x-trading-bot
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    TWITTER_API=your_twitter_api_key
    OPENAI_API_KEY=your_openai_api_key
    DEVNET_RPC=your_devnet_rpc_url
    PRIVATE_KEY=your_solana_wallet_private_key
    ```

## Usage

1. Build the project:
    ```sh
    npm run build
    ```

2. Start the bot:
    ```sh
    npm run start
    ```

## Project Structure

- `src/index.ts`: Entry point of the application.
- `src/get-tweets.ts`: Fetches tweets from the specified Twitter user.
- `src/token-from-llm.ts`: Uses OpenAI to analyze tweets and extract Solana token addresses.
- `src/token-swap.ts`: Executes token swaps on the Solana blockchain.
- `.env`: Environment variables configuration.
- `tsconfig.json`: TypeScript configuration.
- `package.json`: Project dependencies and scripts.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Disclaimer

This bot is for educational purposes only. Use it at your own risk. The author is not responsible for any financial losses incurred.
