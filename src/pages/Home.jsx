import { Navbar,SignUp,VideoContainer,Loginpage, CategoriesContainer } from "../components/index";
import {useModal} from '../context/modals-context';

export const  Home= ()=> {
     //modal context
     const {isSignUpModalOpen ,isLoginModalOpen}=useModal();
  return (
    <div className="bg-blue">
      <Navbar/>
      
      {isSignUpModalOpen && <SignUp/>}
      {isLoginModalOpen && <Loginpage/>}
      <CategoriesContainer/>
      <VideoContainer />
      
      
    </div>
  )
}

export default Home
