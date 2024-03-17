import axios from "axios";
export const addWishlistHandler= async (id)=>{
    try {
      // Add the JWT token to the authorization header
      const token= localStorage.getItem("token");
      //for authorization
      axios.defaults.headers.common['Authorization'] = token;
        const data = await axios.post("https://flaunt-up-video-library-backend.vercel.app/api/wishlist",
        {videoId:id}
          )
    } catch (error) {
        console.log("Error adding wishlist items:", error.message); 
    }
};
export const deleteWishlistHandler= async (_id)=>{
  try {
    // Add the JWT token to the authorization header
    const token= localStorage.getItem("token");
    //for authorization
    axios.defaults.headers.common['Authorization'] = token;
      const data = await axios.delete(`https://flaunt-up-video-library-backend.vercel.app/api/wishlist/${_id}`)    
  } catch (error) {
      console.log("Error deleting wishlist items:", error.message); 
  }
};



