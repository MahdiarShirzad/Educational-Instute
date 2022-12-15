import React, { Component } from "react";
import ArticleCard from "./ArticleCard";

export default class ArticleRow extends Component {
  state = {
    title: "مقاله شماره 17",
    articleInfo: "میشه یه شبه برنامه نویش شد؟",
    teacher: "حسامی",
    btn: "مطالعه",
  };
  render() {
    let info = this.state;

    const articleId = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ];

    const cards = articleId.map((id, index) => (
      <ArticleCard
        id={id}
        key={index}
        title={info.title}
        articleInfo={info.articleInfo}
        teacher={info.teacher}
        btn={info.btn}
      />
    ));

    return <div className='row'>{cards}</div>;
  }
}
