import axios from "axios";
export const addHistoryHandler= async (id)=>{
    try {
      // Add the JWT token to the authorization header
      const token= localStorage.getItem("token");
     
      //for authorization
      axios.defaults.headers.common['Authorization'] = token;
      console.log(token)
        const data = await axios.post("https://flaunt-up-video-library-backend.vercel.app/api/history",
        {videoId:id}
          )
        
    } catch (error) {
        console.log("Error adding history:", error.message); 
    }
};

 

