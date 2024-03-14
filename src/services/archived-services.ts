import axios from "axios";
export const addArchivedHandler= async (id)=>{
    try {
      // Add the JWT token to the authorization header
      const token= localStorage.getItem("token");
     
      //for authorization
      axios.defaults.headers.common['Authorization'] = token;
      console.log(token)
        const data = await axios.post("https://flaunt-up-video-library-backend.vercel.app/api/archived",
        {videoId:id}
          )
    } catch (error) {
        console.error("Error adding archived items:", error.message); 
    }
};

 

