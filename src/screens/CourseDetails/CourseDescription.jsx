import React from "react";
import Style from "./CourseDetails.module.css";

export default function CourseDescription() {
  return (
    <div className={` card ${Style.DetailCard} `}>
      <img
        src={require("../../assests/images/CourseDetail/CourseDetail.png")}
        className='card-img-top'
        alt=''
      />
      <div className='card-body'>
        <h5 className='card-title font-weight-bolder mt-4'>
          آموزش جامع پایتون از صفر تا صد
        </h5>
        <p className='card-text font-weight-lighter text-muted mt-2 mr-3'>
          از زمانی که فریمورک‌های مختلفی برای جاوااسکریپت منتشر می‌شود بسیاری از
          توسعه‌دهندگان همواره به این فکر می‌کردند که برای توسعه لایه فرانت-اند
          می‌شود
        </p>
        <h5 className='card-title font-weight-bolder mt-5'>
          چرا باید از این دوره استفاده بکنم؟
        </h5>
        <p className='card-text font-weight-lighter text-muted mt-2 mr-3'>
          اگه راستش رو بخوای، خودم برای اینکه پروژه های بیشتری رو جذب بکنم حتما
          به کارفرما میگفتم به نسخه های اخری تسلط دارم این باعث میشد
        </p>
        <h5 className='card-title font-weight-bolder mt-5'>
          پیش نیاز های این دوره
        </h5>
        <p className='card-text font-weight-lighter text-muted mt-2 mr-3'>
          قبل از اینکه وارد این دوره بشین باید حتما با پی اچ پی اشنایی داشته
          باشین چون ما قرار تغییرات بوجود اومده رو یاد بگیریم
        </p>
      </div>
    </div>
  );
}
