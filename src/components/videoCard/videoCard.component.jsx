import React from "react";
import "./videoCard.style.scss";
import { Link } from "react-router-dom";

const VideoCard = ({ videoDetail }) => {
  //console.log(videoDetail);
  const { id, snippet } = videoDetail;
  return (
    <div className="card videocard_container">
      <a href={`../video/${id.videoId}`} style={{ textAlign: "center" }}>
        <img
          src={snippet?.thumbnails?.high?.url}
          className="card-img-top"
          alt={snippet?.description}
        />
      </a>
      <div className="card-body">
        <h6 className="card-title">
          <a href={`../video/${id.videoId}`}>{snippet?.title}</a>
        </h6>
        <a
          href={`../channel/${snippet?.channelId}`}
          className="btn btn-primary btn-sm"
          style={{ marginTop: "1rem" }}
        >
          {snippet?.channelTitle}
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
