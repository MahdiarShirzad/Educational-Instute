import React from "react";
import Style from "./Landing.module.css";

export default function ArticleCard(props) {
  return (
    <div className={` card ${Style.ArticleCard} mt-4 `}>
      <img
        src={require("../../assests/images/Articles/Article1.png")}
        className={` card-img-top ${Style.ImgBg} `}
        alt=''
      />
      <div className={` card-body ${Style.CardBody} `}>
        <h5 className={` ${Style.ArticleTitle} text-right mt-2 `}>
          {props.title}
        </h5>
        <p className={` text-right font-weight-lighter ${Style.ArticleInfo} `}>
          {props.articleInfo}
        </p>
        <p
          className={` card-text text-right font-weight-lighter mt-3 ${Style.CardText} `}
        >
          <img
            className='ml-1'
            src={require("../../assests/images/common/user.png")}
            alt=''
          />
          {props.teacher}
        </p>
        <hr />
        <div className='col-4 mt-2'>
          <img src={require("../../assests/images/common/heart.png")} alt='' />
          <a href='#'>
            <img
              className='ml-3'
              src={require("../../assests/images/common/chat.png")}
              alt=''
            />
          </a>
        </div>
        <div className='col-4 offset-4'>
          <a href='#'>
            <button type='button' class={` btn ${Style.ArticleBtn} `}>
              {props.btn}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
