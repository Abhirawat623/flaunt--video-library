import { useEffect } from "react";
import axios from "axios";
import {FetchedPlaylistCards} from "./FetchedPlaylistCards";
import { useVideo } from "../context/video-context";
export const PlaylistContainer = () => {
  const { videoDispatch, playlistVideo} = useVideo();
  useEffect(() => {
    const fetchLikedVideos = async () => {
      try {
        // Add the JWT token to the authorization header
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        const { data} = await axios.get(
          "https://flaunt-up-video-library-backend.vercel.app/api/playlist"
        );
        videoDispatch({
          type: "PLAYLIST_VIDEO",
          payload: data,
        });
      } catch (error) {
        console.error("Error getting playlist items:", error.message);
      }
    };
    fetchLikedVideos();
  }, [playlistVideo, videoDispatch]); // Include videoDispatch as a dependency

  return (
    <div className="xl:grid xl:grid-cols-3 xl:gap-y-2 flex-wrap flex flex-col pt-3 gap-y-3 gap-x-3 pl-3 pr-3 pb-12">
        
      {playlistVideo.map((video) => (
        <FetchedPlaylistCards items={video} key={video._id} />
      ))}
    </div>
  );
};
