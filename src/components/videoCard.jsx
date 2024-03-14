import { useNavigate } from "react-router-dom";

export const VideoCard = ({ items }) => {
  const { title, image,  views, channelName, icon, _id } = items;
  //to navigate for single card
  const navigate = useNavigate();
  const handleVideoClick = () => {
    navigate(`/videos/${_id}`);
  };
  return (
    <div
      className=" border-2 flex flex-col pb-1 rounded-l shadow-xl"
      onClick={handleVideoClick}
    >
      <div>
        <img className="w-full " src={image} alt="content image" />
        {/* <span className=" relative -top-10 left-96 text-slate-800 bg-white px-1 flex-wrap`">
          {length}
        </span> */}
      </div>
      <div className="flex flex-row gap-x-1 xl:gap-x-2 items-center ">
        <div className="w-12 h-12 p-1">
          <img className="w-full h-full" src={icon} alt="content icon" />
        </div>
        <div className="font-medium">{title}</div>
      </div>
      <div className="pl-14  flex flex-col ">
        <div className="text-gray-600">{channelName}</div>
        <div className="flex flex-row gap-x-0.5 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path
                fillRule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <div>{views} views</div>
        </div>
      </div>
    </div>
  );
};
