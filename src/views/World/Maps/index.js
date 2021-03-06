import React from 'react';
import { SPRITE_HEIGHT, SPRITE_WIDTH } from '../../../constants/index';
import './styles.css';

const getTileType = (type) => {
    switch (type) {
        case 0:
            return 'grass';
        case 4:
            return 'bricks';
        case 6:
            return 'rock';
        case 7:
            return 'treasure';
        case 9:
            return 'sword';
        default:
            return;
    }
}

const MapRows = (props) => {
    return (
        <>
            {props.tiles.map((tile, index) => {
                return <div className={`tile ${getTileType(tile)}`} key={index} style={{ height: SPRITE_HEIGHT, width: SPRITE_WIDTH }}></div>
            })}
        </>
    );
}

const Maps = (props) => {
    return (
        <div style={{
            position: 'relative',
            top: '0px',
            left: '0px',
            width: '754px',
            height: '570px',
            display: 'flex',
            flexWrap: 'wrap'
        }}
        >
            {
                props.value.map((row, index) => {
                    return <MapRows key={index} tiles={row} />
                })}
        </div>
    );
}

export default Maps;