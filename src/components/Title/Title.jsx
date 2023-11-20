import styles from "./Title.module.css";

function Title() {
  return (
    <header className={styles.title}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
      >
        <path
          d="M31.5833 51.1667C44.0558 51.1667 54.1667 41.0558 54.1667 28.5833C54.1667 16.1109 44.0558 6 31.5833 6C19.1109 6 9 16.1109 9 28.5833C9 41.0558 19.1109 51.1667 31.5833 51.1667Z"
          fill="black"
          stroke="#F5F5F5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M31.5833 35.3583C35.3251 35.3583 38.3583 32.3251 38.3583 28.5833C38.3583 24.8416 35.3251 21.8083 31.5833 21.8083C27.8416 21.8083 24.8083 24.8416 24.8083 28.5833C24.8083 32.3251 27.8416 35.3583 31.5833 35.3583Z"
          fill="#90D08F"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h1>Jammming!</h1>
    </header>
  );
}

export default Title;
