/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Post from "./Post";


class Category extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div class="card">
                        <h4 class="card-header">Category 1</h4>
                        <div class="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <Post/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}

Category.propTypes = {};
export default Category;