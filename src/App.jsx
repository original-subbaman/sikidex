import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import PostEvent from "./pages/PostEvent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        { path: "postEvent", element: <PostEvent /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
