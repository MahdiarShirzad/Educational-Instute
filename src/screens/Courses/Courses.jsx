import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Topic from "./Topic";
import BottomCourses from "./BottomCourses";
import TopCourses from "./TopCourses";
import Footer from "../../components/Footer/Footer";

export default class Courses extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <Header />
          <div className='row mt-5'>
            <Topic />
            <TopCourses />
            <BottomCourses />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
