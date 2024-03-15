import { Routes, Route } from "react-router-dom";
import { Home, ArchivedPage ,HistoryPage,SingleVideo,PlaylistPage,LikesPage, PageNotFound} from "./pages/index";
import "./App.css";

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
