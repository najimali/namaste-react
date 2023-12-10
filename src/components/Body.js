import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import "../styles/body.css"
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { SWIGGY_RESTAURANT_API_END_POINT } from "../utils/constant";
import Shimmer from "./Shimmer";
const shimmerArray = new Array(9).fill(null);
const Body = () => {
    const { data: restaurants, loading } = useFetch(SWIGGY_RESTAURANT_API_END_POINT)

    if (loading) {
        return (<div className="restaurant-container">
            {shimmerArray.map((_, index) => <Shimmer key={index} />)}
        </div>
        )
    }
    return (
        <div className="body">
            <SearchBar />
            <div className="restaurant-container">
                {restaurants.map(({ info }) => (<RestaurantCard restaurant={info} />))}
            </div>
        </div>

    )
}
export default Body