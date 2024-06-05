// src/pages/RestaurantListPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { restaurants } from "../data/restaurants";

const RestaurantListPage: React.FC = () => {
  return (
    <div>
      <h1>食べログ</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantListPage;
