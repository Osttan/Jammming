import styles from "./Results.module.css";
import Panel from "../Panel/Panel";
import SingleResult from "../SingleResult/SingleResult";

const result = `        <div className="result">
            <div className="result-text">
              <h3 className="artist">Artist</h3>
              <p>Song</p>
            </div>
          </div>`;

function Results() {
  return <Panel results={result} />;
}

export default Results;
