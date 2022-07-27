import React, {useState, useEffect} from "react";
import slide1 from '../../image/slide1.jpg'
import slide2 from '../../image/slide2.jpg'
import slide3 from '../../image/slide3.jpg'
import slide4 from '../../image/slide4.jpg'
import slide5 from '../../image/slide5.jpg'
import slide6 from '../../image/slide6.jpg'
import slide7 from '../../image/slide7.jpg'
import slide8 from '../../image/slide8.jpg'
import slide9 from '../../image/slide9.jpg'
import './Carousel.modules.css'

const img = [
    <img key={slide1} src={slide1} alt="x"/>,
    <img key={slide2} src={slide2} alt="x"/>,
    <img key={slide3} src={slide3} alt="x"/>,
    <img key={slide4} src={slide4} alt="x"/>,
    <img key={slide5} src={slide5} alt="x"/>,
    <img key={slide6} src={slide6} alt="x"/>,
    <img key={slide7} src={slide7} alt="x"/>,
    <img key={slide8} src={slide8} alt="x"/>,
    <img key={slide9} src={slide9} alt="x"/>,
]

export function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {

        const interval = setInterval(() => {

            setActiveIndex((current) => {

                const res = current === img.length - 1 ? 0 : current + 1

                return res
            })
        }, 3000)

        return () => clearInterval()
    }, [])

    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

    return (
        <div className="slider">
            <div className="slider-img slider-img-prev"
                 key={prevImgIndex}>
                {img[prevImgIndex]}
            </div>
            <div className="slider-img"
                 key={activeIndex}>
                {img[activeIndex]}
            </div>
            <div className="slider-img slider-img-next"
                 key={nextImgIndex}>
                {img[nextImgIndex]}
            </div>
        </div>
    )

}

export default Slider;