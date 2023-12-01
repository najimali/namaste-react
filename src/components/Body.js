import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import "../styles/body.css"
import { restaurantsMockData } from "../utils/mockData";

const restaurants = restaurantsMockData
const Body = () => {
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