/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Post from "./Post";
import Filters from "./Filters";


class CategoryHeader extends Component {

    state = {
        isFilterOpen : false
    };

    changeFilterStatus=()=>{
        console.log("Changing filter status" + this.state.isFilterOpen);
        this.setState(prevState=>({
            isFilterOpen: !prevState.isFilterOpen
        }))

    };
    render() {
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-md-10">
                        <h4>{this.props.name}</h4>
                    </div>
                    <div className="col-md-2">
                        <div className="btn-group float-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary btn-sm" title="Filter by" onClick={this.changeFilterStatus}><i className="material-icons"><i className="material-icons">filter_list</i></i></button>
                            <button type="button" className="btn btn-primary btn-sm" title="New post"><i className="material-icons">add</i></button>
                        </div>
                    </div>
                    {this.state.isFilterOpen === true &&
                        <Filters/>
                    }
                </div>
            </div>
        )
    }
}

CategoryHeader.propTypes = {
    name:PropTypes.string.isRequired
};
export default CategoryHeader;