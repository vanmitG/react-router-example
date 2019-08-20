import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a
            href="/"
            className="left hide-on-small-only"
            style={{ fontSize: "2em", fontWeight: "bolder" }}
          >
            Candidates
          </a>
          <a href="/" className="brand-logo hide-on-med-and-up">
            Candidates
          </a>
          <ul id="nav-mobile" class="right hide-on-small-only">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/candidates">Cadidate</Link>
            </li>
            <li>
              <Link to="/NewCandidate">New Candidate</Link>
            </li>
            <li>
              <Link to="/EditCandidate">Edit Candidate</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
