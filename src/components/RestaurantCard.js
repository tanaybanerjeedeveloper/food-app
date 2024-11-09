import {CDN_URL} from '../utils/constants';

const RestaurantCard = (props) =>{
    const {data} = props;
    const {name, cuisines, avgRating, sla } = data;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={`${CDN_URL}${data.cloudinaryImageId}`} />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{`${avgRating} stars`}</h4>
            <h4>{`${sla.deliveryTime} mins`}</h4>
        </div>
    
    );
} 

export default RestaurantCard;