import styles from "./Button.module.css";

function Button({ colorType, text }) {
  return <button className={styles[colorType]}>{text}</button>;
}

export default Button;
