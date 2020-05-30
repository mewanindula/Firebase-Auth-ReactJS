import React from 'react';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import { auth } from '../../configs/firebase.config';

const Navbar = ({currentUser}) => {
    return (
        <div className="navbar">
            <div className="navbar__logo">Firebase Auth</div>
            <div className="links">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/sign-in">Sign In</NavLink></li>
                    <li><NavLink to="/sign-up">Sign Up</NavLink></li>
                    {currentUser && currentUser ? (
                        <li><button onClick={() => auth.signOut()}>Sign Out</button></li>
                    ): null}
                    
                </ul>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser
  })

export default connect(mapStateToProps, null)(Navbar);
