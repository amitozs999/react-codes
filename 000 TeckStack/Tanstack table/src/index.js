import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "./App";

const loaderFunction = async () => {
  const response = await fetch("https://api.jikan.moe/v4/anime/20/characters");
  return await response.json();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: loaderFunction,
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
