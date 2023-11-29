import "./SearchResults.module.css";
import Panel from "../Panel/Panel";
import Track from "../Track/Track";

function SearchResults() {
  return (
    <Panel>
      <h2>Results</h2>
      <Track panel="results" />
      <Track panel="results" />
      <Track panel="results" />
    </Panel>
  );
}

export default SearchResults;
