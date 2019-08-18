import React from 'react';
import { Image } from 'semantic-ui-react';
import gameOver from './back11.jpg';
import playButton from './playButton.png';
import { Link } from 'react-router-dom';

const Gameover = () => {
    const divStyle = {
        backgroundImage: "url(" + gameOver + ")",
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
                <h1 style={{color: 'white', left: '35%', top:'40%', fontSize:'5rem', position: 'absolute'}}>GAME OVER</h1>
                <Link to='/play'>
                <Image src={playButton} style={{left: '45%', top:'60%', position: 'absolute'}}/>
                </Link>
            </div>
        </>
    );
}

export default Gameover;
