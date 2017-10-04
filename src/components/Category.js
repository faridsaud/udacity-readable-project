/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";
import CategoryHeader from "./CategoryHeader";
import CategoryBody from "./CategoryBody";


class Category extends Component {


    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <CategoryHeader name={this.props.name}/>
                        <CategoryBody/>
                    </div>
                </div>
            </div>
        )
    }
}

Category.propTypes = {};
export default Category;