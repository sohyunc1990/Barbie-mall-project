import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Login from './Login.js'
import Signup from './Signup.js'
import ClothingList from './ClothingList.js'
import Index from './Index.js'
import Header from './Header.js';
import ReviewList from './ReviewList.js'
import MyFavorites from './MyFavorites.js';
import axios from 'axios';
import { createHashHistory } from 'history'
import AddFavSuccMess from './modal/AddFavSuccMess.js'
import AddFavFailMess from './modal/AddFavFailMess.js'
import LoginNeededMess from './modal/LoginNeededMess.js'

class Main extends React.Component {
    constructor() {
        super()
        this.myfavoriteElement=React.createRef();
        this.state = {
            loggedInStatus: false,
            user: {},
            products: [], // all products
            favorites: [], 
            reviews: [], // all reviews
            reviewedProduct: [],
            addFavSuccMess: false, // success message when adding favorite
            addFavFailMess: false, // error message when dupulicate
            LoginNeededMess: false // error message when login needed
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(json => {
                this.setState({ products: json })
            })
            fetch(`http://localhost:3001/reviews`).then(res=>res.json()).then(json=>this.setState({reviews:json}))
    }

    handleLogout = (e) => {
        this.setState({
            loggedInStatus: false,
            user: {}})
    }

    //after login get all the user's info from backend
    setCurrentUser = (data) => {
      const user = this.state.user
      const result = this.state.products.forEach(o1 => this.state.reviews.some(o2 => o1.id === o2.product_id));
      this.setState({reviewedProduct:result})
      fetch(`http://localhost:3001/users/${user.id}/favorites`)
            .then(res => res.json())
            .then(json => this.setState({ favorites: json, loggedInStatus: true,
              user: data.user}))
              const history = createHashHistory()
              history.go(-1)
    }

    setUsersReview(){
      const user = this.state.user
      const resultt = this.state.reviews.filter(o1 => o1.user_id === user.id);
      this.setState({usersReview: resultt});
    }
    
    // add favorite product through backend and added to this.state.favorites
    addfavoriteProduct = (product, e) => {
      e.stopPropagation();
      if (Object.keys(this.state.user).length === 0){
        this.setState({LoginNeededMess: true})
      } else {
        if (this.state.favorites.map(f=> f.product_id === product.id).includes(true) ){
          this.setState({addFavFailMess: true})
        } else {
          this.setState({addFavSuccMess: true})
        const user = this.state.user
        const data = { user_id: user.id, product_id: product.id}
        axios.post( `http://localhost:3001/users/${user.id}/favorites`, data)
        .then(response => {
            this.setState({ favorites: [...this.state.favorites, data] })
        })
        .catch(error => {
            console.log(error)
      })
    }}
    }

    closeMessage1 = () => {
      this.setState({addFavSuccMess : false})
    }

    closeMessage2 = () => {
      this.setState({addFavFailMess : false})
    }

    closeMessage3 = () => {
      this.setState({LoginNeededMess : false})
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
                        {/* <Route exact path="/myreviews" render={() => (
                                <ReviewList user={this.state.user}  reviews={this.state.reviews} reviewedProduct={this.state.reviewedProduct}/>
                        )} /> */}
                        <Route exact path="/clothing" render={() => (
                                <ClothingList user={this.state.user} products={this.state.products} favoriteProduct={this.addfavoriteProduct} selectClothing={this.selectClothing}/>
                        )} />
                        <Route exact path="/clothing/tops" render={() => (
                            <ClothingList user={this.state.user} products={this.state.products.filter(product => product.category === "Tops")} favoriteProduct={this.addfavoriteProduct} selectClothing={this.selectClothing}/>
                        )}/>
                        <Route exact path="/clothing/bottoms" render={() => (
                            <ClothingList user={this.state.user} products={this.state.products.filter(product => product.category === "Bottoms")} favoriteProduct={this.addfavoriteProduct} selectClothing={this.selectClothing}/>
                        )}/>
                        <Route exact path="/clothing/dresses" render={() => (
                            <ClothingList user={this.state.user} products={this.state.products.filter(product => product.category === "Dresses")} favoriteProduct={this.addfavoriteProduct} selectClothing={this.selectClothing}/>
                        )}/>
                        <Route exact path="/clothing/swim" render={() => (
                            <ClothingList user={this.state.user} products={this.state.products.filter(product => product.category === "Swim")} favoriteProduct={this.addfavoriteProduct} selectClothing={this.selectClothing}/>
                        )}/>
                        <Route exact path="/myfavorites" render={() => (
                            <MyFavorites products={this.state.products} favorites={this.state.favorites} deletefavorite={this.deleteFavorite} user={this.state.user} ref={this.myfavoriteElement}/>
                        )}/>
                    </Switch>
                </div>

            {this.state.addFavSuccMess === true?
            <AddFavSuccMess closeMessage1={this.closeMessage1}/>
            : null}

            {this.state.addFavFailMess === true?
            <AddFavFailMess closeMessage2={this.closeMessage2} />
            : null}

            {this.state.LoginNeededMess === true?
            <LoginNeededMess closeMessage3={this.closeMessage3} />
            : null}

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
              {/* <li className="menu-item"><NavLink to="/myreviews">My Reviews</NavLink></li> */}
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