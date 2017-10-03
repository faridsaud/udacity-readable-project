/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CategoryHeader from "./CategoryHeader";
import CategoryBody from "./CategoryBody";


class CreateComment extends Component {



    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <textarea type="text" className="form-control" id="body" placeholder="Enter your comment text here"/>
                        </div>
                    </div>
                    <div className="form-group row float-right">
                        <div className="col-sm-10 ">
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CreateComment.propTypes = {};
export default CreateComment;