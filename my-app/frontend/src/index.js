import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import App.js

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Render App component here */}
  </React.StrictMode>,
  document.getElementById("root")  // Render into the root element in index.html
);

