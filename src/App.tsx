// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestaurantListPage from "./pages/RestaurantListPage";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/restaurant/:id" Component={RestaurantDetailPage} />
      <Route path="/" Component={RestaurantListPage} />
    </Routes>
  </Router>
);

export default App;
