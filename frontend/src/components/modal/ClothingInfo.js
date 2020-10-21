import Axios from 'axios';
import React, { Component } from 'react';
import ReactDom from 'react-dom'
import ReviewInModal from './ReivewInModal.js'

const MODAL_STYLES = {
    position: 'fixed',
    display: 'flex',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '20px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    zIndex: 1000
}

export default class ClothingInfo extends Component {
    constructor(){
        super()
        this.state={
            reviews: [],
            rating: "1",
            comment: ""
        }
    }
    
    componentDidMount(){
      const product = this.props.product
      fetch(`http://localhost:3001/products/${product.id}/reviews`)
      .then(res=>res.json())
      .then(data=> {
          const result = data.filter(o1 => (o1.product_id === product.id));
          this.setState({reviews:result})})
    }

    submitReviewForm = (e) => {
        e.preventDefault();
        const product = this.props.product
        Axios.post(`http://localhost:3001/products/${product.id}/reviews`, {
            review: {
                user_id: this.props.user.id,
                product_id: this.props.product.id,
                rating: this.state.rating,
                comment: this.state.comment
            }
        },
        { withCredentials: true }
        )

        const data = {
            rating: this.state.rating,
            comment: this.state.comment
        }
        this.setState({reviews: [...this.state.reviews, data]})
    }

    handleReview = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const product = this.props.product
    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
            <div className="CardImg">
                <img src={product.img_url} alt="Product Img"/>
                <div className="reviewform">
                <form onSubmit={this.submitReviewForm}>
                    
                <select name="rating" onChange={this.handleReview} >
                    <option value="1">&#11088;</option>
                    <option value="2">&#11088;&#11088;</option>
                    <option value="3">&#11088;&#11088;&#11088;</option>
                    <option value="4">&#11088;&#11088;&#11088;&#11088;</option>
                    <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088;</option>
                </select>
                    <input onChange={this.handleReview} placeholder="Write your comments here!" name="comment" autoComplete="off" required="" type="text"/><button className="ButtonOnCard" type="submit">SUBMIT</button>
                    
                </form>
            </div>
            </div>
            <div className="CardInfo">
            <h5 className="ProductNameInCard">{product.name}</h5>
            <div className="CardReview">
            {this.state.reviews.map(review=> <ReviewInModal key={review.id} review={review} />)}
            </div>
            <div className="closeButtonDiv">
            <button className="ButtonOnCard" onClick={this.props.closemodal}>CLOSE</button>
            </div>
            </div>
            
        </div>
        </>,
        document.getElementById('portal')
    )
}}
