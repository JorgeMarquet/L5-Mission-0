import React from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div id={styles.navBarContainer}>
      <div id={styles.companyInfo}>
        <img alt="Company Image"></img>
        <p>My Company</p>
      </div>
      <ul id={styles.menuOptions}>
        <li className={styles.menuOption}>menu 1</li>
        <li className={styles.menuOption}>menu 2</li>
        <li className={styles.menuOption}>menu 3</li>
        <li className={styles.menuOption}>Login</li>
      </ul>
    </div>
  );
}
