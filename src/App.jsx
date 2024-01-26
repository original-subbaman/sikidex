import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import PostEvent from "./pages/PostEvent";
import PostDetail from "./pages/PostDetail";

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
        {
          path: "/post-detail/:postId",
          element: <PostDetail />,
        },
        { path: "postEvent", element: <PostEvent /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
