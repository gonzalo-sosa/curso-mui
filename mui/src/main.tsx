import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Fonts for MUI
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Router
import { RouterProvider } from "react-router";
import router from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
