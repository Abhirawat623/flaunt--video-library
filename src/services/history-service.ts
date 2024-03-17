import axios from "axios";
export const addHistoryHandler = async (id) => {
  try {
    // Add the JWT token to the authorization header
    const token = localStorage.getItem("token");
    //for authorization
    axios.defaults.headers.common["Authorization"] = token;
    const data = await axios.post(
      "https://flaunt-up-video-library-backend.vercel.app/api/history",
      { videoId: id }
    );
  } catch (error) {
    console.log("Error adding history:", error.message);
  }
};
export const deleteHistoryHandler = async (_id) => {
  try {
    // Add the JWT token to the authorization header
    const token = localStorage.getItem("token");
    //for authorization
    axios.defaults.headers.common["Authorization"] = token;
    const data = await axios.delete(
      `https://flaunt-up-video-library-backend.vercel.app/api/history/${_id}`
    );
  } catch (error) {
    console.log("Error deleting history items:", error.message);
  }
};
