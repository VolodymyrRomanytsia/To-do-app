import React, { Component } from 'react';
import Popover from "react-popover";
import Todos from './todos';

class TodoPopover extends Component {
    constructor() {
      super();
      this.state = {
        isOpen: true,
      };
    }

    togglePopover = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
      return (
        <Popover
          isOpen={this.state.isOpen}
          className='col-12 col-lg-4 col-md-6 col-sm-12 text-white'
          offset={1}

          body={<Todos className="Balloon"/>}
        >
          <button className="col-1 order-last bloc text-right btn btn-link text-white" onClick={this.togglePopover}>Todo</button>
        </Popover>
      );
    }
  }
  
export default TodoPopover;