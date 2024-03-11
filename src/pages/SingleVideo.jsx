import { useEffect, useState } from "react";
import {
  Navbar,
  SignUp,
  Loginpage,BottomBar
} from "../components/index";
import { useModal } from "../context/modals-context";
import { useParams } from "react-router-dom";
import axios from "axios";
export const SingleVideo = () => {
  //for single video
  const [singleVideo, setSingleVideo] = useState({});
  //for id from router

  const { ide } = useParams();
  //modal context
  const { isSignUpModalOpen, isLoginModalOpen } = useModal();
  console.log(ide);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://flaunt-up-video-library-backend.vercel.app/api/videos/${ide}`
        );
        console.log("single" + data);
        setSingleVideo(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [ide]);

  const { description, id, title, category, channelName} = singleVideo;
  return (
    <div>
      <Navbar />
      {isSignUpModalOpen && <SignUp />}
      {isLoginModalOpen && <Loginpage />}
      <BottomBar/>
      <div
        className=" mx-auto bg-white rounded-l shadow-xl p-3 
         overflow-hidden  z-10 flex-wrap  "
      >
        <div className="flex flex-col gap-y-1">
          <div className="uppercase tracking-wide text- text-indigo-500 font-semibold text-lg ">
            {title}
          </div>
          <div className="uppercase tracking-wide text- text-slate-500 font-semibold ">
            {channelName}
          </div>
          <div className="">
            <div className=" w-full">
              <iframe
                title="video"
                width="100%"
                height="315"
                allowFullScreen
                src={`https://www.youtube.com/embed/${id}`}
              ></iframe>
            </div>
          </div>
          <div className="buttons-bar flex flex row gap-x-3 flex-wrap">
            {/* like btn */}
            <div className="like-btn text-slate-900 flex flex-row items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 hover:opacity-50"
              >
                <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
              </svg>
              <span>Like</span>
            </div>
            {/* playlist btn*/}
            <div className="playlist-btn text-slate-900 flex flex-row items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 hover:opacity-50"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Add To Playlist</span>
            </div>

            {/* archived btn*/}
            <div className="playlist-btn text-slate-900 flex flex-row items-center  cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 hover:opacity-50"
              >
                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                <path
                  fillRule="evenodd"
                  d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Add To Playlist</span>
            </div>
          </div>
          <div className="pt-1 flex flex-col ">
            <h3 className="text-2xl">Description</h3>
            <p className="block mt-1  text-black">{description}</p>
            <span className="pb-2 text-blue-800">{category}</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};
