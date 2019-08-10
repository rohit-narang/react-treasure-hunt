import React from 'react';
import Player from '../Player';
import Maps from './Maps';
import {tiles} from '../../data/Maps/1/index';
const World = () => {
    return (
        <div style={{
            position: 'relative',
            width: '754px',
            height: '570px',
            backgroundColor: 'white',
            border: '4px solid black',
            margin: 'auto'
        }}>
            <Player />
            <Maps value={tiles}/>
        </div>
    );
}

export default World;
