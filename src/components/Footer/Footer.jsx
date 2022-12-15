import React from "react";
import Style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={` container-fluid ${Style.Footer} `}>
      <div className='row'>
        <div className='container'>
          <div className='row'>
            <div className={` col-4 text-right mt-5 `}>
              <div className={`  ${Style.Footertitle} `}>نماد های اینترنتی</div>
              <div className={` ${Style.Footermark} `}>
                <div className={` ${Style.frame} `}>
                  <img
                    src={require("../../assests/images/Footer/01.png")}
                    alt=''
                  />
                </div>

                <div className={` ${Style.frame} `}>
                  <img
                    src={require("../../assests/images/Footer/02.png")}
                    alt=''
                  />
                </div>

                <div className={` ${Style.frame} `}>
                  <img
                    src={require("../../assests/images/Footer/03.png")}
                    alt=''
                  />
                </div>
              </div>
            </div>

            <div className='col-2 offset-1 text-right mt-5'>
              <div className={`  ${Style.Footertitle} `}>ارتباط با ما</div>
              <p className='mt-5 text-white font-weight-lighter'>تماس با ما</p>
              <p className='mt-1 text-white font-weight-lighter'> درباره ما</p>
            </div>

            <div className='col-2 offset-1 text-right mt-5'>
              <div className={`  ${Style.Footertitle} `}>متداول</div>
              <p className='mt-5 text-white font-weight-lighter'>پرسش و پاسخ</p>
              <p className=' text-white font-weight-lighter'>درخواست مشاوره</p>
              <p className='text-white font-weight-lighter'>ورود</p>
            </div>

            <div className='col-2  text-right mt-5'>
              <div className={`  ${Style.Footertitle} `}>دسترسی</div>
              <p className='mt-5 text-white font-weight-lighter'>دوره ها</p>
              <p className=' text-white font-weight-lighter'>معرفی مدرسین</p>
              <p className='text-white font-weight-lighter'>بلاگ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
