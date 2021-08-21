import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid justify-content-center">
          <Link to={"/todos"} className="navbar-brand">
            <h3>
              Track Your Task <i className="bi bi-card-checklist "></i>
            </h3>
          </Link>
        </div>
      </nav>
    );
  }
}
