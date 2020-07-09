import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/gamedata")
      .then((res) => {
        setGameData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">WELCOME TO MY GAMESCRAPER</header>
      <div>{console.log(gameData)}</div>
    </div>
  );
}

export default App;
