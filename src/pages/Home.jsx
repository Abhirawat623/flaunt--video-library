import { Navbar,SignUp,VideoContainer,Loginpage, CategoriesContainer, BottomBar } from "../components/index";
import {useModal} from '../context/modals-context';

export const  Home= ()=> {
     //modal context
     const {isSignUpModalOpen ,isLoginModalOpen}=useModal();
  return (
    <div className="bg-blue">
      <Navbar/>
      {isSignUpModalOpen && <SignUp/>}
      {isLoginModalOpen && <Loginpage/>}
      <BottomBar/>
      <CategoriesContainer/>
      <VideoContainer />
    </div>
  )
}

