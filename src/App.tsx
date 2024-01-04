import { Route, Routes } from 'react-router-dom';
import './App.scss';
import TeamList from './components/pages/TeamList/TeamList';
import TeamItem from './components/pages/TeamItem/TeamItem';

function App() {
  return (
    <div className='page'>
      <Routes>
        {/* <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} /> */}
        {/* <Route element={<ProtectedRoute />}> */}
        <Route
          path='/'
          element={<TeamList />}
        />
        <Route
          path='/:id'
          element={<TeamItem />}
        />
        {/* </Route> */}
      </Routes>

      <footer></footer>
    </div>
  );
}

export default App;
