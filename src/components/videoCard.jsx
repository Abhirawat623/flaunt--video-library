import { useEffect, useState } from "react";
import axios from "axios";
export const VideoCard = () => {
    const [video,setVideo] = useState([]);
useEffect(()=>{
    
    ( async ()=>{
        try{
            const {data} = await axios.get("https://flaunt-video-library-x9dn.vercel.app/api/videos");
            console.log(data);
            setVideo(data);
        }
        catch(err){console.log(err)}
    })()
},[])
    return(
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="aspect-w-16 aspect-h-9">
              <video className="w-full h-full object-cover" controls>
                <source src={`https://www.youtube.com/embed/${_id}`}/>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Video title</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Some description of the video</a>
            <p className="mt-2 text-gray-500">Some additional information about the video content or source.</p>
          </div>
        </div>
      </div>
      
    );
};
