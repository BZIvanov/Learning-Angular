import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './common/home/home';
import Extensions from './lessons/extensions/extensions';
import Utilities from './lessons/utilities/utilities';
import Stylings from './lessons/stylings/stylings';
import NextJS from './lessons/nextjs/nextjs';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/extensions" component={Extensions} />
        <Route path="/utilities" component={Utilities} />
        <Route path="/css" component={Stylings} />
        <Route path="/nextjs" component={NextJS} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
