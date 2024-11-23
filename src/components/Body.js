import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useGetOnlineStatus from "../utils/useGetOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(restaurantList);
  console.log(filteredList);

  const onlineStatus = useGetOnlineStatus();

  if (onlineStatus === false) {
    return <p>No internet connection</p>;
  }

  if (restaurantList.length === 0 || filteredList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="my-5 flex justify-center">
        <input
          type="text"
          className="border border-solid border-blue-400"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="mx-4 px-4 py-2 bg-green-200"
          onClick={() => {
            const filteredList = restaurantList.filter((item) =>
              item.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredList(filteredList);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((item, index) => (
          <Link key={item.info.id} to={`/restaurants/${item.info.id}`}>
            {item.info.veg ? (
              <RestaurantCardVeg data={item.info} />
            ) : (
              <RestaurantCard data={item.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
