import React from "react";
import Style from "./Topic.module.css";

export default function Topic(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className={` col-3`}>
          <a href='#'>
            <button type='button' class={` btn mt-5 ${Style.CustomBtn} `}>
              {props.btn}
            </button>
          </a>
        </div>
        <div className={` col-3 offset-6 mt-5 text-right ${Style.title}  `}>
          {props.title}
        </div>
      </div>
    </div>
  );
}
