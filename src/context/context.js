import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (username, password) => {
    const res = await axios.post("/api/login", { username, password });
    setCurrentUser(res.data);

    // Set the expiration date to 30 days from now
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);

    // Store user data along with the expiration date in localStorage
    localStorage.setItem("user", JSON.stringify({ data: res.data, expiration: expirationDate }));
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData && new Date(userData.expiration) > new Date()) {
      setCurrentUser(userData.data);
    } else {
      localStorage.removeItem("user"); // Clear expired user data
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};