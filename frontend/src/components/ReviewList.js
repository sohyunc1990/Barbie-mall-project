import React, { Component } from 'react';
import ReviewInfo from './ReviewInfo.js'
import '../Favorite.css';

export default class ReviewList extends Component {
    constructor(){
        super()
        this.state={
            usersReview: [],
            reviewedProduct: []
        }
    }

    componentDidMount(){
        this.setState({usersReview: this.props.usersReview})
        this.setState({reviewedProduct: this.props.reviewedProduct})
        this.usersReview()
    }

    usersReview(){
        const user = this.props.user
        const resultt = this.props.reviews.filter(o1 => o1.user_id === user.id);
        this.setState({usersReview: resultt});
}

    render(){
        return (
                <div className="main">
                <div className="basket">
                    <div className="basket-labels">
                    <ul>
                        <li className="item item-heading">Item</li>
                        <li className="list_rating">Rating</li>
                        <li className="list_comment">Comment</li>
                    </ul>
                 {/* {this.state.usersReview.map(r => <ReviewInfo key={r.id} r={r}/>)}
                 {this.state.reviewedProduct.map(p => <ReviewInfo key={p.id} p={p}/>)} */}
                </div>
                </div>
            </div>
        )
    }
}