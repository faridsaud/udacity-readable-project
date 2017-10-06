/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import Link from "react-router-dom/es/Link";
import CommentsContainer from "./CommentsContainer";
import Post from "./Post";
import {connect} from "react-redux";
import * as API from "../utils/Api";
import {fetchGetAllComentsByPost} from "../actions/Comment";


export class PostDetail extends Component {

    state = {
        post:{}
    };

    componentDidMount(){
        API.getPostDetail(this.props.match.params.id).then((post) => {
            this.setState({
                post
            })
        });
        this.props.getAllComentsByPost(this.props.match.params.id);
    }

    render() {
        console.log(this.props.comments);
        return (
            <div>
                {
                    this.state.post.id && (
                        <div className="container">
                            <Post post={this.state.post} isEditEnabled={true} isDeleteEnabled={true}/>
                            <br/>
                            {
                                this.props.comments && (
                                    <CommentsContainer comments={this.props.comments}/>
                                )
                            }
                        </div>
                    )
                }

            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    comments: state.comment.comments.filter(comment => comment.parentId===props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
    getAllComentsByPost: (postId) => dispatch(fetchGetAllComentsByPost(postId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetail)

PostDetail.propTypes = {};
