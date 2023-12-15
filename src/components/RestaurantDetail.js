import { useParams } from "react-router-dom"
import { SWIGGY_RESTAURANT_DETAIL_API_END_POINT, categoryType } from "../utils/constant";
import MenuItemShimmer from "./MenuItemShimmer";
import MenuItem from "./MenuItem";
import "../styles/restaurant-details.css"
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

const menuItemShimmerArray = new Array(16).fill(null);

const RestaurantDetail = ({ }) => {
    const { id } = useParams()
    const url = `${SWIGGY_RESTAURANT_DETAIL_API_END_POINT}${id}`
    const { data } = useFetch(url)
    const [menuItem, setMenuItem] = useState()

    useEffect(() => {
        if (data) {
            const itemCategory = data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(({ card: { card } }) => {
                return card['@type'] === categoryType.ITEM_CATEGORY
            });
            setMenuItem(itemCategory.flatMap(category => category.card.card.itemCards))
        }
    }, [data])
    return (
        <div className="container">
            {menuItem ? menuItem.map(({ card: { info } }) => <MenuItem detail={info} />) :
                menuItemShimmerArray.map((_, index) => (<MenuItemShimmer key={index} />))}
        </div>)
}
export default RestaurantDetail