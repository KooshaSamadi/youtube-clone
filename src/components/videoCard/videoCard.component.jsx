import React from "react";
import { CardMedia, Card, CardContent } from "@mui/material";
import "./videoCard.style.scss";
import { Link } from "react-router-dom";

const VideoCard = ({ videoDetail }) => {
  //console.log(videoDetail);
  const { id, snippet } = videoDetail;
  return (
    <>
      <Card className="videocard_container">
        <a href={`../video/${id.videoId}`}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.description}
            sx={{ width: 358, height: 180 }}
            className="videocard_image"
          />
        </a>
        <a href={`../video/${id.videoId}`}>
          <CardContent className="video_Detail_title">
            {snippet?.title}
          </CardContent>
        </a>
        <a href={`../channel/${snippet?.channelId}`}>
          <CardContent className="video_Detail_channelTitle">
            {snippet?.channelTitle}
          </CardContent>
        </a>
      </Card>
    </>
  );
};

export default VideoCard;
