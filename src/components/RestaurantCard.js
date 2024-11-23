import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { data } = props;
  const { name, cuisines, avgRating, sla } = data;
  return (
    <div className="m-4 p-4 w-52 bg-gray-200 hover:bg-gray-400">
      <img alt="res-logo" src={`${CDN_URL}${data.cloudinaryImageId}`} />
      <h3 className="font-bold">{name}</h3>
      <h4 className="font-medium">{cuisines.join(", ")}</h4>
      <h4 className="font-semibold">{`${avgRating} stars`}</h4>
      <h4>{`${sla.deliveryTime} mins`}</h4>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    const { data } = props;
    return (
      <div>
        <div className="absolute bg-green-200 px-4 py-2 rounded-lg">Veg</div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
