import React from "react";
import Style from "./Header.module.css";
import "../../../node_modules/bootstrap/js/dist/collapse";

export default function Header() {
  return (
    <div className={` container ${Style.HeaderContainer} `}>
      <div className='row'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light col-12'>
          <span className='logo mr-5'>
            <img
              className='mx-auto'
              src={require("../../assests/images/Header/Logo.png")}
              alt=''
            />
          </span>

          <div
            className={` collapse navbar-collapse col-12 ${Style.navabrCollapse} `}
            id='navbarNav'
          >
            <ul class='navbar-nav col-8'>
              <span className='text-center '>
                <a href='#'>خانه</a>
              </span>

              <span className='text-center col-2'>
                <a href='#'>دوره ها</a>
              </span>

              <span className='text-center col-2'>
                <a href='#'>معرفی مدرسین</a>
              </span>

              <span className='text-center col-2'>
                <a href='#'>بلاگ</a>
              </span>

              <span className='text-center col-2'>
                <a href='#'>پرسش و پاسخ</a>
              </span>

              <span className='text-center col-3'>
                <a href='#'>درخواست مشاوره</a>
              </span>

              <span className='text-center col-2'>
                <a href='#'>تماس با ما</a>
              </span>
              <span className={` ${Style.panel} col-1`}>
                <a href='#'>
                  <img
                    src={require("../../assests/images/Header/user.png")}
                    alt=''
                  />
                </a>
              </span>

              <span className={` ${Style.cart} col-1 mr-3 `}>
                <a href='#'>
                  <img
                    src={require("../../assests/images/Header/shopping-bag.png")}
                    alt=''
                  />
                </a>
              </span>
            </ul>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
        </nav>
      </div>
    </div>
  );
}
