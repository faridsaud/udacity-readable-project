/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Post from "./Post";
import FilterForm from "./FilterForm";
import OrderForm from "./OrderForm";
import {Link} from 'react-router-dom';


class CategoryHeader extends Component {

    state = {
        isFilterByOpen: false,
        isOrderByOpen: false
    };

    changeFilterStatus = () => {
        this.setState(prevState => ({
            isFilterByOpen: !prevState.isFilterByOpen,
            isOrderByOpen: false
        }))
    };

    changeOrderStatus=()=>{
        this.setState(prevState=>({
            isOrderByOpen: !prevState.isOrderByOpen,
            isFilterByOpen: false
        }))
    };

    render() {
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-md-8">
                        <Link to={"/category/"+this.props.name}>
                            <h4>{this.props.name}</h4>
                        </Link>
                    </div>
                    <div className="col-md-2">
                        <OrderForm/>
                    </div>
                    <div className="col-md-2">
                        <div className="btn-group float-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary btn-sm" title="Order by"><i
                                className="material-icons" onClick={this.changeOrderStatus}>reorder</i></button>
                            <button type="button" className="btn btn-primary btn-sm" title="Filter by"
                                    onClick={this.changeFilterStatus}><i className="material-icons"><i
                                className="material-icons">filter_list</i></i></button>
                            <button type="button" className="btn btn-primary btn-sm" title="New post"><i
                                className="material-icons">add</i></button>
                        </div>
                    </div>

                </div>
                {this.state.isFilterByOpen === true &&
                <div className="row">
                    <div className="col-md-12">
                        <FilterForm/>
                    </div>
                </div>
                }
                {this.state.isOrderByOpen === true &&
                <div className="row">
                    <div className="col-md-12">
                        <OrderForm/>
                    </div>
                </div>
                }
            </div>
        )
    }
}

CategoryHeader.propTypes = {
    name: PropTypes.string.isRequired
};
export default CategoryHeader;