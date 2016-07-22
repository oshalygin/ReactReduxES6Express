import React from "react";
import {Route, IndexRoute} from "react-router";
import Application from "./components/application.jsx";
import HomePage from "./components/home/home.page.jsx";
import AboutPage from "./components/about/about.page.jsx";
import CoursesPage from "./components/course/courses.page.jsx";
import ManageCoursePage from "./components/course/manage.course.page.jsx"; //eslint-disable-line import/no-named-as-default

export default (
    <Route path="/" component={Application}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={ManageCoursePage} />
        <Route path="course/:id" component={ManageCoursePage} />
    </Route>
);
