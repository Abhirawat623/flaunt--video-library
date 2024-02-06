import { Navbar,SignUp } from "../components/index";
import {useModal} from '../context/modals-context';

export const  Home= ()=> {
     //modal context
     const {isSignUpModalOpen}=useModal();
  return (
    <div className="bg-blue">
      <Navbar/>
      {isSignUpModalOpen&&<SignUp/>}
    </div>
  )
}

export default Home
