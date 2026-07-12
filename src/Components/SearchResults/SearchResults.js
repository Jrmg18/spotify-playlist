import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ results, addToPlaylist, playlist }) {
  return (
    <div className="search-results">
      <label className="section-label" htmlFor="search-results">Search Results</label>
      <Tracklist
        tracks={results}
        onAdd={addToPlaylist}
        isRemoval={false}
        playlist={playlist}
      />
    </div>
  );
}
export default SearchResults;
