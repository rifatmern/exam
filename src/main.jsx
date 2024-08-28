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


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index path='/' element={<Home />}></Route>
    <Route index path='/shop' element={<About />}></Route>
  </Route>
))

ReactDOM.createRoot(document.getElementById("root")).render(

  <ContextApi>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </ContextApi>



);