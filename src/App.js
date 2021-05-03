import React from "react"
import './App.css'
import Row from "./components/Row"
import requests from "./requests"

function App() {
  return (
    <div className="App">
  <h1>Hey Clever Programmer! Let's build Webflix!</h1>
  <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
  <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
