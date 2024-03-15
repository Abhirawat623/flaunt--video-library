import { Navbar,SignUp,VideoContainer,Loginpage, CategoriesContainer, BottomBar,Loading } from "../components/index";
import {useModal} from '../context/modals-context';
import { Toaster } from 'alert';
export const  Home= ()=> {
     //modal context
     const {isSignUpModalOpen ,isLoginModalOpen}=useModal();
  return (
    <div className="bg-blue ">
      <Navbar/>
      {isSignUpModalOpen && <SignUp/>}
      {isLoginModalOpen && <Loginpage/>}
      <Loading/>
      <BottomBar/>
      <Toaster/>
      <CategoriesContainer/>
      <VideoContainer />
    </div>
  )
}

