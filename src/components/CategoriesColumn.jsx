export const CategoriesColumn=({items})=>{
  const {categoryName} =items;
    return(
        <span className="border-2 border-solid border-black bg-zinc-950 
        text-white rounded-sm object-cover text-center
         xl:h-8 cursor-pointer ">

            {categoryName}
        </span>
    )
}