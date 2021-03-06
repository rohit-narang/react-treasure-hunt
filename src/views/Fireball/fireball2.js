import React, { useEffect, useRef } from 'react';
import fireball from './Fireball.png';
import { connect } from 'react-redux';
import store from '../../store/store';
import { FIREBALL2_MOVE, GAME_OVER } from '../../actions/actionType';
import isEqual from 'lodash/isEqual';
import {withRouter} from 'react-router-dom';
const moveBall = async (props) => {
    const newPos = await getNewPos(props);
    const newPosInLimits = await observeBoundaries(props.position2, newPos.newPosition, props);
    const collapsed = await checkIfCollapsed(props);
    if(collapsed === null) return props.history.push('/gameover')
    return (store.dispatch({
        type: FIREBALL2_MOVE,
        position2: newPosInLimits
      }))
}

const checkIfCollapsed = (props) =>{
        if(isEqual(props.position2, props.playerPos)){
            store.dispatch({
                type: GAME_OVER
              });
              return null
        }

          
          else
          return;

}

const observeBoundaries = (oldpos, newPos, props) => {
    let x = newPos[0] / 58;
    let y = newPos[1] / 95;
    if (x<0 || x>11 || y<0 || y>4) {
      return oldpos;
    }
    if (newPos[0] > 696 || newPos[0] < 0 || newPos[1] < 0 || newPos[1] > 475 || props.tiles[y][x] > 1) {
      return oldpos;
    }
    return newPos;
  }  

const getNewPos = (props) => {
    const max = 4;
    const min = 1;
    const newMovementCase = Math.floor(min + Math.random() * (max + 1 - min));

    switch (newMovementCase) {
        case 1:
            return {newPosition: [props.position2[0] + 58, props.position2[1]]};

        case 2:
            return {newPosition: [props.position2[0], props.position2[1] + 95]};
        case 3:
            return {
                newPosition: [props.position2[0], props.position2[1] - 95]
            };
        case 4:
            return {
                newPosition: [props.position2[0] - 58, props.position2[1]]
            };
        default:
            return;
    }
}


function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const Fireball2 = (props) => {
    useInterval(() => {
        moveBall(props);
    }, 400);

    return (
        <div style={{
            position: 'absolute',
            backgroundImage: `url('${fireball}')`,
            top: props.position2[1],
            left: props.position2[0],
            width: '58px',
            height: '95px',
            backgroundColor: 'rgb(174, 85, 28)' 
        }} />
    );
}

const mapStateToProps = (state) => {
    return {
        ...state,
        position2: state.fireball2.position2,
        tiles: state.maps.tiles,
        playerPos: state.player.position
    }
}

export default connect(mapStateToProps)(withRouter(Fireball2));
