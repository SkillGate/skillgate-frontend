"use client";

import React, { useEffect } from "react";
import { Router } from "next/router";
import StoreProvider, { useAppSelector } from "./redux";
import MainNavbar from "./(components)/landing/Navbar";
import { AnimatePresence } from "framer-motion";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "./globals.css";

const DashboardLayout = ({ children }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  // const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.add("light");
  //   }
  // });

  return (
    <div>
      <MainNavbar />
      {children}
    </div>
  );
};

const DashboardWrapper = ({ children }) => {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  NProgress;
  return (
    <StoreProvider>
      <AnimatePresence>
        <DashboardLayout>{children}</DashboardLayout>
      </AnimatePresence>
    </StoreProvider>
  );
};

export default DashboardWrapper;
