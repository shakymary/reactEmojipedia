import React from "react";
import emojipedia from "./libs/emojipedia";
import Card from "./components/card";

import "./App.css";

function createCard(thaemoji) {
  return (
    <Card
      key={thaemoji.id}
      emoji={thaemoji.emoji}
      name={thaemoji.name}
      meaning={thaemoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emoji) => createCard(emoji))}
      </dl>
    </div>
  );
}

export default App;
