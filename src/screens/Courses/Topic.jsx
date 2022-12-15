import React from "react";
import Style from "./Courses.module.css";

export default function Topic() {
  return (
    <div className={` col-12 ${Style.topic} `}>
      <div className='col-2 mt-3'>
        در حال برگذاری
        <input type='checkbox' className='ml-3 mt-1' />
      </div>
      <div className='col-2 mt-3 offset-1'>
        دوره های به اتمام رسیده
        <input type='checkbox' className='ml-3 mt-1' />
      </div>
      <div className='col-5  offset-2 mt-2'>
        <form class='form-inline my-2 my-lg-0 '>
          <button class='btn my-2 my-sm-0  text-right' type='submit'>
            <img
              src={require("../../assests/images/common/search.png")}
              alt=''
            />
          </button>
          <input
            class='form-control mr-sm-2'
            type='search'
            placeholder='جستوجو دوره های مختلف ...'
            aria-label='Search'
          />
        </form>
      </div>
    </div>
  );
}
