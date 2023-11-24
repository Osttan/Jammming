import Panel from "../Panel/Panel";
import Button from "../Button/Button";
import styles from "./Playlist.module.css";

function Playlist() {
  return (
    <Panel>
      <input
        type="text"
        id={styles.playlistName}
        placeholder="Edit playlist name"
      />
      <Button colorType="save" text="Save to Spotify" />
    </Panel>
  );
}

export default Playlist;
