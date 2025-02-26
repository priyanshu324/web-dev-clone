import React, { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

const decodeJwt = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
};
const isTokenExpired = (token) => {
  if (!token) return true; // If there is no token so the user is not log in
  try {
    const decoded = decodeJwt(token); //decode the token
    if (!decoded || !decoded.exp) return true; // If not decoded or no expiration value so we consider it expired
    const currentTime = Math.floor(Date.now() / 1000); //Get the current time in seconds
    return decoded.exp < currentTime; // return if the expiration date is less than current time
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return true; // If the token fail to decode we also consider it expired.
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Hook for navigation
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (!isTokenExpired(user.credential)) {
        setUser(user);
      } else {
        localStorage.removeItem("user"); // if token expired remove the user from localstorage.
      }
    }
  }, []);
  const login = (userData) => {
    setUser(userData);
  };
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
