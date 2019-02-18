import React, { Component } from "react";
import {Redirect} from 'react-router'
import auth from "../../services/authService";

class Logout extends Component {

    state = {
        redirect: false
    }

    setRedirect = () => {
        auth.logout();
        this.setState({
          redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
    }
    

  render() {
    
    return ( 
        <div className="fixed-top row m-3 justify-content-end" >
            {this.renderRedirect()}
            <button className="btn btn-outline-light"
                    style={{border: '2px solid #fff'}}
                    onClick={this.setRedirect}
            >LOG OUT</button>
        </div>
        )
  }
}

export default Logout;