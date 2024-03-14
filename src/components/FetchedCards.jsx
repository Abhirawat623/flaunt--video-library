import { useEffect, useState } from "react";
import axios from "axios";
import { VideoCard } from "./VideoCard";
export const FetchedCards = ({ itemIds }) => {
  const { videoId } = itemIds;
  //fetching videos
  const [videos, setVideos] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://flaunt-up-video-library-backend.vercel.app/api/videos/${videoId}`
        );
        console.log(data);
        setVideos(data);
        console.log(videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [videoId]);
  return <VideoCard items={videos} />;
};
