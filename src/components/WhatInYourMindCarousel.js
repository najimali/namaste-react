import { CLOUDINARY__IMAGE_PREFIX } from "../utils/constant"
import "../styles/whats-in-your-mind-carousel.css"
const WhatInYourMindCarousel = ({ data }) => {
    const title = data?.card?.card?.header?.title
    const items = data?.card?.card?.imageGridCards?.info
    if (!items?.length) return
    return <div className="carousel-container">
        <div className="header">
            {title}
        </div>
        <div className="content">
            {items.map(({ imageId }) => (
            <div>
                <div className="image">
                    <img src={`${CLOUDINARY__IMAGE_PREFIX}${imageId}`}></img>
                </div>
            </div>))}
        </div>
    </div>
}

export default WhatInYourMindCarousel