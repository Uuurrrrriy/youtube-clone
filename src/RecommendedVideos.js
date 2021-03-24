import React from "react";
import "./RecommendedVideos.css";
import { VideoCard } from "./VideoCard";

export const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="134K views"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj"
          channel="Clever Programer"
          image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBiSCrWOo4xSWC7PtRiqD5WKcGVpg"
        />
        <VideoCard
          title="5 Uses for cloud functions"
          views="850K Views"
          timestamp="1 day ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gg-7xgPV76_c0nFmsYJLGUTUkJCrPWcnyULag=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Firebase"
          image="https://i.ytimg.com/vi/77XmRDtOL7c/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDIiXYbD6TYhgtfWFv2qvFQ8WgQLA"
        />
        <VideoCard
          title="The Truth about OnePlus Nord!"
          views="5M Views"
          timestamp="6 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Ghl8U3OeJOtu1LRmTNuW7Aiq-iKaU5U6gYWoA=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Marques Brownlee"
          image="https://i.ytimg.com/vi/Xzh8BdaaAvs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBFVU97RnCsjtboTaR3TQzvoosgWg"
        />
        <VideoCard
          title="Elon Musk says Teslas are too expensive!"
          views="1.2M Views"
          timestamp="3 days ago"
          channelImage="https://i.ytimg.com/vi/ZMsDib3wfuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9Wei5mn2iCrSIFFQCRfarGe6gBA"
          channel="Clever Programer"
          image="https://i.ytimg.com/vi/ZMsDib3wfuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9Wei5mn2iCrSIFFQCRfarGe6gBA"
        />
      </div>
    </div>
  );
};
