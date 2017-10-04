/**
 * Created by farid on 10/2/2017.
 */

import React, {Component} from "react";
import {Link} from "react-router-dom";


class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light justify-content-center">
                    <Link to="/" className="navbar-brand text-center">
                        Readable Project
                    </Link>
                </nav>
            </div>
        )
    }
}


Menu.propTypes = {};
export default Menu;