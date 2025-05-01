import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const login = async (input) => {
    await axios
      .post("http://localhost:5055/api/login", input)
      .then((res) => {
        console.log(res);
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
