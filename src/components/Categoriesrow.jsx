import { useVideo } from "../context/video-context";
export const CategoriesRow = ({ items }) => {
  const { categoryName, videoCategory } = items;
  //putting categories in context
  const { videoDispatch} = useVideo();
  const handleCategoryClick = (videoCategory) => {
    videoDispatch({
      type: "CATEGORY",
      payload: videoCategory,
    });
  };
  return (
    <span
      onClick={() => handleCategoryClick(videoCategory)}
      className="
        text-white 
         xl:h-8 cursor-pointer px-2 "
    >
      {categoryName}
    </span>
  );
};
