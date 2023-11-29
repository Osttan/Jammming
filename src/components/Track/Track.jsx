import styles from "./Track.module.css";

const playlistSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
  >
    <path
      d="M20.5 37.5833C29.9349 37.5833 37.5834 29.9349 37.5834 20.5C37.5834 11.0651 29.9349 3.41666 20.5 3.41666C11.0652 3.41666 3.41669 11.0651 3.41669 20.5C3.41669 29.9349 11.0652 37.5833 20.5 37.5833Z"
      stroke="#0A6930"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.625 15.375L15.375 25.625"
      stroke="#0A6930"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.375 15.375L25.625 25.625"
      stroke="#0A6930"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const resultsSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
  >
    <path
      d="M20.5 37.5833C29.9349 37.5833 37.5833 29.9349 37.5833 20.5C37.5833 11.0651 29.9349 3.41666 20.5 3.41666C11.0651 3.41666 3.41666 11.0651 3.41666 20.5C3.41666 29.9349 11.0651 37.5833 20.5 37.5833Z"
      stroke="#0A6930"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.0833 13.6667L27.3333 20.5L17.0833 27.3333V13.6667Z"
      stroke="#0A6930"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

function Track({ panel }) {
  return (
    <div className={styles.result}>
      <div className="result-text">
        <h3 className="artist">Artist</h3>
        <p>Song</p>
        <p>From the Album XXX</p>
      </div>
      {panel ? resultsSvg : playlistSvg}
    </div>
  );
}

export default Track;
