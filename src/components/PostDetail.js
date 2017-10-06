/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import Link from "react-router-dom/es/Link";
import CommentsContainer from "./CommentsContainer";
import Post from "./Post";
import {connect} from "react-redux";
import * as API from "../utils/Api";


export class PostDetail extends Component {

    state = {
        post:{}
    };

    componentDidMount(){
        console.log("id", this.props.match.params.id);
        API.getPostDetail(this.props.match.params.id).then((post) => {
            console.log(post);
            this.setState({
                post
            })
        })
    }

    render() {
        let displayText = this.state.text;
        return (
            <div>
                {
                    this.state.post.id && (
                        <div className="container">
                            <Post post={this.state.post} isEditEnabled={true} isDeleteEnabled={true}/>
                            <br/>
                            <CommentsContainer/>
                        </div>
                    )
                }

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
});

export default connect(
    null,
    mapDispatchToProps
)(PostDetail)

PostDetail.propTypes = {};
