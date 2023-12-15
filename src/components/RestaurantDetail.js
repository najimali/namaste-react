import { useParams } from "react-router-dom"
import { SWIGGY_RESTAURANT_DETAIL_API_END_POINT } from "../utils/constant";
import useRestaurantDetail from "../hooks/useRestaurantsDetail";
import MenuItemShimmer from "./MenuItemShimmer";
import MenuItem from "./MenuItem";
import "../styles/restaurant-details.css"
import useFetch from "../hooks/useFetch";

const menuItemShimmerArray = new Array(16).fill(null);

const RestaurantDetail = ({ }) => {
    const { id } = useParams()
    const url = `${SWIGGY_RESTAURANT_DETAIL_API_END_POINT}${id}`
    const { data, loading } = useFetch(url)

    if (loading) {
        return (
            <div className="container">
                {menuItemShimmerArray.map((_, index) => (<MenuItemShimmer key={index} />))}
            </div>
        )
    }
    const menu = data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards
    return (
        <div className="container">
            {menu?.map(({ card: { info } }) => <MenuItem detail={info} />)}
        </div>)
}
export default RestaurantDetail