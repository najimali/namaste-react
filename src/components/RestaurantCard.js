import "../styles/restaurant-card.css"
import { CLOUDINARY__IMAGE_PREFIX } from "../utils/constant";

const handleCusines = (cuisines) => {
    const cuisinesString = cuisines?.join(",")
    return cuisinesString.length > 40 ? `${cuisinesString.substring(0, 40)}...` : cuisinesString
}
const RestaurantCard = ({ restaurant }) => {
    const { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla: { deliveryTime } } = restaurant
    return (
        <div className="card" key={id}>
            <img src={`${CLOUDINARY__IMAGE_PREFIX}${cloudinaryImageId}`} alt="Food item" className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{name}</h2>

                <div className="card-rating-cost-for-two">
                    <span>⭐{`${avgRating}`}</span>
                    <span>{costForTwo}</span>
                </div>
                <p className="card-subtitle">{deliveryTime} mins</p>
                <p className="card-subtitle">{cuisines?.join(",")}</p>
            </div>
        </div>
    );
}
export default RestaurantCard