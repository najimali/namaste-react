import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import About from "./components/About"
import Body from "./components/Body";
import { Provider, useSelector } from 'react-redux';
import { store } from "./reducer/store"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantDetail from "./components/RestaurantDetail";
import Cart from "./components/Cart";

const AppLayout = () => {
  const isCartVisible = useSelector(store => store.cart.isVisible)
  return (

    <div className="app">
      <Header />
      <Outlet />
      {isCartVisible && <Cart />}
    </div>


  )

}
const routerConfig = createBrowserRouter([

  {
    path: "/",
    element: <Provider store={store}> <AppLayout /> </Provider>,
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
      },
    ]

  },
  {
    path: "/*",
    element: <Provider store={store}> <AppLayout /> </Provider>
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={routerConfig}></RouterProvider>);