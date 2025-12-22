// import { createContext } from "react";

// export const AuthContext=createContext();

// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   // Load user from localStorage
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem("user");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   // Login function
//   const login = (username) => {
//     const userData = { name: username };
//     setUser(userData);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   // Logout function
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook (easy access)
// export const useAuth = () => useContext(AuthContext);
