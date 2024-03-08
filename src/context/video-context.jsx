import {  createContext, useContext, useReducer } from "react";
import { videoReducer } from "../reducer/video-reducer"
const initialValue={
    clickedCategory:"",
};

const VideoContext= createContext(initialValue);

const VideoProvider =({children})=>{
 const [{clickedCategory},videoDispatch] =useReducer(videoReducer,initialValue);
 return(
    <VideoContext.Provider value={{clickedCategory,videoDispatch}}>
        {children}
    </VideoContext.Provider>)
}

const useVideo = () => useContext(VideoContext);


export { useVideo ,VideoProvider} 