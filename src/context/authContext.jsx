import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("loginUser") || null)
  );
  console.log(currentUser, "currentUser");

  const login = async (input) => {
    // await axios
    //   .post("http://localhost:5055/api/login", input)
    //   .then((res) => {
    //     console.log(res);
    //     setCurrentUser(res.data);
    //     return res;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const res = await axios.post("http://localhost:5055/api/login", input);
    console.log(res);
    setCurrentUser(res.data);
    return res;
  };

  const logout = () => {
    localStorage.removeItem("loginUser");
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("loginUser", JSON.stringify(currentUser));
    }
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
