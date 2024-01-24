
import { useDispatch } from "react-redux"
import "../styles/menu-item.css"
import { CLOUDINARY__IMAGE_PREFIX, DEFAULT_FOOD_IMAGE_URL, NON_VEG_ICON_IMAGE, VEG_ICON_IMAGE } from "../utils/constant"
import { addItem } from '../reducer/cartSlice'

const MenuItem = ({ detail }) => {
    const { name, description, imageId, isVeg, price, defaultPrice } = detail
    const dispatch = useDispatch()
    const handleClickOnAdd = () => {
        dispatch(addItem(detail))
    }
    return (
        <div className="menu-item-container">
            <div className="menu-item-content">
                <p className={isVeg === 1 ? "veg" : "nonVeg"}>{
                    isVeg === 1 ?
                        <img className="vegImage" src={VEG_ICON_IMAGE} /> :
                        <img className="nonVegImage" src={NON_VEG_ICON_IMAGE} />
                }</p>
                <p className="name"> {name}</p>
                <p className="price">
                    <span>&#8377;</span> {(price || defaultPrice) / 100}</p>
                <p className="description"> {description}</p>
            </div>
            <div className="menu-item-container-image-container">
                <div>
                    <button onClick={handleClickOnAdd}>
                        Add
                    </button>
                    <img src={ imageId ? `${CLOUDINARY__IMAGE_PREFIX}${imageId}` : DEFAULT_FOOD_IMAGE_URL} alt="Food item" />
                </div>
                <div className="customisable">Customisable</div>
            </div>
        </div>

    )
}
export default MenuItem