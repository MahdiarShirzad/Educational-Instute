import React, { Component } from "react";
import Topic from "../../components/common/Topic/Topic";
import Style from "./Landing.module.css";
import ArticleRow from "./ArticleRow";

export default class Article extends Component {
  state = {
    title: "آخرین مقالات سایت",
    btn: "مشاهده همه مقالات",
  };
  render() {
    let info = this.state;
    return (
      <div className={` container mt-5 ${Style.ArticleContainer} `}>
        <div className='row'>
          <Topic title={info.title} btn={info.btn} />
          <div className='container mt-5'>
            <ArticleRow />
          </div>
        </div>
      </div>
    );
  }
}
