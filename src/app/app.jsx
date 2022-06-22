import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Signin, Signup, Dashboard } from 'front/pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Signin />} />
        <Route path="/registration" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
