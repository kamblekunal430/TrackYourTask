import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class TodoEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {},
            name: null,
            status: "incomplete",
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:8080/todos/" + this.props.match.params.id)
            .then((result) => {
                this.setState({
                    todos: result.data,
                    name: result.data.name,
                    status: result.data.status,
                });
                //console.log(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const todo = {
            id: this.props.match.params.id,
            name: this.state.name,
            status: this.state.status,
        };

        if (todo.name === "") {
            alert("Todo cannot be empty");
        } else {
            axios
                .put(
                    "http://localhost:8080/todos/" + this.props.match.params.id,
                    todo
                )
                .then((result) => {
                    //console.log("Todo updated");
                    this.props.history.push("/todos");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="m-4 p-4">
                    <label className="form-label">
                        <b>
                            <h3>New Todo:</h3>
                        </b>
                    </label>
                    <div className="d-flex col-md-8">
                        <input
                            type="text"
                            name="name"
                            className="form-control bg-light"
                            placeholder="Add task here"
                            value={this.state.name || ""}
                            onChange={this.handleChange}
                        />
                        &emsp;
                        <button
                            type="submit"
                            className="btn btn-outline-primary"
                        >
                            Update
                        </button>
                        &emsp;
                        <Link to={"/"} className="btn btn-outline-secondary">
                            Back
                        </Link>
                    </div>
                </div>
            </form>
        );
    }
}
