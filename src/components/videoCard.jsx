
export const VideoCard = ({items}) => {
  const {title,_id,category,description} = items;
    return(
        <div className="max-w-md mx-auto bg-white rounded-l index-2 shadow-xl overflow-hidden md:max-w-4xl md:max-h-4xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="aspect-w-16 aspect-h-9">
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${_id}`} 
               allow="accelerometer autoplay encrypted-media gyroscope picture-in-picture" 
              allowfullscreen></iframe>
            </div>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{description}</a>
            <p className="mt-2 text-gray-500">{category}</p>
          </div>
        </div>
      </div>
      
      
    );
};
