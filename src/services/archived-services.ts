import axios from "axios";
export const addArchivedHandler = async (id) => {
  try {
    // Add the JWT token to the authorization header
    const token = localStorage.getItem("token");
    //for authorization
    axios.defaults.headers.common["Authorization"] = token;
    const data = await axios.post(
      "https://flaunt-up-video-library-backend.vercel.app/api/archived",
      { videoId: id }
    );
  } catch (error) {
    console.log("Error adding archived items:", error.message);
  }
};

export const deleteArchivedHandler = async (_id) => {
  try {
    // Add the JWT token to the authorization header
    const token = localStorage.getItem("token");
    //for authorization
    axios.defaults.headers.common["Authorization"] = token;

    const data = await axios.delete(
      `https://flaunt-up-video-library-backend.vercel.app/api/archived/${_id}`
    );
  } catch (error) {
    console.log("Error deleting archived items:", error.message);
  }
};
