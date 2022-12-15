import React, { Component } from "react";
import CoursesCard from "./CoursesCard";

export default class FavCoursesRow extends Component {
  state = {
    title: "آموزش جامع زبان پایتون از صفر تا صد",
    teacherName: "حسامی",
    price: "500,000 تومان",
    time: "7:28:00",
  };

  render() {
    let info = this.state;

    const cardsId = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

    const cards = cardsId.map((id, index) => (
      <CoursesCard
        id={id}
        key={index}
        title={info.title}
        teacherName={info.teacherName}
        price={info.price}
        time={info.time}
      />
    ));
    return <div className='row'>{cards}</div>;
  }
}
