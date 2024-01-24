import { CLOUDINARY__IMAGE_PREFIX, DEFAULT_FOOD_IMAGE_URL } from "../utils/constant"
import "../styles/whats-in-your-mind-carousel.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const MOVE_COUNT = 1
const MAX_RIGHT_CLICK_VALUE = 4
const MAX_LEFT_CLICK_VALUE = -2

const WhatInYourMindCarousel = ({ data }) => {
    const title = data?.card?.card?.header?.title
    const slides = data?.card?.card?.imageGridCards?.info
    if (!slides?.length) return

    const [currentSlide, setCurrentSlide] = useState(0);
    const [style, setStyle] = useState({})

    const nextSlide = () => {
        if (currentSlide < MAX_RIGHT_CLICK_VALUE) {
            if (currentSlide < 0) {
                setCurrentSlide(1);
                setStyle({ transform: `translateX(-${currentSlide * 10}%)` })
            }
            else {
                setCurrentSlide((prev) => prev + MOVE_COUNT);
                setStyle({ transform: `translateX(-${currentSlide * 10}%)` })
            }
        }
    };

    const prevSlide = () => {
        if (currentSlide > MAX_LEFT_CLICK_VALUE) {
            setCurrentSlide((prev) => prev - MOVE_COUNT);
            setStyle({ transform: `translateX(-${currentSlide * 10}%)` })
        }
    };

    return <div className="carousel-container">
        <div className="header">
            {title}
            <span className="scroll-arrow">
                <FontAwesomeIcon className="circle" icon={faArrowLeft} onClick={prevSlide}></FontAwesomeIcon>
                <FontAwesomeIcon className="circle" icon={faArrowRight} onClick={nextSlide}></FontAwesomeIcon>
            </span>
        </div>
        <div className="carousel">
            <div className="carousel-inner" style={style}>
                {slides.map(({ imageId }) => (
                    <div key={imageId}>
                        <div className="image">
                            <img src={imageId ? `${CLOUDINARY__IMAGE_PREFIX}${imageId}` : DEFAULT_FOOD_IMAGE_URL}></img>
                        </div>
                    </div>))}
            </div>
        </div>
    </div>
}

export default WhatInYourMindCarousel