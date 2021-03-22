import React from 'react';
import '../css/frostBox.css';
import '../css/animation.css';


const Splash = () => {

    return (
        <main id="splash-main" className="frost-box dissolve-appear">
            <div className="intro-group">
            <h1 className="frostbox-announce-head">Hi, I'm Scott.</h1>
            <h2 className="frostbox-announce-subhead">I'm a full-stack developer.</h2>
            <h2 className="frostbox-announce-subhead">I make computers do things.</h2>
            </div>
        </main>

    );


};

export default Splash;