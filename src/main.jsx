import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Landing from "./components/Pages/Landing.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Login from "./components/Pages/Login.jsx";
import { Signup } from "./components/Pages/Signup.jsx";
import ProtectedRoutes from "./components/Pages/ProtectedRoutes.jsx";
import { Todos } from "./components/Pages/Todos.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
      <Route index element={<Landing />} />
      <Route path="/auth" element={<Signup />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/todos" element={<ProtectedRoutes Components={Todos} />} />
    </Route>
));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
