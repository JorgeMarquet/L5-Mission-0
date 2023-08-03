import styles from "./BottomContainer.module.css";
import InformationCards from "./InformationCards";
import catImage from "../assets/logos/mittens.png";

export default function BottomContainer() {
  return (
    <div id={styles.bottomContainer}>
      <div>
        <InformationCards />
      </div>
    </div>
  );
}
