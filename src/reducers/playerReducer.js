import {MOVE_NORTH, MOVE_SOUTH, MOVE_WEST, MOVE_EAST} from '../actions/actionType'
import {SPRITE_WIDTH, SPRITE_HEIGHT} from '../constants';

const initialState = {
        position: [0, 0],
        walkIndex: 0,
        playerLocation: '0px 0px'
}

const playerReducer = (state = initialState, action) => {

    switch (action.type) {
        case MOVE_NORTH:
            return {
                ...state.player,
                position: action.newPos,
                playerLocation: `${SPRITE_WIDTH*action.walkIndex}px ${SPRITE_HEIGHT*1}px`,
                walkIndex: action.walkIndex, 
            }
            case MOVE_SOUTH:
            return {
                ...state.player,
                    position: action.newPos,
                    playerLocation: `${SPRITE_WIDTH*action.walkIndex}px ${SPRITE_HEIGHT*0}px`,
                    walkIndex: action.walkIndex 
            }
            case MOVE_WEST:
            return {
                ...state.player,
                position: action.newPos,
                playerLocation: `${SPRITE_WIDTH*action.walkIndex}px ${SPRITE_HEIGHT*3}px`,
                walkIndex: action.walkIndex
            }
            case MOVE_EAST:
            return {
                ...state.player,
                position: action.newPos,
                playerLocation: `${SPRITE_WIDTH*action.walkIndex}px ${SPRITE_HEIGHT*2}px`,
                walkIndex: action.walkIndex
            }
            default:
                return state;
    }
}

export default playerReducer;