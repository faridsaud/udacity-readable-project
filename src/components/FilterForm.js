/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from "react";


class FilterForm extends Component {

    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label className="col-form-label">Author</label>
                        <input type="text" className="form-control" id="author" placeholder="Author"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label className="col-form-label">Rate</label>
                        <input type="number" className="form-control" id="fromRate" placeholder="From"/>
                        <input type="number" className="form-control" id="toRate" placeholder="To"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label className="col-form-label">Date</label>
                        <input type="date" className="form-control" id="fromDate" placeholder="From"/>
                        <input type="date" className="form-control" id="toDate" placeholder="To"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Filter</button>
            </form>
        )
    }
}

FilterForm.propTypes = {};
export default FilterForm;