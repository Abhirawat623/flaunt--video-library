import { createContext, useContext, useState } from "react";
const initialValue = {
  isSignUpModalOpen: false,
};
const ModalContext = createContext(initialValue);
const ModalProvider = ({ children }) => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isPinModalOpen, setIsPinModalOpen] = useState(true);
  const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        isSignUpModalOpen,
        isLoginModalOpen,
        setIsSignUpModalOpen,
        setIsLoginModalOpen,
        isPinModalOpen,
        setIsPinModalOpen,
        isPlaylistModalOpen,
        setIsPlaylistModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
const useModal = () => useContext(ModalContext);
export { useModal, ModalProvider };
