import {useModal} from '../context/index';

export const Navbar = () => {
//modal context
const{modalDispatch}=useModal();
const handleSignUpBtn=()=>{
modalDispatch({
  type:"IS_SIGNUP_MODAL_OPEN"
})
}

  return (
    <div className="bg-white-100 xl:p-5 p-8 flex justify-between items-center flex-wrap flex-row">
      <h2 className="xl:font-bold xl:text-4xl text-xl Xl:leading-relax font-bold leading-relax">Flaunt Video Library</h2>
      <button className="bg-black text-white font-bold xl:p-3 p-4 xl:text-center rounded-lg 
      sm:h-6 xl:h-12 "
      onClick={handleSignUpBtn}>Sign Up</button>
    </div>
  );
};
