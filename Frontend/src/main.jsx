import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const context = createContext({ isAuthorized: false });

const AppWrapper = () => {
  const [isAuthorized, setIsauthorized] = useState(false);
  const [user, setUser] = useState({});

  return (
    <context.Provider value={{ isAuthorized, setIsauthorized, user, setUser }}>
      <App />
    </context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
