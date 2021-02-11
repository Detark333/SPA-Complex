import React from 'react'
import Header from "./Components/Header/Header";
import {
    Route,
    Redirect,
    withRouter
} from "react-router-dom"
import app from './App.module.css'
import Penthouse from "./Components/Penthouse/";
import Complex from "./Components/Complex/Complex/";
import Footer from "./Components/Footer/";
import {CSSTransition} from "react-transition-group";

const routes = [
    {path: '/Penthouses/0', Component: Penthouse},
    {path: '/Complex', Component: Complex},
]

function App() {
    return <>
        <Header path={window.location.pathname}/>
        <main className={app.main}>
            {routes.map(({path, Component}) => (
                <Route key={path} path={path}>
                    {({match}) => (
                        <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames={{
                                enter: app.slideEnter,
                                enterActive: app.slideExitActive,
                                exit: app.slideExit,
                            }}
                            unmountOnExit
                        >
                            <Component/>
                        </CSSTransition>
                    )}
                </Route>
            ))}
            <Redirect from="/" to="/Penthouses/0"/>
        </main>
        <Footer/>
    </>
}

export default withRouter(App);
