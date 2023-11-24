import "./SearchResults.module.css";
import Panel from "../Panel/Panel";
import SingleResult from "../SingleResult/SingleResult";

function SearchResults() {
  return (
    <Panel>
      <h2>Results</h2>
      <SingleResult />
      <SingleResult />
      <SingleResult />
    </Panel>
  );
}

export default SearchResults;
