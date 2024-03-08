import { useEffect, useState } from "react";
import axios from "axios";
import { VideoCard } from "./VideoCard";
import { useVideo } from "../context/video-context";
export const VideoContainer=()=>{
    //for videos fetched
    const [videos,setVideos] = useState([]);
    //from context
    const {clickedCategory}=useVideo()


  
useEffect(()=>{
    
    ( async ()=>{
        try{
            const {data} = await axios.get(`https://flaunt-video-library-x9dn.vercel.app/api/videos?category=${clickedCategory==="all"?"":clickedCategory}`);
            console.log(data);
            setVideos(data);
        }
        catch(err){console.log(err)}
    })()
},[clickedCategory]);
    return(
      <div className="xl:grid xl:grid-cols-3 xl:gap-y-2  xl:pr-2 xl:pl-16">
        {
            videos.map((video)=>(<VideoCard items={video} key={video._id}/>))}
            </div>
        
    )
}