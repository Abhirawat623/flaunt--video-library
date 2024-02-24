import { Navbar,SignUp,VideoContainer } from "../components/index";
import {useModal} from '../context/modals-context';

export const  Home= ()=> {
     //modal context
     const {isSignUpModalOpen}=useModal();
  return (
    <div className="bg-blue">
      <Navbar/>
      {isSignUpModalOpen&&<SignUp/>}
      <VideoContainer/>
    </div>
  )
}

export default Home
