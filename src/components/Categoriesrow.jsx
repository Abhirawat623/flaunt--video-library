// import { useVideo } from "../context/video-context";
export const CategoriesColumn = ({ items }) => {
  const { categoryName } = items;

//   //putting categories in context
//   const {videoDispatch}= useVideo();
// const handleCategoryClick=(event)=>{
//   console.log(event);
//   videoDispatch({
//    type:"CATEGORY",
//    payload:event
//   })

// }



  return (
    <span
    // onClick={()=>handleCategoryClick(categoryName)}
      className="
        text-white 
         xl:h-8 cursor-pointer px-2 "
    >
      {categoryName}
    </span>
  );
};
