import React from "react";

import { Route } from "react-router-dom";

import HomePage from "./components/homePage";
import FirstPage from "./components/firstPage";
import SecondPage from "./components/secondPage";
import ThirdPage from "./components/thirdPage";
import { CSSTransition } from "react-transition-group";

const routesConfig = [
  { path: "/first", comp: FirstPage, key: 1 },
  { path: "/second", comp: SecondPage, key: 2 },
  { path: "/third", comp: ThirdPage, key: 3 },
  { path: "/", comp: HomePage, key: 4 },
];

const Routes = () => (
  <div>
    {routesConfig.map((route) => (
      <Route key={route.key} exact path={route.path}>
        {(customProp) => (
          <CSSTransition in={customProp.match !== null} timeout={300} classNames="my-comp" unmountOnExit>
            <route.comp classNames="my-comp"></route.comp>
          </CSSTransition>
        )}
      </Route>
    ))}
  </div>
);

export default Routes;
