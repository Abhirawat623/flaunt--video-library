import { useEffect, useState } from "react";
import axios from "axios";
import { VideoCard } from "./VideoCard";
export const VideoContainer=()=>{
    const [videos,setVideos] = useState([]);
useEffect(()=>{
    
    ( async ()=>{
        try{
            const {data} = await axios.get("https://flaunt-video-library-x9dn.vercel.app/api/videos?category=");
            console.log(data);
            setVideos(data);
        }
        catch(err){console.log(err)}
    })()
},[]);
    return(
      <div className="xl:grid xl:grid-cols-3 xl:gap-y-2  xl:pr-2 xl:pl-16">
        {
            videos.map((video)=>(<VideoCard items={video} key={video._id}/>))}
            </div>
        
    )
}