import React from "react";
import "../styles/Body.css";
import Header from "./Header";

import { useStateValue } from "../../provider/StateProvider";

// ICONS
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly_pl }, dispatch] = useStateValue();
  return (
    <div className="body">
      <Header />
      <div className="body__info">
        {discover_weekly_pl.images && (
          <img src={discover_weekly_pl?.images[0]?.url} alt="" />
        )}
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly_pl?.name}</h2>
          <p>{discover_weekly_pl?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly_pl?.tracks?.items?.map((item) => (
          <SongRow key={item.track.id} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
