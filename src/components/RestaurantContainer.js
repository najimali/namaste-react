import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard"
import RestaurantCardShimmer from "./RestaurantCardShimmer"
import { useEffect, useState } from "react";
const restaurantCardShimmerArray = new Array(16).fill(null);
const RestaurantContainer = ({ title, data }) => {
    const restaurants = data?.card?.card?.gridElements?.infoWithStyle?.restaurants
    const [filterRestaurants, setFilteredRestaurants] = useState(null)
    useEffect(() => {
        if (restaurants) {
            setFilteredRestaurants(restaurants)
        }
    }, [restaurants])
    const searchText = useSelector((store) => store.search.text);
    
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
    return (<div className="restaurant-container">
        <div className="header">
            {title}
        </div>
        <div className="content">
            {
                filterRestaurants ? filterRestaurants?.map(({ info }) => (<RestaurantCard restaurant={info} key={info.id} />))
                    : restaurantCardShimmerArray.map((_, index) => <RestaurantCardShimmer key={index} />)
            }
        </div>
    </div>)
}

export default RestaurantContainer