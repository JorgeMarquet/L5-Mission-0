import styles from "./BottomContainer.module.css";
import InformationCards from "./InformationCards";
import catImage from "../assets/logos/mittens.png";

export default function BottomContainer() {
  return (
    <div id={styles.bottomContainer}>
      <div id={styles.informationCards}>
        {/* <InformationCards /> */}

        {/* Hardcoded cards */}
        <div className={styles.informationCard}>
          <img
            src={catImage}
            className={styles.informationCardImage}
            alt="card image"
          ></img>
          <div className={styles.informationCardDetails}>
            <h2>Name</h2>
            <h4>Description</h4>
          </div>
        </div>

        <div className={styles.informationCard}>
          <img
            src={catImage}
            className={styles.informationCardImage}
            alt="card image"
          ></img>
          <div className={styles.informationCardDetails}>
            <h2>Name</h2>
            <h4>Description</h4>
          </div>
        </div>

        <div className={styles.informationCard}>
          <img
            src={catImage}
            className={styles.informationCardImage}
            alt="card image"
          ></img>
          <div className={styles.informationCardDetails}>
            <h2>Name</h2>
            <h4>Description</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
