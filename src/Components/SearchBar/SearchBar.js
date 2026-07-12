import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <label className="search-bar-label" htmlFor="search-input">
        Search Bar
      </label>
      <form className="search-bar-form" onSubmit={handleSubmit}>
        <input
          id="search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a song..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
