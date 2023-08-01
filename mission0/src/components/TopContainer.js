import styles from "./TopContainer.module.css";
import SearchBar from "./SearchBar";

export default function topContainer() {
  return (
    <div id={styles.topContainer}>
      <div>
        Top Container
        <SearchBar />
      </div>
    </div>
  );
}
