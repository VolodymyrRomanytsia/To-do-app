import React, { Component } from 'react';
import moment from 'moment';
import auth from '../../services/authService'



class HelloUser extends Component {

    userName() {
        return auth.getUserName()
    } 

    greetingText() {
        const now = moment()
        const currentHour = now.hour()
        if ( currentHour < 12 ) {
            return 'morning';
        } else if ( currentHour < 18 ) {
            return 'afternoon';
        } else {
            return 'evening';
        }
    }
    
    render() { 
        return ( 
        <div className="text-center">
            <span className="display-4 text-white">Good {this.greetingText()}, {this.userName()}.</span>
        </div>
     );
    }
}
 
export default HelloUser;