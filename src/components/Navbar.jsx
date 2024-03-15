import {useModal} from '../context/modals-context';
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
export const Navbar = () => {
  //navigate
  const navigate=useNavigate()
//modal context
const{setIsSignUpModalOpen,setIsLoginModalOpen,isSignUpModalOpen,isLoginModalOpen}=useModal();
const handleSignUpBtn=()=>{
  setIsSignUpModalOpen(true);
  setIsLoginModalOpen(false);
}
const token= localStorage.getItem("token");
//token clear
const handleTokenCLear=()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem('pincode')
  navigate("/");
window.location.reload()

}
  return (
    <div className="bg-slate-100 p-4 flex justify-between items-center flex-row relative">
     <Link to="/"> <h2 className="xl:font-bold text-4xl font-bold leading-relax ">Flaunt Video </h2></Link>
      {!isSignUpModalOpen&& !isLoginModalOpen ?(<button className="bg-zinc-800 text-white font-bold xl:p-3 p-3 xl:text-center rounded-lg 
      h-12 w-22 "
      onClick={handleSignUpBtn}>
 {token?(<p onClick={handleTokenCLear}>Log out</p>):(<p>Sign up</p>)}
      </button>)
      :(<button className="bg-zinc-800 text-white font-bold p-3 xl:text-center rounded-lg 
      h-12 w-24 "
      >Welcome</button>)}
    </div>
  );
};
