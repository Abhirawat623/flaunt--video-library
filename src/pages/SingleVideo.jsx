import { useEffect, useState } from "react";
import { Navbar,SignUp,Loginpage, CategoriesContainer, BottomBar } from "../components/index";
import {useModal} from '../context/modals-context';
import { useParams } from "react-router-dom";
import axios  from "axios";
export const SingleVideo = () => {

  //for single video
  const [singleVideo, setSingleVideo] = useState({});
  //for id from router
  
  const {ide} = useParams();
       //modal context
       const {isSignUpModalOpen ,isLoginModalOpen}=useModal();
       console.log(ide)

  useEffect(() => {
    (async () => {
      try {
        const  {data} = await axios.get(
          `https://flaunt-up-video-library-backend.vercel.app/api/videos/${ide}`
        );
        console.log("single" +data);
        setSingleVideo(data);
        
      } catch (err) {
        console.log(err);
      }
    })();
  }, [ide]);

  const { description, id,title, category} = singleVideo;
  return (

    <div className="bg-blue">
    <Navbar/>
    
    {isSignUpModalOpen && <SignUp/>}
    {isLoginModalOpen && <Loginpage/>}
    <BottomBar/>
    <CategoriesContainer/>
    <div
      className="max-w-md mx-auto bg-white rounded-l shadow-xl 
         overflow-hidden md:max-w-4xl md:max-h-4xl z-0 "
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title="video"
              width="560"
              height="315"
              allowFullScreen
              src={`https://www.youtube.com/embed/${id}`}
            ></iframe>
          </div>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {description}
          </a>
          <p className="mt-2 text-gray-500">{category}</p>
        </div>
      </div>
    </div>
   
    
    
  </div>




   
  );
};
