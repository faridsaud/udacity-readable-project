/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import {fetchCreatePost, fetchPostDetail, fetchUpdatePost} from "../actions/Post";
import {connect} from "react-redux";
import {fetchGetCategories} from "../actions/Category";
import {Link} from "react-router-dom";
import * as API from "../utils/Api";


class CreatePost extends Component {

    state = {
        id: '',
        title: '',
        body: '',
        author: '',
        category: ''
    };


    componentDidMount() {
        if(this.props.categories.length>0){
            this.setState({
                category: this.props.categories[0].name
            });
        }
        if (this.props.fetchCategories) {
            this.props.getCategories();
        }
        if (this.props.isUpdate) {
            API.getPostDetail(this.props.match.params.id).then(post => {
                this.setState({
                    id: post.id,
                    title: post.title,
                    body: post.body,
                    author: post.author,
                    category: post.category
                })
            })
        }

    }

    updateOnClickHandler = () => {
        this.props.updatePost(this.state);
    };

    titleOnChangeHandler = (event) => {
        this.setState({
            title: event.target.value
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

    categoryOnChangeHandler = (event) => {
        this.setState({
            category: event.target.value
        })
    };

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if(nextProps.categories){
            this.setState({
                category: nextProps.categories[0].name
            });
        }
    };

    createPostOnClickHandler = () => {
        let post = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author,
            category: this.state.category
        };
        this.props.createPost(post);

    };

    render() {
        let readOnly = this.props.isUpdate;
        return (
            <div className="container">
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" placeholder="Post title"
                                   onChange={this.titleOnChangeHandler} value={this.state.title}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Body</label>
                        <div className="col-sm-10">
                            <textarea type="text" className="form-control" id="body" placeholder="Post text"
                                      onChange={this.bodyOnChangeHandler} value={this.state.body}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Category</label>
                        <div className="col-sm-4">
                            <select className="form-control" id="sel1" onChange={this.categoryOnChangeHandler}
                                    value={this.state.category} disabled={readOnly}>
                                {
                                    this.props.categories.map((category, index) => {
                                        return (
                                            <option key={index} value={category.name}>{category.name}</option>

                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Author</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="author" placeholder="Author of the post"
                                   onChange={this.authorOnChangeHandler} value={this.state.author} disabled={readOnly}/>
                        </div>
                    </div>
                    <div className="form-group row float-right">
                        <div className="col-sm-10 ">
                            {this.props.isUpdate ? (
                                <Link to={"/"} className="btn btn-primary"
                                      onClick={this.updateOnClickHandler}>Update</Link>
                            ) : (
                                <Link to={"/"} className="btn btn-primary" onClick={this.createPostOnClickHandler}>Create</Link>
                            )}
                        </div>
                    </div>
                </form>

            </div>

        )
    }
}


const mapStateToProps = (state, props) => ({
    categories: state.category.categories,
    fetchCategories: !state.category.isFetch
});


const mapDispatchToProps = dispatch => ({
    createPost: (post) => dispatch(fetchCreatePost(post)),
    getCategories: () => dispatch(fetchGetCategories()),
    updatePost: (post) => dispatch(fetchUpdatePost(post))
});

CreatePost.propTypes = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePost)