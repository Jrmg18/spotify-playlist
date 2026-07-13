import { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchResults from "./Components/SearchResults/SearchResults";
import Playlist from "./Components/Playlist/Playlist";
import Spotify from "./Spotify";

function App() {
  //state variables for playlist, playlist name, and search results
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [searchResults, setSearchResults] = useState([]);

  //Derived data
  const filteredResults = searchResults.filter(
  (track) => !playlist.some(
    (playlistTrack) => playlistTrack.id === track.id
  )
);

  //Function to handle saving the playlist
  const handleSave = async () => {
    const trackUris = playlist.map((track) => track.uri);

    await Spotify.savePlaylist(playlistName, trackUris);

    alert("Playlist saved!");

    setPlaylist([]);
    setPlaylistName("My Playlist");
  };

  //Functions to add and remove tracks from the playlist
  const addToPlaylist = (track) => {
    if (!playlist.some((t) => t.id === track.id)) {
      setPlaylist([...playlist, track]);
    }
  };

  const removeFromPlaylist = (track) => {
    setPlaylist(playlist.filter((t) => t.id !== track.id));
  };

  //Function to search Spotify and update the search results
  const search = async (term) => {
    console.log("Searching for:", term); // Add this line
    const results = await Spotify.search(term);
    setSearchResults(results);
  };


  //Render the user interface with SearchBar, SearchResults, and Playlist components
  return (
    <div className="Container">
      <h1>Spotify Playlist Jammming</h1>
      <SearchBar onSearch={search} />
      <SearchResults
        results={searchResults}
        addToPlaylist={addToPlaylist}
        playlist={playlist}
        results={filteredResults}
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
