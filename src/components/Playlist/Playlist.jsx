import Panel from "../Panel/Panel";
import Tracklist from "../Tracklist/Tracklist";
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
      {/* <Tracklist /> */}
      <Button colorType="save" text="Save to Spotify" />
    </Panel>
  );
}

export default Playlist;
