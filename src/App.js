import React, { useEffect, useState } from "react";
import Login from "./components/Authentication/Login";
import Home from "./components/Dashboard/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    if (!token) {
      setLoggedIn(true);
    }
  }, [loggedIn, token]);

  return <>{loggedIn ? <Home /> : <Login />}</>;
}

export default App;
