import { RotatingLines } from 'react-loader-spinner'
import { useEffect,useState } from 'react';
export const Loading =()=>{
    //loading 
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
   setLoading(true);
    setTimeout(()=>{
      setLoading(false)
        console.log(loading);
    },385)
  },[])
    return(
        <div className={"fixed top-2/4 left-2/4 translate text-slate-800 z-20"}>
    {loading&& <RotatingLines
  visible={true}
  height="55"
  width="55"
  strokeColor="currentColor"
  strokeWidth="5"
  animationDuration="0.2"
  ariaLabel="rotating-lines-loading"
  /> }
      </div>
    )
}