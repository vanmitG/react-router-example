import React, { Component } from "react";

export default class CandidatePage extends Component {
  // componentDidMount() {
  //   this.getCandidates();
  // }
  async getCandidates() {
    const url = "http://localhost:3001/candidates";
    const response = await fetch(url);
    const jsonData = await response.json();
    this.setState({ candidates: jsonData });
    // console.log("candidates", jsonData);
  }

  render() {
    return (
      <>
        <div>
          <h2>This Candidates Pages</h2>
        </div>
        <button onClick={() => this.getCandidates()}>Get Candidates</button>
      </>
    );
  }
}
