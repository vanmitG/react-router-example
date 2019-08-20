import React, { Component } from "react";

export default class NewCandidate extends Component {
  async createCandidate() {
    // Default options are marked with *
    const url = "http://localhost:3001/candidates";
    const { firstName, LastName, Company } = this.state;
    try {
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify({ firstName, LastName, Company }) // body data type must match "Content-Type" header
      });
      const content = await response.json(); // parses JSON response
      await console.log(content);
    } catch (error) {
      console.log("erro", error);
    }
  }

  render() {
    return (
      <div>
        <h2 className="card-panel red lighten-2 white-text">New Candidate</h2>
        <div className="container">
          <input
            onChange={e => this.setState({ firstName: e.target.value })}
            placeholder="First Name"
          />
          <input
            onChange={e => this.setState({ LastName: e.target.value })}
            placeholder="Last Name"
          />
          <input
            onChange={e => this.setState({ Company: e.target.value })}
            placeholder="Company"
          />
        </div>
        <button className="btn" onClick={() => this.createCandidate()}>
          Submit
        </button>
      </div>
    );
  }
}
