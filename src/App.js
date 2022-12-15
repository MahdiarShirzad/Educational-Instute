import "./index.css";
import React from "react";
import Landing from "./screens/Landing/Landing";
import CourseDetails from "./screens/CourseDetails/CourseDetails";
import ArticleDetails from "./screens/ArticleDetails/ArticleDetails";
import Courses from "./screens/Courses/Courses";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Landing />
        </Route>
        <Route path='/CourseDetails'>
          <CourseDetails />
        </Route>
        <Route path='/ArticleDetails'>
          <ArticleDetails />
        </Route>
        <Route path='/Courses'>
          <Courses />
        </Route>
      </Switch>
    </>
  );
}
