import RestaurantCard from "./RestaurantCard";
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

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
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
      <div className="res-container">
        {filteredList.map((item, index) => (
          <Link key={item.info.id} to={`/restaurants/${item.info.id}`}>
            <RestaurantCard data={item.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
