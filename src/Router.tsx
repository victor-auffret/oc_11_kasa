// import React from 'react'
// import ReactDOM from 'react-dom/client'
import {
 Navigate,
 createBrowserRouter,
} from "react-router-dom";

import App from './App'
import { PageNotFound } from "./pages/page-not-found";
import { PageAbout } from "./pages/about/index";
import { PageLogement } from "./pages/logement/index";
import { PageHome } from "./pages/home/index";
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
    path: "/logement/:id",
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
