import {useModal} from '../context/modals-context';

export const Navbar = () => {
//modal context
const{setIsSignUpModalOpen,setIsLoginModalOpen,isSignUpModalOpen,isLoginModalOpen}=useModal();
const handleSignUpBtn=()=>{
  setIsSignUpModalOpen(true);
  setIsLoginModalOpen(false);
}

  return (
    <div className="bg-white-100 xl:p-5 p-8 flex justify-between items-center flex-wrap flex-row relative">
      <h2 className="xl:font-bold xl:text-4xl text-xl Xl:leading-relax font-bold leading-relax">Flaunt Video Library</h2>
      {!isSignUpModalOpen&& !isLoginModalOpen ?(<button className="bg-black text-white font-bold xl:p-3 p-4 xl:text-center rounded-lg 
      sm:h-6 xl:h-12 w-22 "
      onClick={handleSignUpBtn}>Sign Up</button>):(<button className="bg-black text-white font-bold xl:p-3 p-4 xl:text-center rounded-lg 
      sm:h-6 xl:h-12 w-22 "
      >Welcome</button>)}
    </div>
  );
};
