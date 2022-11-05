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

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getSuggestedVideos: builder.query({
      query: (btnSelected) => {
        console.log(btnSelected);
        return searchOption(btnSelected);
      },
    }),
  }),
});
export const { useGetSuggestedVideosQuery } = youtubeApi;
