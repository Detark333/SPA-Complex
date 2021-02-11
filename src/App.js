import React from 'react'
import Header from "./Components/Header/Header";
import {
  Route,
  Redirect,
  withRouter
} from "react-router-dom"
import app from './App.module.css'
import Penthouse from "./Components/Penthouse/Penthouse";
import Complex from "./Components/Complex/Complex";
import Footer from "./Components/Footer/Footer";
import {CSSTransition} from "react-transition-group";
const routes = [
  { path: '/Penthouses/0', Component: Penthouse },
  { path: '/Complex', Component: Complex },
]
function App() {
  console.log(window.location.pathname)
  return <>
    <Header path={window.location.pathname}/>
    <main className={app.main}>
        {routes.map(({ path, Component }) => (
            <Route key={path} path={path}>
              {({ match }) => (
                  <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames={{
                        enter: app.numberEnter,
                        enterActive: app.numberExitActive,
                        exit: app.numberExit,
                      }}
                      unmountOnExit
                  >
                      <Component />
                  </CSSTransition>
              )}
            </Route>
        ))}
        {/*<Route exact path='/Penthouses/0' component={Penthouse} />*/}
        {/*<Route path='/Complex' component={Complex}/>*/}
        <Redirect from="/" to="/Penthouses/0" />
    </main>
    <Footer/>
  </>
}

export default withRouter(App);
