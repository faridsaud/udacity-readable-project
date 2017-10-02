/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Post extends Component {

    render() {
        let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
        let displayText = text.substring(0,99);
        return (
            <div className="card">

                <div className="card-body">
                    <h4 className="card-title">Post 1 title</h4>
                    <p className="card-text">{displayText}..</p>


                    <button type="button" class="btn btn-primary btn-sm"><i class="material-icons">thumb_up</i></button>
                    <button type="button" class="btn btn-primary btn-sm"><i class="material-icons">thumb_down</i></button>

                </div>
                <div class="card-footer text-muted">
                    <p>By Farid Saud - 2 days ago</p>
                    <p></p>
                </div>
            </div>


        )
    }
}

Post.propTypes = {};
export default Post;