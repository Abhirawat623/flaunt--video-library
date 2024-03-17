import axios from "axios";
import { useEffect, useState } from "react";
import { CategoriesRow } from "./Categoriesrow";
export const CategoriesContainer = () => {
  const [categories, setCategories] = useState([]);
  const [numberOfCategories, setNumberOfCategories] = useState(0);
  //fetching categories
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://flaunt-up-video-library-backend.vercel.app/api/categories"
        );
        //slicing for carousel
        const categoriesToShow = data.slice(
          numberOfCategories+3 > data.length ?data.length-3:numberOfCategories,
          numberOfCategories >data.length ?data.length :numberOfCategories+3
        );
        setCategories(categoriesToShow);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [numberOfCategories]);
  const handleRightBtn = () => {
    setNumberOfCategories((previous) => previous + 3);
  };

  const handleLeftBtn = () => {
    setNumberOfCategories((previous) => previous - 3);
  };
  return (
    <div className="flex flex-row sticky top-0  bg-zinc-800 text-white flex-wrap  p-0.5 xl:p-1 z-10 h-12 w-full bottom-0 justify-between items-center ">
      {/* when numbers are less than set shown catehories then only left button shows */}
      {numberOfCategories >= 3 && (
        <button onClick={handleLeftBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      {categories.map((category) => (
        <CategoriesRow items={category} key={category._id} />
      ))}
      {/* when no of categories are less than main categories then only right bnt shows up*/}
      {numberOfCategories < categories.length && (
        <button onClick={handleRightBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
