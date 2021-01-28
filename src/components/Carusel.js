import React, { useEffect, useState } from "react";
import "./Carousel.css";
import Image from "../Assets/cxzcz.jpg";
import Ghee from '../Assets/GHEE.jpg';
import Detergent from '../Assets/detergent 665.jpg'
import AwesomeSlider from 'react-awesome-slider';
import JG from '../Assets/JG.jpg';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

function Carusel() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return(
        <div className="Caursel-Box">
             <AutoplaySlider
                play={true}
                cancelOnInteraction={true} // should stop playing on user interaction
                interval={2000}
            >
                <div data-src={Ghee} />
                <div data-src={Detergent} />
                <div data-src={JG} />
            </AutoplaySlider>
        </div>
    );
}

export default Carusel;
