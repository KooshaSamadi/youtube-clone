import React, { useState } from "react";
import SideBar from "../../components/sideBar/sideBar.component";
import VideoSegment from "../../components/videoSegment/videoSegment.component";
import "./feed.style.scss";
import { useGetSuggestedVideosQuery } from "../../services/youtubeApi.js";
import Spinner from "../../components/spinner/spinner.component";
const Feed = () => {
  const [btnSelected, setBtnSelected] = useState("New");
  const {
    data: videosData,
    error: videosError,
    isLoading: videosIsLoading,
  } = useGetSuggestedVideosQuery(btnSelected);

  if (videosError) return;
  return (
    <div className="feed">
      {videosIsLoading ? (
        <div className="spinner_container">
          <Spinner />
        </div>
      ) : (
        <>
          <SideBar btnSelected={btnSelected} setBtnSelected={setBtnSelected} />
          <VideoSegment videosData={videosData} btnSelected={btnSelected} />
        </>
      )}
    </div>
  );
};

export default Feed;
