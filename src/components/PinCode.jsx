import { useState } from "react";
import {useModal} from '../context/modals-context';
import { toast} from 'alert';
export const PinCode = () => {
  //pin modal
  const {setIsPinModalOpen}=useModal();
  const [pin, setPin] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setPin([
      ...pin.map((value, idx) => (idx === index ? element.value : value)),
    ]);
    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
//for pin select
const handlePinSelect=()=>{
  const pinEntered=pin.join("");
  //token from local storage
const token= localStorage.getItem("token");
if(token){
  if(pinEntered.length ===4){
    localStorage.setItem("pincode",pin.join(""))
    window.location.reload()
    }
    else{
      toast("Please provide valid pin")
    }
}
else{
  toast("Please login first")
}
}
//getting pin from local storage
const pincode= localStorage.getItem("pincode");
//handle confirmed pin verify
const handleConfirmedPinSelect=()=>{
  const pinEnter=pin.join("");
if(pinEnter.length===4){
  if(pinEnter===pincode){
    setIsPinModalOpen(false)
  }
  else{
    window.alert("Pin does'nt match")
  }
}
else{
  window.alert("Please provide valid pin")
}
}
  return (
    <div className="flex flex-col items-center justify-center pt-5 z-5 gap-y-4">
       
      <img src={"https://i.ibb.co/cT0mxtB/lock.png"} alt="lock" className="xl:h-36 md:h-36 h-24 mx-auto my-2"/>
    
      <div className="text-3xl ">Please Set Your Pin</div>
      <div className="flex flex-row justify-center items-center flex-wrap">
        {pin.map((data, index) => {
          return (
            <input
              className=" bg-slate-800 text-white mx-2 xl:w-24 w-16 h-20 text-center "
              type="text"
              name="pin"
              maxLength="1"
              key={index}
              value={data}
              onChange={(event) => {
                handleChange(event.target, index);
              }}
              onFocus={(event) => {
                event.target.select();
              }}
            />
          );
        })}
      </div>

      <div className="flex flex-col justify-center items-center gap-y-2 w-64">
        <button
          className="bg-red-800 w-full h-10 rounded-md text-white"
          onClick={(event) => {
            setPin([...pin.map((values) => "")]);
          }}
        >
          Clear Pin
        </button>
        {pincode ?(<button className="bg-green-800 w-full h-10 rounded-md text-white " onClick={handleConfirmedPinSelect}>Confirm Pin</button>):
        (<button className="bg-green-800 w-full h-10 rounded-md text-white " onClick={handlePinSelect} >Set Pin</button>)}
        
      </div>
    </div>
  );
};
