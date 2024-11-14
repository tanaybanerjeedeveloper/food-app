// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useGetRestaurantDetails from "../utils/useGetRestaurantDetails";

const RestaurantDetails = () => {
  const params = useParams();

  const restaurantData = useGetRestaurantDetails(params.id);

  if (restaurantData === null) {
    return <Shimmer />;
  }

  const { name } = restaurantData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log(itemCards);

  return (
    <div>
      <h2>{name}</h2>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetails;
