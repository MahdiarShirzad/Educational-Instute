import React from "react";
import Slider from "./Slider";
import Style from "./Landing.module.css";

export default function SliderBox() {
  return (
    <>
      <div className={` container ${Style.SliderBox} `}>
        <div className={` row `}>
          <img
            className='mt-4 ml-3'
            src={require("../../assests/images/Teachers/01.png")}
            alt=''
          />

          <span className='col-5 offset-2'>
            <div className={` text-center  ${Style.SliderTopic} `}>
              مدرسین نمونه مجموعه آموزشی ما
            </div>
            <Slider />
          </span>
        </div>
      </div>
    </>
  );
}
