import React, { useState } from "react";

export const MenuContext = React.createContext({
  isMenuShown: false,
  setIsMenuShown: () => {},
  isDark: false,
  setIsDark: (bool) => {},
});

export const MenuContextProvider = ({ children }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const menuHandler = () => {
    setIsMenuShown((prevstate) => !prevstate);
  };

  const darkHandler = (bool) => {
    setIsDark(bool);
  };

  return (
    <MenuContext.Provider
      value={{
        isMenuShown: isMenuShown,
        setIsMenuShown: menuHandler,
        isDark: isDark,
        setIsDark: darkHandler,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
