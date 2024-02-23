import { Navbar,SignUp,VideoCard } from "../components/index";
import {useModal} from '../context/modals-context';

export const  Home= ()=> {
     //modal context
     const {isSignUpModalOpen}=useModal();
  return (
    <div className="bg-blue">
      <Navbar/>
      {isSignUpModalOpen&&<SignUp/>}
      <VideoCard/>
    </div>
  )
}

export default Home
