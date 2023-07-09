import React from "react";

import styles from "./styles.module.css";

const dataProjects = [
    {
        id: 0,
        title: "QR Pay mobile app",
        text: "App de pagos por QRs.",
        img: "",
    },
    {
        id: 1,
        title: "QR Pay dekstop app",
        text: "App desktop de pagos por QRs.",
        img: "",
    },
    {
        id: 2,
        title: "Food app mobile app",
        text: "App de venta de comida rápida.",
        img: "",
    },
]

function ProjectsCards() {
  return (
    <>
    {
        dataProjects.map(item=>(
            <div className={styles.card}>
               <div className={styles.cardDiv2}>

               </div>
                <div className={styles.cardDiv}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
                </div>
            </div>
        ))
    } 
    </>
  );
}

export default ProjectsCards;
