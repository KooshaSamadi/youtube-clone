import React from "react";
import { CardMedia, Card, CardContent } from "@mui/material";
import "./videoCard.style.scss";
import { Link } from "react-router-dom";
const VideoCard = ({ videoDetail }) => {
  //console.log(videoDetail);
  const { id, snippet } = videoDetail;
  return (
    <>
      <Link to={`video/${id.videoId}`}>
        <Card className="videoDetail_container">
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.description}
            sx={{ width: 358, height: 180 }}
          />
          <CardContent className="video_Detail_title">{snippet?.title}</CardContent>
        </Card>
      </Link>
    </>
  );
};

export default VideoCard;
