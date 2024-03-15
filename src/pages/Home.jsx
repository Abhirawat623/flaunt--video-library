import { Navbar,SignUp,VideoContainer,Loginpage, CategoriesContainer, BottomBar,Loading } from "../components/index";
import {useModal} from '../context/modals-context';
import { useVideo } from "../context/video-context";

export const  Home= ()=> {
     //modal context
     const {isSignUpModalOpen ,isLoginModalOpen}=useModal();
     //loading context
     const {loading}=useVideo();
  return (
    <div className="bg-blue ">
      <Navbar/>
      {isSignUpModalOpen && <SignUp/>}
      {isLoginModalOpen && <Loginpage/>}
      <Loading/>
      <BottomBar/>
      <CategoriesContainer/>
      <VideoContainer />
    </div>
  )
}

