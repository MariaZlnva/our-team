import { Route, Routes } from "react-router-dom";
import "./App.scss";
import TeamList from "./components/pages/TeamList/TeamList";
import TeamItem from "./components/pages/TeamItem/TeamItem";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  // const isLoggedIn = localStorage.getItem('token');

  return (
    <div className="page">
      <Routes>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/users" element={<TeamList />} />
          <Route path="/users/:id" element={<TeamItem />} />
        </Route>
      </Routes>

      <footer></footer>
    </div>
  );
}

export default App;
