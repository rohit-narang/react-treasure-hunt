import React, { useEffect } from 'react';
import Player from '../Player';
import Maps from './Maps';
import store from '../../store/store';
import { connect } from 'react-redux';
import { ADD_TILES } from '../../actions/actionType';
import { tiles } from '../../data/Maps/1';
import Fireball from '../Fireball/index';
import Fireball2 from '../Fireball/fireball2';
import { Modal, Image, Button, Icon } from 'semantic-ui-react';
import Cup from './cup.png';

const handleClick =() => {
    window.location.reload('/play')
}
const World = (props) => {
    useEffect(() => {
        store.dispatch({ type: ADD_TILES, payload: tiles })
    })
    return (
        <>
            <div style={{
                position: 'relative',
                width: '762px',
                height: '578px',
                backgroundColor: 'white',
                border: '4px solid #512000',
                borderRadius: '5px',
                margin: 'auto',
                top: '20px'
            }}>
                <Maps value={props.tiles} />
                <Player />
                <Fireball />
                <Fireball2 />

            </div>
            <Modal style={{ height: '300px', width: '350px' }} open={props.isOpen}>

                <Modal.Content image>
                    <Image size='medium' src={Cup} />
                </Modal.Content>
                <Modal.Actions>
                        <Button color='green' inverted onClick={handleClick}>
                            <Icon name='checkmark' /> Play Again
                        </Button>
                    </Modal.Actions>
            </Modal>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        tiles: state.maps.tiles,
        isOpen: state.modal.isOpen
    }
}
export default connect(mapStateToProps)(World);
