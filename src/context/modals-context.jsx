import { createContext, useContext, useState } from "react";

const initialValue = {
  isSignUpModalOpen: false,
};

const ModalContext = createContext(initialValue);

const ModalProvider = ({children}) => {
  const [isModalOpen, setIsSignUpModalOpen] = useState(false);

  const showModal = () => setIsSignUpModalOpen(true);
  const hideModal = () => setIsSignUpModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal=()=>useContext(ModalContext);
export {useModal,ModalProvider};
