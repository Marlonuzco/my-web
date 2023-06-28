import NavbarComp from "../../Components/Navbar";

import styles from "./styles.module.css";

function InitialScreen() {
  return (
    <>
      <NavbarComp />
      <div className={styles.App}>
        <h1 className={styles.title}>Mi web</h1>
        <h2 className={styles.title2}>Esta es mi web</h2>
      </div>
    </>
  );
}

export default InitialScreen;
