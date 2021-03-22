import React from 'react';
import '../css/backgrounds.css';
import '../css/animation.css';
import bg1 from '../assets/nasa_scrshot.png'
import bg2 from '../assets/code_sk.png'
import bg3 from '../assets/skyrabble_ss.png'
import bg4 from '../assets/code_sk_trig.png'

const Backgrounds= () => {

    return (

        <div id="background-full">
            <div className="backgrounds in-from-top" id="bg-container1" style= {{backgroundImage: `url(${bg1})`}}></div>
            <div className="backgrounds in-from-bottom" id="bg-container2" style= {{backgroundImage: `url(${bg2})`}}></div>
            <div className="backgrounds in-from-top" id="bg-container3" style= {{backgroundImage: `url(${bg3})`}}></div>
            <div className="backgrounds in-from-bottom" id="bg-container4" style= {{backgroundImage: `url(${bg4})`}}></div>
        </div>
    )
}

export default Backgrounds;