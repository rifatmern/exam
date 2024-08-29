import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import RootLayout from "./componentes/RootLayout";
import About from "./pages/Shop";
import { ContextApi } from "./componentes/ContextApi";
import { Provider } from 'react-redux'
import { store } from "./Store";
import Signup from "./componentes/Signup.jsx";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index path='/' element={<Home />}></Route>
    <Route index path='/shop' element={<About />}></Route>
    <Route index path='/contact' element={<Signup/>}></Route>

  </Route>
))

ReactDOM.createRoot(document.getElementById("root")).render(

  <ContextApi>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </ContextApi>
);
