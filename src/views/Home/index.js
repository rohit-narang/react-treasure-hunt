import React from 'react';
import Banner from './banner.jpg';
import { Image } from 'semantic-ui-react';
import playButton from './playButton.png';
import { Link } from 'react-router-dom';

const Home = () => {
    const divStyle = {
        backgroundImage: "url(" + Banner + ")",
        backgroundSize: 'cover'
    };
    return (
        <>
            <style>
                {`
                        body > div,
                        body > div > div,
                        body > div > div.myBanner {
                            height: 100%
                        }
                        `}
            </style>
            <div style={divStyle} className="myBanner">
                <Link to='/play'>
                <Image src={playButton} style={{left: '45%', top:'60%', position: 'absolute'}}/>
                </Link>
            </div>
        </>
    );
}

export default Home;
