import React, { Component } from 'react'
import app from "./base";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <button onClick={()=>{app.auth().signOut()}}>Sign Out</button>
            </div>
        )
    }
}
