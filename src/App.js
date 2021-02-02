import React from 'react'
import Header from "./Components/Header/Header";
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"
import app from './App.module.css'
import Penthouse from "./Components/Penthouse/Penthouse";
import Complex from "./Components/Complex/Complex";
import 'animate.css'
function App() {
  return <>
    <Header/>
    <main className={app.main}>
      <Switch>
        <Route exact path='/Penthouses/0' component={Penthouse} />
        <Route path='/Complex' component={Complex}/>
        <Redirect from="/" to="/Penthouses/0" />
      </Switch>
    </main>
  </>
}

export default withRouter(App);
