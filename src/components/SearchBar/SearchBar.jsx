import styles from "./SearchBar.module.css";
import Button from "../Button/Button";

function SearchBar() {
  return (
    <div className={styles.searchInput}>
      <input type="text"></input>
      <Button colorType="search" text="Search" />
    </div>
  );
}

export default SearchBar;
