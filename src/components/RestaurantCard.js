import { Link } from "react-router-dom";
import "../styles/restaurant-card.css"
import "../../index.css"
import { CLOUDINARY__IMAGE_PREFIX } from "../utils/constant";
import GreenStarSvg from "../assets/GreenStarSvg";
const RestaurantCard = ({ restaurant }) => {
   const { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla: { deliveryTime } } = restaurant
   return (
      <div className="card">
         <Link to={`/restaurants/${id}`} className="link">
            <img src={`${CLOUDINARY__IMAGE_PREFIX}${cloudinaryImageId}`} alt="Food item" className="card-image" />
            <div className="card-content">
               <h2 className="card-title">{name}</h2>
               <div className="card-rating-cost-for-two">
                  <span className="star-rating">
                     <GreenStarSvg />
                     {`${avgRating}`}
                  </span>
                  <span>{costForTwo}</span>
               </div>
               <p className="card-subtitle">{deliveryTime} mins</p>
               <p className="card-subtitle">{cuisines?.join(", ")}</p>
            </div>
         </Link>
      </div>
   );
}
export default RestaurantCard