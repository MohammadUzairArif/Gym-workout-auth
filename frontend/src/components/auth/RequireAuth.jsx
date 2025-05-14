import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const RequireAuth = ({ children }) => {
  const { user } = useAuthContext();
  return user ? children : <Navigate to="/login" />;
};

export default RequireAuth;