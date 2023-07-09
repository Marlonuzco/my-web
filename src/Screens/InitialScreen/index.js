import React, { useEffect } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import Aos from "aos";

import BannerImg from "../../assets/images/img1.jpg";
import profileImage from "../../assets/images/ProfileImage.jpg";
import NavbarComp from "../../Components/Navbar";
import CarouselComp from "../../Components/Carousel/index";
import ProjectsCards from "../../Components/ProjectsCards";
import FooterComp from "../../Components/Footer/index";
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
      <section className={styles.SectionOne}>
        <div className={styles.BannerSection}>
          <img src={BannerImg} className={styles.BannerImg} alt="BannerImg" />
          <div className={styles.BannerSectionDiv}>
            <h1 className={styles.titleName}>Marlon Uzcátegui</h1>
            <div className={styles.TitleDiv}>
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Roboto, sans-serif",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "auto"
                }}
                cursorColor="gray"
                multiText={["Frontend", "Backend", "Software developer"]}
                multiTextDelay={2000}
                typeSpeed={30}
                multiTextLoop={true}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.AboutSection}>
        <div className={styles.AboutSectionDiv}>
          <img
            src={profileImage}
            className={styles.profileImage}
            alt="ProfileImage"
          />
        </div>
        <div className={styles.AboutSectionDiv}>
          <div className={styles.AboutSectionDiv1}>
            <h3 className={styles.aboutTitle}>About me</h3>
            <p className={styles.aboutText}>
              I am a self-taught software developer with 2 years of experience
              in frontend projects. I have experience in JavaScript, React.js
              (hooks, context), React-Native, and Redux, as well as the use of
              libraries like Axios, React-Bootstrap, Reactstrap, and Ant-Design,
              HTML, CSS. I am familiar with version control using Git with
              GitHub. I also have backend development skills; I have worked on
              backend projects using Node.js with Express.js, as well as
              handling databases with PostgreSQL.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.TechsSection}></section>
    </div>
  );
}

export default InitialScreen;
