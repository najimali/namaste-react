import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import "../styles/body.css"
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { SWIGGY_RESTAURANT_API_END_POINT } from "../utils/constant";
import RestaurantCardShimmer from "./ResturantCardShimmer"
const restaurantCardShimmerArray = new Array(16).fill(null);
const Body = () => {
    const { data: restaurants, loading } = useFetch(SWIGGY_RESTAURANT_API_END_POINT)

    if (loading) {
        return (
            <div className="restaurant-container">
                {restaurantCardShimmerArray.map((_, index) => <RestaurantCardShimmer key={index} />)}
            </div>
        )
    }
    return (
        <div className="body">
            <SearchBar />
            <div className="restaurant-container">
                {restaurants?.map(({ info }) => (<RestaurantCard restaurant={info} />))}
            </div>
        </div>

    )
}
export default Body