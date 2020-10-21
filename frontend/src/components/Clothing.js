import React, { Component } from 'react';
import ClothingInfo from './modal/ClothingInfo.js'
import './ProductCard.css';

export default class Clothing extends Component {
    constructor(){
        super()
        this.state={

            showModal: false
        }
    }

    // Show Modal by changing state 
    showModal = () => {
        this.setState({showModal: true})
    }
     // Hide Modal by changing state 
    closemodal = () => {
        this.setState({showModal: false})
    }
 
    render(){
        const product = this.props.product
        let style = {
            backgroundImage: `url(${product.img_url})`,
            backgroundPosition: 'center'
        }
        return(
            <>
                <div style={style} className="ProductContainer" onClick={this.showModal}>
                    <div className="ProductOverlay">
                        <div className = "EachProduct"></div>
                        <div className = "EachProductHead">
                        <p>{product.name}</p>
                        <br/>
                        </div>
                        <div className = "EachProductPrice">
                        <p>${product.price}</p>
                        </div>
                        <div className="ProductCart">
                        <i className="fa fa-shopping-cart"></i>
                        <button className="AddToCartButton" onClick={(e)=>this.props.favoriteProduct(product, e)}>ADD TO FAVORITE</button>
                </div>
                </div>
                </div>
                {this.state.showModal?
                <ClothingInfo user={this.props.user} product={product} closemodal={this.closemodal} />
                :
                null}
            
            </>
        )
    }

}
