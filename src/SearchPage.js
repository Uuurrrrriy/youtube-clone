import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import { ChannelRow } from "./ChannelRow";
import { VideoRow } from "./VideoRow";

export const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2> FILTER </h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj"
        channel=" Clever Programmer "
        verified
        subs="885K"
        nuOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="875K"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS 🚀."
        timestamp=" 59 seconds ago "
        channel=" Clever Programmer "
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ"
      />
      <VideoRow
        views="700K"
        subs="875K"
        description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... https://cleverprogrammer.com If you want to..."
        timestamp=" 4 days ago "
        channel=" Clever Programmer "
        title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
        image="https://i.ytimg.com/vi/4F2m91eKmts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBhmjZZwsIJmDq23-rDBqfGMoiqIQ"
      />
    </div>
  );
};
