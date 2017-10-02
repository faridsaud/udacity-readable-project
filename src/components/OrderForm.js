/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Post from "./Post";
import CategoryHeader from "./CategoryHeader";
import CategoryBody from "./CategoryBody";


class OrderForm extends Component {

    state = {
        orderBy: {
            rateDesc: true,
            dateDesc: true
        }
    };

    rateOnClickHandler = () => {
        this.setState(prevState => {
            let newState = prevState;
            newState.orderBy.rateDesc = !prevState.orderBy.rateDesc;
            return newState;
        });
    };


    dateOnClickHandler = () => {
        this.setState(prevState => {
            let newState = prevState;
            newState.orderBy.dateDesc = !prevState.orderBy.dateDesc;
            return newState;
        });
    };

    render() {
        let orderBy = this.state.orderBy;
        return (
            <div className="row">
                <div className="col-md-6">
                    <button type="button" className="btn btn btn-dark btn-sm float-right" title="Order by rate"
                            onClick={this.rateOnClickHandler}>Rate
                        {orderBy.rateDesc ? (
                            <i className="material-icons">keyboard_arrow_up</i>
                        ) : (
                            <i className="material-icons">keyboard_arrow_down</i>
                        )}

                    </button>
                </div>
                <div className="col-md-6">
                    <button type="button" className="btn btn btn-dark btn-sm float-right" title="Order by date"
                            onClick={this.dateOnClickHandler}>Date
                        {orderBy.dateDesc ? (
                            <i className="material-icons">keyboard_arrow_up</i>
                        ) : (
                            <i className="material-icons">keyboard_arrow_down</i>
                        )}
                    </button>
                </div>
            </div>
        )
    }
}

OrderForm.propTypes = {};
export default OrderForm;