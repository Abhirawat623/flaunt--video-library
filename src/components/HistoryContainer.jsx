import { useEffect } from "react";
import axios from "axios";
import { FetchedCards } from "./FetchedCards";
import { useVideo } from "../context/video-context";
export const HistoryContainer = () => {
  const { videoDispatch, historyVideo } = useVideo();
  useEffect(() => {
    const historyVideos = async () => {
      try {
        // Add the JWT token to the authorization header
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;

        const { data } = await axios.get(
          "https://flaunt-up-video-library-backend.vercel.app/api/history"
        );
        videoDispatch({
          type: "HISTORY_VIDEO",
          payload: data,
        });
      } catch (error) {
        console.error("Error getting wishlist items:", error.message);
      }
    };
    historyVideos();
  }, [historyVideo, videoDispatch]); // Include videoDispatch as a dependency
  return (
    <div className="xl:grid xl:grid-cols-3 xl:gap-y-2 flex-wrap flex flex-col pt-3 gap-y-3 gap-x-3 pl-3 pr-3 pb-12">
    {historyVideo.length===0?(
      <img src="https://i.ibb.co/w0ghKRk/empty.png" className="absolute top-1/2 left-1/2 translate z-15"/>):
      (historyVideo.map((video) => (
        <FetchedCards itemIds={video} key={video._id} />
      )))}
    </div>
  );
};
