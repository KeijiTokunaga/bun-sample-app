// src/pages/RestaurantListPage.tsx
import React from "react";

const TestPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">Card 1</div>
        <div className="p-4 bg-white shadow rounded-lg">Card 2</div>
        <div className="p-4 bg-white shadow rounded-lg">Card 3</div>
      </div>
    </div>
  );
};
export default TestPage;
