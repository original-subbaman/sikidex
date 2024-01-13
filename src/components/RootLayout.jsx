import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
function RootLayout(props) {
  return (
    <>
      <MainNavigation />
      <main className="w-full h-full">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
