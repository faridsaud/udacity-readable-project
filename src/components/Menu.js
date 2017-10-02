/**
 * Created by farid on 10/2/2017.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Menu extends Component {
    render (){
        return (
            <div>
                <nav className="navbar navbar-light bg-light justify-content-center">
                    <a className="navbar-brand text-center" href="#">Readable Project</a>
                </nav>
            </div>
        )
    }
}


Menu.propTypes = {};
export default Menu;