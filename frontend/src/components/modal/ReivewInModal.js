import React, { Component } from 'react';

export default class ReivewInModal extends Component {
    render(){
        const review = this.props.review
        return (
            <div className="eachReview">
                {review.rating === 1 ?
                <span role="img" aria-label="star"> - ⭐</span>
                : null}  
                {review.rating === 2 ?
                <span role="img" aria-label="star"> - ⭐⭐</span>
                : null}
                {review.rating === 3 ?
                <span role="img" aria-label="star"> - ⭐⭐⭐</span>
                : null}
                {review.rating === 4 ?
                <span role="img" aria-label="star"> - ⭐⭐⭐⭐</span>
                : null}
                {review.rating === 5 ?
                <span role="img" aria-label="star"> - ⭐⭐⭐⭐⭐</span>
                : null}  {review.comment}
                
            </div>
        )
    }
}
