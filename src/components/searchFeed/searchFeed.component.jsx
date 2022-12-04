import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../videoCard/videoCard.component";
import "./searchFeed.styles.scss";
import Spinner from "../spinner/spinner.component";
import { useGetSearchResultsQuery } from "../../services/youtubeApi";
import { useEffect } from "react";
const SearchFeed = () => {
  const { searchTerm } = useParams();

  const { data, error, isLoading } = useGetSearchResultsQuery(searchTerm);

  if (isLoading) return <Spinner />;
  const { items } = data;
  //console.log(items);
  return (
    <div className="contianer-fluid searchFeed_container">
      <h1>
        Search Results for <span>{searchTerm}</span>
      </h1>
      <div className="row">
        {items?.map((item, index) => (
          <div className="col-xs-12 col-sm-6 col-lg-4 col-xl-3" key={index}>
            <VideoCard videoDetail={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFeed;
