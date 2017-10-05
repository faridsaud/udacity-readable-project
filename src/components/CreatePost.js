/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import {fetchCreatePost} from "../actions/Post";
import {connect} from "react-redux";


export class CreatePost extends Component {

    state = {
        title: '',
        body:'',
        author:'',
        category:''
    };

    titleOnChangeHandler = (event) =>{
        this.setState({
            title:event.target.value
        })
    };

    bodyOnChangeHandler = (event) =>{
        this.setState({
            body:event.target.value
        })
    };

    authorOnChangeHandler = (event) =>{
        this.setState({
            author:event.target.value
        })
    };

    categoryOnChangeHandler = (event) =>{
        this.setState({
            category:event.target.value
        })
    };


    createPostOnClickHanlder =(event) =>{
        event.preventDefault();
        let post = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author,
            category: this.state.category
        };
        this.props.createPost(post);

    };

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" placeholder="Post title" onChange={this.titleOnChangeHandler} value={this.state.title}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Body</label>
                        <div className="col-sm-10">
                            <textarea type="text" className="form-control" id="body" placeholder="Post text" onChange={this.bodyOnChangeHandler} value={this.state.body}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Category</label>
                        <div className="col-sm-4">
                            <select className="form-control" id="sel1" onChange={this.categoryOnChangeHandler} value={this.state.category}>
                                <option value="react">react</option>
                                <option value="redux">redux</option>
                                <option value="udacity">udacity</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Author</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="author" placeholder="Author of the post" onChange={this.authorOnChangeHandler} value={this.state.author}/>
                        </div>
                    </div>
                    <div className="form-group row float-right">
                        <div className="col-sm-10 ">
                            {this.props.isUpdate ? (
                                <button type="submit" className="btn btn-primary">Update</button>
                            ) : (
                                <button type="submit" className="btn btn-primary" onClick={this.createPostOnClickHanlder}>Create</button>
                            )}
                        </div>
                    </div>
                </form>

            </div>

        )
    }
}

const mapDispatchToProps = dispatch => ({
    createPost: (post) => dispatch(fetchCreatePost(post))
});

CreatePost.propTypes = {};

export default connect(
    null,
    mapDispatchToProps
)(CreatePost)