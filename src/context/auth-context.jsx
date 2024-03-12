import { useContext, useReducer, createContext } from "react";
import { authReducer } from "../reducer/auth-reducer";

const initialValue = {
  username: "",
  number: "",
  email: "",
  password: "",
  confirmedPassword: "",
  accessToken: "",
  name: "",
};
const AuthContext = createContext(initialValue);
const AuthProvider = ({ children }) => {
  const [
    { username, number, email, password, confirmedPassword, accessToken, name },
    authDispatch,
  ] = useReducer(authReducer, initialValue);
  return (
    <AuthContext.Provider
      value={{
        username,
        number,
        email,
        password,
        confirmedPassword,
        accessToken,
        name,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
