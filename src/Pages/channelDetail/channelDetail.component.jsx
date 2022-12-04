import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import Spinner from "../../components/spinner/spinner.component";
import {
  useGetChannelDetailsQuery,
  useGetchannelVideosQuery,
} from "../../services/youtubeApi";
import { LinearGradient } from "../../utils/constants";
import "./channelDetail.style.scss";
import VideoCard from "../../components/videoCard/videoCard.component";
const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = React.useState({});
  const [channelVideos, setChannelVideos] = React.useState([]);
  const [channeImage, setChanneImage] = React.useState();
  const { id } = useParams();
  const {
    data: channelData,
    error: channelError,
    isLoading: ChannelIsLoading,
  } = useGetChannelDetailsQuery(id);
  const {
    data: videosData,
    error: videosError,
    isLoading: videosIsLoading,
  } = useGetchannelVideosQuery(id);
  console.log(channelVideos);
  useEffect(() => {
    setChannelDetails(channelData?.items[0]);
    setChannelVideos(videosData?.items);
    setChanneImage(channelData?.items[0]?.snippet?.thumbnails?.high?.url);
  }, [channelData, videosData]);

  if (ChannelIsLoading || videosIsLoading) return <Spinner />;
  if (channelError || videosError) return <div>Something went wrong</div>;
  return (
    <div className="channelDetail_container container-fluid">
      <div
        className="linear_backgoround"
        style={{
          backgroundImage: `${LinearGradient[Math.floor(Math.random() * 7)]}`,
        }}
      ></div>
      <div className="channelDetail_image">
        <img src={channeImage} alt={channelDetails?.snippet?.title} />
      </div>
      <div className="channelDetail_detail">
        <div>
          <h3>{channelDetails?.snippet?.title}</h3>
          <p>
            {millify(channelDetails?.statistics.subscriberCount)} Subscribers
          </p>
        </div>
        <p>{channelDetails?.snippet?.description}</p>
      </div>
      <div className="channelDetail_videos row">
        {channelVideos?.map((item, index) => (
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

export default ChannelDetail;
