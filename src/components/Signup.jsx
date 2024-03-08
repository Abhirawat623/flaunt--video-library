import { useModal } from "../context/modals-context";
export const SignUp = () => {
  //to close signup modal
  const { setIsSignUpModalOpen,setIsLoginModalOpen} = useModal();

  const handleSignupModalClose = () => {
    setIsSignUpModalOpen(false);

  };
//for login modal open
const handleLoginOpen=()=>{
  setIsLoginModalOpen(true);
  setIsSignUpModalOpen(false)
}
  return (
    <div
      className="bg-zinc-800  p-6 xl:w-96 xl:h-102 h-100 w-80  
    top-32 left-9 xl:left-102 xl:top-14 flex flex-col items-center justify-between rounded-lg fixed z-20"
    >
      <div className=" flex flex-col items-center">
        <h2 className="text-white text-2xl font-bold ">Sign Up</h2>{" "}
        <span
          className="text-white text-4xl absolute top-1 right-1 cursor-pointer"
          onClick={handleSignupModalClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </span>
      </div>
      <form
        // onSubmit={handleFormSubmit}
        className="flex flex-col items-center gap-y-2 xl:text-xl"
      >
        <div className=" flex flex-col items-center ">
          <label className="text-white ml-l">Name*</label>
          <input
            className="p-0.5 rounded-md xl:w-80 w-72 cursor-pointer "
            placeholder="Enter Full Name"
            required
            // defaultValue={username}
            // onChange={handleNameSignupChange}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="flex flex-col text-white ml-l">E-mail*</label>
          <input
            className=" p-0.5 rounded-md xl:w-80 w-72 cursor-pointer"
            placeholder="Enter a valid E-mail"
            required
            // defaultValue={email}
            // onChange={handleEmailSignupChange}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-white  ">Mobile Number*</label>
          <input
            className=" p-0.5 rounded-md xl:w-80 w-72 cursor-pointer"
            placeholder="Enter Mobile Number"
            maxLength={10}
            required
            //   defaultValue={number}
            //   onChange={handleMobileSignupChange}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className=" text-white ml-l">Password*</label>
          <input
            className=" p-0.5 rounded-md xl:w-80 w-72 cursor-pointer"
            placeholder="Must be 8 letters including caps letter & special character"
            required
            type="password"
            // onChange={handlePasswordSignupChange}
            // defaultValue={password}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className=" text-white ml-l">Confirm Password*</label>
          <input
            className="p-0.5 rounded-md xl:w-80 w-72 cursor-pointer"
            placeholder="Must be 8 letters including caps latter & special character"
            required
            type="password"
            // onChange={handleConfirmPasswordSignupChange}
            // defaultValue={confirmPassword}
          />
        </div>
        <div className=" flex flex-col items-center gap-y-1.5">
      <button
        className=" text-white bg-green-800 xl:w-80 w-72 p-0.5 
                 hover:bg-green-600 hover:text-white h-10 rounded-md
                 text-base xl:text-lg cursor-pointer"
      >
        Create Account
      </button>
      <button 
      onClick={handleLoginOpen}
        className=" text-white bg-blue-800 xl:w-80 w-72 p-0.5 
                 hover:bg-blue-600 hover:text-white h-10 rounded-md
                 text-base xl:text-lg cursor-pointer"
      >
        Already have account
      </button>
      </div>
      </form>
      
    </div>
  );
};
