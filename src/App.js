import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import About from "./components/About"
import Body from "./components/Body";
import { Provider } from 'react-redux';
import { store } from "./reducer/store"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantDetail from "./components/RestaurantDetail";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>

  )

}
const routerConfig = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: < Body />
      },
      {
        path: "/restaurants/:id",
        element: < RestaurantDetail />
      },
      {
        path: "/about",
        element: < About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]

  },
  {
    path: "/*",
    element: <AppLayout />
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={routerConfig}></RouterProvider>);