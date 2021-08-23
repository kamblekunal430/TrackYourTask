import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
                            return (
                                <div key={index} className="d-flex m-2 ">
                                    <li className="list-group-item list-group-item-info text-dark w-50 ">
                                        <h5 className="m-0">{todo.name}</h5>
                                    </li>
                                    &emsp;
                                    <div className="pt-1">
                                        <button
                                            className="btn btn-outline-success"
                                            onClick={this.markDone}
                                        >
                                            Done
                                        </button>
                                        &emsp;
                                        <Link
                                            to={"/todo-edit/" + todo.id}
                                            className="btn btn-outline-primary"
                                            onClick={this.editTodo}
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
                        })}
                    </ul>
                </div>
            );
        }
    }
}
