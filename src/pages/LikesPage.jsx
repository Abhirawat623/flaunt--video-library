import { Navbar,SignUp,Loginpage,BottomBar,LikesContainer,Skeleton} from "../components/index";
import {useModal} from '../context/modals-context';
import { useEffect,useState } from "react"
export const  LikesPage= ()=> {
     //modal context
     const {isSignUpModalOpen ,isLoginModalOpen}=useModal();
           //skeleton 
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
     setLoading(true);
      setTimeout(()=>{
        setLoading(false)
          console.log(loading);
      },650)
    },[])
  //token
  const token = localStorage.getItem("token");
  return (
    <div className="bg-blue">
      <Navbar/>
      <BottomBar/>
      {isSignUpModalOpen && <SignUp/>}
      {isLoginModalOpen && <Loginpage/>}
      <div className="flex flex-row sticky top-0  bg-zinc-800 text-white flex-wrap p-0.5 xl:p-1 z-10 h-12 w-full bottom-0 justify-center items-center ">
      <p className="text-2xl">Liked Videos</p> 
      </div>
      {token &&loading && <Skeleton />}
      <LikesContainer/>
    </div>
  )
}

