import React, { Component} from 'react'

class CustomerInput extends Component {

    render = () =>
        (
            <div className="row">
                <div className="col-3">
                    <div className="form-label-group">
                        <input type="email" id="inputID" className="form-control" placeholder="Customer ID"  autoFocus value={this.props.customerId} onChange={(event) => {this.props.onCustomerIDChange(event.target.value)}}/>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-label-group">
                        <input type="email" id="inputName" className="form-control" placeholder="Customer Name" value={this.props.customerName} onChange={(event) => {this.props.onCustomerNameChange(event.target.value)}}/>
                    </div>
                </div>
                <div className="col-3 text-left">
                    <button type="button" className="btn btn-primary" onClick={this.props.onDisplayUsersClick}>Submit</button>
                </div>
            </div>
        )
}

export default CustomerInput