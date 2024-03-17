import { useModal } from "../context/modals-context";
import { useAuth } from "../context/auth-context";
import { signupHandler } from "../services/signup-service";
import {  toast } from 'alert';
import {
  validateEmail,
  validateName,
  validateNumber,
  validatePassword,
} from "../utils/index";
let isNameValid,
  isEmailValid,
  isNumberValid,
  isPasswordValid,
  isConfirmPasswordValid;
export const SignUp = () => {
  //to close signup modal
  const { setIsSignUpModalOpen, setIsLoginModalOpen } = useModal();
  const handleSignupModalClose = () => {
    setIsSignUpModalOpen(false);
  };
  //for login modal open
  const handleLoginOpen = () => {
    setIsLoginModalOpen(true);
    setIsSignUpModalOpen(false);
  };
  //auth from context
  const { authDispatch, email, password, username, number, confirmPassword } =
    useAuth();
  //valid name for signup
  const handleNameSignupChange = (event) => {
    isNameValid = validateName(event.target.value);
    if (isNameValid) {
      authDispatch({
        type: "USERNAME",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Name");
    }
  };
  //valid email for signup
  const handleEmailSignupChange = (event) => {
    isEmailValid = validateEmail(event.target.value);
    if (isEmailValid) {
      authDispatch({
        type: "EMAIL",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Email");
    }
  };
  //valid password for signup
  const handleMobileSignupChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Mobile Number");
    }
  };
  //valid password for signup
  const handlePasswordSignupChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Password");
    }
  };
  //valid confrim passwor for signup
  const handleConfirmPasswordSignupChange = (event) => {
    isConfirmPasswordValid = validatePassword(event.target.value);
    if (isConfirmPasswordValid) {
      authDispatch({
        type: "CONFIRM_PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid COnfirmed Password");
    }
  };
  //form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    if (
      isNameValid &&
      isEmailValid &&
      isNumberValid &&
      isPasswordValid === isConfirmPasswordValid
    ) {
      signupHandler(username, number, email, password);
      setIsLoginModalOpen(true);
      setIsSignUpModalOpen(false);
      toast(`Hey ${username}, Account Created!`)
      authDispatch({
        type:"CLEAR_SIGNUP"
      })
    } else {
      toast(`Could not create account!`)
      setIsSignUpModalOpen(false);
    }
  };

  return (
    <div
      className="bg-zinc-800  p-6 xl:w-96 xl:h-102 h-100 w-80  
    flex wrap top-2/4 left-2/4 translate  flex flex-col items-center justify-between rounded-lg fixed z-20"
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
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center gap-y-2 xl:text-xl"
      >
        <div className=" flex flex-col items-center ">
          <label className="text-white ml-l">Full Name*</label>
          <input
            className="p-0.5 rounded-md xl:w-80 w-72 cursor-pointer "
            placeholder="Enter Full Name"
            required
            defaultValue={username}
            onChange={handleNameSignupChange}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="flex flex-col text-white ml-l">E-mail*</label>
          <input
            className=" p-0.5 rounded-md xl:w-80 w-72 cursor-pointer"
            placeholder="Enter a valid E-mail"
            required
            defaultValue={email}
            onChange={handleEmailSignupChange}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-white  ">Mobile Number*</label>
          <input
            className=" p-0.5 rounded-md xl:w-80 w-72 cursor-pointer"
            placeholder="Enter Mobile Number"
            maxLength={10}
            required
            defaultValue={number}
            onChange={handleMobileSignupChange}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className=" text-white ml-l">Password*</label>
          <input
            className=" p-0.5 rounded-md xl:w-80 w-72 cursor-pointer"
            placeholder="Must be 8 letters including caps letter & special character"
            required
            type="password"
            defaultValue={password}
            onChange={handlePasswordSignupChange}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className=" text-white ml-l">Confirm Password*</label>
          <input
            className="p-0.5 rounded-md xl:w-80 w-72 cursor-pointer"
            placeholder="Must be 8 letters including caps latter & special character"
            required
            type="password"
            onChange={handleConfirmPasswordSignupChange}
            defaultValue={confirmPassword}
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
