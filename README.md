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

- [Node.js](https://nodejs.org/) and npm installed

### Setup

1. **Clone this repository:**
    ```sh
    git clone <your-repo-url>
    cd crypto-hustle
    ```
2. **Install dependencies:**
    ```sh
    npm install
    ```
3. **Create a `.env` file in the project root and add your CryptoCompare API key:**
    ```env
    VITE_APP_API_KEY="your_api_key_here"
    ```
    > Get a free API key from [CryptoCompare](https://www.cryptocompare.com/).

4. **Start the development server:**
    ```sh
    npm run dev
    ```

5. **Open** [http://localhost:5173](http://localhost:5173) **in your browser.**

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

## Demo

- **Demo Recording:** [Watch on Loom](https://www.loom.com/share/d24eab3a21214821bc2c86ce0ddebc16?sid=87a4ef2d-2b5a-43f9-886c-ae86b65bf455)
- **Live Demo:** [View Deployment](https://cozy-brigadeiros-5ebb5f.netlify.app)

---

Feel free to further personalize or expand as needed!