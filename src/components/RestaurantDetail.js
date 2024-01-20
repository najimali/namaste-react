import { useParams } from "react-router-dom"
import { SWIGGY_RESTAURANT_DETAIL_API_END_POINT, categoryType } from "../utils/constant";
import MenuItemShimmer from "./MenuItemShimmer";
import "../styles/restaurant-details.css"
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";

const menuItemShimmerArray = new Array(16).fill(null);

const RestaurantDetail = ({ }) => {
    const { id } = useParams()
    const url = `${SWIGGY_RESTAURANT_DETAIL_API_END_POINT}${id}`
    const { data } = useFetch(url)
    const [menuItemCatgory, setMenuItemCategory] = useState(null)
    const [showIndex, setShowIndex] = useState(0)
    
    useEffect(() => {
        if (data) {
            const itemCategory = data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(({ card: { card } }) => {
                return card['@type'] === categoryType.ITEM_CATEGORY || card['@type'] === categoryType.NESTED_ITEM_CATEGORY
            });
            setMenuItemCategory(itemCategory)
        }
    }, [data])
    if (!menuItemCatgory) {
        return <div className="container">
            {menuItemShimmerArray.map((_, index) => <MenuItemShimmer key={index} />)}
        </div>
    }
    const handleCategoryClick = (index) => {
        index === showIndex ? setShowIndex(null) : setShowIndex(index);

    };
    return (
        <div className="container">
            {menuItemCatgory.map((category, index) =>
                <MenuCategory
                    data={category.card.card}
                    key={index}
                    index={index}
                    showItemsList={index === showIndex}
                    onCategoryClick={() => handleCategoryClick(index)}
                />)}
        </div>)
}
export default RestaurantDetail