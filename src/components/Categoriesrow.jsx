import { useVideo } from "../context/video-context";
export const CategoriesColumn = ({ items }) => {
  const { categoryName,videoCategory } = items;

  //putting categories in context
  const {videoDispatch,clickedCategory}= useVideo();
const handleCategoryClick=(event)=>{
  console.log(event);
  videoDispatch({
   type:"CATEGORY",
   payload:event
  })
console.log("11"+clickedCategory)
}



  return (
    <span
    onClick={()=>handleCategoryClick(videoCategory)}
      className="
        text-white 
         xl:h-8 cursor-pointer px-2 "
    >
      {categoryName}
    </span>
  );
};
