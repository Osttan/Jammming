import "./App.css";
import Title from "./components/Title/Title";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";

function App() {
  return (
    <div id="main">
      <div id="container">
        <Title />
        <SearchBar />
        <section id="panels">
          <SearchResults />
          <Playlist />
        </section>
      </div>
    </div>
  );
}

export default App;
