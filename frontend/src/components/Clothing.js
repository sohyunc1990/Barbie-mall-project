import React, { Component } from 'react';

export default class Login extends Component {
    render(){
        const product = this.props.product
        return(
            <>
                <div className="card">
                    <img src={product.img_url} alt="Product Img"/>
                    <h6>{product.name}</h6>
                    <p className="price">{product.price}</p>
                    <p>rating</p>
                    <p><button>Add to Cart</button></p>
                </div>
            </>
        )
    }

}
