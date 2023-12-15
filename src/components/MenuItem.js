
import "../styles/menu-item.css"
import { CLOUDINARY__IMAGE_PREFIX, NON_VEG_ICON_IMAGE, VEG_ICON_IMAGE } from "../utils/constant"

const MenuItem = ({ detail }) => {
    const { id, name, description, imageId, isVeg, defaultPrice, ratings: { aggregatedRating: { rating } } } = detail
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
                    <span>&#8377;</span> {defaultPrice / 100}</p>
                <p className="description"> {description}</p>
            </div>
            <div className="image-cart-container">
                <div>
                    <img src={`${CLOUDINARY__IMAGE_PREFIX}${imageId}`} alt="Food item" className="menu-item-image" />
                </div>
                <div className="customisable">Customisable</div>
            </div>
        </div>

    )
}
export default MenuItem