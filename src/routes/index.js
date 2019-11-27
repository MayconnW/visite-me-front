import React from "react";

import { Switch } from "react-router-dom";
import Route from "./Route";

import Main from "../pages/main";
import Login from "../pages/login";
import Wrong from "../pages/wrong";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} accessPage="Home" />
    <Route path="/login" component={Login} isPrivate={false} />
    <Route path="/" component={Wrong} />
  </Switch>
);

export default Routes;
