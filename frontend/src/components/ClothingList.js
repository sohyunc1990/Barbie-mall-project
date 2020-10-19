import React, { Component } from 'react';
import Clothing from './Clothing.js'

export default class ClothingList extends Component {
    render(){
        return(
            <>
            {this.props.products.map(product=> <Clothing key={product.id} product={product} favoriteProduct={this.props.favoriteProduct}/>)}
            </>
        )
    }
}