import React from "react";
import { Navigate, useLocation } from "react-router-dom";
function PrivateRoute({ isSignedIn, children }) {
  const location = useLocation();
  if (!isSignedIn) {
    return <Navigate to="/admin" replace state={{ from: location.pathname }} />;
  }
  return children;
}
export default PrivateRoute;
