import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <div className="card-header-text">
            <h2>Alex Guerrero</h2>
            <span>Lunes 26 de junio de 2017</span>
          </div>
        </header>
        <div className="card-body">
        You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.
        </div>
        <footer className="card-footer">
          <a href="" title="">Leer más...</a>
          <a href="" title="">&hearts;
            <span>37</span>
          </a>
        </footer>
    </div>
    );
  }
}

export default App;