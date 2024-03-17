import { useEffect, useState } from "react";
import axios from "axios";
import { VideoCard } from "./VideoCard";
import { useVideo } from "../context/video-context";
export const VideoContainer = () => {
  //for videos fetched
  const [videos, setVideos] = useState([]);
  //from context
  const { clickedCategory} = useVideo();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://flaunt-up-video-library-backend.vercel.app/api/videos?category=${
            clickedCategory === "all" ? "" : clickedCategory
          }`
        );
        setVideos(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [clickedCategory]);
  return (
    <div className="xl:grid xl:grid-cols-3 xl:gap-y-2 flex-wrap flex flex-col pt-3 gap-y-3 gap-x-3 pl-3 pr-3 pb-12">
      {videos.map((video) => (
        <VideoCard items={video} key={video._id} />
      ))}
    </div>
  );
};
