import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function CoinInfo({ image, name, symbol }) {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    async function getCoinPrice() {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${API_KEY}`
      );
      const data = await response.json();
      setPrice(data);
    }
    getCoinPrice().catch(console.error);
  }, [symbol]);

  return (
    <li className="main-list" key={symbol}>
      <span className="coin-left">
        {image && (
          <img
            className="icons"
            src={`https://www.cryptocompare.com${image}`}
            alt={`Small icon for ${name} crypto coin`}
          />
        )}
        {name} ({symbol})
      </span>
      <span className="coin-price">
        {price && price.USD ? `$${price.USD} USD` : ""}
      </span>
    </li>
  );
}

export default CoinInfo;