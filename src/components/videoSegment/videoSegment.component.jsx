import React from "react";
import ChannelCard from "../channelCard/channelCard.component";
import VideoCard from "../videoCard/videoCard.component";
import "./videoSegment.style.scss";
const VideoSegment = ({ videosData, btnSelected }) => {
  const { items } = videosData;
  console.log(items);
  return (
    <div className="video_segment">
      {items.map((item, index) => (
        <div className="video_segment__item" key={index}>
          {item.id.videoId && <VideoCard videoDetail={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default VideoSegment;
