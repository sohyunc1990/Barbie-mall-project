import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Login from './Login.js'
import Signup from './Signup.js'
import ClothingList from './ClothingList.js'
import Index from './Index.js'
import Header from './Header.js';
import MyFavorites from './MyFavorites.js';
import axios from 'axios';
import { createHashHistory } from 'history'

class Main extends React.Component {
    constructor() {
        super()
        this.myfavoriteElement=React.createRef();
        this.state = {
            loggedInStatus: false,
            user: {},
            products: [],
            favorites: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(json => {
                this.setState({ products: json })
            })
    }

    handleLogout = (e) => {
        this.setState({
            loggedInStatus: false,
            user: {}})
    }

    //after login get all the user's info from backend
    setCurrentUser = (data) => {
      const user = this.state.user
      fetch(`http://localhost:3001/users/${user.id}/favorites`)
            .then(res => res.json())
            .then(json => this.setState({ favorites: json, loggedInStatus: true,
              user: data.user}))
              const history = createHashHistory()
              history.go(-1)
    }
    
    // add favorite product through backend and added to this.state.favorites
    addfavoriteProduct = (product) => {
      const user = this.state.user
      const data = { user_id: user.id, product_id: product.id}
      axios.post( `http://localhost:3001/users/${user.id}/favorites`, data)
      .then(response => {
          this.setState({ favorites: [...this.state.favorites, data] })
      })
      .catch(error => {
          console.log(error)
      })
    }
    
    // delete favorite product rhgouth backend and update state favorites
    deleteFavorite = (product) => {
      const user = this.state.user
      fetch(`http://localhost:3001/users/${user.id}/favorites`).then(res => res.json())
      .then(data => {
        let result = data.filter(o1 => (o1.product_id === product.id)); 
        axios.delete(`http://localhost:3001/users/${user.id}/favorites/${result[0].id}`)
        const f = this.state.favorites
        let filteredArray = f.filter(favorite => favorite.product_id !== result[0].product_id)
        this.setState({favorites: filteredArray});
        this.myfavoriteElement.current.changeFavoritesState();
    })
    }

    render(){
        return(
            <Router>
                <div className="Logo">
                    <NavLink to="/home"><Header /></NavLink>
                </div>

                <div className="Main-container">
                    <Switch>
                        <Route exact path="/" render={()=> (
                                <Index />
                          )}/>
                        <Route exact path="/home" render={()=> (
                                <Index />
                          )}/>
                        <Route exact path="/login" render={(props) => (
                                <Login handleLogin={this.setCurrentUser}/>
                        )} />
                        <Route exact path="/signup" render={() => (
                                <Signup handleSignup={this.setCurrentUser}/>
                        )} />
                        <Route exact path="/clothing" render={() => (
                                <ClothingList products={this.state.products} favoriteProduct={this.addfavoriteProduct} selectClothing={this.selectClothing}/>
                        )} />
                        <Route exact path="/clothing/tops" render={() => (
                            <ClothingList products={this.state.products.filter(product => product.category === "Tops")} favoriteProduct={this.addfavoriteProduct} selectClothing={this.selectClothing}/>
                        )}/>
                        <Route exact path="/clothing/bottoms" render={() => (
                            <ClothingList products={this.state.products.filter(product => product.category === "Bottoms")} favoriteProduct={this.addfavoriteProduct} selectClothing={this.selectClothing}/>
                        )}/>
                        <Route exact path="/clothing/dresses" render={() => (
                            <ClothingList products={this.state.products.filter(product => product.category === "Dresses")} favoriteProduct={this.addfavoriteProduct} selectClothing={this.selectClothing}/>
                        )}/>
                        <Route exact path="/clothing/swim" render={() => (
                            <ClothingList products={this.state.products.filter(product => product.category === "Swim")} favoriteProduct={this.addfavoriteProduct} selectClothing={this.selectClothing}/>
                        )}/>
                        <Route exact path="/myfavorites" render={() => (
                            <MyFavorites products={this.state.products} favorites={this.state.favorites} deletefavorite={this.deleteFavorite} user={this.state.user} ref={this.myfavoriteElement}/>
                        )}/>
                    </Switch>
                </div>

            {this.state.loggedInStatus === false ?
            <div className="Navbar">
            <nav className="menu">
            <ol>
              <li className="menu-item"><NavLink to="/home">Home</NavLink></li>
              <li className="menu-item">
                <NavLink to="/clothing">Clothing</NavLink>
                <ol className="sub-menu">
                  <li className="menu-item"><NavLink to="/clothing/tops">Tops</NavLink></li>
                  <li className="menu-item"><NavLink to="/clothing/bottoms">Bottoms</NavLink></li>
                  <li className="menu-item"><NavLink to="/clothing/dresses">Dresses</NavLink></li>
                  <li className="menu-item"><NavLink to="/clothing/swim">Swim</NavLink></li>
                </ol>
              </li>
              <li className="menu-item"><NavLink to="/login">Login</NavLink></li>
              <li className="menu-item"><NavLink to="/signup">Sign Up</NavLink></li>
            </ol>
          </nav>
          </div>
            : 
            <div className="Navbar">
            <nav className="menu">
            <ol>
              <li className="menu-item"><NavLink to="/home">Home</NavLink></li>
              <li className="menu-item">
                <NavLink to="/clothing">Clothing</NavLink>
                <ol className="sub-menu">
                  <li className="menu-item"><NavLink to="/clothing/tops">Tops</NavLink></li>
                  <li className="menu-item"><NavLink to="/clothing/bottoms">Bottoms</NavLink></li>
                  <li className="menu-item"><NavLink to="/clothing/dresses">Dresses</NavLink></li>
                  <li className="menu-item"><NavLink to="/clothing/swim">Swim</NavLink></li>
                </ol>
              </li>
              <li className="menu-item"><NavLink to="/myfavorites">My Favorites</NavLink></li>
              <li className="menu-item" onClick={this.handleLogout}><NavLink to="/home">Log Out</NavLink></li>
            </ol>
          </nav>
          </div>
            }
            </Router>
            
        )
    }
}

export default Main;