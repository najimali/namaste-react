import { Link } from "react-router-dom";
import "../styles/top-restaurants-chains.css"
import { CLOUDINARY__IMAGE_PREFIX } from "../utils/constant"
import GreenStarSvg from "../assets/GreenStarSvg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const TopRestaurantsChains = ({ data }) => {
    const title = data?.card?.card?.header?.title
    const restaurants = data?.card.card?.gridElements?.infoWithStyle?.restaurants
    if (!restaurants?.length) {
        return
    }

    const [filterRestaurants, setFilteredRestaurants] = useState([])
    const searchText = useSelector((store) => store.search.text);
    useEffect(() => {
        if (restaurants?.length) {
            setFilteredRestaurants(restaurants)
        }
    }, [restaurants])

    useEffect(() => {
        if (searchText && restaurants) {
            const searchTextLowerCase = searchText.toLowerCase()
            const tempFilteringRestaurants = restaurants.filter(({ info: { name } }) => name.toLowerCase().includes(searchTextLowerCase))
            setFilteredRestaurants(tempFilteringRestaurants)
        }
        else {
            setFilteredRestaurants(restaurants)
        }
    }, [searchText])
    return (
        <div className="top-restaurants">
            <div className="header">
                {title}
            </div>
            <div className="content">
                {(filterRestaurants || []).map(({ info: { id, name, cloudinaryImageId, costForTwo, avgRating, sla: { deliveryTime } } }) => (
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