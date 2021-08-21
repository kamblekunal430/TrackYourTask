import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Todos } from "./components/Todos";
import { Navbar } from "./Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <br />
        <Route path="/" exact render={Todos} />
        <Route path="/todos" render={Todos} />
      </Router>
    );
  }
}

export default App;
