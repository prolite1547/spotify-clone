import React from "react";
import "../styles/Player.css";
import { useStateValue } from "../../provider/StateProvider";

import Body from "./Body";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Player({ spotify }) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
