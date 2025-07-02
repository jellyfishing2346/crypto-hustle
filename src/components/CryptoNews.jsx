import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function CryptoNews() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log("Full API response:", data);
      console.log("data.Data:", data.Data);
      setNewsList(data.Data);
    }
    fetchNews().catch(console.error);
  }, []);

  return (
    <div>
      <h2>Crypto News</h2>
      <ul>
        {Array.isArray(newsList) && newsList.length > 0 ? (
          newsList.map((article) => (
            <li key={article.id}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))
        ) : (
          <li>No news available.</li>
        )}
      </ul>
    </div>
  );
}

export default CryptoNews;