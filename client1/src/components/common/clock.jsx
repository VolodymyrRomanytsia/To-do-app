import React, { Component } from 'react';
import moment from 'moment'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: moment()
         }
    }
	
	componentDidMount() {
		this.interval = setInterval(() => this.setState({time: moment()}), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}
	
	render() {
		return (
			<div className="text-center">
				<span className="display-1 text-white">
					<strong>{this.state.time.format('HH:mm')}</strong>
				</span>
			</div>
		);
	}
}
 
export default Clock;

	

