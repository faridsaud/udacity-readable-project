/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import Post from "./Post";
import PropTypes from 'prop-types';


class CategoryBody extends Component {

    render() {
        return (
            <div className="card-body">
                <div className="row">
                    {
                        this.props.posts.map((post, index) => (
                            <div className="col-md-4" key={index}>
                                <Post post={post}/>
                                <br/>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

CategoryBody.propTypes = {
    posts: PropTypes.array.isRequired
};
export default CategoryBody;