import NavbarComp from "../../Components/Navbar";

import styles from "./styles.module.css";

function InitialScreen() {
  return (
    <>
      <NavbarComp />
      <div className={styles.App}>
        <h1 className={styles.title}>Software developer</h1>
        <h2 className={styles.title2}>This my website</h2>
      </div>
    </>
  );
}

export default InitialScreen;
