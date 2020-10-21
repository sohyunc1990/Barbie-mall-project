import React, { Component } from 'react';

export default class ReivewInModal extends Component {
    render(){
        const review = this.props.review
        return (
            <div>
                rating:{review.rating}, 
                comment:{review.comment}
            </div>
        )
    }
}
