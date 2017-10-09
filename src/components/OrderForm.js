/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";


class OrderForm extends Component {

    state = {
        orderBy: {
            rateDesc: true,
            dateDesc: true,
            authorDesc: true
        }
    };

    rateOnClickHandler = () => {
        this.setState(prevState => {
            let newState = prevState;
            newState.orderBy.rateDesc = !prevState.orderBy.rateDesc;
            return newState;
        });
        this.props.updateOrder({by: "rate", desc: this.state.orderBy.rateDesc})
    };


    dateOnClickHandler = () => {
        this.setState(prevState => {
            let newState = prevState;
            newState.orderBy.dateDesc = !prevState.orderBy.dateDesc;
            return newState;
        });

        this.props.updateOrder({by: "date", desc: this.state.orderBy.dateDesc})
    };


    authorOnClickHandler = () => {
        this.setState(prevState => {
            let newState = prevState;
            newState.orderBy.authorDesc = !prevState.orderBy.authorDesc;
            return newState;
        });

        this.props.updateOrder({by: "author", desc: this.state.orderBy.authorDesc})
    };

    render() {
        let orderBy = this.state.orderBy;
        return (
            <div className="row">
                <div className="col-md-4">
                    <button type="button" className="btn btn btn-dark btn-sm " title="Order by rate"
                            onClick={this.rateOnClickHandler}>Rate
                        {orderBy.rateDesc ? (
                            <i className="material-icons">keyboard_arrow_up</i>
                        ) : (
                            <i className="material-icons">keyboard_arrow_down</i>
                        )}

                    </button>
                </div>
                <div className="col-md-4">
                    <button type="button" className="btn btn btn-dark btn-sm " title="Order by date"
                            onClick={this.dateOnClickHandler}>Date
                        {orderBy.dateDesc ? (
                            <i className="material-icons">keyboard_arrow_up</i>
                        ) : (
                            <i className="material-icons">keyboard_arrow_down</i>
                        )}
                    </button>
                </div>
                <div className="col-md-4">
                    <button type="button" className="btn btn btn-dark btn-sm " title="Order by author"
                            onClick={this.authorOnClickHandler}>Author
                        {orderBy.authorDesc ? (
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

OrderForm.propTypes = {
    updateOrder: PropTypes.func.isRequired
};
export default OrderForm;