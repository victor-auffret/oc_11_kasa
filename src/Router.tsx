// import React from 'react'
// import ReactDOM from 'react-dom/client'
import {
 Navigate,
 createBrowserRouter,
} from "react-router-dom";

import App from './App'
import { PageNotFound } from "./pages/page-not-found";
import { PageAbout } from "./pages/page-about";
import { PageLogement } from "./pages/page-logement";
import { PageHome } from "./pages/home";
import { ErrorComponent } from "./components/error";

const router = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  errorElement: <PageNotFound />,
  children: [
   {
    path: "/",
    element: <PageHome />
   },
   {
    path: "/about",
    element: <PageAbout />
   },
   {
    path: "/logement",
    element: <PageLogement />
   },
   {
    path: "/404",
    element: <ErrorComponent />
   },
   {
    path: "/*",
    element: <Navigate to="/404" replace />
   }
  ]
 },

]);

export { router }
