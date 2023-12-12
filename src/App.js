import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from 'react-redux';
import { store } from "./reducer/store"

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Body />
      </div>
    </Provider>

  )

}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout></AppLayout>);