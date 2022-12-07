import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetVideoDetailQuery,
  useGetSuggestedVideosOptionsQuery,
} from "../../services/youtubeApi";
import Spinner from "../../components/spinner/spinner.component";
import millify from "millify";
import "./videoDetail.styles.scss";
import ReactPlayer from "react-player";
import {
  FavoriteBorder,
  Visibility,
  CheckBoxOutlined,
} from "@mui/icons-material";
import VideoCard from "../../components/videoCard/videoCard.component";

const VideoDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetVideoDetailQuery(id);
  const {
    data: relatedVdeosData,
    error: relatedVdeosError,
    isLoading: relatedVdeosIsLoading,
  } = useGetSuggestedVideosOptionsQuery(id);
  if (isLoading) return <Spinner />;
  if (relatedVdeosIsLoading) return <Spinner />;
  const { items } = data;
  const { snippet, statistics } = items[0];
  const { items: relatedVideosItems } = relatedVdeosData;
  return (
    <div className="container-fluid videoDetail_container">
      <div className="row">
        <div className="videoDetail_video col-sm-12 col-lg-8">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls={true}
            className="react-player"
          />
          <div className="videoDetail_video_description">
            <h3>{snippet.localized.title}</h3>
            <div>
              <FavoriteBorder />
              <p>
                {statistics.likeCount !== undefined
                  ? millify(statistics.likeCount)
                  : "?"}
              </p>
            </div>
            <div>
              <Visibility />
              <p>
                {statistics.viewCount !== undefined
                  ? millify(statistics.viewCount)
                  : ""}
              </p>
            </div>
          </div>
          <div className="videoDetail_video_channel">
            <span>{snippet.channelTitle}</span> <CheckBoxOutlined />
          </div>
        </div>
        <div className="suggestedVideos col-sm-12 col-lg-4">
          <div className="row">
            {relatedVideosItems.map((item, index) => (
              <div
                className="video_segment__item col-sm-6 col-lg-12"
                key={index}
              >
                <VideoCard videoDetail={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default VideoDetail;
