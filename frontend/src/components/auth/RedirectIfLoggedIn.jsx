import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const RedirectIfLoggedIn = ({ children }) => {
  const { user } = useAuthContext();
  return !user ? children : <Navigate to="/" />;
};

export default RedirectIfLoggedIn;