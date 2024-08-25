import { useContext } from "react";
import { Navigate } from "react-router-dom";
import userContext from "./context/userContext";

export default function Protected({ children }) {
  let { isAdminLogin } = useContext(userContext);

  if (isAdminLogin) {
    return children;
  } else {
    return <Navigate to="/admin/adminLogin" />;
  }
}
