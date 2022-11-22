import React from "react";
import { CardMedia, Card, CardContent } from "@mui/material";
import "./videoCard.style.scss";
import { Link } from "react-router-dom";

const VideoCard = ({ videoDetail }) => {
  //console.log(videoDetail);
  const { id, snippet } = videoDetail;
  return (
    <>
      <Card className="videoDetail_container">
        <Link to={`video/${id.videoId}`}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.description}
            sx={{ width: 358, height: 180 }}
          />
        </Link>
        <Link to={`video/${id.videoId}`}>
          <CardContent className="video_Detail_title">
            {snippet?.title}
          </CardContent>
        </Link>
        <Link to={`channel/${snippet?.channelId}`}>
          <CardContent className="video_Detail_channelTitle">
            {snippet?.channelTitle}
          </CardContent>
        </Link>
      </Card>
    </>
  );
};

export default VideoCard;
