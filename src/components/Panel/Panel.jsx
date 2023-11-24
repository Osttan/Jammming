import styles from "./Panel.module.css";

function Panel({ children }) {
  return <div id={styles.panel}>{children}</div>;
}

export default Panel;
