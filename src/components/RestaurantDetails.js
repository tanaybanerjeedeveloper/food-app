import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const params = useParams();

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${params.id}`
    );
    const json = await data.json();

    setRestaurantData(json.data);
  };

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
