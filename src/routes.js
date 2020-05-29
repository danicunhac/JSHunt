import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Product from "./pages/product";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* "exact" para o caminho ser exatamente o digitado */}
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
