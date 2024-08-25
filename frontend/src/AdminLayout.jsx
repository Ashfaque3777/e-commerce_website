import UserContextProvider from "./context/UserContextProvider";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./adminPanel/AdminNavbar";

export default function AdminLayout() {
  return (
    <UserContextProvider>
      <AdminNavbar />
      <Outlet />
    </UserContextProvider>
  );
}
