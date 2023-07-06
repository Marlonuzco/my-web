import React, { useEffect } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import Aos from "aos";

import profileImage from "../../assets/images/ProfileImage.jpg";
import NavbarComp from "../../Components/Navbar";
import CarouselComp from "../../Components/Carousel/index";
import styles from "./styles.module.css";
import "transition-style";
import "aos/dist/aos.css";

function InitialScreen() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.App}>
      <NavbarComp />
      <section
        className={styles.section}
        transition-style="in:circle:top-right"
      >
        <div className={styles.sectionContainers}>
          <h2 className={styles.nameTitle}>Marlon Uzcátegui</h2>
          <div className={styles.TitleDiv}>
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Roboto, sans-serif",
                textAlign: "center",
                fontSize: "auto",
              }}
              cursorColor="gray"
              multiText={["Frontend", "Backend", "Software developer"]}
              multiTextDelay={2000}
              typeSpeed={30}
              multiTextLoop={true}
            />
          </div>
        </div>
        <div className={styles.sectionContainers}>
          <h1 className={styles.titleTech}>Technologies</h1>
          <CarouselComp />
        </div>
      </section>
      <section className={styles.aboutSection} data-aos="zoom-in">
        <div className={styles.aboutTxDiv}>
          <h2 className={styles.aboutTitle}>About me</h2>
          <p className={styles.aboutTx}>
            I am a self-taught software developer with 2 years of experience in
            frontend projects. I have experience in JavaScript, React.js (hooks,
            context), React-Native, and Redux, as well as the use of libraries
            like Axios, React-Bootstrap, Reactstrap, and Ant-Design, HTML, CSS.
            I am familiar with version control using Git with GitHub. I also
            have backend development skills; I have worked on backend projects
            using Node.js with Express.js, as well as handling databases with
            PostgreSQL.
          </p>
        </div>
        <div className={styles.aboutTxDiv}>
          <img src={profileImage} alt="imgProfile" className={styles.img} />
        </div>
      </section>
    </div>
  );
}

export default InitialScreen;
