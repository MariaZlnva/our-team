import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import TeamList from "./components/pages/TeamList/TeamList";
import TeamItem from "./components/pages/TeamItem/TeamItem";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else navigate("/sign-in");
  }, []);

  return (
    <div className="page">
      <Routes>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<TeamList />} />
          <Route path="/:id" element={<TeamItem />} />
        </Route>
      </Routes>

      <footer></footer>
    </div>
  );
}

export default App;
