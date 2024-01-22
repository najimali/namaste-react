import RestaurantCard from "./RestaurantCard"
import RestaurantCardShimmer from "./RestaurantCardShimmer"
const restaurantCardShimmerArray = new Array(16).fill(null);
const RestaurantContainer = ({ title, data }) => {
    const restaurants = data?.card?.card?.gridElements?.infoWithStyle?.restaurants
    
    return (<div className="restaurant-container">
        <div className="header">
            {title}
        </div>
        <div className="content">
            {
                restaurants ? restaurants?.map(({ info }) => (<RestaurantCard restaurant={info} key={info.id} />))
                    : restaurantCardShimmerArray.map((_, index) => <RestaurantCardShimmer key={index} />)
            }
        </div>
    </div>)
}

export default RestaurantContainer