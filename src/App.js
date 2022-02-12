import React, { useState } from "react";
import Home from "./components/Dashboard/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
