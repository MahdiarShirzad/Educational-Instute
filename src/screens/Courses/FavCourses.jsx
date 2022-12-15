import React, { Component } from "react";
import Topic from "../../components/common/Topic/Topic";
import FavCoursesRow from "./FavCoursesRow";
import Style from "./Courses.module.css";

export default class FavCourses extends Component {
  state = {
    title: "دوره های محبوب",
    btn: "مشاهده همه دوره ها",
  };

  render() {
    let info = this.state;
    return (
      <div className={` container ${Style.CoursesContainer} `}>
        <Topic title={info.title} btn={info.btn} />
        <FavCoursesRow />
      </div>
    );
  }
}
