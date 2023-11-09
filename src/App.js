import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "./components/Button/Button";

function App() {
  return (
    <div id="main">
      <SearchBar />
      <Button colorType="save" text="Save to Spotify" />
    </div>
  );
}

export default App;
