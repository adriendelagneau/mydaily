"use client";

import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen((prev) => (!prev));
    console.log("zz", isOpen)
  };
  
    const closeMenu = () => {
      setIsOpen(false);
    };
  
    return (
      <MenuContext.Provider value={{ toggle, closeMenu, isOpen }}>
        <div>{children}</div>
      </MenuContext.Provider>
    );
  };