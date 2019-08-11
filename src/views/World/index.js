import React, {useEffect} from 'react';
import Player from '../Player';
import Maps from './Maps';
import store from '../../store/store';
import {connect} from 'react-redux';
import {ADD_TILES} from '../../actions/actionType';
import {tiles} from '../../data/Maps/1';
const World = (props) => {
    useEffect(()=>{
        store.dispatch({type: 'ADD_TILES', payload: tiles})
    })
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
            <Maps value={props.tiles}/>
        </div>
    );
}
const mapStateToProps = (state) => {
    return{
        tiles: state.maps.tiles
    } 
}
export default connect(mapStateToProps)(World);
