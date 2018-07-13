import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
/*
IndexRoute specifies default page
*/

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesPage} />
            <Route exact path="/course" component={ManageCoursePage} />
            <Route path="/course/:id" component={ManageCoursePage} />
        </Switch>
    </main>
);

export default Main