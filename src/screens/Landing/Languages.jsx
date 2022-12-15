import React from "react";
import Style from "./Landing.module.css";

export default function Languages() {
  return (
    <div className={` container ${Style.LanguageContainer} mt-4 `}>
      <div className='row'>
        <a href='#'>
          <div className={` ${Style.LanguageItems} `}>
            <img
              src={require("../../assests/images/Landing/Language2.png")}
              alt=''
            />
          </div>
        </a>

        <a href='#'>
          {" "}
          <div className={` ${Style.LanguageItems} `}>
            <img
              src={require("../../assests/images/Landing/.net.png")}
              alt=''
            />
          </div>
        </a>

        <a href='#'>
          {" "}
          <div className={` ${Style.LanguageItems} `}>
            <img
              src={require("../../assests/images/Landing/Language1.png")}
              alt=''
            />
          </div>
        </a>

        <a href='#'>
          {" "}
          <div className={` ${Style.LanguageItems} `}>
            <img
              src={require("../../assests/images/Landing/Angular.png")}
              alt=''
            />
          </div>
        </a>

        <a href='#'>
          {" "}
          <div className={` ${Style.LanguageItems} `}>
            <img
              src={require("../../assests/images/Landing/Python.png")}
              alt=''
            />
          </div>
        </a>

        <a href='#'>
          {" "}
          <div className={` ${Style.LanguageItems} `}>
            <img
              src={require("../../assests/images/Landing/React.png")}
              alt=''
            />
          </div>
        </a>

        <a href='#'>
          {" "}
          <div className={` ${Style.LanguageItems} `}>
            <img
              src={require("../../assests/images/Landing/nodejs.png")}
              alt=''
            />
          </div>
        </a>

        <a href='#'>
          {" "}
          <div className={` ${Style.LanguageItems} `}>
            <img
              src={require("../../assests/images/Landing/Bootstrap.png")}
              alt=''
            />
          </div>
        </a>

        <a href='#'>
          {" "}
          <div className={` ${Style.LanguageItems} `}>
            <img src={require("../../assests/images/Landing/Vue.png")} alt='' />
          </div>
        </a>
      </div>
    </div>
  );
}
