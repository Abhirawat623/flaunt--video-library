import axios from "axios";
import { useEffect, useState } from "react";
import { CategoriesColumn } from "./CategoriesColumn";
export const CategoriesContainer = () => {
  const [categories, setCategories] = useState([]);
  //fetching categories
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://flaunt-video-library-x9dn.vercel.app/api/categories"
        );
        console.log("cat" + data);
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-3 p-1 xl:flex xl:flex-row xl:justify-between ">
      {categories.map((category) => (
        <CategoriesColumn items={category} key={category.id} />
      ))}
    </div>
  );
};
