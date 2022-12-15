import React from "react";
import CourseImg from "../../assests/images/Courses/Course1.png";
import Style from "../Courses/Courses.module.css";

export default function CoursesCard(props) {
  return (
    <a className={` ${Style.CoursesCard} mt-4 `} href='#'>
      <div className={` card  `}>
        <img src={CourseImg} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className={` ${Style.Cardtitle} card-title text-right `}>
            {props.title}
          </h5>
          <p
            className={` card-text text-right font-weight-lighter mt-3 ${Style.CardText} `}
          >
            <img
              className='ml-1'
              src={require("../../assests/images/common/user.png")}
              alt=''
            />
            {props.teacherName}
          </p>
          <hr />
          <div className={` col-5 ${Style.price} `}>{props.price}</div>
          <div className={` col-5 offset-2 text-right ${Style.time} `}>
            {props.time}
          </div>
        </div>
      </div>
    </a>
  );
}
