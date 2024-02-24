import { useEffect, useState } from "react";
import axios from "axios";
import { VideoCard } from "./videoCard";
export const VideoContainer=()=>{
    const [videos,setVideos] = useState([]);
useEffect(()=>{
    
    ( async ()=>{
        try{
            const {data} = await axios.get("https://flaunt-video-library-x9dn.vercel.app/api/videos");
            console.log(data);
            setVideos(data);
        }
        catch(err){console.log(err)}
    })()
},[]);
    return(
       
        
            videos.map((video)=>(<VideoCard items={video} key={video._id}/>))
        
    )
}