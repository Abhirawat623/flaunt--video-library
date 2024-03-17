import {Navbar} from "../components/Navbar";
import { SignUp } from "../components/Signup";
import { VideoContainer } from "../components/VideoContainer";
import { Login } from "../components/Login";
import {CategoriesContainer} from "../components/CategoriesContainer"
import { BottomBar } from "../components/BottomBar";
import {Loading} from "../components/Loading"
import {useModal} from '../context/modals-context';
import { Toaster } from 'alert';
export const  Home= ()=> {
     //modal context
     const {isSignUpModalOpen ,isLoginModalOpen}=useModal();
  return (
    <div className="bg-blue ">
      <Navbar/>
      {isSignUpModalOpen && <SignUp/>}
      {isLoginModalOpen && <Login/>}
      <Loading/>
      <BottomBar/>
      <Toaster/>
      <CategoriesContainer/>
      <VideoContainer />
    </div>
  )
}

