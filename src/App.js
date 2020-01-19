import React, { useEffect } from "react";
import { UserAuthProvider } from "./context/UserAuthContext";

import MainRouter from "./components/main-router/MainRouter";

import "./App.css";

function App() {
  return (
    <div className="App">
      <UserAuthProvider>
        <MainRouter />
      </UserAuthProvider>
    </div>
  );
}

export default App;
