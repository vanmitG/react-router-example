import React, { Component } from "react";

export default class EditCandidate extends Component {
  state = {
    id: 502,
    currentCandidate: {}
  };
  componentDidMount() {
    this.getCurrentCandidate();
  }
  async getCurrentCandidate() {
    const { id } = this.state;
    const url = `http://localhost:3001/candidates/${id}`;
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log("candidates", jsonData);
      this.setState({ currentCandidate: jsonData }, () =>
        console.log("candidates in state", this.state.currentCandidate)
      );
    } catch (error) {
      console.log("error geting current user", error);
    }
  }

  async editCandidate(id) {
    // Default options are marked with *
    const url = `http://localhost:3001/candidates/${id}`;
    const { firstName, LastName, Company } = this.state;
    console.log("this.State line 8", this.state);
    try {
      const response = await fetch(url, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
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
      await console.log("this content line 24", content);
    } catch (error) {
      console.log("erro", error);
    }
  }

  render() {
    return (
      <div>
        <h2>Edit Candidate</h2>
        <div className="container">
          <input
            onChange={e =>
              this.setState({ currentCandidate: { firstName: e.target.value } })
            }
            // placeholder={this.state.currentCandidate.firstName}
            value={this.state.currentCandidate.firstName}
          />
          <input
            onChange={e => this.setState({ LastName: e.target.value })}
            placeholder={this.state.currentCandidate.LastName}
            // value={"Last Tran"}
          />
          <input
            onChange={e => this.setState({ Company: e.target.value })}
            placeholder={this.state.currentCandidate.Company}
            // value={"Company Coder"}
          />
        </div>
        <button
          className="btn"
          onClick={() => this.editCandidate(this.state.id)}
        >
          Submit
        </button>
      </div>
    );
  }
}
