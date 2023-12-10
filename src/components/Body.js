import RestaurantCard from "./RestaurantCard";
import "../styles/body.css"
import useFetch from "../hooks/useFetch";
import { SWIGGY_RESTAURANT_API_END_POINT } from "../utils/constant";
import RestaurantCardShimmer from "./RestaurantCardShimmer"
const restaurantCardShimmerArray = new Array(16).fill(null);
const Body = () => {
    const { data: restaurants, loading } = useFetch(SWIGGY_RESTAURANT_API_END_POINT)

    if (loading) {
        return (
            <div className="body">
                <div className="restaurant-container">
                    {restaurantCardShimmerArray.map((_, index) => <RestaurantCardShimmer key={index} />)}
                </div>
            </div>

        )
    }
    return (
        <div className="body">
            <div className="restaurant-container">
                {
                    restaurants ? restaurants?.map(({ info }) => (<RestaurantCard restaurant={info} />))
                        : restaurantCardShimmerArray.map((_, index) => <RestaurantCardShimmer key={index} />)}
            </div>
        </div>

    )
}
export default Body