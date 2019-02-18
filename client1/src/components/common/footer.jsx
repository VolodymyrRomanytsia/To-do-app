import React from 'react';
import TodoPopover from './todoPopover';

const Footer = () => {
    return ( 
        <footer>
            <div className="fixed-bottom row m-3 justify-content-between">
                <span className="col-2 order-1 order-sm-1 order-md-first">©2019</span>
                <span className="col-md-8 col-sm-12 order-sm-first order-first order-md-1 text-center"><strong>"The difference between ordinary and extraordinary is that little extra."</strong></span>
                <TodoPopover />
            </div>
        </footer>
     );
}
 
export default Footer;