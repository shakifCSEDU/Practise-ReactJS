import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./component/About";
import contact from "./component/contact";
import error from "./component/error";



const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<contact/>,
      },
    ],
  },
  
]);








const root = ReactDOM.createRoot(document.getElementById("root"));

// async defer
root.render(<RouterProvider router={appRouter}/>);
