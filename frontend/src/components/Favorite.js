import React, { Component } from 'react';

export default class Favorite extends Component {
    render(){
        const favorite = this.props.favorite
        return(
            <>
                    <img src={favorite.img_url} alt="img"/>
                    <p className="favoriteName">{favorite.name}</p>                   
                    <p>${favorite.price}</p>
                    <button onClick={()=>this.props.deletefavorite(favorite)}>x</button>
            </>
        )
    }
}
