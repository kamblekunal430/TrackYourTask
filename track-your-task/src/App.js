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
        <div className="container">
          <Route path="/" exact component={Todos} />
          <Route path="/todos" component={Todos} />
        </div>
      </Router>
    );
  }
}

export default App;
