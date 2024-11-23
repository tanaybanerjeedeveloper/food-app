// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useGetRestaurantDetails from "../utils/useGetRestaurantDetails";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [indexToExpand, setIndexToExpand] = useState(0);

  const selectIndex = (index) => {
    setIndexToExpand(index);
  };

  const handleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const params = useParams();

  const restaurantData = useGetRestaurantDetails(params.id);

  if (restaurantData === null) {
    return <Shimmer />;
  }

  const { name } = restaurantData?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card;
  // console.log(
  //   restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
  const categories =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) => {
        return (
          item.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // console.log(categories);
  return (
    <div className="text-center">
      <h2 className="my-6 font-bold text-2xl">{name}</h2>
      <h3>Menu</h3>
      {categories.map((item, index) =>
        index === indexToExpand ? (
          <RestaurantCategory
            key={item.card.card.title}
            data={item.card.card}
            index={index}
            setIsExpanded={selectIndex}
            isExpanded={true}
          />
        ) : (
          <RestaurantCategory
            key={item.card.card.title}
            data={item.card.card}
            index={index}
            setIsExpanded={selectIndex}
            isExpanded={false}
          />
        )
      )}
    </div>
  );
};

export default RestaurantDetails;
