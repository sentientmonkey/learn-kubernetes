import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import logo from "./logo.svg";
import "./App.css";

interface Greeting {
  message: string;
}

function App() {
  const [greeting, setGreeting] = useState<Greeting>();

  useEffect(() => {
    (async () => {
      const response: AxiosResponse<Greeting> = await axios.get("/api/hello");
      setGreeting(response.data);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{greeting?.message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
