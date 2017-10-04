/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";


class CreatePost extends Component {


    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" placeholder="Post title"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Body</label>
                        <div className="col-sm-10">
                            <textarea type="text" className="form-control" id="body" placeholder="Post text"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Category</label>
                        <div className="col-sm-4">
                            <select className="form-control" id="sel1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row float-right">
                        <div className="col-sm-10 ">
                            {this.props.isUpdate ? (
                                <button type="submit" className="btn btn-primary">Update</button>
                            ) : (
                                <button type="submit" className="btn btn-primary">Create</button>
                            )}
                        </div>
                    </div>
                </form>

            </div>

        )
    }
}

CreatePost.propTypes = {};
export default CreatePost;