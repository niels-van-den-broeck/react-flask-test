import { useState } from "react";
import api from "./api/api";
import "./App.css";

type Article = { id: number; name: string };

function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  async function fetchHome() {
    const { data } = await api.get("/");

    console.log(await data.json());
  }

  async function fetchArticles() {
    const { data } = await api.get<Article[]>("/articles");

    setArticles(data);
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
