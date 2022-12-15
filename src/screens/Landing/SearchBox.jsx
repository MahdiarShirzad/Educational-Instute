import React from "react";
import Typist from "react-text-typist";
import Style from "./Landing.module.css";

export default function SearchBox() {
  return (
    <div className={` container ${Style.SearchContainer} mt-3 `}>
      <div className='row'>
        <div className='col-6'>
          <Typist
            className={` ${Style.SearchBoxTitle} mt-5 font-weight-bolder `}
            sentences={["آموزش برنامه نویسی ، خود آموزی و ورود به بازار کار"]}
            loop={false}
            showCursor={false}
          />
          <p></p>
          <Typist
            className='font-weight-lighter text-center'
            sentences={["حرفه ای شدن رو از امروز شروع کن"]}
            startDelay={4600}
            loop={false}
            showCursor={false}
          />

          <div className='col-8 offset-2 mt-5'>
            <form className='form-inline my-2 my-lg-0 mr-5'>
              <input
                className={` form-control mr-sm-2 ${Style.SearchInput} col-12 `}
                type='search'
                placeholder='جستوجوی دوره های مختلف...'
              />
              <button
                className={` btn  my-2 my-sm-0 ${Style.SearchBtn} `}
                type='submit'
              >
                <img
                  src={require("../../assests/images/common/search.png")}
                  alt=''
                />
              </button>
            </form>
          </div>

          <div className={` col-8 offset-2 mt-5 ${Style.AcInfo} mr-5 `}>
            <span className={` ${Style.InfoItems} `}>
              <div>
                <img
                  src={require("../../assests/images/Landing/Poshtibani.png")}
                  alt=''
                />
              </div>
              <span className='text-center mt-2'>پشتیبانی24/7</span>
            </span>

            <span className={` ${Style.InfoItems} ml-4 `}>
              <div>
                <img
                  src={require("../../assests/images/Landing/Takhfif.png")}
                  alt=''
                />
              </div>
              <span className='text-center mt-2'>کدهای تخفیف</span>
            </span>

            <span className={` ${Style.InfoItems} ml-3 `}>
              <div>
                <img
                  src={require("../../assests/images/Landing/teachers.png")}
                  alt=''
                />
              </div>
              <span className='text-center mt-2'>مدرسین مجرب</span>
            </span>

            <span className={` ${Style.InfoItems} ml-4 `}>
              <div>
                <img
                  src={require("../../assests/images/Landing/freeCourses.png")}
                  alt=''
                />
              </div>
              <span className='text-center mt-2'>دوره های رایگان</span>
            </span>
          </div>
        </div>

        <div className={`  ${Style.imgFrame} col-6 `}>
          <img
            className='mt-5 ml-5 '
            src={require("../../assests/images/Landing/Search.png")}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
