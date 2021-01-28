import React from 'react'
import "./Carousel.css";
import Image from "../Assets/cxzcz.jpg";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
function TopDealsForYou() {
    return (
        <div className="Caursel-Box">
        <AwesomeSlider animation="cubeAnimation">
            <div data-src={Image} />
            <div data-src={Image} />
            <div data-src={Image} />
        </AwesomeSlider>
   </div>
    )
}

export default TopDealsForYou
