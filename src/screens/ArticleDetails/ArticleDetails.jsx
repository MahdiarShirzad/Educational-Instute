import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Style from "./ArticleDetailes.module.css";

export default function ArticleDetails() {
  return (
    <>
      <div className={` container ${Style.ArticleDetails} `}>
        <Header />
        <div className='row mt-5'>
          <div className={` col-12 ${Style.frame} `}>
            <img
              src={require("../../assests/images/Articles/ArticleDetail.png")}
              alt=''
            />
          </div>
          <p
            className={` col-10 offset-1 text-center font-weight-bolder mt-5 ${Style.title} `}
          >
            ام آی تی و اریکسون برای تحقیق در مورد نسل بعدی شبکه های تلفن همراه ،
            توافقنامه همکاری منعقد می کنند
          </p>
          <div className={` ${Style.About} col-12 text-right mt-3 `}>
            <div className='col-2 text-muted '>نوشته شده توسط سینا رضایی</div>
            <div className='col-2 offset-8  text-muted '>
              نوشته شده در تاریخ 1400/05/06
            </div>
          </div>

          <p
            className={` col-12 text-right font-weight-bolder mt-5 ${Style.title} `}
          >
            دو پروژه تحقیقاتی در زمینه طراحی سخت افزار پیشرفته می تواند روزی
            شبکه های تلفن همراه نسل فایو جی و سیکس جی را تقویت کند
          </p>
          <p
            className={` col-12 text-right font-weight-bolder mt-5 text-muted ${Style.text} `}
          >
            مقاله زیر از انتشار مشترک آزمایشگاه تحقیقات مواد ام آی تی و تحقیقات
            اریکسون اقتباس شده است.با ورود به عصر جدیدی برای وسایل الکترونیکی
            مجهز به شبکه های فایو جی و در نهایت سیکس جی ، آزمایشگاه تحقیقات مواد
            ام آی تی و اریکسون در دو پروژه تحقیقاتی همکاری می کنند که به دنبال
            کمک به ایجاد زیرساخت شبکه جدید مورد نیاز برای تقویت موارد استفاده
            واقعاً انقلابی نسل بعدی است. شبکه های تلفن همراه را به ارمغان می
            آورد نسل های جدید شبکه تلفن همراه سرعت فوق العاده سریع ، تأخیر کم و
            قابلیت اطمینان فوق العاده را برای کاربر نهایی به ارمغان می آورند.
            شبکه های بزرگ و غنی از ویژگیها ساختار های پیچیده ای برای مدیریت
            اپراتورهای شبکه هستند. اریکسون در حال تحقیق بر روی شبکه های شناختی
            است که با تکیه بر هوش مصنوعی می توانند یک .شبکه امن ، بسیار خودکار و
            داده محور را فعال کنند
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
