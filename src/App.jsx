import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ArchivedPage } from "./pages/ArchivedPage";
import { HistoryPage } from "./pages/HistoryPage";
import { SingleVideo } from "./pages/SingleVideo";
import { PlaylistPage } from "./pages/PlaylistPage";
import { LikesPage } from "./pages/LikesPage";
import { PageNotFound } from "./pages/PageNotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/videos/:ide" element={<SingleVideo/>}/>
      <Route path="/likes/:ide" element={<LikesPage/>}/>
      <Route path="/archives/:ide" element={<ArchivedPage/>}/>
      <Route path="/history/:ide" element={<HistoryPage/>}/>
      <Route path="/playlists/:ide" element={< PlaylistPage/>}/>
      <Route path="*" element={< PageNotFound/>}/>
    </Routes>
  );
}

export default App;
