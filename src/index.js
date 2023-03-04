import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import toolkit from "./store/toolkit";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={toolkit}>
      <App />
    </Provider>
  </React.StrictMode>
);
