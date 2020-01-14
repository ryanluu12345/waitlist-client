import React, { useState } from "react";

const UserAuthContext = React.createContext([{}, () => {}]);

const UserAuthProvider = props => {
  const [state, setState] = useState({
    isLoggedIn: false,
    isAdmin: false,
    token: "",
    user: {}
  });

  return (
    <UserAuthContext.Provider value={[state, setState]}>
      {props.children}
    </UserAuthContext.Provider>
  );
};

export { UserAuthContext, UserAuthProvider };
