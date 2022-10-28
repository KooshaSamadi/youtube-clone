import { Route, Routes } from "react-router-dom";
import "./app.scss";

import Navbar from "./components/navbar/navbar.component.jsx";
import Feed from "./Pages/feed/feed.component.jsx";
import VideoDetail from "./Pages/videoDetail/videoDetail.component";
import ChannelDetail from "./Pages/channelDetail/channelDetail.component.jsx";
import SearchFeed from "./components/searchFeed/searchFeed.component";
import NotFound from "./Pages/notFound/notFound.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="video/:id" element={<VideoDetail />} />
        <Route path="channel/:id" element={<ChannelDetail />} />
        <Route path="search/:searchTerm" element={<SearchFeed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
