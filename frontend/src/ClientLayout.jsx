import UserContextProvider from "./context/UserContextProvider";
import { Outlet } from "react-router-dom";
import ClientNavbar from "./clientPanel/ClientNavbar";

export default function ClientLayout() {
  return (
    <UserContextProvider>
      <ClientNavbar />
      <Outlet />
    </UserContextProvider>
  );
}
