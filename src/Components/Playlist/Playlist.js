import Tracklist from "../Tracklist/Tracklist";

function Playlist({ playlist, playlistName, setPlaylistName, removeFromPlaylist, onSave }) {
  return (
    <div className="playlist">
      <label className="section-label" htmlFor="playlist">Playlist</label>
      <input
        type="text"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        className="playlist-name-input"
      />
      <Tracklist
        tracks={playlist}
        onRemove={removeFromPlaylist}
        isRemoval={true}
      />
      <button onClick={onSave} style={{ marginTop: "24px" }}>
        Save To Spotify
      </button>
    </div>
  );
}
export default Playlist;

