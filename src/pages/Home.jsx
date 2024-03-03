import { Navbar,SignUp,VideoContainer,Loginpage } from "../components/index";
import {useModal} from '../context/modals-context';

export const  Home= ()=> {
     //modal context
     const {isModalOpen}=useModal();
  return (
    <div className="bg-blue">
      <Navbar/>
      {isModalOpen && <SignUp />}
      {isModalOpen && <Loginpage/>}
      <VideoContainer />
    </div>
  )
}

export default Home
