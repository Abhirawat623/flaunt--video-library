import axios from "axios";
export const addPlaylistHandler= async (singleId,playlistName)=>{
    try {
      // Add the JWT token to the authorization header
      const token= localStorage.getItem("token");
     
      //for authorization
      axios.defaults.headers.common['Authorization'] = token;
      console.log(token)
        const data = await axios.post("https://flaunt-up-video-library-backend.vercel.app/api/playlist",
        {videoId:singleId,
        playlistName:playlistName}
        
          )
    } catch (error) {
        console.log("Error adding playlist:", error.message); 
    }
};

 

