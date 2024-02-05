import { createContext,useContext,useReducer } from "react";
import {modalReducer} from '../reducer/index';
const initialValue={
    isSignUpModalOpen:false
};

const ModalContext = createContext(initialValue);

const ModalProvider=(children)=>{

    const [{isSignUpModalOpen},modalDispatch]=useReducer(modalReducer,initialValue)
    return(
        <ModalContext.Provider
        value={{isSignUpModalOpen,modalDispatch}}>
          {children}
        </ModalContext.Provider>
    )
};
const useModal=()=> useContext(ModalContext);

export {useModal,ModalProvider}