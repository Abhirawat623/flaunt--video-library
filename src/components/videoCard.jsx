
export const VideoCard = ({items}) => {
  const {title,image,length,views,channelName,icon} = items;
    return(
    <div className="border-solid border-black border-2 flex flex-col w-96 h-96 ">
      
      <div className="w-full ">
        <img src={image} alt="contents's image"/>
        <span className=" relative -top-10 left-80 text-slate-800 bg-white px-1 ">{length}</span>
        
      </div>

    </div>
      
      
    );
};
