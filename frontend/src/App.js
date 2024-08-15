import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [username, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await axios.get("/name");
      setUserName(response.data);
      setIsLoading(false);
    };

    getData();
  }, []);

  if (isLoading) {
    return <div>Betöltés...</div>;
  }

  return (
    <div className="App">
      <h1>My frontend :)</h1>

      <h2>Hi, {username}</h2>
    </div>
  );
}

export default App;
