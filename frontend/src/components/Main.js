import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Login from './Login.js'
import Signup from './Signup.js'
import ClothingList from './ClothingList.js'
import Index from './Index.js'
import Header from './Header.js';
import MyFavorites from './MyFavorites.js';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            loggedInStatus: false,
            user: {},
            products: []
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
            user: {}
        })
    }

    setCurrentUser = (data) => {
        this.setState({
            loggedInStatus: true,
            user: data.user
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
                        <Route exact path="/home" component={Index}/>
                        <Route exact path="/login" render={() => (
                                <Login handleLogin={this.setCurrentUser}/>
                        )} />
                        <Route exact path="/signup" render={() => (
                                <Signup handleSignup={this.setCurrentUser}/>
                        )} />
                        <Route exact path="/clothing" render={() => (
                                <ClothingList products={this.state.products}/>
                        )} />
                        <Route exact path="/clothing/tops" render={() => (
                            <ClothingList products={this.state.products.filter(product => product.category === "Tops")}/>
                        )}/>
                        <Route exact path="/clothing/bottoms" render={() => (
                            <ClothingList products={this.state.products.filter(product => product.category === "Bottoms")}/>
                        )}/>
                        <Route exact path="/myfavorites" render={() => (
                            <MyFavorites />
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
              <li className="menu-item">
              <NavLink to="/furniture">Furniture</NavLink>
                <ol className="sub-menu">
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
              <li className="menu-item">
              <NavLink to="/furniture">Furniture</NavLink>
                <ol className="sub-menu">
                </ol>
              </li>
              <li className="menu-item"><NavLink to="/favorites">My Favorites</NavLink></li>
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