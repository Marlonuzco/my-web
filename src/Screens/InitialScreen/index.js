import TypeWriterEffect from "react-typewriter-effect";
import NavbarComp from "../../Components/Navbar";
import CarouselComp from "../../Components/Carousel/index";

import styles from "./styles.module.css";

function InitialScreen() {
  return (
    <div className={styles.App}>
      <NavbarComp />
      <section className={styles.section}>
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
    </div>
  );
}

export default InitialScreen;
