import { createContext, useContext, useReducer } from "react";
import { videoReducer } from "../reducer/video-reducer";
const initialValue = {
  clickedCategory: "",
  loading:false,
  likedVideo:[],
  historyVideo:[],
  archivedVideo:[],
  playlistName:"",
  singleId:''
};
const VideoContext = createContext(initialValue);
const VideoProvider = ({ children }) => {
  const [{ clickedCategory,likedVideo,historyVideo,archivedVideo,loading,playlistName,singleId}, videoDispatch] = useReducer(
    videoReducer,
    initialValue
  );
  return (
    <VideoContext.Provider value={{ clickedCategory,likedVideo,historyVideo,archivedVideo,loading,playlistName,singleId,videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};
const useVideo = () => useContext(VideoContext);
export { useVideo, VideoProvider };
