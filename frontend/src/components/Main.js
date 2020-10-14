import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Login from './Login.js'
import Signup from './Signup.js'
import ClothingList from './ClothingList.js'
import Index from './Index.js'
import Header from './Header.js';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUser: "",
            products: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/api/v1/products')
            .then(res => res.json())
            .then(json => {
                this.setState({ products: json })
            })
    }

    setCurrentUser = (user) => {
        this.setState({
            currentUser: user
        })
        if (user === "") {

        }
        else {
        }
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
                                <Login setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser}/>
                        )} />
                        <Route exact path="/signup" render={() => (
                                <Signup setCurrentUser={this.setCurrentUser} />
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
                    </Switch>
                </div>

            {this.state.currentUser === "" ?
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

            : null}
            </Router>
            
        )
    }
}

export default Main;