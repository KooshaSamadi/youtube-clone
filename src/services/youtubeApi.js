import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://youtube-v31.p.rapidapi.com";

const searchOption = (btnSelected) => {
  return {
    method: "GET",
    url: "/search",
    params: {
      q: `${btnSelected === "New" ? "trending" : btnSelected}`,
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
};
const channelVideos = (channelId) => {
  return {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      channelId: channelId,
      part: "snippet,id",
      order: "date",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
};

const Channeloptions = (Id) => {
  return {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/channels",
    params: { part: "snippet,statistics", id: Id },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
};
const searchOptions = (searchTerm) => {
  return {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: { searchTerm },
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
};
export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getSuggestedVideos: builder.query({
      query: (btnSelected) => {
        return searchOption(btnSelected);
      },
    }),
    getChannelDetails: builder.query({
      query: (Id) => {
        return Channeloptions(Id);
      },
    }),
    getchannelVideos: builder.query({
      query: (channelId) => {
        return channelVideos(channelId);
      },
    }),
    getSearchResults: builder.query({
      query: (searchTerm) => {
        return searchOptions(searchTerm);
      },
    }),
  }),
});
export const {
  useGetSuggestedVideosQuery,
  useGetChannelDetailsQuery,
  useGetchannelVideosQuery,
  useGetSearchResultsQuery,
} = youtubeApi;
