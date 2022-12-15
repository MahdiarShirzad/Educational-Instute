import React from "react";
import Header from "../../components/Header/Header";
import SearchBox from "./SearchBox";
import Languages from "./Languages";
import Courses from "./Courses";
import Article from "./Article";
import SliderBox from "./SliderBox";
import FavCourses from "../Courses/FavCourses";
import Footer from "../../components/Footer/Footer";
import ScrollProgressRead from "react-scroll-progress-read";
import Style from "./Landing.module.css";

export default function Landing() {
  return (
    <>
      <div className={` ${Style.scroll} `}>
        <ScrollProgressRead
          backgroundColor='#CCC'
          barColor='#3C6E71'
          height='5px'
          target='read-container'
        />
      </div>
      <Header />
      <SearchBox />
      <Languages />
      <Courses />
      <Article />
      <SliderBox />
      <FavCourses />
      <Footer />
    </>
  );
}
