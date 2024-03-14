import { useModal } from "../context/modals-context";
import { useAuth } from "../context/auth-context";
import { validateNumber, validatePassword } from "../utils/index";
import { loginHandler } from "../services/login-service";
let isNumberValid, isPasswordValid;
export const Loginpage = () => {
  //to close login modal
  const { setIsLoginModalOpen } = useModal();

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };
  //useAuth from context
  const { number, password, authDispatch } = useAuth();

  //valid number fro login
  const handleNumberLoginChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Number");
    }
  };

  //valid password for login
  const handlePasswordLoginChange = (event) => {
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

  //login form submit
  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    if (isNumberValid && isPasswordValid) {
      const { accessToken, username } = await loginHandler(number, password);
      authDispatch({
        type: "SET_ACCESS_TOKEN",
        payload: accessToken,
      });
      authDispatch({
        type: "SET_USER_NAME",
        payload: username,
      });
      const token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        setIsLoginModalOpen(false);
      }
    }
  };

  return (
    <div
      className="bg-zinc-800  p-6 xl:w-96 xl:h-66 h-66 w-80 
    top-2/4 left-2/4 translate  flex flex-col items-center justify-between rounded-lg fixed z-10"
    >
      <div className=" flex flex-col items-center ">
        <h2 className="text-white text-2xl font-bold ">Login</h2>{" "}
        <span
          className="text-white text-4xl absolute top-1 right-1 cursor-pointer"
          onClick={handleLoginModalClose}
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
        onSubmit={handleLoginFormSubmit}
        className="flex flex-col items-center gap-y-1 xl:text-xl"
      >
        <div className="flex flex-col items-center">
          <label className="flex flex-col text-white ml-l">Number*</label>
          <input
            className=" p-0.5 rounded-md xl:w-80 w-72 cursor-pointer"
            placeholder="Enter Number"
            required
            type="number"
            defaultValue={number}
            onChange={handleNumberLoginChange}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className=" text-white ml-l">Password*</label>
          <input
            className=" p-0.5 rounded-md xl:w-80 w-72 cursor-pointer"
            placeholder="Must be 8 letters including caps letter & special character"
            required
            type="password"
            onChange={handlePasswordLoginChange}
            defaultValue={password}
          />
        </div>
        <button
          className=" text-white bg-green-800 xl:w-80 w-72 p-0.5 
               hover:bg-green-600 hover:text-white h-10 rounded-md
               text-base xl:text-lg cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};