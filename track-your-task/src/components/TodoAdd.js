import React, { Component } from "react";
import axios from "axios";

export class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            status: "incomplete",
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const todo = {
            name: this.state.name,
            status: this.state.status,
        };
        //console.log("in addtodo" + (todo.name);
        if (todo.name == null) {
            alert("Todo Cannot be Empty");
        } else {
            axios
                .post("http://localhost:8080/todos", todo)
                .then((result) => {
                    window.location.href = "/";
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        //console.log(event.target.value);
        this.setState({ [name]: value });
        //console.log(this.state);
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
                            placeholder="Add Task Here..."
                            onChange={this.handleChange}
                        />
                        &emsp;
                        <button type="submit" className="btn btn-primary">
                            ADD
                        </button>
                        &emsp;
                        <input
                            type="reset"
                            value="Clear"
                            className="btn btn-danger"
                        />
                    </div>
                </div>
            </form>
        );
    }
}
