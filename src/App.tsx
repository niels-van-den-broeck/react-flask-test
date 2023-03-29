import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

type Article = { id: number; name: string };

function App() {
  const [count, setCount] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);

  async function fetchHome() {
    const responseArticles = await fetch("http://localhost:5000/", {
      credentials: "include",
    });

    console.log(await responseArticles.json());
  }

  async function fetchArticles() {
    const responseArticles = await fetch("http://localhost:5000/articles", {
      credentials: "include",
    });
    const dataArticles: Article[] = await responseArticles.json();

    setArticles(dataArticles);
  }

  return (
    <div className="App">
      <h1>Test Flask API</h1>
      <div className="card">
        <button onClick={() => fetchHome()}>fetchHome</button>
        <button onClick={() => fetchArticles()}>fetchArticles</button>
      </div>
      <ul className="read-the-docs">
        {articles.map((article) => {
          return (
            <li key={article.id}>
              <h2>{article.name}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
