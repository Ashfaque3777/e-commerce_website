import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminTable from "./adminPanel/AdminTable.jsx";
import ViewProduct from "./adminPanel/ViewProduct.jsx";
import AddProduct from "./adminPanel/AddProduct.jsx";
import UpdateProduct from "./adminPanel/UpdateProduct.jsx";
import AdminLayout from "./AdminLayout.jsx";
import ClientLayout from "./ClientLayout.jsx";
import Home from "./clientPanel/Home.jsx";
import Cart from "./clientPanel/Cart.jsx";
import ClientRegister from "./clientPanel/ClientRegister.jsx";
import AdminLogin from "./adminPanel/AdminLogin.jsx";
import Protected from "./Protected.jsx";
import ClientLogin from "./clientPanel/ClientLogin.jsx";

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ClientLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/clientRegister" element={<ClientRegister />} />
        <Route path="/clientLogin" element={<ClientLogin />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route
          path=""
          element={
            <Protected>
              <AdminTable />
            </Protected>
          }
        />
        <Route path="/admin/viewProduct/:id" element={<ViewProduct />} />
        <Route
          path="/admin/addProduct"
          element={
            <Protected>
              <AddProduct />
            </Protected>
          }
        />
        <Route path="/admin/updateProduct/:id" element={<UpdateProduct />} />
        <Route path="/admin/adminLogin" element={<AdminLogin />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition:Bounce
    />
  </React.StrictMode>
);
