import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div id={styles.searchBar}>
      <input className={styles.inputBox} type="text"></input>
      <button className={styles.searchButton}>search</button>
    </div>
  );
}
