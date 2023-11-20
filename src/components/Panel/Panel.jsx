import styles from "./Panel.module.css";

function Panel(results) {
  console.log(results);
  return <div id={styles.panel}></div>;
}

export default Panel;
