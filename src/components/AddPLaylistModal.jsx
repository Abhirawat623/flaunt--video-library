import { useState } from "react";
import { useVideo } from "../context/video-context";
import { useModal } from "../context/modals-context";
import { toast} from 'alert';
import { useNavigate } from "react-router-dom";
import { addPlaylistHandler } from "../services/playlist-services";
export const AddPlaylistModal = () => {
  // //navigate
  const navigate = useNavigate();
  //modal for container
  const { setIsPlaylistModalOpen } = useModal();
  //handle add playlist
  const [isplaylistInputModal, setIsplaylistInputModal] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState("");
  //playlist context
  const { playlistName, videoDispatch, singleId } = useVideo();
  //input modal
  const handlePlaylistModal = () => {
    setIsplaylistInputModal(true);
  };

  //input change
  const handlePlaylistInputChange = (e) => {
    setPlaylistTitle(e.target.value);
  };
  //set input on bar
  const handleSetPlayListName = () => {
    event.preventDefault();
    if (playlistTitle.length > 0) {
      videoDispatch({
        type: "PLAYLIST_NAME",
        payload: playlistTitle,
      });
    } else {
      toast("please type playlist");
    }
  };
  //adding playlist to db
  const handleAddPlaylistData = (event) => {
    if (event.target.checked) {
      addPlaylistHandler(singleId, playlistName);
      setIsPlaylistModalOpen(false);
      videoDispatch({
        type:"CLEAR_PLAYLIST_NAME"
      })
      navigate("/playlists/:ide");
     
    }
  };
  //closing playlist container modal
  const handlePlaylistContainerModal = () => {
    setIsPlaylistModalOpen(false);
  };
  console.log(playlistName);
  return (
    <div className="top-1/2 left-1/2 translate fixed bg-zinc-800  xl:w-96 xl:max-h-66 min-h-52 w-80 text-xl p-12 z-5">
      <div className="flex flex-col justify-center items-center gap-y-1 ">
        <span
          className="text-white text-4xl absolute top-0.5 right-0.5 cursor-pointer"
          onClick={handlePlaylistContainerModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </span>
        <div className="pb-2 bg-zinc-800 text-white w-full text-center rounded-md">
          Saved Playlist
        </div>

        {/* playlist */}
        <div className="flex flex-col gap-y-0.5 text-white bg-green-800 text-white w-full xl:max-h-32 max-h-32 rounded-md overflow-y-auto">
          <div className="flex flex-row items-center px-12 gap-x-2  min-h-8">
            <input
              type="radio"
              className="cursor-pointer focus:outline-none border-none "
              required
              onChange={(event) => {
                handleAddPlaylistData(event);
              }}
            />
            <label>{playlistName}</label>
          </div>
        </div>

        {/* add playlist */}
        {isplaylistInputModal ? (
          <div className="flex flex-row justify-end gap-x-2 w-full rounded-md pt-2 cursor-pointer ">
            <input
              className="cursor-pointer bg-white text-black border-solid border-2 border-black w-full"
              required
              onChange={handlePlaylistInputChange}
            />
            <span onClick={handleSetPlayListName} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        ) : (
          <div
            className="flex flex-row gap-x-2 justify-center items-center  bg-zinc-800 text-white w-full rounded-md cursor-pointer"
            onClick={handlePlaylistModal}
          >
            <span className="text-2xl text-center ">+</span>
            <span>New Playlist</span>
          </div>
        )}
        {/* add playlist bar */}
      </div>
    </div>
  );
};
