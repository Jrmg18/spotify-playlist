import Track from "../Track/Track";

function Tracklist({ tracks, onAdd, onRemove, isRemoval, playlist }) {
  return (
    <div>
      {tracks.map((track) => (
        <Track
          key={track.name}
          track={track}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
          isDisabled={playlist && playlist.some((t) => t.name === track.name)}
        />
      ))}
    </div>
  );
}
export default Tracklist;
