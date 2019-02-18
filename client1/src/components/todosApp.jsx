import React, { Component } from 'react';
import Clock from './common/clock';
import HelloUser from './common/helloUser';
import MainGoal from './common/mainGoal'
import Footer from './common/footer';
import Logout from './common/logout';

class Todos extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <Logout />
                <Clock />  
                <HelloUser />
                <MainGoal />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Todos;