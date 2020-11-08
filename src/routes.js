import React from "react";

import { Switch, Route } from "react-router-dom";

import HomePage from "./components/homePage";
import FirstPage from "./components/firstPage";
import SecondPage from "./components/secondPage";
import ThirdPage from "./components/thirdPage";

const Routes = () => (
  <Switch>
    <Route path="/first">
      <FirstPage />
    </Route>
    <Route path="/second">
      <SecondPage />
    </Route>
    <Route path="/third">
      <ThirdPage />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>
);

export default Routes;
