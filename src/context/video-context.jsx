import { createContext, useContext, useReducer } from "react";
import { videoReducer } from "../reducer/video-reducer";
const initialValue = {
  clickedCategory: "",
  likedVideo:[],
  historyVideo:[]
};
const VideoContext = createContext(initialValue);
const VideoProvider = ({ children }) => {
  const [{ clickedCategory,likedVideo,historyVideo}, videoDispatch] = useReducer(
    videoReducer,
    initialValue
  );
  return (
    <VideoContext.Provider value={{ clickedCategory,likedVideo,historyVideo,videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};
const useVideo = () => useContext(VideoContext);
export { useVideo, VideoProvider };
