import React from 'react'
import {connect} from 'react-redux'

import Register from './Register'
import Login from './Login'
import Home from './Home'
import {StartDeleteUser} from './store/Action/userAction'

import {BrowserRouter,Route, Router} from 'react-router-dom'
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer} from 'mdbreact'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:''
        }
      }

        handleLogout =()=>{
            this.props.dispatch(StartDeleteUser())
          }
    
    render(){
        return (
          <BrowserRouter>
           <div>
             {
               Object.keys(this.props.user).length == 0 ? <div>
                  <MDBNavbar color="light-blue" dark expand="md">
                  <MDBNavbarBrand>
                    <strong className="white-text">Navbar</strong>
                  </MDBNavbarBrand>
                  <MDBNavbarToggler onClick={this.toggleCollapse} />
                  <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                      <MDBNavItem active>
                        <MDBNavLink to="register">Register</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="login">Login</MDBNavLink>
                      </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
             
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
               </div> : <div>
               <MDBNavbar color="light-blue" dark expand="md">
                  <MDBNavbarBrand>
                    <strong className="white-text">Navbar</strong>
                  </MDBNavbarBrand>
                  <MDBNavbarToggler onClick={this.toggleCollapse} />
                  <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                      <MDBNavItem active>
                        <MDBNavLink to="/home">home</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="/Logout"  onClick={this.handleLogout}>Logout</MDBNavLink>
                      </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
             
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
                 
              
               </div>
             }
             <Route path ='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <Route path='/home'  component={Home} exact={true} />
              
                </div>
                </BrowserRouter>
                
        )
    }
}


const mapStateToProps = (state)=>{
    return {
        user:state.user,
    }
}
export default connect(mapStateToProps) (App)
