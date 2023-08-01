import styles from "./BottomContainer.module.css";
import InformationCards from "./InformationCards";

export default function BottomContainer() {
  return (
    <div id={styles.bottomContainer}>
      <div>
        BottomContainer
        <InformationCards />
      </div>
    </div>
  );
}
