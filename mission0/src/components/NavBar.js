import React from "react";
import styles from "./NavBar.module.css";
import mittens from "../assets/logos/mittens.png";

export default function NavBar() {
  return (
    <div id={styles.navBarContainer}>
      <div id={styles.companyInfo}>
        <img
          className={styles.companyLogo}
          src={mittens}
          alt="Company Image"
        ></img>
        <p className={styles.companyName}>My Company</p>
      </div>
      <ul id={styles.menuOptions}>
        <li className={styles.menuOption}>Menu 1</li>
        <li className={styles.menuOption}>Menu 2</li>
        <li className={styles.menuOption}>Menu 3</li>
        <li className={styles.menuOption}>Login</li>
      </ul>
    </div>
  );
}
