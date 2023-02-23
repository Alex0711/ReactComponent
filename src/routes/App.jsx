import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import getStore from "./../store/getStore"
import { Layout } from "../layout/Layout";
import Home from "../pages/home/Home";
import "./../styles/global.css"
const App = () => {
  const { store } = getStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
  );
};


export { App };
