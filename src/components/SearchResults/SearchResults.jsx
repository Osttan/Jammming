import "./SearchResults.module.css";
import { useState } from "react";
import Panel from "../Panel/Panel";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults() {
  const [resultsArr, setResultsArr] = useState([
    {
      name: "Ebony and Ivory",
      artist: "Paul McCartney",
      album: "Tug of War",
      id: 1,
    },
    {
      name: "Sheep",
      artist: "Pink Floyd",
      album: "Animals",
      id: 2,
    },
    {
      name: "Pictures of You",
      artist: "The Cure",
      album: "Disintegration",
      id: 3,
    },
  ]);

  return (
    <Panel>
      <h2>Results</h2>
      <Tracklist trackArr={resultsArr} type="result" />
    </Panel>
  );
}

export default SearchResults;
