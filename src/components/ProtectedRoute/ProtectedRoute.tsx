import { Navigate, Outlet } from "react-router-dom";
// import { useAppSelector } from "../../redux/store";

const ProtectedRoute = () => {
  // const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const id = localStorage.getItem('id');

  if (isLoggedIn && id) return <Outlet />;
  else  return <Navigate to="/sign-in" replace />
  // if (!isLoggedIn) return <Navigate to="/sign-in" replace />;
  return (
    <div>loading...</div>
  )
}

export default ProtectedRoute;


  
