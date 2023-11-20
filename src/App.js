import "./App.css";
import Title from "./components/Title/Title";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";
import Button from "./components/Button/Button";

function App() {
  return (
    <div id="main">
      <div id="container">
        <Title />
        <SearchBar />
        <section id="panels">
          <Results />
          <Button colorType="save" text="Save to Spotify" />
        </section>
      </div>
    </div>
  );
}

export default App;
