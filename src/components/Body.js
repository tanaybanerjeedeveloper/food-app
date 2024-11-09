import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);

        setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(restaurantList.length === 0) {
        return <Shimmer/>
    }

    return (
        <div className="body">
            <div className="search">
              <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
              <button onClick={() => {
               const filteredList = restaurantList.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()));
               setRestaurantList(filteredList);

              }}>Search</button>
            </div>
            <div className="res-container">
                {restaurantList.map((item, index) => <RestaurantCard key={item.info.id} data={item.info}/>)}
                
            </div>
        </div>
    );
};

export default Body;