import React, {Component} from 'react';

class Counter extends Component {

    render() { 
        const {count} = this.props
        return ( 
            <span><strong>{count}</strong></span>
         );
    }
}
 
export default Counter;