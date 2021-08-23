import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:8080/todos")
            .then((result) => {
                this.setState({
                    todos: result.data,
                });
                //console.log(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    deleteTodo(id) {
        let res = window.confirm("Confirm Delete");
        if (res) {
            axios
                .delete("http://localhost:8080/todos/" + id)
                .then(() => {
                    //alert("Task deleted");
                    //window.location='/todos'
                    this.componentDidMount();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    markTodoDone(todo) {
        todo.status = "complete";
        axios
            .put("http://localhost:8080/todos/" + todo.id, todo)
            .then((result) => {
                //console.log("Todo mark as done");
                this.componentDidMount();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        if (this.state.todos.length === 0) {
            return (
                <div className="m-4 bg-light p-4 text-center">
                    No task to be done.
                </div>
            );
        } else {
            return (
                <div className="m-4 bg-light p-4">
                    <h2>Todos :</h2>
                    <ul className="list-group">
                        {this.state.todos.map((todo, index) => {
                            if (todo.status === "incomplete") {
                                return (
                                    <div key={index} className="d-flex m-2 ">
                                        <li className="list-group-item list-group-item-info text-dark w-50 ">
                                            <h5 className="m-0">{todo.name}</h5>
                                        </li>
                                        &emsp;
                                        <div className="pt-1">
                                            <button
                                                className="btn btn-outline-success"
                                                onClick={this.markTodoDone.bind(
                                                    this,
                                                    this.state.todos[index]
                                                )}
                                            >
                                                Done
                                            </button>
                                            &emsp;
                                            <Link
                                                to={
                                                    "/todo-edit/" +
                                                    this.state.todos[index].id
                                                }
                                                className="btn btn-outline-primary"
                                            >
                                                Edit
                                            </Link>
                                            &emsp;
                                            <button
                                                className="btn btn-outline-danger"
                                                onClick={this.deleteTodo.bind(
                                                    this,
                                                    this.state.todos[index].id
                                                )}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={index} className="d-flex m-2 ">
                                        <li className="list-group-item list-group-item-success text-dark w-50 ">
                                            <s>
                                                <h5 className="m-0">
                                                    {todo.name}
                                                </h5>
                                            </s>
                                        </li>
                                        &emsp;
                                        <div className="pt-1">
                                            <button
                                                className="btn btn-outline-danger"
                                                onClick={this.deleteTodo.bind(
                                                    this,
                                                    this.state.todos[index].id
                                                )}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </ul>
                </div>
            );
        }
    }
}
