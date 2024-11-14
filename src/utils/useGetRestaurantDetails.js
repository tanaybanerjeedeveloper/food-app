import { useEffect, useState } from "react";

const useGetRestaurantDetails = (resID) => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resID}`
    );
    const json = await data.json();

    setRestaurantData(json.data);
  };

  return restaurantData;
};

export default useGetRestaurantDetails;
