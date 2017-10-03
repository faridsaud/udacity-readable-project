/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Comment extends Component {

    state = {
        isEditable: false
    };

    editOnClickHandler =()=>{
        this.setState((prevState)=>({
            isEditable:!prevState.isEditable
        }))
    };



    render() {
        let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
        return (
            <div className="card">
                <div className="card-body">
                    {this.state.isEditable === true ? (
                        <div>
                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <textarea type="text" className="form-control" id="body" placeholder="Enter your comment text here" value={text}/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Update</button>
                            <br/>
                        </div>

                    ) : (
                        <p>
                            {text}
                        </p>
                    )}
                    <button type="button" className="btn btn-light btn-sm float-left"><i className="material-icons">thumb_up</i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm float-right"><i className="material-icons">delete</i>
                    </button>
                    <button type="button" className="btn btn-primary btn-sm float-right" onClick={this.editOnClickHandler}><i className="material-icons">mode_edit</i>
                    </button>
                </div>
                <div className="card-footer text-muted">
                    <p>By Farid Saud - 2 days ago</p>
                </div>
            </div>


        )
    }
}

Comment.propTypes = {};
export default Comment;