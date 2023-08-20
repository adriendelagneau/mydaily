"use client";

import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen((prev) => (prev === false ? true : false));
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