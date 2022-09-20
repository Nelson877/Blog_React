import React from 'react'
import "./App.css";
import Home from "./page/Home";
import Blog from "./page/Blog";
import { Route, Switch } from "react-router-dom";


const App = () => {
  return (
    <div className='app'>
 <Switch>
      <Route path="/" exact component={Home}></Route>
    <Route path="/blog/:id" component={Blog}></Route>
    </Switch>
    </div>
  )
}

export default App