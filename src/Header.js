import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <NavLink to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/1024px-Logo_of_YouTube_%282013-2015%29.svg.png"
            alt="youtube logo"
          />
        </NavLink>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <NavLink to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </NavLink>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt=" Margo "
          src="https://harpersbazaar.com.ua/i/publications/16/656_410/margo-robbi-30-istoriya-gollivudskoy-zolushki-1838-8772.jpg"
        />
      </div>
    </div>
  );
};
