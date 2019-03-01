import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import React from "react";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import EntryDashboardPage from "../components/EntryDashboardPage";
import Header from "../components/Header";
import AddEntryPage from "../components/AddEntryPage";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/dashboard" component={EntryDashboardPage} />
        <Route exact path="/create" component={AddEntryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
