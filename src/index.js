// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Body from "./components/Body";
import About from "./components/About";
import Bollywood from "./components/Bollywood";
import Services from "./components/Services";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Benifits from "./components/Benifits";
import Gallery from "./components/Gallery";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/bollywood",
        element: <Bollywood />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/benifits",
        element: <Benifits />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

reportWebVitals();