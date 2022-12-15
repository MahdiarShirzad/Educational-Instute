import React from "react";
import Style from "./Landing.module.css";

export default function SliderCart() {
  return (
    <div className='text-center'>
      <img src={require("../../assests/images/Teachers/Teacher1.png")} alt='' />
      <p className={` ${Style.TeachersName} `}> حسامی</p>
    </div>
  );
}
