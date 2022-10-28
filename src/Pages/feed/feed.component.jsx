import React from "react";
import SideBar from "../../components/sideBar/sideBar.component";
import VideoSegment from "../../components/videoSegment/videoSegment.component";
import "./feed.style.scss";
import { useGetSuggestedVideosQuery } from "../../services/youtubeApi.js";
const Feed = () => {
  const {
    data: videosData,
    error: videosError,
    isLoading: videosIsLoading,
  } = useGetSuggestedVideosQuery();
  console.log(videosData);
  return (
    <div className="feed">
      <SideBar />
      <VideoSegment />
    </div>
  );
};

export default Feed;
