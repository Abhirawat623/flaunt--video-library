import { useState } from "react";

export const PinCode=()=>{
  const [pin, setPin] = useState("");

  

  return (
    <div className="flex flex-col items-center justify-center pt-5 bg-slate-100 ">
      
      <input className="bg-slate-700 text-white text-center w-72"  value={pin}   />
     
      <div className="flex flex-col justify-center items-center flex-wrap">
        <div className="flex flex-row ">
          <button className="h-20 w-24 bg-slate-800 text-white text-center hover:opacity-80" onClick={() => setPin((pin) => `${pin}1`)}>1</button>
          <button className="h-20 w-24 bg-slate-800 text-white text-center hover:opacity-80" onClick={() => setPin((pin) => `${pin}2`)}>2</button>
          <button className="h-20 w-24 bg-slate-800 text-white text-center hover:opacity-80" onClick={() => setPin((pin) => `${pin}3`)}>3</button>
        </div>
        <div className="flex flex-row ">
          <button className="h-20 w-24 bg-slate-800 text-white text-center hover:opacity-80" onClick={() => setPin((pin) => `${pin}4`)}>4</button>
          <button className="h-20 w-24 bg-slate-800 text-white text-center hover:opacity-80" onClick={() => setPin((pin) => `${pin}5`)}>5</button>
          <button className="h-20 w-24 bg-slate-800 text-white text-center hover:opacity-80" onClick={() => setPin((pin) => `${pin}6`)}>6</button>
        </div>
        <div className="flex flex-row  ">
          <button className="h-20 w-24 bg-slate-800 text-white text-center hover:opacity-80" onClick={() => setPin((pin) => `${pin}7`)}>7</button>
          <button className="h-20 w-24 bg-slate-800 text-white text-center hover:opacity-80" onClick={() => setPin((pin) => `${pin}8`)}>8</button>
          <button className="h-20 w-24 bg-slate-800 text-white text-center hover:opacity-80" onClick={() => setPin((pin) => `${pin}9`)}>9</button>
        </div>
        <div className="flex flex-row ">
          <button className="h-20 w-24 bg-slate-800 text-white text-center hover:opacity-80" onClick={() => setPin((pin) => pin.slice(0, pin.length - 1))}>
            -
          </button>
          <button className="h-20 w-24 bg-slate-800 text-white text-center hover:opacity-80" onClick={() => setPin(`${pin}0`)}>0</button>
          <button className="h-20 w-24 bg-slate-800 text-white text-center hover:opacity-80" onClick={() => setPin((pin) => pin.slice(0, pin.length - 1))}>C</button>
        </div>
        <div className="flex flex-row w-full">
          <button className="h-12 w-full bg-green-800 text-white text-center hover:opacity-80" >Submit</button>
      
        </div>
      </div>
    </div>
  );
}
