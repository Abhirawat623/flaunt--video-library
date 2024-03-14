import axios from "axios";
import { useVideo } from "../context/video-context";
import { useEffect } from "react";
import { data } from "autoprefixer";
export const addWishlistHandler= async (id)=>{
    try {
      // Add the JWT token to the authorization header
      const token= localStorage.getItem("token");
     
      //for authorization
      axios.defaults.headers.common['Authorization'] = token;
      console.log(token)
        const data = await axios.post("https://flaunt-up-video-library-backend.vercel.app/api/wishlist",
        {videoId:id}
          )
        
    } catch (error) {
        console.error("Error adding wishlist items:", error.message); 
    }
};

 

