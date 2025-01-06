import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "./components/Home/Home.jsx";
import SearchContent from "./components/SearchContent.jsx";
import ResturentDetails from "./components/Home/resturentDetailsPage/ResturentDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/search",
        element: <SearchContent />,
      },
      {
        path: "home/:id",
        element: <ResturentDetails />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
