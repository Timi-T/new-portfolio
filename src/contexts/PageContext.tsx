import React, { createContext, useContext, useEffect, useState } from "react";
import { PageId } from "../components/Nav/Nav";

const PageContext: React.Context<any> = createContext("");

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [activePage, setActivePage] = useState<PageId>("home-page-1");
  const [windowScroll, setWindowScroll] = useState<boolean>(false);
  const [displayProjectOnLoad, setDisplayProjectOnLoad] = useState("");

  return (
    <PageContext.Provider
      value={{
        activePage,
        setActivePage,
        windowScroll,
        setWindowScroll,
        displayProjectOnLoad,
        setDisplayProjectOnLoad,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
