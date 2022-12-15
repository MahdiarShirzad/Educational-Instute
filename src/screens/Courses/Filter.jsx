import React, { Component } from "react";
import Style from "./Courses.module.css";
import "../../../node_modules/bootstrap/js/src/dropdown";

export default class Filter extends Component {
  render() {
    return (
      <div className={` ${Style.Filter} `}>
        <div className='dropdown'>
          <button
            class='btn w-100 dropdown-toggle font-weight-bold'
            type='button'
            data-toggle='dropdown'
            aria-expanded='false'
          >
            مرتب سازی
          </button>
          <div className='dropdown-menu'>
            <a className='dropdown-item text-center' href='#'>
              مرتب سازی بر اساس قیمت
            </a>
            <a className='dropdown-item text-center' href='#'>
              مرتب سازی بر اساس تاریخ انتشار
            </a>
            <a className='dropdown-item text-center' href='#'>
              مرتب سازی بر اساس سطح
            </a>
          </div>
        </div>

        <div className={` ${Style.type} `}>
          <p className='mr-3 border-bottom ml-3 pb-2 font-weight-bold'>
            نوع دوره
          </p>
          <div className='position-relative'>
            <input className='mr-3 mt-1' type='checkbox' />
            <span className='mr-3 text-muted'>رایگان</span>
            <span className={` text-muted ${Style.number} `}>27</span>
          </div>
          <div className='position-relative'>
            <input className='mr-3 mt-1' type='checkbox' />
            <span className='mr-3 text-muted'>نقدی</span>
            <span className={` text-muted ${Style.number} `}>18</span>
          </div>
          <div className='position-relative'>
            <input className='mr-3 mt-1' type='checkbox' />
            <span className='mr-3 text-muted'>تخفیف ویژه</span>
            <span className={` text-muted ${Style.number} `}>13</span>
          </div>
        </div>
      </div>
    );
  }
}
