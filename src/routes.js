import React from "react";

import { Switch, Route } from "react-router-dom";

import HomePage from "./components/homePage";
import FirstPage from "./components/firstPage";
import SecondPage from "./components/secondPage";
import ThirdPage from "./components/thirdPage";

const Routes = () => (
  <Switch>
    <Route to="/">
      <HomePage />
    </Route>
    <Route to="/first">
      <FirstPage />
    </Route>
    <Route to="/second">
      <SecondPage />
    </Route>
    <Route to="/third">
      <ThirdPage />
    </Route>
  </Switch>
);

export default Routes;
