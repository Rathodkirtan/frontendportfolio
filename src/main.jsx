import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Authprovider from "../store/auth.jsx";

const context=createContext();
let token=localStorage.getItem('token')

createRoot(document.getElementById("root")).render(
  <context.Provider value={token}>
    <StrictMode>
      <App />
    </StrictMode>
  </context.Provider>
);

export default context;
