import React from "react";
import "../styles/Header.css";
import { useStateValue } from "../../provider/StateProvider";

// MATERIAL UI
import { Avatar } from "@material-ui/core";
// ICONS
import SearchIcon from "@material-ui/icons/Search";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search Album, Artists or Songs..." />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="USER PROF PIC" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
