import React, { lazy ,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";

import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";

import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import Profile from "./component/Profile";
import Shimmer from "./component/Shimmer";


const Instamart = lazy(()=>import("./component/Instamart"));


const AppLayout = () => {

  const [user,setUser]  = useState(
    {
      name:"Md Shakif Sahriar",
      email:"sakifsahriar@gmail.com"
    }
    );

  return (
    <UserContext.Provider value={{
      user:user,
    }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// async defer
root.render(<RouterProvider router={appRouter} />);
