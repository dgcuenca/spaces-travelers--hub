import React from 'react';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
