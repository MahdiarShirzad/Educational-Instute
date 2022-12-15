import React from "react";
import Style from "./CourseDetails.module.css";

export default function CourseInfo() {
  return (
    <>
      <div className={` card ${Style.InfoCard} `}>
        <div className='card-body'>
          <h6 className='card-title border-bottom pb-3'>
            قیمت این دوره : <span className='text-success'>500,000 تومان</span>
          </h6>

          <p className='card-text mt-4'>
            <span className='text-muted'>مدرس دوره : </span> حسامی
            <img
              className='ml-2'
              src={require("../../assests/images/common/play.png")}
              alt=''
            />
          </p>
          <p className='card-text  mt-2'>
            <span className='text-muted'>تعداد ویدیو ها : </span> 6 ویدیو
            <img
              className='ml-2'
              src={require("../../assests/images/common/user.png")}
              alt=''
            />
          </p>
          <p className='card-text  mt-2'>
            <span className='text-muted'>مدت زمان دوره :</span>
            <span className='text-primary mr-2'>7:28:00</span>
            <img
              className='ml-2'
              src={require("../../assests/images/common/user.png")}
              alt=''
            />
          </p>
          <p className='card-text'>
            <span className='text-muted mt-2'>سطح دوره : </span> متوسط
            <img
              className='ml-2'
              src={require("../../assests/images/common/book.png")}
              alt=''
            />
          </p>
          <p className='card-text'>
            <span className='text-muted mt-2'>زبان دوره : </span> فارسی
            <img
              className='ml-2'
              src={require("../../assests/images/common/language.png")}
              alt=''
            />
          </p>
          <a href='#'>
            <button type='button' class='btn btn-success col-12 mt-4'>
              ثبت نام در این دوره
            </button>
          </a>
        </div>
      </div>

      <a href='#'>
        <button type='button' class={` ${Style.questionBtn} btn  col-12  `}>
          سوالات خود را میتوانید در اینجا مطرح کنید
        </button>
      </a>

      <div className={` ${Style.share} col-12 mt-5 `}>
        <a href='#'>
          <button className='btn'>
            <img
              src={require("../../assests/images/common/facebook-app-symbol.png")}
              alt=''
            />
          </button>
        </a>
        <a href='#'>
          <button className='btn'>
            <img
              src={require("../../assests/images/common/telegram.png")}
              alt=''
            />
          </button>
        </a>
        <a href='#'>
          <button className='btn'>
            <img
              src={require("../../assests/images/common/twitter.png")}
              alt=''
            />
          </button>
        </a>
        <p className='text-muted font-weight-lighter text-right col-12 pt-2 ml-3'>
          به اشتراک گذاری
        </p>
      </div>
    </>
  );
}
