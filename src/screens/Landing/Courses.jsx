import React, { Component } from "react";
import Topic from "../../components/common/Topic/Topic";
import Style from "../Courses/Courses.module.css";
import CoursesRow from "../Courses/CoursesRow";

export default class Courses extends Component {
  state = {
    title: "آخرین دوره های مجموعه",
    btn: "مشاهده همه دوره ها",
  };
  render() {
    let info = this.state;
    return (
      <div className={` container ${Style.CoursesContainer} `}>
        <div className='row'>
          <Topic title={info.title} btn={info.btn} />
          <div className='container mt-2'>
            <CoursesRow />
          </div>
        </div>
      </div>
    );
  }
}
