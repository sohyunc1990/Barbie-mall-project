import React, { Component } from 'react';
import Favorite from './Favorite.js'
import '../Favorite.css';

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
            <div className="main">
                <div className="basket">
                    <div className="basket-labels">
                    <ul>
                        <li className="item item-heading">Item</li>
                        <li className="list_price">Price</li>
                    </ul>
                    {this.state.favorites.map(f=> <Favorite key={f.id} favorite={f} deletefavorite={this.props.deletefavorite}/>)}
                    </div>
                <div className="aside">
                    <div className="summary">
                        <div className="summary-total-items"><span className="total-items"></span> {this.state.favorites.length} Items in your Bag</div>
                        <div className="summary-total">
                        <div className="total-title">Total</div>
                        <div className="total-value final-value" id="basket-total">{this.totalPrice()}</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
