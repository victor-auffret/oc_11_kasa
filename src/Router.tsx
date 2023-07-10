// import React from 'react'
// import ReactDOM from 'react-dom/client'
import {
 createBrowserRouter,
} from "react-router-dom";

import App from './App'
import { PageNotFound } from "./pages/page-not-found";
import { PageAbout } from "./pages/page-about";
import { PageLogement } from "./pages/page-logement";
import { PageHome } from "./pages/home";

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
    element: <div>erreur 404</div>
   },
   {
    path: "/*",
    element: <div>erreur 404</div>
   }
  ]
 },

]);

export { router }
