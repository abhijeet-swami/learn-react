import { useContext, createContext, useState } from "react";

const userContext = createContext({
  name: "a",
  username: "b",
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "a",
    username: "b",
  });
  const [theme, setTheme] = useState({
    light: true,
  });
  return (
    <userContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => useContext(userContext);
