import React from "react";
import VideoCard from "../videoCard/videoCard.component";
import "./videoSegment.style.scss";
const VideoSegment = ({ videosData, btnSelected }) => {
  const { items } = videosData;

  return (
    <div className="video_segment col-10">
      <div className="row">
        {items.map((item, index) => (
          <div
            className="video_segment__item col-xs-12 col-sm-6 col-lg-4 col-xl-3"
            key={index}
          >
            <VideoCard videoDetail={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSegment;
