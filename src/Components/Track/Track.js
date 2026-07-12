function Track({ track, onAdd, onRemove, isRemoval, isDisabled }) {
  return (
    <div className="track-row">
      {track.name}
      {isRemoval ? (
        <button onClick={() => onRemove(track)}>Remove</button>
      ) : (
        <button onClick={() => onAdd(track)} disabled={isDisabled}>Add</button>
      )}
    </div>
  );
}
export default Track;
