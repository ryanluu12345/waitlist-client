import { useContext } from "react";
import { UserAuthContext } from "../../context/UserAuthContext";

const useUserAuth = () => {
  const [state, setState] = useContext(UserAuthContext);

  const loginUser = (user, token) => {
    localStorage.setItem("token", token);
    setState(state => ({ ...state, user, token, isLoggedIn: true }));
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setState(state => ({ ...state, user: {}, token: "", isLoggedIn: false }));
  };

  return {
    isLoggedIn: state.isLoggedIn,
    isAdmin: state.isAdmin,
    token: state.token,
    loginUser,
    logoutUser
  };
};

export default useUserAuth;
