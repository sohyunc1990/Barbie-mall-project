import React, { Component } from 'react';
import Favorite from './Favorite.js'

export default class MyFavorites extends Component {
    constructor(){
        super()
        this.state={
            favorites: []
        }
    }
    
    componentDidMount(){
        const products = this.props.products
        const favorites = this.props.favorites
        let result = products.filter(o1 => favorites.some(o2 => o1.id === o2.product_id));
        this.setState({ favorites: result})
    }

    changeFavoritesState = (p) => {
        console.log("asdf", this.state.favorites)
        const products = this.props.products
        const favorites = this.props.favorites
        let result = products.filter(o1 => favorites.some(o2 => o1.id === o2.product_id));
        this.setState({ favorites: result });
    }

    totalPrice(){
        const totalprice = this.state.favorites.reduce((total, p) => total + p.price, 0);
        return totalprice
    }

    render(){
        return(
            <>
            <h1>My Favorites</h1>

            {this.state.favorites.map(f=> <Favorite key={f.id} favorite={f} deletefavorite={this.props.deletefavorite}/>)}
                <h3>Total:${this.totalPrice()}</h3>
            </>
        )
    }
};
