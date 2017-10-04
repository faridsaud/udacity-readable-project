/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import Link from "react-router-dom/es/Link";
import CommentsContainer from "./CommentsContainer";


class PostDetail extends Component {

    state = {
        id: 123,
        title: "Post title",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    };

    render() {
        let displayText = this.state.text;
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">{this.state.body}</p>
                        <button type="button" className="btn btn-light btn-sm float-left"><i className="material-icons">thumb_up</i>
                        </button>
                        <button type="button" className="btn btn-danger btn-sm float-right"><i
                            className="material-icons">delete</i>
                        </button>
                        <Link to={"/post/update/" + this.state.id} className="btn btn-primary btn-sm float-right"><i
                            className="material-icons">mode_edit</i>
                        </Link>
                    </div>
                    <div className="card-footer text-muted">
                        <p>By Farid Saud - 2 days ago</p>
                    </div>
                </div>
                <br/>
                <CommentsContainer/>
            </div>


        )
    }
}

PostDetail.propTypes = {};
export default PostDetail;