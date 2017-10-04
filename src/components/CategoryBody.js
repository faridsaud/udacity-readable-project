/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import Post from "./Post";


class CategoryBody extends Component {

    render() {
        return (
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <Post/>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

CategoryBody.propTypes = {};
export default CategoryBody;