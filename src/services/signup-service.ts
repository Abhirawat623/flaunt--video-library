import axios from "axios";
export const signupHandler = async (username, number, email, password) => {
  try {
    const data = await axios.post(
      "https://flaunt-up-video-library-backend.vercel.app/api/auth/register",
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }
    );
  } catch (error) {
    console.log("error adding signup props to database"+error);
    window.alert("Invalid Credentials")
  }
};
