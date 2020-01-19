import { useContext } from "react";
import { UserAuthContext } from "../../context/UserAuthContext";

const useUserAuth = () => {
  const [state, setState] = useContext(UserAuthContext);

  const loginUser = (user, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setState(state => ({ ...state, user, token, isLoggedIn: true }));
  };

  const loginUserByLocalToken = () => {
    const token = localStorage.getItem("token");
    let user = localStorage.getItem("user");

    if (!token || !user) return;

    user = JSON.parse(user);
    setState(state => ({ ...state, user, token, isLoggedIn: true }));
  };

  const loginUserByServerToken = () => {
    //todo
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setState(state => ({ ...state, user: {}, token: "", isLoggedIn: false }));
  };

  return {
    isLoggedIn: state.isLoggedIn,
    isAdmin: state.isAdmin,
    token: state.token,
    user: state.user,
    loginUser,
    loginUserByLocalToken,
    loginUserByServerToken,
    logoutUser
  };
};

export default useUserAuth;
