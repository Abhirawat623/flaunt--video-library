import { Navbar } from "../components/Navbar";
import { SignUp } from "../components/Signup";
import { Login } from "../components/Login";
import { BottomBar } from "../components/BottomBar";
import {LikesContainer} from "../components/LikesContainer";
import { Skeleton } from "../components/Skeleton";

import { useModal } from "../context/modals-context";
import { useEffect, useState } from "react";
export const LikesPage = () => {
  //modal context
  const { isSignUpModalOpen, isLoginModalOpen } = useModal();
  //skeleton
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 850);
  }, []);
  //token
  const token = localStorage.getItem("token");
  return (
    <div className="bg-blue">
      <Navbar />
      <BottomBar />
      {isSignUpModalOpen && <SignUp />}
      {isLoginModalOpen && <Login />}
      <div className="flex flex-row sticky top-0  bg-zinc-800 text-white flex-wrap p-0.5 xl:p-1 z-10 h-12 w-full bottom-0 justify-center items-center ">
        <p className="text-2xl">Liked Videos</p>
      </div>
      {token ?(loading ? <Skeleton />:<LikesContainer />):(  <img src="https://i.ibb.co/16JPSyB/OIG4-w4j-LUt3dqi-JG-ZE11-removebg-preview.png" className="absolute top-1/2 left-1/2 translate z-15"/>)}
    </div>
  );
};
