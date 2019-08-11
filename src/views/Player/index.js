import React, { useEffect } from 'react';
import playerWalk from './myplayer.png';
import { MOVE_NORTH, MOVE_SOUTH, MOVE_WEST, MOVE_EAST } from '../../actions/actionType';
import { connect } from 'react-redux';
import store from '../../store/store';

const Player = (props) => {
  const getWalkIndex = () => {
    const walkIndex = props.walkIndex;
    return (walkIndex <= 5 ? walkIndex+1 : 0);
  }
  const handleClickOutside = (e) => {
    e.preventDefault();
    const oldpos = props.position;
    const newData = getPositionFromProps(e.keyCode, oldpos);
    const walkIndex = getWalkIndex();
    const newPos = observeBoundaries(oldpos, newData.newPos);
        return (store.dispatch({
          type: newData.type,
          newPos: newPos,
          walkIndex: walkIndex
        }))
  }
  // const [loading, setloading] = useState(false);
 
  useEffect(() => {
    document.addEventListener('keydown', handleClickOutside);
    return () => document.removeEventListener('keydown', handleClickOutside);
  });
  
  const getPositionFromProps = (keyCode, oldpos) => {
    switch (keyCode) {
      case 37:
        return {
          type: MOVE_WEST,
          data: oldpos,
          newPos: [oldpos[0]-58, oldpos[1]]
        }
      case 38:
        return {
          type: MOVE_NORTH,
          data: oldpos,
          newPos: [oldpos[0], oldpos[1] - 95]
        }
      case 39:
          return {
            type: MOVE_EAST,
            data: oldpos,
            newPos: [oldpos[0]+58, oldpos[1]],
          }
      case 40:
          return {
            type: MOVE_SOUTH,
            data: oldpos,
            newPos: [oldpos[0], oldpos[1] + 95]
          }
          default:
            return
    }
  }
  const observeBoundaries = (oldpos, newPos) => {
    if(newPos[0] > 696 || newPos[0] < 0 || newPos[1]<0 || newPos[1] > 475){
      return oldpos;
    }
     let x = newPos[0]/58;
     let y = newPos[1]/95;
     if(props.tiles[y][x]>3){
      return oldpos;
     }
    return newPos;
  }
    
  

  return (
    <>
    <div style={{
      position: 'absolute',
      top: props.position[1],
      left: props.position[0],
      backgroundImage: `url('${playerWalk}')`,
      backgroundPosition: props.playerLocation,
      width: '58px',
      height: '95px'
    }} />
    </>
  );
}

export default connect(state => {
  return {
    ...state.player,
    position: state.player.position,
    playerLocation: state.player.playerLocation,
    walkIndex: state.player.walkIndex,
    ...state.maps,
    tiles: state.maps.tiles
  }
})(Player);
