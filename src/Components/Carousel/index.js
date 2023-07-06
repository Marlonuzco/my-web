import React from "react";
import Carousel from "react-bootstrap/Carousel";

import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import javascript from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import bootstrap from "../../assets/images/bootstrap.png";
import redux from "../../assets/images/redux.png";
import nodeJs from "../../assets/images/node-js.png";
import expressJs from "../../assets/images/express.png";
import postgresql from "../../assets/images/postgresql.png";
import styles from "./styles.module.css";

const values = [
  {
    id: 0,
    title: "HTML",
    img: html,
    ImgAltTx: "Slide 1",
  },
  {
    id: 1,
    title: "CSS",
    img: css,
    ImgAltTx: "Slide 2",
  },
  {
    id: 2,
    title: "Javascript",
    img: javascript,
    ImgAltTx: "Slide 3",
  },
  {
    id: 3,
    title: "React.js and React-Native",
    img: react,
    ImgAltTx: "Slide 4",
  },
  {
    id: 4,
    title: "Bootstrap",
    img: bootstrap,
    ImgAltTx: "Slide 5",
  },
  {
    id: 5,
    title: "Redux",
    img: redux,
    ImgAltTx: "Slide7",
  },
  {
    id: 6,
    title: "Node.js",
    img: nodeJs,
    ImgAltTx: "Slide 8",
  },
  {
    id: 7,
    title: "Express.js",
    img: expressJs,
    ImgAltTx: "Slide 9",
  },
  {
    id: 8,
    title: "PostgreSQL",
    img: postgresql,
    ImgAltTx: "Slide 10",
  },
];

function CarouselComp() {
  return (
    <Carousel className={styles.Carousel} indicators={false}>
      {values.map((item) => (
        <Carousel.Item
          interval={2500}
          className={styles.CarouselItem}
          key={item.id}
        >
          <div className={styles.div}>
            <img className={styles.img} src={item.img} alt={item.ImgAltTx} />
            <h3 className={styles.title}>{item.title}</h3>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComp;
