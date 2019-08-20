import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CandidatePage from "./CandidatePage";
import NewCandidate from "./NewCandidate";
import EditCandidate from "./EditCandidate";
import NavBar from "../component/NavBar";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/candidates" component={CandidatePage} />
          <Route path="/NewCandidate" component={NewCandidate} />
          <Route path="/EditCandidate" component={EditCandidate} />
        </Switch>
      </div>
    );
  }
}
