import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MenuItem from "./MenuItem"
import "../styles/menu-category.css"

const MenuCategory = ({ data, showItemsList, onCategoryClick }) => {
    const { title } = data
    const itemCards = data?.itemCards || data?.categories[0]?.itemCards || []
    return (
        <div className="menu-category-container">
            <div className="menu-category-content" onClick={onCategoryClick}>
                <span className="menu-category-content-title">{`${title} (${itemCards.length})`}</span>
                <span className="menu-category-content-icon"><FontAwesomeIcon icon={faChevronDown} /></span>
            </div>
            {showItemsList && itemCards.map(({ card: { info } }, index) => (<MenuItem detail={info} key={info.id || index}></MenuItem>))}

        </div>
    )
}
export default MenuCategory