import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Rockets />}
        />
        <Route
          path="missions"
          element={<Missions />}
        />
        <Route
          path="my-profile"
          element={<Profile />}
        />
        <Route
          path="*"
          element={<NoMatch />}
        />
      </Route>
    </Routes>
  );
}

export default App;
