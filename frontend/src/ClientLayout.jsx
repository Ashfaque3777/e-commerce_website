import { Outlet } from "react-router-dom";
import ClientNavbar from "./clientPanel/ClientNavbar";
import UserContextProvider from "./context/UserContextProvider";

export default function ClientLayout() {
  return (
    <UserContextProvider>
      <ClientNavbar />
      <Outlet />
    </UserContextProvider>
  );
}
