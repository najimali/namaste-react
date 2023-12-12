import RestaurantCard from "./RestaurantCard";
import "../styles/body.css"
import useFetch from "../hooks/useFetch";
import { SWIGGY_RESTAURANT_API_END_POINT } from "../utils/constant";
import RestaurantCardShimmer from "./RestaurantCardShimmer"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const restaurantCardShimmerArray = new Array(16).fill(null);
const Body = () => {
    const { data: restaurants } = useFetch(SWIGGY_RESTAURANT_API_END_POINT)
    const [filterRestaurants, setFilteredRestaurants] = useState(null)
    const searchText = useSelector((state) => state.search.text);
    useEffect(() => {
        if (restaurants?.length) {
            setFilteredRestaurants(restaurants)
        }
    }, [restaurants])
    useEffect(() => {
        if (searchText && restaurants) {
            const searchTextLowerCase = searchText.toLowerCase()
            const tempFilteringRestaurants = restaurants.filter(({ info: { name, cuisines } }) => {
                const cuisinesString = cuisines?.join(",").toLowerCase()
                return name.toLowerCase().includes(searchText.toLowerCase())
                    || cuisinesString.includes(searchTextLowerCase)
            }

            )
            setFilteredRestaurants(tempFilteringRestaurants)
        }
        else {
            setFilteredRestaurants(restaurants)
        }
    }, [searchText])
    return (
        <div className="body">
            <div className="restaurant-container">
                {
                    filterRestaurants ? filterRestaurants?.map(({ info }) => (<RestaurantCard restaurant={info} />))
                        : restaurantCardShimmerArray.map((_, index) => <RestaurantCardShimmer key={index} />)}
            </div>
        </div>

    )
}
export default Body