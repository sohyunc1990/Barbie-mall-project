import React, { Component } from 'react';
import '../Favorite.css';

export default class Favorite extends Component {
    render(){
        const favorite = this.props.favorite
        return(
            
            <div className="basket-product">
                <div className="item">
                    <div className="product-image">
                 <img src={favorite.img_url} alt="favphoto" className="product-frame" />
                    </div>
                    <div className="product-details">
                        <p><strong>{favorite.name}</strong></p>
                    </div>
                   </div>
                <div className="fav_price">{favorite.price}</div>
                <div className="remove">
                    <button className="favRemoveButton" onClick={()=>this.props.deletefavorite(favorite)}>Remove</button>
               </div>
               </div>        
        )
    }
}
