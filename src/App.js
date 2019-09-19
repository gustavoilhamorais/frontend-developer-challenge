import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Main } from "./views";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="Home" component={Main} />} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
