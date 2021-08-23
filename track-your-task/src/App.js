import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { TodoAdd } from "./components/TodoAdd";
import { TodoEdit } from "./components/TodoEdit";
import { Todos } from "./components/Todos";
import { Navbar } from "./Navbar";

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <br />
                <div className="container">
                    <Route path="/" exact>
                        <TodoAdd />
                        <Todos />
                    </Route>
                    <Route path="/todos">
                        <TodoAdd />
                        <Todos />
                    </Route>
                    <Route path="/todo-edit/:id">
                        <TodoEdit />
                    </Route>
                </div>
            </Router>
        );
    }
}

export default App;
