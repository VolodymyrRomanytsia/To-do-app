import React, { useState } from 'react';
import Popover from "react-popover";
import Todos from './todos';

function TodoPopover() {
    const [isOpen, togglePopover] = useState(true);

    return (
      <Popover
        isOpen={isOpen}
        className='col-12 col-lg-4 col-md-6 col-sm-12 text-white'
        offset={1}

        body={<Todos className="Balloon"/>}
      >
        <button className="col-1 order-last bloc text-right btn btn-link text-white" onClick={() => togglePopover(!isOpen)}>Todo</button>
      </Popover>
    );
  }

export default TodoPopover;