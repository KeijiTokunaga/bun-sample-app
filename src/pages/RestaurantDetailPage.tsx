// src/pages/RestaurantDetailPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { restaurants } from "../data/restaurants";

const RestaurantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <h1 className="text-lg font-semibold">{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <p>Latitude: {restaurant.lat}</p>
      <p>Longitude: {restaurant.lng}</p>
    </div>
  );
};

export default RestaurantDetailPage;
