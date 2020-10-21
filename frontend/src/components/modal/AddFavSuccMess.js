import React, { Component } from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px',
    width: '350px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000
}

export default class AddFavSuccMess extends Component {
    render(){
        return ReactDom.createPortal(
            <>
            <div className="modalwrapper" style={OVERLAY_STYLES} />
            <div className="modal" style={MODAL_STYLES}>
            Successfully added to favorite list!
            <br/><br/><button className="modalCloseButton" onClick={this.props.closeMessage1}>close</button>
            </div>
            </>,
            document.getElementById('portal')
        )
        
    }
}