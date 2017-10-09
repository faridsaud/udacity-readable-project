/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import OrderForm from "./OrderForm";
import {Link} from "react-router-dom";


class CategoryHeader extends Component {



    render() {
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-md-7">
                        <Link to={"/" + this.props.name}>
                            <h4>{this.props.name}</h4>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <OrderForm updateOrder={this.props.updatePostsOrder}/>
                    </div>
                    <div className="col-md-2">
                        <div className="btn-group float-right" role="group" aria-label="Basic example">
                            <Link to="/post/create" className="btn btn-primary btn-sm" title="Add new post">
                                <i className="material-icons">add</i>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

CategoryHeader.propTypes = {
    name: PropTypes.string.isRequired
};
export default CategoryHeader;