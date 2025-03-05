import React, { useState } from "react";
import "./styles.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="app-container">
      <h1>Live Text Preview 🎨</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="preview">Preview: {text}</p>
    </div>
  );
}

export default App;
