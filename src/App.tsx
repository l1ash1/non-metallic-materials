import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes, IRoute } from 'router/routes';

export default function App() {
  return (
    <Routes>
      {Object.values(AppRoutes).map(({ Component, path }: IRoute) => (
        <Route key={path}>
          <Route path={path} element={<Component />} />М
        </Route>
      ))}
    </Routes>
  );
}
