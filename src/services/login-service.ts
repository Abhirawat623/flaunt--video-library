import axios from "axios";


export const loginHandler= async (number,password)=>{

    try {
        const {data:{accessToken,username}}= await axios.post(
            "https://flaunt-up-video-library-backend.vercel.app/api/auth/login",
            {
                number:number,
                password:password
            }
        );
      localStorage.setItem("token",accessToken);
      localStorage.setItem("name",username);
        console.log(accessToken,username)
        
        return {accessToken,username}
    } catch (error) {
        console.log("can't login"+error)
    }
}