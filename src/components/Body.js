import RestaurantCard from "./RestaurantCard";
import "../styles/body.css"
import useFetch from "../hooks/useFetch";
import { DEFAULT_LAT_LANG, SWIGGY_RESTAURANT_API_END_POINT } from "../utils/constant";
import RestaurantCardShimmer from "./RestaurantCardShimmer"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WhatInYourMindCarousel from "./WhatInYourMindCarousel";
import TopRestaurantsChains from "./TopRestaurantsChains";
const restaurantCardShimmerArray = new Array(16).fill(null);

const Body = () => {
    const [restaurantUrl, setRestaurantUrl]  = useState(`${SWIGGY_RESTAURANT_API_END_POINT}${DEFAULT_LAT_LANG}`)
    const { data } = useFetch(restaurantUrl)
    const whatsInYourMindData = data?.cards[0]
    const topRestaurantsChains = data?.cards[1]
    const title = data?.cards[2]?.card?.card?.title
    const restaurants = data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    
    const [filterRestaurants, setFilteredRestaurants] = useState(null)
    const searchText = useSelector((store) => store.search.text);
    const currentAddress = useSelector((store) => store.location.address);
    useEffect(() => {
        if (currentAddress?.geometry) {
            const { geometry : { location: { lat, lng } } } = currentAddress
            const newUrl = `${SWIGGY_RESTAURANT_API_END_POINT}&lat=${lat}&lng=${lng}`
            setRestaurantUrl(newUrl)
        }
    }, [currentAddress])
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
            <WhatInYourMindCarousel
                data={whatsInYourMindData}
            />
            <TopRestaurantsChains
                data={topRestaurantsChains}
            />
            <div className="restaurant-container">
                <div className="header">
                    {title}
                </div>
                <div className="content">
                    {
                        filterRestaurants ? filterRestaurants?.map(({ info }) => (<RestaurantCard restaurant={info} key={info.id} />))
                            : restaurantCardShimmerArray.map((_, index) => <RestaurantCardShimmer key={index} />)
                    }
                </div>

            </div>
        </div>

    )
}
export default Body