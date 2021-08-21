import axios from "axios";
import React, { Component } from "react";

export class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5001/todos")
      .then((result) => {
        this.setState({
          todos: result.data,
        });
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>Todos component</h2>
        <ul className="list-group">
          {this.state.todos.map((todo, index) => {
            return (
              <div key={index} className="container d-flex ">
                <li className="list-group-item list-group-item-secondary text-dark w-50">
                  <h5>{todo.name}</h5>
                </li>
                &emsp;
                <div>
                  <button className="btn btn-outline-success">Done</button>
                  &emsp;
                  <button className="btn btn-outline-danger">Delete</button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
