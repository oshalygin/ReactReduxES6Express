import React from "react";
import {Route, IndexRoute} from "react-router";
import Application from "./components/application.jsx";
import HomePage from "./components/home/home.page.jsx";
import AboutPage from "./components/about/about.page.jsx";
import CoursesPage from "./components/course/courses.page.jsx";

export default (
    <Route path="/" component={Application}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursesPage} />
    </Route>
);
