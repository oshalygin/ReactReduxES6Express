import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configure.store";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { loadCourses } from "./actions/course.actions";
import { loadAuthors } from "./actions/author.actions";
import routes from "./routes.js";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById("application")

);