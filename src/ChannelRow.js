import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import "./ChannelRow.css";

export const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  nuOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers * {nuOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};
