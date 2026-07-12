# 🎵 Spotify Playlist (Jammming)

A React application built as part of the Codecademy Front-End Engineer career path. Users can search for songs, create a custom playlist, and simulate saving it to Spotify.

## Features

- 🔍 Search for tracks
- ➕ Add tracks to a playlist
- ➖ Remove tracks from a playlist
- ✏️ Rename the playlist
- 💾 Simulate saving a playlist

## Tech Stack

- React
- JavaScript (ES6)
- CSS
- Create React App

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Jrmg18/spotify-playlist.git
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

Open your browser at:

```
http://localhost:3000
```

## Spotify API Notice

This project was originally designed to connect to the Spotify Web API.

During development, Spotify's authentication requirements changed. The original Codecademy project uses the deprecated Implicit Grant Flow, and current Spotify developer accounts have additional requirements for live API access.

To keep the application fully functional for demonstration purposes, this version uses a **mock Spotify service** that returns sample search results and simulates playlist saving.

The application architecture is ready to be connected to the live Spotify API in the future.

## Future Improvements

- Implement Spotify Authorization Code with PKCE
- Connect to the live Spotify Web API
- Save playlists directly to Spotify
- Improve responsive design

## Author

**JR Giralt**

GitHub: https://github.com/Jrmg18
