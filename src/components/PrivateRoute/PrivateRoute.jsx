import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router";

const PrivateRoute = ({ children }) => {
  const { id } = useSelector((state) => state.auth);

  return id ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
