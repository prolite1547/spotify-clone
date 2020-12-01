import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/partials/Login";
import Player from "./components/partials/Player";
import { getTokenFromUrl } from "./config/spotify-config";

// STATE VALUE
import { useStateValue } from "./provider/StateProvider";

//  SPOTIFY API INSTANCE
import SpotifyWebApi from "spotify-web-api-js";
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, discover_weekly_pl }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXbMDoHDwVN2tF").then((res) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly_pl: res,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
