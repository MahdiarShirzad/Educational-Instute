import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Style from "./CourseDetails.module.css";
import CourseDescription from "./CourseDescription";
import CourseInfo from "./CourseInfo";

export default class CourseDetails extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={` container ${Style.CourseDetails} `}>
          <div className='row'>
            <div className='col-7'>
              <CourseDescription />
            </div>

            <div className='col-4 offset-1'>
              <CourseInfo />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
