import React, { Component } from 'react';
import Modal from './modal/Modal.js'

export default class Clothing extends Component {
    constructor(){
        super()
        this.state={
            showModal: false
        }
    }
    showModal = (product) => {
        this.setState({showModal: !this.state.showModal})
      }
    render(){
        const product = this.props.product
        return(
            <>
                <div className="card">
                    <img src={product.img_url} onClick={()=>this.showModal(product)} alt="Product Img"/>
                    <h6>{product.name}</h6>
                    <p className="price">{product.price}</p>
                    <p>rating</p>
                    <p><button onClick={()=>this.props.favoriteProduct(product)}>Add to Cart</button></p>
                </div>
                <div>
                    {this.state.showModal? 
                    <Modal />
                    :
                    null}
                </div>
            </>
        )
    }

}
