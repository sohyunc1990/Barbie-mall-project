import React, { Component } from 'react';

export default class ReviewInfo extends Component {
    constructor(){
        super()
        this.state={
            reviewedProduct : []
        }
    }


    render(){
        const review = this.props.r
        const product = this.props.p
        return (
            <div className="basket-product">
                <div className="item">
                    <div className="product-image">
                 <img src={product.img_url} alt="favphoto" className="product-frame" />
                    </div>
                    <div className="review-rating">
                        <p><strong>{review.rating}</strong></p>
                    </div>
                   </div>
                <div className="review-comment">{review.comment}</div>
                {/* <div className="remove">
                    <button onClick={()=>this.props.deletefavorite(favorite)}>Remove</button>
               </div> */}
            </div>
        )
    }
}