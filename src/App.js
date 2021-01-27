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
function App(props) {
  return <>
    <Header/>
    <main className={app.main}>
      <Switch>
        <Route history={props.history} path='/Penthouse' component={Penthouse} />
        <Route history={props.history} path='/Complex' component={Complex} />
        <Redirect from='/' to='/Penthouse'/>
      </Switch>
    </main>
  </>
}

export default withRouter(App);
