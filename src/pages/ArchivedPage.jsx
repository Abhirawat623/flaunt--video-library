import { Navbar} from "../components/Navbar";
import {SignUp} from "../components/Signup";
import {Login} from "../components/Login";
import  {BottomBar} from "../components/BottomBar";
import {ArchivedContainer} from "../components/ArchivedContainer"
import {PinCode} from "../components/PinCode";
import {useModal} from '../context/modals-context';
import { Toaster} from 'alert';
export const  ArchivedPage= ()=> {
     //modal context
     const {isSignUpModalOpen ,isLoginModalOpen,isPinModalOpen,}=useModal();
  //token
  const token = localStorage.getItem("token");
  return (
    <div className="bg-blue">
      <Navbar/>
      <BottomBar/>
      <Toaster/>
      {isSignUpModalOpen && <SignUp/>}
      {isLoginModalOpen && <Login/>}
      <div className="flex flex-row sticky top-0  bg-zinc-800 text-white flex-wrap p-0.5 xl:p-1 z-10 h-12 w-full bottom-0 justify-center items-center ">
       <p className="text-2xl">Archived Videos</p> 
      </div>
      {isPinModalOpen ?(<PinCode/>):(token ? <ArchivedContainer/>:(<img src="https://i.ibb.co/16JPSyB/OIG4-w4j-LUt3dqi-JG-ZE11-removebg-preview.png" className="absolute top-1/2 left-1/2 translate z-15"/>))}
    </div>
  )
}

