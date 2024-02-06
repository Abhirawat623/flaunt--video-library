
export const SignUp=()=>{

   return(
    <div className="bg-black p-2 xl:w-96 xl:h-96 h-96 w-80 mx-auto ">
        <div className=" flex flex-col items-center">
          <h2 className="text-white xl:font-bold font-bold ">Sign Up</h2> </div>
          <form
            // onSubmit={handleFormSubmit}
            className="flex flex-col items-center "  > 
              <div className=" flex flex-col items-center ">
                  <label className="text-white ml-l">Name*</label>
                  <input
                    className="input-form p-0.5 rounded-md "
                    placeholder="Enter Full Name"
                    required
                    // defaultValue={username}
                    // onChange={handleNameSignupChange}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <label className="flex flex-col text-white ml-l">E-mail*</label>
                  <input
                    className=" p-0.5 rounded-md"
                    placeholder="Enter a valid E-mail"
                    required
                    // defaultValue={email}
                    // onChange={handleEmailSignupChange}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <label className=" text-white ml-l">
                    Password*
                  </label>
                  <input
                    className=" p-0.5 rounded-md"
                    placeholder="Must be 8 letters including caps letter & special character"
                    required
                    type="password"
                    // onChange={handlePasswordSignupChange}
                    // defaultValue={password}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <label className=" text-white ml-l">
                    Confirm Password*
                  </label>
                  <input
                    className="p-0.5 rounded-md"
                    placeholder="Must be 8 letters including caps latter & special character"
                    required
                    type="password"
                    // onChange={handleConfirmPasswordSignupChange}
                    // defaultValue={confirmPassword}
                  />
                </div>
                <div className="flex flex-col items-center">
                <label className="text-white  ">
                  Mobile Number*
                </label>
                <input
                  className=" p-0.5 rounded-md"
                  placeholder="Enter Mobile Number"
                  maxLength={10}
                  required
                //   defaultValue={number}
                //   onChange={handleMobileSignupChange}
                />
                </div>
                <button className="text-black bg-purple-200">Create Account</button>
                </form>
         
          
      </div>
    )
}