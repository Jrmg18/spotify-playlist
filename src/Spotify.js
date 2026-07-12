const Spotify = {
  async search(term) {
    console.log(`Searching for: ${term}`);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return [
      {
        id: "1",
        name: `${term} Song 1`,
        artist: "Coldplay",
        album: "Parachutes",
        uri: "spotify:track:111111",
      },
      {
        id: "2",
        name: `${term} Song 2`,
        artist: "Imagine Dragons",
        album: "Evolve",
        uri: "spotify:track:222222",
      },
      {
        id: "3",
        name: `${term} Song 3`,
        artist: "Ed Sheeran",
        album: "Divide",
        uri: "spotify:track:333333",
      },
      {
        id: "4",
        name: `${term} Song 4`,
        artist: "Adele",
        album: "30",
        uri: "spotify:track:444444",
      },
      {
        id: "5",
        name: `${term} Song 5`,
        artist: "Taylor Swift",
        album: "Midnights",
        uri: "spotify:track:555555",
      },
    ];
  },

  async savePlaylist(name, trackUris) {
    console.log("Playlist Name:", name);
    console.log("Track URIs:", trackUris);

    await new Promise((resolve) => setTimeout(resolve, 500));

    return true;
  },
};

export default Spotify;