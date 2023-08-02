import styles from "./TopContainer.module.css";
import SearchBar from "./SearchBar";
import backgroundImage from "../assets/logos/background_images/gray_background.png";

export default function topContainer() {
  return (
    <div id={styles.topContainer}>
      <div>
        <img
          className={styles.backgroundImage}
          alt="background"
          src={backgroundImage}
        ></img>
        <SearchBar />
      </div>
    </div>
  );
}
