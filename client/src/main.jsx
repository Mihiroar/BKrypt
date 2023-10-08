import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById("root")).render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>
);

//Isne bahut Hagaya tha
//that error is due to some changes in recent update of ethers package, so you have to go back to previous packages of ethers
// to do that :
// 1) npm uninstall ethers
// 2) npm i -S ethers@5.7.2