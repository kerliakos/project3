import "./styles.css";
import Title from "./Title";
import Button from "./Button";
import { useState, useEffect } from "react";

export default function App() {
  const [fact, setFact] = useState("");

  const fetchCatFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <Title text="CAT FACTS" />
        <h3>
          <i>Your cat fact awaits you below...</i>
        </h3>
      </header>

      <main className="grid-layout">
        <img src="/cat.jpg" alt="cat photo" className="cat-left" />
        <div className="center-content">
          <p className="fact-text">{fact}</p>
          <Button onClick={fetchCatFact}>Click here for a cat fact!</Button>
        </div>
        <img src="/cat.jpg" alt="cat photo" className="cat-right" />
      </main>

      <footer className="footer">
        <a href="https://github.com/kerliakos/project3" target="_blank">
          app by kerliakos @ github
        </a>
        <br />
        <a
          href="https://www.pexels.com/photo/close-up-photography-of-a-cat-sleeping-763669/"
          target="_blank"
        >
          image by Magda Ehlers @ Pexels
        </a>
      </footer>
    </div>
  );
}
