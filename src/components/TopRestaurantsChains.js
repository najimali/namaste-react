import { Link } from "react-router-dom";
import "../styles/top-restaurants-chains.css"
import { CLOUDINARY__IMAGE_PREFIX } from "../utils/constant"
import GreenStarSvg from "../assets/GreenStarSvg";

const TopRestaurantsChains = ({ data }) => {
    const title = data?.card?.card?.header?.title
    const restaurants = data?.card.card?.gridElements?.infoWithStyle?.restaurants
    if (!restaurants?.length) {
        return
    }
    return (
        <div className="top-restaurants">
            <div className="header">
                {title}
            </div>
            <div className="content">
                {(restaurants).map(({ info: { id, name, cloudinaryImageId, costForTwo, avgRating, sla: { deliveryTime } } }) => (
                    <div className="top-restaurants-card" key={id}>
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
                            </div>
                        </Link>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default TopRestaurantsChains