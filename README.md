# Crypto Hustle

A React app that displays a searchable list of blockchain coins, their prices, and logos, with a side navigation bar showing the latest crypto news.

## Features

- View a list of actively traded blockchain coins
- See each coin’s logo and current USD price
- Search and filter coins by name
- Side navigation bar with live crypto news
- Responsive and modern UI

## Getting Started

### Prerequisites

- Node.js and npm installed

### Setup

1. Clone this repository.
2. Install dependencies:
    ```
    npm install
    ```
3. Create a `.env` file in the project root and add your CryptoCompare API key:
    ```
    VITE_APP_API_KEY="your_api_key_here"
    ```
   Get a free API key from [CryptoCompare](https://www.cryptocompare.com/).

4. Start the development server:
    ```
    npm run dev
    ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  App.jsx
  App.css
  Components/
    CoinInfo.jsx
    SideNav.jsx
    CryptoNews.jsx
.env
```

## Notes

- If you see a rate limit error for news, wait for your API quota to reset or upgrade your CryptoCompare account.
- You can customize the styles in `App.css`.

## License

MIT