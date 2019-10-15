import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import FootTab from './components/FootTab/FootTab';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Recognize from './pages/Recognize/Recognize';
import Cart from './pages/Cart/Cart';
import Personal from './pages/Personal/Personal';

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/category" component={Category}></Route>
          <Route path="/recognize" component={Recognize}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/personal" component={Personal}></Route>
          <Redirect to="/home" from="/"></Redirect>
        </Switch>
        <FootTab></FootTab>
      </>
    );
  }
}

