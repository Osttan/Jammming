import Track from "../Track/Track";

function Tracklist({ trackArr, type }) {
  return trackArr.map((singleTrack) => (
    <Track
      panel={type}
      artist={singleTrack.artist}
      album={singleTrack.album}
      song={singleTrack.name}
      key={singleTrack.id}
    />
  ));
}

export default Tracklist;
