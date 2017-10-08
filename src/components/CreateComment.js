/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchCreateComment} from "../actions/Comment";


class CreateComment extends Component {


    state = {
        body: '',
        author: ''

    };

    createComment = () => {
        this.props.createComment({
            body: this.state.body,
            author: this.state.author,
            parentId: this.props.parentId
        })
        this.setState({
            body: '',
            author: ''
        })
    };


    bodyOnChangeHandler = (event) => {
        this.setState({
            body: event.target.value
        })
    };

    authorOnChangeHandler = (event) => {
        this.setState({
            author: event.target.value
        })
    };

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <textarea type="text" className="form-control" id="body"
                                      placeholder="Enter your comment text here" onChange={this.bodyOnChangeHandler}
                                      value={this.state.body}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="author"
                                   placeholder="Enter author here" onChange={this.authorOnChangeHandler}
                                   value={this.state.author}/>
                        </div>
                    </div>
                    <div className="form-group row float-right">
                        <div className="col-sm-2 ">
                            <button type="submit" className="btn btn-primary" onClick={this.createComment}>Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    createComment: (comment) => dispatch(fetchCreateComment(comment))
});


CreateComment.propTypes = {
    parentId: PropTypes.string.isRequired
};
export default connect(
    null,
    mapDispatchToProps
)(CreateComment)