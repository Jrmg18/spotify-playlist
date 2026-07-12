import { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchResults from "./Components/SearchResults/SearchResults";
import Playlist from "./Components/Playlist/Playlist";
import Spotify from "./Spotify";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [searchResults, setSearchResults] = useState([]);

  const handleSave = async () => {
    const trackUris = playlist.map((track) => track.uri);

    await Spotify.savePlaylist(playlistName, trackUris);

    alert("Playlist saved!");

    setPlaylist([]);
    setPlaylistName("My Playlist");
  };

  const addToPlaylist = (track) => {
    if (!playlist.some((t) => t.id === track.id)) {
      setPlaylist([...playlist, track]);
    }
  };

  const removeFromPlaylist = (track) => {
    setPlaylist(playlist.filter((t) => t.id !== track.id));
  };

  const search = async (term) => {
    console.log("Searching for:", term); // Add this line
    const results = await Spotify.search(term);
    setSearchResults(results);
  };

  return (
    <div className="Container">
      <h1>Spotify Playlist Jammming</h1>
      <SearchBar onSearch={search} />
      <SearchResults
        results={searchResults}
        addToPlaylist={addToPlaylist}
        playlist={playlist}
      />
      <Playlist
        playlist={playlist}
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
        removeFromPlaylist={removeFromPlaylist}
        onSave={handleSave}
      />
    </div>
  );
}

export default App;
